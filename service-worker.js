/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","d705c2872c151757eb92b54fd427d158"],["/blog/7z-extract-and-zip.html","26b34f691e31a0206dfce614d55f1cea"],["/blog/A-bug-in-python-about-import.html","08f6e5f18ee48b6dcb71b5fb84668afe"],["/blog/A-script-every-day-1.html","df368150456f320eb5d71e6e8f603b02"],["/blog/DOS-rename-many-txt.html","e4384fa356a29318c4f8ca449b5af6c4"],["/blog/English-punctuation-to-Chinese-punctuation.html","7c6d848207ff53327bdd8fe56236be4c"],["/blog/How-to-Write-a-Git-Commit-Message.html","bc288b700c69a2c306770b9a2effb1e5"],["/blog/ISE-error-when-generate-hls-to-pcore.html","aacfaca2b699a16f528594da9531239b"],["/blog/Interesting-APIs.html","a98700f813fa5098f9b35c64a0f2e23f"],["/blog/Keep-Your-Commits-Atomic.html","0f0564a26726d6670556a2d05a55d087"],["/blog/MacType-conflict.html","622d6a661f2a54c81be39ae17d40479e"],["/blog/Minor-CPU-model-of-gem5.html","e6e47220fd4be15eceaaba81ec1e9e80"],["/blog/Python-translate-maketrans.html","0893b087fb13a209cc97af136685e61a"],["/blog/Raspberry-PI-Using.html","b41dd839d9b5f251615ca45c413f3259"],["/blog/Test-My-Blog.html","a900793d563a0c822b28ac69af7bff61"],["/blog/Xilinx-can-not-find-gpioh.html","d512f576368ebbb667f4490beb23fead"],["/blog/android.html","69f6376129bef4898bbe5ab255ab31ba"],["/blog/anime-18-10.html","b33346739d7dd720840aae7f2effb7fd"],["/blog/anime-2016-10.html","69aef3ba5f6e33c4933d479f12a47c4f"],["/blog/anime-2017-1.html","a44ca39eb5a27d40b0224b98bafd9ccb"],["/blog/anime-2017-10.html","dce2293739906165eae780e628ae5c34"],["/blog/anime-2017-4.html","eddd0bdc8ab050c5142a262587681c43"],["/blog/anime-2017-7.html","5574704927c034d85729704f7587fbe6"],["/blog/anime-2018-01.html","0e9939be7228309dd53e7fddd640f604"],["/blog/anime-2018-7.html","95570214207190baa474d222e14eb9c0"],["/blog/anime-list.html","961aaa666cb0f8e2ad561c7fd1e286f3"],["/blog/archlinux-gui.html","442edd8c8134084d406a34cd244e34da"],["/blog/archlinux-install.html","e30c9f7fd5fab36f11408906c8bd016b"],["/blog/bat-command-line-parametric.html","da665046d9d161f39954176c1ec309ff"],["/blog/bat-file-argv.html","06caa448d1b8fa826484717a3abb15d6"],["/blog/bing-to-qqpinyin.html","86b53a392c5d6c6211bdaa32ec663b02"],["/blog/blog-categries-change.html","798024710c2ab1372de93f6c3e6d6e62"],["/blog/blog-update.html","1b880872f06ac91dfd03198753f19e52"],["/blog/bookmark.html","5e216551560a78fe3bb0a294586860d1"],["/blog/bufanjilu.html","7d993642f40db84a7cb3ae216cef929f"],["/blog/byr-spider.html","21d01fbb6000a02df894d784d6aecd3d"],["/blog/c-standard-library-learn-1.html","5b13ca6aac7dba7eb87ca5a769029ba0"],["/blog/chinese-hacker.html","0a7ed9ed4e491f2d82f180ae4b61012a"],["/blog/choulaobie.html","2a5aaf0b14590128f8779aed8993b8d5"],["/blog/chuanyuelishi.html","edb88003a20b8a5b8ebba9a3df14dad4"],["/blog/database-test.html","ad28ba717381007c56c34104bd859d44"],["/blog/diandongche.html","075c5c05c7f21d4db169b30ac588b7dc"],["/blog/digital-image-processing-hw4.html","187aa11dffd93582a809534565a4a76d"],["/blog/fortune-lolcat.html","0fe7c1a0c3ee715dd384d76da01e08d3"],["/blog/from-observable-universe-to-planck-length.html","713403f925fdbf5fe4e28460476d3a3c"],["/blog/fsutil-hardlink-junction-and-ln.html","492f3b868f98168979ffb920596b6ff4"],["/blog/geek-tech-internet-browser-to-editor.html","d8f78b016775758c02e29f9600675be6"],["/blog/gem5-tutorials.html","e3953216e5d6e83505a9be67b10f678c"],["/blog/git-undo.html","d07fb40bae3be33acd56369104f3ddb4"],["/blog/github-education-pack.html","f4be83eda95456593da381757ed2cd9d"],["/blog/graduate.html","83f5123f14befdda0f80a7f554e733f4"],["/blog/helloseed-api.html","9a3f96bbee15458cfd66932df5ffd675"],["/blog/https-github-pages-custom-domain.html","a060e4e816effdf8bafce72694a2142d"],["/blog/huawei-P7-error.html","e5172c1e1002afb8abc2e3bfe341c369"],["/blog/install-archlinux-on-USB.html","cd944f917c1fa6934ab61d348aa6c818"],["/blog/jekyll-editor-hack.html","de67197a01098a2655a59414a983504d"],["/blog/linux.html","671933f6edf8e6d9a9e374b84fbd42af"],["/blog/magic-weekly-1.html","05a79390355b093686205a2da4b4b28e"],["/blog/malatang.html","616e2663c3af6036d9e80a3b83bd8cd2"],["/blog/markdown-extended-latex.html","47632841034f515dd80fe136e21daf23"],["/blog/master-interview.html","e7b35d9e793705d62aca17090f213aad"],["/blog/midnight-thought-1.html","604d85cc6b54ae5d573b1f67aca00a8c"],["/blog/midnight-thought-2.html","7697453946403364ae9d0fade5bf7d4f"],["/blog/midnight-thought-3.html","c2a514c73de32bfb795261710601030a"],["/blog/midnight-thought-4.html","29cd929cf6f53728cbec9bfe8d01a81c"],["/blog/minicom-the-best.html","321f22d360af3f29e1d631d63b77295d"],["/blog/my-desktop.html","5f634450f3f5622aee342457db8c46f5"],["/blog/note-take-tools.html","cfae4a14bbb2abcc152933fb693fa42a"],["/blog/owncloud-nextcloud-install.html","3bfd6f182d49b33abde08cfd390e2f11"],["/blog/pass-google-pagespeed.html","302ad5f1e6c111cd4caac2cbc75d0d91"],["/blog/pep-257-docstring-conventions-zh.html","a1e7c1e783f4b4d64e04ac7d9c13a96c"],["/blog/python-argv-error-in-windows.html","8e712f0c2c953f1c5debc11141f8b26e"],["/blog/python-skills.html","c113e2e917c19da3133139ca425ff6ab"],["/blog/python-special-method-names.html","84023ac6a811ee52aa10232880a7a0a1"],["/blog/quickstart-for-simulink.html","6f824c5a3ad348eec6391bf19ee81ddd"],["/blog/run-background.html","b03ddc7f4c997ff326b54020efb2479a"],["/blog/sanguosha-pudg.html","0be3e3084fe715fabadbdd3e2b452409"],["/blog/simplest-note-develop-note.html","3b13667298b02831b53ef10216d3d32a"],["/blog/simplify-the-img-upload-in-markdown.html","af2b59ceb790224967f427cf83a7e012"],["/blog/ss-set.html","0b7ce05afd72d2a446e61823632525a1"],["/blog/tools.html","d8e6c82c259e80315cb203bade07fea3"],["/blog/use-mklink-to-save-space-of-C.html","3232a07c85673afc17d7304621744128"],["/blog/verilog.html","2b910d1f482d6b0d855525b3c33214fc"],["/blog/vim.html","d513b8b295f0570f76c1a4a1afe0eaad"],["/blog/vps-choice.html","6f4f14a292120706de2270b4f85ed109"],["/blog/whats-new-in-python.html","18497ddb64c48bcbeb5067a6cfd52f9b"],["/blog/win10-boot-repair.html","c2a82dfbba5865c3d943e5b023b796b8"],["/blog/win10-bug-about-bing.html","70d9378af45fa7336bbae41e668ce8d6"],["/blog/windows-linux-autostart.html","f2d106a928fdffd4b58b5e51758ea5a9"],["/blog/windows-or-linux.html","79350f83e4489cfba7ddc7d452a731d9"],["/blog/windows.html","9d97669a784c0bdbf97ee1e9a86886fa"],["/blog/xiaoshuo.html","72275301d479c5b84b18e8e38e863637"],["/blog/xilinx-vivado-usage.html","6412bea2bef5f0a142bd2c751651d22e"],["/blog/xipai.html","b2690ea0332e414678966770d79215ff"],["/blog/your-name.html","ad75621c5766c8e5363c676a090b64a8"],["/blog/zedboard-1.html","623878eb493a20b17ac8c2fac0b5ea03"],["/blog/zedboard-2.html","522a38d8067eca747db319fd09ecec19"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","1ca68d5d995ccc0f65d19e87a00c056c"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","ae975cdb530cd1ef1619bf257c6203b5"],["/page2/index.html","438ea2d3803a9aeeb6c44fc99d845537"],["/page3/index.html","85c592da6288726524c3610fafe12d0e"],["/page4/index.html","94c3d65414094fcb944a2417fed4f8f7"],["/page5/index.html","0a990386d25f597466af2cba0010fe8c"],["/page6/index.html","18c9c16f678cc384ad7fe583b86aa8e8"],["/page7/index.html","d60d37db7e30e1d3438bd15397bbcc30"],["/page8/index.html","dd3cad6e377524377edc06ac3296d829"],["/page9/index.html","56256a57b9a1c661e2999c6d0d63f500"],["/tag.html","8685311fc879195022bfbc3ba11231c1"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







