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

var precacheConfig = [["/404.html","ebde6aff736e0ced4113fce4d75c3318"],["/blog/7z-extract-and-zip.html","752aa26673300a906af7f4851fee76f2"],["/blog/A-bug-in-python-about-import.html","f628e533b70458c2c1050b1e5a799383"],["/blog/A-script-every-day-1.html","5de5741665729155fd5f73632c29daf7"],["/blog/DOS-rename-many-txt.html","3340473a32b8fda036732fb7ff1f63ae"],["/blog/English-punctuation-to-Chinese-punctuation.html","57ea08e7269047f09cc21a57a72bdba5"],["/blog/How-to-Write-a-Git-Commit-Message.html","f56e8104cd4a7260c12297b53fc3112c"],["/blog/ISE-error-when-generate-hls-to-pcore.html","5527e24a74156ea5ebe7a7ac9075f90e"],["/blog/Interesting-APIs.html","96061b7dfd5571c27b1723815e89d824"],["/blog/Keep-Your-Commits-Atomic.html","8b139e4a89d8355496131ca4845079f2"],["/blog/MacType-conflict.html","a332c0c4c3c7eb6d299bcdc5f6138a33"],["/blog/Minor-CPU-model-of-gem5.html","2b6b6d846e259f65eefa3aa8d4dcf8b3"],["/blog/Python-translate-maketrans.html","4c3d053b13bf3ec4f1ab2d217b829521"],["/blog/Raspberry-PI-Using.html","a56e5754bba1370da51b6d3b265109f4"],["/blog/Test-My-Blog.html","aa7602da2a59f18ff061f8c27736f6ce"],["/blog/Xilinx-can-not-find-gpioh.html","0eb640c36b2d7eb4f9e52f4a1583fc5f"],["/blog/android.html","0d31b83f5752ff4ecf254e5291693899"],["/blog/anime-18-10.html","8be734676b7809b8b83c0cd2e0b5604f"],["/blog/anime-19-01.html","bade1d63935474cafc9087d319b52457"],["/blog/anime-19-04.html","40d8235bff9d7823bd5a003340a5d8c7"],["/blog/anime-2016-10.html","3bcf3f7dae36444a6c5b85b8a97109da"],["/blog/anime-2017-1.html","33414a3f67e4d51f118127c43d382349"],["/blog/anime-2017-10.html","b7e89c023c5cd4bc0fac0ae71244a909"],["/blog/anime-2017-4.html","01a62d1e4a0cf784f2c0a38bb4aee4c5"],["/blog/anime-2017-7.html","e8f42609e9fd413cd16c382063e876fd"],["/blog/anime-2018-01.html","8c6fc316e3c2cb8fcf8dfd3640b59156"],["/blog/anime-2018-7.html","f6e6643b0a4c0b123e312c17dbb38004"],["/blog/anime-list.html","f7ded484cc3dad91f9c5e8e450972522"],["/blog/archlinux-android-sdk.html","682f858e4f0c95f8a7ae1f14d83d92ab"],["/blog/archlinux-gui.html","91e3f7ad941f562e55ef16a738bd2843"],["/blog/archlinux-install.html","d61268a48b6fcaf67c0cde728a1d570d"],["/blog/bat-command-line-parametric.html","7333c043e091c59279ac0b9c5b3f550c"],["/blog/bat-file-argv.html","e0b05b5052390ca9620a3f177474c0b2"],["/blog/bing-to-qqpinyin.html","60a6a414527eebbe623b9717aed5ab5d"],["/blog/blog-categries-change.html","7d70794c7cae9b6e63ce0619f66d7bb3"],["/blog/blog-update.html","9c539a7dbca6b3945f217c8351d09ce7"],["/blog/bookmark.html","96d8044e2c88ce6e427ed61b43c80dd2"],["/blog/bufanjilu.html","6d7620e2d5ec5947e558d823c2107f4d"],["/blog/byr-spider.html","50d5ebb4e4528b7d3e2d08843208d4fd"],["/blog/c-standard-library-learn-1.html","2f9aa412d2704afddac3db88fa1c2486"],["/blog/chinese-hacker.html","e6bd6af10bdb477f820bfa3ba5f5f25c"],["/blog/choulaobie.html","421e2a821f44a5008b45e0e98e94d874"],["/blog/chuanyuelishi.html","ba688acfc3069b09dc7c535b7d79cae4"],["/blog/cordova-usage-01.html","7e658f6927cce0ef9077e12c5a770b6f"],["/blog/database-test.html","bec6a38f8bad2e59a022006f6c54ef1f"],["/blog/diandongche.html","a147aae25da007090acb6799a7519882"],["/blog/digital-image-processing-hw4.html","769e6912494ccab97954730ede019dbd"],["/blog/fortune-lolcat.html","79fb25e73ae7451b125e89c378c119c7"],["/blog/from-observable-universe-to-planck-length.html","bea42ab222d7f89669c580790c30017f"],["/blog/fsutil-hardlink-junction-and-ln.html","c3891fe1f0ba2d624c96c02ed3dd7aab"],["/blog/geek-tech-internet-browser-to-editor.html","2889b88873086b29060d2da11ac23f3a"],["/blog/gem5-tutorials.html","dcf62eb82a3ca43e5d561c44e61416fa"],["/blog/git-undo.html","ca2de0e00e5e9ed393701620defa67a1"],["/blog/github-education-pack.html","3e21cd50bf181975d080c7f29d89e5d3"],["/blog/graduate.html","09fc3c1bbce88c610b5a5dc79789061b"],["/blog/helloseed-api.html","a81406e70a2ca747ca1c359fcb3a2c31"],["/blog/https-github-pages-custom-domain.html","54ee75c34dba046a3bb3d02bab2f0cba"],["/blog/huawei-P7-error.html","cbace828ac8551711a63d7026701778a"],["/blog/install-archlinux-on-USB.html","852f55b87b42b5d577c3febfb49b8e30"],["/blog/jekyll-editor-hack.html","bbcd1acb3d812c9609a658b7438f6f2f"],["/blog/linux.html","ff2668b298738b96e52156efdd59aebf"],["/blog/magic-weekly-1.html","7d7fa1001e0e4fc0e4f2dfacfd839dd0"],["/blog/malatang.html","f18ea5605c7faf05b769af4de8d156ea"],["/blog/markdown-extended-latex.html","a75e6d7dd5995505165cd5deb53513fc"],["/blog/master-interview.html","74e95e5ba015ad92e38c0d342a424cf1"],["/blog/midnight-thought-1.html","e57220805ef93bc9d5bf916a6727e8f6"],["/blog/midnight-thought-2.html","7a18f9e41d246401c5b9ab8c819c787f"],["/blog/midnight-thought-3.html","b6e6be02c53b787edcac8fc5d62728aa"],["/blog/midnight-thought-4.html","ee603b91a627a3d044e713db95112e55"],["/blog/minicom-the-best.html","fc319dc84bea3159242d98e336f1c4f3"],["/blog/my-desktop.html","df03fcd65ee74366e079659e31f215e4"],["/blog/note-take-tools.html","446c01953d797b98c0fbb25e93f545fd"],["/blog/owncloud-nextcloud-install.html","f53239c12acbd4376c791a0e244024f3"],["/blog/pass-google-pagespeed.html","1f67baeef4502e224cc1450a35ffccda"],["/blog/pep-257-docstring-conventions-zh.html","55eb9f39c4512c73b712c21df8af5b58"],["/blog/python-argv-error-in-windows.html","bf637324cb864415ec82c8db7bb879c8"],["/blog/python-skills.html","b1fa8c7c7ad68a85cf7af9f4e4aee72f"],["/blog/python-special-method-names.html","6c2ae3ff9361313bf168a5ac5895f12c"],["/blog/quickstart-for-simulink.html","438ab73c63e0cdccbba8f5e6e3b13dc8"],["/blog/run-background.html","c24a7ceb2879413706082d2c82f7a6f3"],["/blog/sanguosha-pudg.html","3785e0132875fa278234d4142e91e021"],["/blog/simplest-note-develop-note.html","bbdbf6c205d872a17326da9e397506a5"],["/blog/simplify-the-img-upload-in-markdown.html","7e9d3f7660ce4082f7d6a1b1fd8dc9f3"],["/blog/ss-set.html","47c91489dad63c2c450dc9c48e9c598e"],["/blog/tools.html","fd87946a94881cab414f695ab9ee9534"],["/blog/use-mklink-to-save-space-of-C.html","2dd9f1923fccec6ab5744fddc4241afe"],["/blog/verilog.html","3e71bb5381b944eb5b2cf6ce879e7c92"],["/blog/vim.html","652ffabc0ffd3680ae4243ef63d878bc"],["/blog/vps-choice.html","615c5f518e301d42abd3cb6ba3ed8772"],["/blog/whats-new-in-python.html","0af63694ecfe9ae3178df64d22c119df"],["/blog/win10-boot-repair.html","20404931f4d27234b9461851d40a8414"],["/blog/win10-bug-about-bing.html","8f3bd5ff96ca8a18f39ccfb1437208fe"],["/blog/windows-linux-autostart.html","bdf3e0cca6556b8010ccaa7b77484fb7"],["/blog/windows-or-linux.html","bfd7d4eece767d1df8860cdb0c743804"],["/blog/windows.html","3118a65b735e5b6ebe0d0aad83ee3419"],["/blog/xiaoshuo.html","553e328c2e4a773aabf2c7c8ca703c59"],["/blog/xilinx-vivado-usage.html","dc098dd3082b90c88a21ec005efb3b5b"],["/blog/xipai.html","7d2dfd9a97841b6174fa6501007e2abf"],["/blog/your-name.html","149763320a998abfe91b8422c41ae424"],["/blog/zedboard-1.html","79f3069a73e42b14d87f784f7a52b6d0"],["/blog/zedboard-2.html","118860e6e46592309a5eea899153d445"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","38bf8ff4b1d758aa9a592b5ba1248b4d"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","7d2480a07b97e7dc9c3cbdd2f6900f31"],["/page2/index.html","7edd297b617c278d40971ebb3fa2b357"],["/page3/index.html","99a6ab52f095ad29b32d82e502c59ca0"],["/page4/index.html","3fdf967749c856580a3264a00f071ca4"],["/page5/index.html","f26f75a9aba50225227d5ea41dd19dac"],["/page6/index.html","930d1f6773858f2e971daacc19a4b6ba"],["/page7/index.html","0b64b50504450a480e0a120897d94dcd"],["/page8/index.html","b632be7efc6e8c225e28106aa98ec88a"],["/page9/index.html","16282d8ffa78ecd88f6d11426d5f5c66"],["/tag.html","c5c0c9aa4fdba68156b1c28711873fc5"]];
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







