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
  window.post = post

  // load_and_update_editor(demo_filename)

  // Preview Tex Math formula
  // @see demo/math-preview.js
  // init_math_preview(editor)

  // Watch editor and generate TOC
  // @see demo/toc.js
  // init_toc(editor)

  // @see demo/lab.js
  // init_lab(editor)

// https://stackoverflow.com/questions/133925/javascript-post-request-like-a-form-submit
/**
 * sends a request to the specified url from a form. this will change the window location.
 * @param {string} path the path to send the post request to
 * @param {object} params the paramiters to add to the url
 * @param {string} [method=post] the method to use on the form
 */

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

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
