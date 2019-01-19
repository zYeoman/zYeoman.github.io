/*
 * editor.js
 * Copyright (C) 2019 Yongwen Zhuang <zeoman@163.com>
 *
 * Distributed under terms of the MIT license.
 */
(function(){
  'use strict';
  var myTextarea = document.getElementById('md')
  var editor = HyperMD.fromTextArea(myTextarea, {
    // for code fence highlighting
    hmdModeLoader: "https://cdn.jsdelivr.net/npm/codemirror/",
  })
  editor.on("change", debounce(function(cm, change){
      post(window.location.href, {data:editor.getValue()})
  }, 2500))

  function post(path, params) {
    postAjax(path, params, function(responseText){Toastify({text: responseText}).showToast()})
  }

// https://javascript.ruanyifeng.com/advanced/timer.html
  function debounce(fn, delay){
    var timer = null; // 声明计时器
    return function() {
      var context = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }
// https://plainjs.com/javascript/ajax/send-ajax-get-and-post-requests-47/
  function postAjax(url, data, success) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
        ).join('&');

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
  }
  // and that's all
  // now you get a `editor` and you can do whatever you want
  editor.setSize(null, "100%") // set height
  editor.focus()

  // TODO:
  // for debugging
  window.CodeMirror = CodeMirror
  window.HyperMD = HyperMD
  window.editor = editor
  window.cm = editor

  // load_and_update_editor(demo_filename)

  document.getElementById("search").oninput = function () {
    var text = document.getElementById("search").value.toLowerCase()
    var posts = document.getElementsByClassName("post-item")
    for (var i = 0, len = posts.length; i < len; i++) {
      var str = posts[i].innerText
      posts[i].hidden = !PinyinMatch.match(str, text)
    }
  }

  // Preview Tex Math formula
  // @see demo/math-preview.js
  // init_math_preview(editor)

  // Watch editor and generate TOC
  // @see demo/toc.js
  // init_toc(editor)

  // @see demo/lab.js
  // init_lab(editor)

function clickHandler(info, cm) {
  if (info.type === "link" || info.type === "url") {
    var url = info.url
    if ((demoPageConfig.directOpen || info.ctrlKey || info.altKey) && !/^http/i.test(url) && /\.(?:md|markdown)$/.test(url.replace(/[?#].*$/, ''))) {
      // open a link whose URL is *.md with ajax_load_file
      // and supress HyperMD default behavoir
      load_and_update_editor(url) // see index2.js
      return false
    } else if (demoPageConfig.directOpen && url) {
      window.open(url)
      return false
    } else if (/^\[(?:Try out|试试看)\]$/i.test(info.text)) {
      demo_tryout(info) // see index2.js
      return false
    }
  }
  if (info.type === "hashtag") {
    var msg = "You clicked a hashtag"
    if (info.ctrlKey) msg += " (with Ctrl)"
    if (info.altKey) msg += " (with Alt)"
    console.log(msg, info.text, info.pos)
  }
}
})();
