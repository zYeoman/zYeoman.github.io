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

var precacheConfig = [["/404.html","f822a8e958d68d31cd3d6a0c1cb81752"],["/blog/7z-extract-and-zip.html","a04e726dd3d3aee537177393ceeef36d"],["/blog/A-bug-in-python-about-import.html","92ac0d7394d625a0a35c0af630e5703f"],["/blog/A-script-every-day-1.html","7c9a3b7b08243b32054685b71925818a"],["/blog/DOS-rename-many-txt.html","70cad6e157f2c235e6dbad34f8e51c76"],["/blog/English-punctuation-to-Chinese-punctuation.html","79f2f011fa64d1030809de6b3232264d"],["/blog/How-to-Write-a-Git-Commit-Message.html","abd53d2f8c746fbd9589eb224b1c5fa6"],["/blog/ISE-error-when-generate-hls-to-pcore.html","76a7df1f91d39c3c3f5097462e83d8fe"],["/blog/Interesting-APIs.html","8c32f1aca733e3ebb631d528acab8c88"],["/blog/Keep-Your-Commits-Atomic.html","ccae3b1a21e1115305ebfbd2137f7317"],["/blog/MacType-conflict.html","72ccd0942db1a54ef0ccb33ea9fc1bb3"],["/blog/Minor-CPU-model-of-gem5.html","a5493e1362ffff2c4bcd0c4211e600dd"],["/blog/Python-translate-maketrans.html","427f34faa1aed9243bc9c46b92d92bbe"],["/blog/Raspberry-PI-Using.html","849ccd6bd04a15ecb3abeab3210725d4"],["/blog/Test-My-Blog.html","e1f3c95342e375a986f5da9fb41b0707"],["/blog/Xilinx-can-not-find-gpioh.html","8fbfd22245ea487bf32b814e5e7ee29e"],["/blog/android.html","9949b88f73f32fc0c204ee01dcf0d58a"],["/blog/anime-18-10.html","4db27d767cdd5320d4bb4ef7e88f2e67"],["/blog/anime-2016-10.html","8ffeec19807087220d2f371938261780"],["/blog/anime-2017-1.html","491511123c8b31371cba390e7351ced0"],["/blog/anime-2017-10.html","ec7036f27c4f15a57af49c48385a961b"],["/blog/anime-2017-4.html","5514b5716f64da23a87539ad06626567"],["/blog/anime-2017-7.html","321d94e2a11979b2dd34783f7bda33a6"],["/blog/anime-2018-01.html","78a831d693bebea9a0c1c08ddddc20a7"],["/blog/anime-2018-7.html","85bf86c41377a003d77608237d7f3a7f"],["/blog/anime-list.html","4c5db18881b8cb42834ac99860baf5a9"],["/blog/archlinux-gui.html","c19f388535a97481ddf98d03c3319484"],["/blog/archlinux-install.html","075d4d4e0610b3cea67ce0c7c9c6cdf8"],["/blog/bat-command-line-parametric.html","b66d8746f64cc0f5b1c7aa931d525e2b"],["/blog/bat-file-argv.html","82a6e0cd03230a12c4f3f21a3a14d98d"],["/blog/bing-to-qqpinyin.html","bc4a225bf5a8a442fb83c2ef1dce122f"],["/blog/blog-categries-change.html","7046c81654d9458be5537527e3644806"],["/blog/blog-update.html","94c836195102c6bfbd87d471e23f2b1d"],["/blog/bookmark.html","56e499e791e660bc9a2df94255136292"],["/blog/bufanjilu.html","1fe48df77ecad125b668cc6e284982fc"],["/blog/byr-spider.html","945fa77f467058facea27d4b36f79545"],["/blog/c-standard-library-learn-1.html","f70f2160ef525cb077ea8caf53f77dac"],["/blog/chinese-hacker.html","5c7888b6edd90dcf2b4f450e5a895b7a"],["/blog/choulaobie.html","5dd36936706f080d38ec93993c6832b1"],["/blog/chuanyuelishi.html","df698a924b2b338ade40a0955e306f33"],["/blog/database-test.html","26795192458f2d05a1d371d25e4fb6aa"],["/blog/diandongche.html","9b1d5689a693568db520517ba7c9cffc"],["/blog/digital-image-processing-hw4.html","1c3168430ec8922a452878fb589a7280"],["/blog/fortune-lolcat.html","5a8010e82e9ea1e63bdad01ee7d0da8f"],["/blog/from-observable-universe-to-planck-length.html","43f6788f7ea7791772f33b633d44c69b"],["/blog/fsutil-hardlink-junction-and-ln.html","79d0f09fd9a6373d9910f10293b112dd"],["/blog/geek-tech-internet-browser-to-editor.html","cdaae581a6a4b7252c711bf7ac04cdd8"],["/blog/gem5-tutorials.html","e63468652e31007dd00e4ff868b7dd7b"],["/blog/git-undo.html","652a1bc994028190d1ec5589de8b79e3"],["/blog/github-education-pack.html","690e823c05cfa433030cb0dfdf4c498a"],["/blog/graduate.html","e248dd6d99a6052a5f02edf79ae5d5b1"],["/blog/helloseed-api.html","e378c470c306126c2f829f624e1114b8"],["/blog/https-github-pages-custom-domain.html","14d45f26a2d623ccc4a22bc60abd78f9"],["/blog/huawei-P7-error.html","56fb4df410bd6ca812ebd6bb3e12f40b"],["/blog/install-archlinux-on-USB.html","a229b9cf79d58ca32a81c6a40870014f"],["/blog/jekyll-editor-hack.html","9a7cc159d2d1f3d9807a04da14baaaa2"],["/blog/linux.html","ad3bf26a6e8bbffa92ccc1b204d947c7"],["/blog/magic-weekly-1.html","cf79753e328015069ae8699835202930"],["/blog/malatang.html","e877599ed836ba47d8f7fee475af4d4b"],["/blog/markdown-extended-latex.html","82887696a8ef4d8c7ed4f5db3ff10d80"],["/blog/master-interview.html","937818f5f351d8bd7a4d633498bc6055"],["/blog/midnight-thought-1.html","21839aaab8765cc9dec22f5f5c4e20ee"],["/blog/midnight-thought-2.html","06410b756b5c24f30085bab75c936d26"],["/blog/midnight-thought-3.html","e29d54afce4df17ef314be5b7fa1bcd4"],["/blog/midnight-thought-4.html","274dc19cccf47399b94d0800fec8d27e"],["/blog/minicom-the-best.html","fa743c450dd3f1cd9572e8b2d1644687"],["/blog/my-desktop.html","ac1b75ab0ae623d025dec4aca27e523d"],["/blog/note-take-tools.html","62858fa02e6b7f4b2b25f3184a20c493"],["/blog/owncloud-nextcloud-install.html","18891c5e9cd6f7ac1a26e0010f5cebae"],["/blog/pass-google-pagespeed.html","676a0410ef45d33ea79ca0c8fe62419c"],["/blog/pep-257-docstring-conventions-zh.html","8bac1d1484c97cf849f2ffe4fc764fa1"],["/blog/python-argv-error-in-windows.html","bc2f0d06e81873e545949ac11ea0c9c5"],["/blog/python-skills.html","339cb121b67df51e55ccdcac38a504b5"],["/blog/python-special-method-names.html","7f7212ae7e106e7285d4de9cb35778a5"],["/blog/quickstart-for-simulink.html","54953a957c45ab987b841d4c49f25f54"],["/blog/run-background.html","4d256b1ff8f4c0602080c9a94ad3e98a"],["/blog/sanguosha-pudg.html","8257577ec6c487d22d985497e8781bee"],["/blog/simplest-note-develop-note.html","091b23f99a06f5f4dde3564b787486ab"],["/blog/simplify-the-img-upload-in-markdown.html","707c892b93a3010a2059c3b61e13f3fd"],["/blog/ss-set.html","0d6101ff25982be608f48ae32d0abb22"],["/blog/tools.html","aee90d7e180799d431f72ba7c6a1c49d"],["/blog/use-mklink-to-save-space-of-C.html","4190f525955ae70374edd84d82ce6fe6"],["/blog/verilog.html","c2769386e9ba0ec13abbd9ab5b6c88e6"],["/blog/vim.html","4485d13be3971b85f565677fc5883000"],["/blog/vps-choice.html","cff1046a99ca8216a85852e2ab352e07"],["/blog/whats-new-in-python.html","e0737bd01ec6f286a3f5c676d5cc59f9"],["/blog/win10-boot-repair.html","e42a209a67742a9a94264aa6072b5ecb"],["/blog/win10-bug-about-bing.html","188c6e801170b081a18e0dd2b0ea4fff"],["/blog/windows-linux-autostart.html","5559ef93f357d636d22520564cf8f528"],["/blog/windows-or-linux.html","805aa94e2691e6efa5461148ef3c16f1"],["/blog/windows.html","1091c29e519a72c80ba0b13407849eb1"],["/blog/xiaoshuo.html","5ef334b805641c5d9786a88f7260f1ec"],["/blog/xilinx-vivado-usage.html","c6e2303e11cafc19b2796dd5246be650"],["/blog/xipai.html","745d02c1dcd153dbf181ed42fc3f89af"],["/blog/your-name.html","12ffd5233408a0850ce3875463490e2c"],["/blog/zedboard-1.html","3b3acc8609cdf8b99546d41aff22fb47"],["/blog/zedboard-2.html","36249d884be087c5216fa69fdfe6a4d6"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","0ba81463e17e754f2ebf8db0e50a623a"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","b5d7d885176987332d9cec979a3ec3a9"],["/page2/index.html","7299767f6373f9813fff873893f757e6"],["/page3/index.html","3edcd50c649a6c24fda52212dbf954c9"],["/page4/index.html","c46d73581e455c729a1e69963a57eab5"],["/page5/index.html","f691823e35be7782125f1ed6e0ae91bd"],["/page6/index.html","839c3e0eef367a49edc3761b45b6f098"],["/page7/index.html","14d1abae567c4e759b430f962c720519"],["/page8/index.html","24739ca4b6c237351acebc808525751d"],["/page9/index.html","1e28be906663c5bf3259761b4d5e919a"],["/tag.html","8e1f1859605d26acde81cfcb95ac5bff"]];
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







