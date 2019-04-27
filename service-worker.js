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

var precacheConfig = [["/404.html","47048cab2a9edbae91b73b247fedb730"],["/blog/7z-extract-and-zip.html","6c4c8e69cd7f2450bf99a431c5e6608d"],["/blog/A-bug-in-python-about-import.html","031e5402aec52243fc0ed9402220c05a"],["/blog/A-script-every-day-1.html","bb3c2e75d923ef49a225a3929ffea800"],["/blog/DOS-rename-many-txt.html","4e791ae9c3d7e4a6662d2ebd1baaab72"],["/blog/English-punctuation-to-Chinese-punctuation.html","288b6225e0c658942af8345dcf078558"],["/blog/How-to-Write-a-Git-Commit-Message.html","fe06b7fcf20e7502f05e6f2334ede813"],["/blog/ISE-error-when-generate-hls-to-pcore.html","80336f01e44f2a55b174e9bc48313bab"],["/blog/Interesting-APIs.html","d1bccf11bc4ae6f2bc3f7dd7c9da40d0"],["/blog/Keep-Your-Commits-Atomic.html","b6b93c7c76597da8e2f2a31528f4a9aa"],["/blog/MacType-conflict.html","4f0b6acc3661534444b88721e1b84681"],["/blog/Minor-CPU-model-of-gem5.html","45396793f7ed4c6b0d92ed3732a82db7"],["/blog/Python-translate-maketrans.html","f0f05277b30095d95454a676cdee78db"],["/blog/Raspberry-PI-Using.html","8e17880d6c9ebbbd164d7cd338085971"],["/blog/Test-My-Blog.html","837e51a4b131896749878ffa070e19f8"],["/blog/Xilinx-can-not-find-gpioh.html","f75ac8fb5dca5c08377e1fa7d0918a3c"],["/blog/android.html","a1a316a306aa6a4a002e23ebc9668904"],["/blog/anime-18-10.html","40cc57c28bb1a99811cac6031b7ccce7"],["/blog/anime-19-01.html","d971540cb0f4958aa7b7a14d8a0a0825"],["/blog/anime-19-04.html","8c0bffa90276ecc3280e1b815cf29d30"],["/blog/anime-2016-10.html","e5d12e3f2b534cb0bf20d21aefc6aa2e"],["/blog/anime-2017-1.html","6ef6300ff77bb7715ea8b0371c3d8e6a"],["/blog/anime-2017-10.html","8459beb8eb2ea60a8e349535076f4318"],["/blog/anime-2017-4.html","8c732c9ce7a0207295be91d292de6772"],["/blog/anime-2017-7.html","f067eb7008926f510f25bb067e92e021"],["/blog/anime-2018-01.html","e4fe8f58ba342a313eb8709d28c637cc"],["/blog/anime-2018-7.html","ab0465e3d6f3f01f48ce5f9a865fe1aa"],["/blog/anime-list.html","f66ce3fa314dbd27ea88f4c5f25e1677"],["/blog/archlinux-android-sdk.html","d274c7cd61b66c7ee072db78bd036310"],["/blog/archlinux-gui.html","a476bf9b9ca73e67f60814de2b1b3317"],["/blog/archlinux-install.html","1e174f6a8b697156dfbc218adf3fc9d5"],["/blog/bat-command-line-parametric.html","a08216dfae0a79f886b44ea734661553"],["/blog/bat-file-argv.html","70ee4186532af33fa62fa474027d0291"],["/blog/bing-to-qqpinyin.html","f5a22e376ccbb3941eecc0da568b986d"],["/blog/blog-categries-change.html","51d7f659e76ec2777569f3e2f86d9970"],["/blog/blog-update.html","7a5a8ae0f2466ca433fbea6b1a376e41"],["/blog/bookmark.html","07b48759efbea2a967be843451beb416"],["/blog/bufanjilu.html","3bcae30a5c4b891ecb5ef1390f79adfc"],["/blog/byr-spider.html","da3b4084d658f53bd51c6a6e83f2a8ef"],["/blog/c-standard-library-learn-1.html","3893c75b519f3342bf6b4a7eb811befb"],["/blog/c-tips-one-line.html","0586eba3ec6b1a5903189dfbfced02f4"],["/blog/chinese-hacker.html","9ba59cd7237c65a518800e88344c3322"],["/blog/choulaobie.html","2cbe3387e05ce12ebf28bc2d968f6abf"],["/blog/chuanyuelishi.html","20a720d54d08b2017be4ea84d753ca9b"],["/blog/cordova-usage-01.html","bfe30b3a7d8ff892d01baf127a072d32"],["/blog/database-test.html","3d418d2318aead5b99985ff8ed0e2af8"],["/blog/diandongche.html","79bbe3a91b9e6d411938704a2ee1e5c4"],["/blog/digital-image-processing-hw4.html","65710f9698047f6480bf14aa1769542d"],["/blog/fortune-lolcat.html","e743074f3a1c963b3e3eb787fc3ad367"],["/blog/from-observable-universe-to-planck-length.html","51ce025d9e7de91a20b24ce8513a4145"],["/blog/fsutil-hardlink-junction-and-ln.html","f980c96b6c39a98604de0098f2b3ac31"],["/blog/geek-tech-internet-browser-to-editor.html","9be890318e912f91ce65186c2e822424"],["/blog/gem5-tutorials.html","adf4fce49999d1c3a6d4e019f591717c"],["/blog/git-undo.html","59c8fced7d8895ea95bf06c74a9fce25"],["/blog/github-education-pack.html","91af91b1c0534931d67030130ab5fd81"],["/blog/graduate.html","f77a06c024ba41d8e20a65cc2d5011b1"],["/blog/helloseed-api.html","ef0f2b4f55a996e9061f3ad01af5e874"],["/blog/https-github-pages-custom-domain.html","e938de2c1f0b67ea26b5335f75fc9272"],["/blog/huawei-P7-error.html","cfdc0a01e49e41f42c030e0e1a8f41f2"],["/blog/install-archlinux-on-USB.html","f981e4ce24ca3bdbe79761a7eca77219"],["/blog/jekyll-editor-hack.html","11f03c2240713bf2b419de7cc230b62a"],["/blog/linux.html","3d1794d1e49ed41f200e269c0c646107"],["/blog/magic-weekly-1.html","15fe58d392c41f334e2f7538ab068cf5"],["/blog/malatang.html","70ac5009c8fa70ec6ebf45cdab89263e"],["/blog/markdown-extended-latex.html","ee911035ea6d39e55fc1554a31f0f02f"],["/blog/master-interview.html","bcc75e5f2905615bf219982218a2a67d"],["/blog/midnight-thought-1.html","e5048e9fb8a9409554e23f2aeb6959af"],["/blog/midnight-thought-2.html","b52741de0c9caab920585169f1b1b1ad"],["/blog/midnight-thought-3.html","dbc668f510ece377a6a370db392b4d34"],["/blog/midnight-thought-4.html","f0d0a7357a78d5d5e48538dad5ad0a82"],["/blog/minicom-the-best.html","f8ba67696c4286d6cd6be907d5c18167"],["/blog/my-desktop.html","b407f897a1f7c1006dfb55045b2a85a8"],["/blog/note-take-tools.html","5ba93211c88bd7d8b9e8dddf4cd291bd"],["/blog/owncloud-nextcloud-install.html","434ef966339c93b2fdb12607a9e49565"],["/blog/pass-google-pagespeed.html","d465c6d6a1468c8e81c004b051e00be0"],["/blog/pep-257-docstring-conventions-zh.html","26aa26910510c2a66ce9adb69a233316"],["/blog/python-argv-error-in-windows.html","c9280a83b7a971a7a042428b86a393b7"],["/blog/python-skills.html","b3bc62dac1e374105260d1e8ac1958e2"],["/blog/python-special-method-names.html","eb5f16b03eb4bb06418c0af4c61bfb7c"],["/blog/quickstart-for-simulink.html","f673b456ae3b452c0fcae958a972dda3"],["/blog/research-about-time-track-tools.html","46180f11ed027041fd21178445790652"],["/blog/run-background.html","e1d9a52277314546c3acc5ce89958f28"],["/blog/sanguosha-pudg.html","410ed9dcbc907329c3a266fe0d1bc057"],["/blog/simplest-note-develop-note.html","55d9b1bcb51b8467301917ebb9a20cf3"],["/blog/simplify-the-img-upload-in-markdown.html","3cb1e73690e238f150da4d1489631b8c"],["/blog/ss-set.html","17a5abe1a2f3e3b6a47610e03367dda8"],["/blog/tools.html","3dead68949d7567d7a8aa85bce1563ef"],["/blog/use-mklink-to-save-space-of-C.html","84fcaa4711f978fb1888aaa4c4c10080"],["/blog/verilog.html","08dd0e88d23eb644799fe7ca0a54adad"],["/blog/vim.html","27f654f1553ab1868f042d8d9d1c8bb8"],["/blog/virtualbox-add-physical-disk.html","85d6f230b2ce892a010e7a1270af46e4"],["/blog/virtualbox-archlinux-screen-resolution.html","d5ff7965e241acf8a68d0c13b7bfec53"],["/blog/vps-choice.html","fa242ae974daac23de99ed66e46dd636"],["/blog/whats-new-in-python.html","b7b86693c4abb5d01aecb9c10ee13396"],["/blog/win10-boot-repair.html","648c21c6933b56e3ab6a8f33105e6875"],["/blog/win10-bug-about-bing.html","7aea25c1325c0daedceadc55e302805e"],["/blog/windows-linux-autostart.html","ce51e7d2b713ab79d4b7880d86450288"],["/blog/windows-or-linux.html","b06536658601f03fa51823165e7f33da"],["/blog/windows.html","00a0374df0e7ec5d8b2c904a8ea49d63"],["/blog/xiaoshuo.html","1d03bc6ea560360a559647fb25051a50"],["/blog/xilinx-vivado-usage.html","b862f4b11b266ce7fa7a9b00bbd85b1d"],["/blog/xipai.html","b8e2fc99bb04b5bd5a7f3182fbb3ed84"],["/blog/your-name.html","cc9a98c9f9dec5c77453ecf282ee22d2"],["/blog/zedboard-1.html","f6aa0583f7744aac395f91c33548d206"],["/blog/zedboard-2.html","e4a0591a2f4a8b2492b2f82ace36ada1"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","59e0cab4249e834306d330033bc8e2b0"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","e02bf2daa4ce07eaf669964982a88970"],["/page11/index.html","b79662135855558ae3fb20c4434be231"],["/page2/index.html","d7183d106e6ef0da7eded884f52822a8"],["/page3/index.html","5980cbe53bf8551162018a1173fff043"],["/page4/index.html","bd3e503a6f0d5cc523f0169e4d551347"],["/page5/index.html","86a59189223990c91eba13ffa97661a6"],["/page6/index.html","d6d942576957d2f5efcf119810424e3f"],["/page7/index.html","1c3bd283363f120658a9fbced3834a59"],["/page8/index.html","79ba7d07fe36a1e830389a22d08d2b85"],["/page9/index.html","aa30ef3e90b8b88d3a130d72f578f893"],["/tag.html","e13bd397077b69659c91ac1704766be9"]];
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







