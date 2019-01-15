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

var precacheConfig = [["/404.html","ea0ecb01ec99cafe58e7310f3ab290f1"],["/blog/7z-extract-and-zip.html","8cf3c778da15ef3cd89581f93a1a9435"],["/blog/A-bug-in-python-about-import.html","6ecc93487558f5098f00d1e030cc7b8d"],["/blog/A-script-every-day-1.html","9784e9b0bbcdc064f92aab0751dc7956"],["/blog/DOS-rename-many-txt.html","eeb589b785781d292560f5c457bdf57a"],["/blog/English-punctuation-to-Chinese-punctuation.html","f57eadfdb7fbd07d9f3f176a420f7936"],["/blog/How-to-Write-a-Git-Commit-Message.html","185793c4724c72f26315979edac659ff"],["/blog/ISE-error-when-generate-hls-to-pcore.html","d71ee23e4c9a93ba39e2c60e737da111"],["/blog/Interesting-APIs.html","c5c4788f272e4be1d591255e6dc14ac2"],["/blog/Keep-Your-Commits-Atomic.html","8ea2c9d7ffa59e722fae61dcf46e743d"],["/blog/MacType-conflict.html","d6c1278070d1f7c693c9044ee74e34be"],["/blog/Minor-CPU-model-of-gem5.html","9dec273bd42b859dfe1ef60d2e86127a"],["/blog/Python-translate-maketrans.html","329780977d63914a01869f462a08e2a2"],["/blog/Raspberry-PI-Using.html","2dc839a926b8a4f63f70594c3e499cf9"],["/blog/Test-My-Blog.html","ab71ffc87dbb11aa65e9e8f1daef71e0"],["/blog/Xilinx-can-not-find-gpioh.html","f5eab3ffde0e4548925df9350e8d58b2"],["/blog/android.html","32345fce6a1f3d8db6e9b0c95ec8dccb"],["/blog/anime-18-10.html","8bd7fd94d6137d39ab169754cafba990"],["/blog/anime-2016-10.html","98711b57d3b8d0de9ef64982977e050c"],["/blog/anime-2017-1.html","ea97dbf08e413de118d660ce2f4894eb"],["/blog/anime-2017-10.html","eb9b6ca96f475b6a0c484bdd89e9edf3"],["/blog/anime-2017-4.html","2fb765828b6b91e87bba0f9563f718ce"],["/blog/anime-2017-7.html","5afc734ce771e5fc5bfaf9dffa09519c"],["/blog/anime-2018-01.html","062b625d75c491525efc5f1c49217957"],["/blog/anime-2018-7.html","655b1fb7c54d44ebd0f96ec3f61b5b9e"],["/blog/anime-list.html","0eb353abcb4476316332ed127f2ad432"],["/blog/archlinux-gui.html","331850bbc8cc23243249c65dd2583b8e"],["/blog/archlinux-install.html","d38c681716dcfcd2d4348e037347da38"],["/blog/bat-command-line-parametric.html","6bc07d987e51cebddc261c1991549b43"],["/blog/bat-file-argv.html","6b2163b8a28e9c1816453c1567c7a7da"],["/blog/bing-to-qqpinyin.html","0e39aba0144d9dc126124838f7f6fda6"],["/blog/blog-categries-change.html","139c92aa16a575db62ef172d2d8be3b8"],["/blog/blog-update.html","6675a909576fc0752118677f9a0fc8d5"],["/blog/bookmark.html","08a7fbadae68739bd71dfc3deecacaed"],["/blog/bufanjilu.html","4920e221a9312706d8979d5b47324cd2"],["/blog/byr-spider.html","7451583bc23f0e76c3734895b579a52c"],["/blog/c-standard-library-learn-1.html","e5a52aa7a048568c9a6299d777dc286c"],["/blog/chinese-hacker.html","49321ec1ff87657dc311fc26cbdabde9"],["/blog/choulaobie.html","9f17f630e1a4d7635297f5a3dfe86dd4"],["/blog/chuanyuelishi.html","d8abc4168bcfe9db5eda86e2d778ad99"],["/blog/database-test.html","a47536c189d679049cb1931fc6f5799f"],["/blog/diandongche.html","cc7508d5bc6782f2134324cbaaf3c878"],["/blog/digital-image-processing-hw4.html","71cc5507ed1302419ddd844924f9c69c"],["/blog/fortune-lolcat.html","52910694f6e95414c7920862314ade8d"],["/blog/from-observable-universe-to-planck-length.html","5640cf4c4368c40e5f5a2a6524ba5c8b"],["/blog/fsutil-hardlink-junction-and-ln.html","c6f7391076d2855dd43daaae9c741ef7"],["/blog/geek-tech-internet-browser-to-editor.html","d9a405f5022a7c7bb3989fe2ee7d3a05"],["/blog/gem5-tutorials.html","2142f462a062eb70221dae5cefb21c4c"],["/blog/git-undo.html","9fa904cf0685d4690e2991b3d29a8f90"],["/blog/github-education-pack.html","ef32f9c32f903cd0b943e42d520b72a9"],["/blog/graduate.html","2f79ed5cb2b9a5ccfe509f156a14f625"],["/blog/helloseed-api.html","b1a1916a715f8d8265b9f782aed89eaf"],["/blog/https-github-pages-custom-domain.html","48acc610206a59c0b8573798c6048951"],["/blog/huawei-P7-error.html","94668317af5acceda061d4264de5e3df"],["/blog/install-archlinux-on-USB.html","5a198835520fe0a8f1a92f0d4063451f"],["/blog/jekyll-editor-hack.html","dae9c9adef8026323f268c31f67fc87e"],["/blog/linux.html","377b985ef113b47effa0516999941e84"],["/blog/magic-weekly-1.html","572771e971a54d039e88ea0a97efecb8"],["/blog/malatang.html","136cb8fa9fe486db5a1b6f0d1e825738"],["/blog/markdown-extended-latex.html","4a03550e29cb884f54fab3283a9a6b3e"],["/blog/master-interview.html","bca6bdb750189e66aec7c76d794e1e9d"],["/blog/midnight-thought-1.html","0a5bf8a54938cad68f4b5ee5c998250b"],["/blog/midnight-thought-2.html","ea0950f26d03b6a0b397f7e538532f95"],["/blog/midnight-thought-3.html","0f609cd7c2a0ac447223282fe61c9caa"],["/blog/midnight-thought-4.html","b6755c2496788b7cd6116f8735369a55"],["/blog/minicom-the-best.html","a7965eca7f27df9a06e725ec09d155a0"],["/blog/my-desktop.html","f9de0857ec6b823985a07910d16663b2"],["/blog/note-take-tools.html","3a3a0dec9d6df896161ba47b744ab5fb"],["/blog/owncloud-nextcloud-install.html","71a217377ff3960d5cde0f7a13572e87"],["/blog/pass-google-pagespeed.html","a39ddd90be08089ea873e50075eee063"],["/blog/pep-257-docstring-conventions-zh.html","032e4b585fe65aa7d6a151c617f8f6a9"],["/blog/python-argv-error-in-windows.html","df99e0cfff6b07397ae0e8aa8157ad74"],["/blog/python-skills.html","47174defefcaf3e2bbf69a082af7294f"],["/blog/python-special-method-names.html","72ec921b0b9d0ea11cf6e03eb8052308"],["/blog/quickstart-for-simulink.html","844eb4fbeb491d94f5bd81e7223e73f0"],["/blog/run-background.html","a3956001dd4485a60d888f60396c32aa"],["/blog/sanguosha-pudg.html","38f20928f2a7b610e609f04f84b5edb1"],["/blog/simplest-note-develop-note.html","91f2c2dc17bd8a0245661d2d365d76e9"],["/blog/simplify-the-img-upload-in-markdown.html","3095cf5eee32de91312fc6c913e42333"],["/blog/ss-set.html","40c319e72b3a3641c4e869c3f337d5ba"],["/blog/tools.html","a2f47c1ddcf9e3bb2029053463a8b555"],["/blog/use-mklink-to-save-space-of-C.html","9e7784156b4d2706a891db0f25311e05"],["/blog/verilog.html","4805b9e90d8b4ddd164a6c598a6c0b29"],["/blog/vim.html","ed4892eb34b692f3d8a3126943eab9a8"],["/blog/vps-choice.html","5766ee3a8bf833f97ad891128d9bbd49"],["/blog/whats-new-in-python.html","40318ccea023260e79328748d4c2a231"],["/blog/win10-boot-repair.html","685057673c6c9950371b816c05740a9a"],["/blog/win10-bug-about-bing.html","2c2cd9a47ebe0a4179ffc7b0cb319b0c"],["/blog/windows-linux-autostart.html","1491cd1354fc512d52c1b93aca7fa3de"],["/blog/windows-or-linux.html","b1a8bcc88f84152577991c4c0fa9f38b"],["/blog/windows.html","95e922fd905712fb4207fead744f42df"],["/blog/xiaoshuo.html","d31735b0f0fd8ff970a45bad526469d1"],["/blog/xilinx-vivado-usage.html","ed29b989f12de71b82d0f85b29cf9f2d"],["/blog/xipai.html","4ef4a35a2ba81123a3fdb5f932081d0a"],["/blog/your-name.html","e9d944f668b7974096adfcc38b88cb62"],["/blog/zedboard-1.html","96bb91ce977bf72f1c54d1ae42e8ae78"],["/blog/zedboard-2.html","c2cbc298d40ad5cbd0bc6f598b54c1f7"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","583cf206b5eb885bc5252fbc3e8f4927"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","c1f17122670954f4cce0025014668de2"],["/page2/index.html","834508b4d342f38659dc0704bae01848"],["/page3/index.html","77731ee75dc5aea2e6e2707637125e5c"],["/page4/index.html","c0eaabc80d32146a7f7069d3b27c5554"],["/page5/index.html","bfe6283ad854a696957d67ef8357a351"],["/page6/index.html","9efd9bcd9398746c6b872353f2163896"],["/page7/index.html","2314ebaedd922f187045d126e7358626"],["/page8/index.html","56a7fab27b7e90d024b3a10d030670ef"],["/page9/index.html","eeb8c40c8e5f27e84cdb2debd64b1b11"],["/tag.html","9ce21263a7e0365aa9e218ddf5b725e0"]];
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







