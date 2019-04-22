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

var precacheConfig = [["/404.html","22967841609fb02e6bf91ac6b127eb88"],["/blog/7z-extract-and-zip.html","dc7f1f186a45933c4a25f2a735913cbe"],["/blog/A-bug-in-python-about-import.html","d984ee66cda040d9a8715454e83affe9"],["/blog/A-script-every-day-1.html","0e3115b3a6bb7974fdcfa01b95d79390"],["/blog/DOS-rename-many-txt.html","c870c4abc03a66f2fe22b72839ca4883"],["/blog/English-punctuation-to-Chinese-punctuation.html","e5085a9d9b48b9f5cf9ab876fc9cdaaa"],["/blog/How-to-Write-a-Git-Commit-Message.html","8f950850dcefbf95e23da1ca678ba375"],["/blog/ISE-error-when-generate-hls-to-pcore.html","97c4a74af79a1f18e8574b94287101cc"],["/blog/Interesting-APIs.html","c2eff533298a25a054357eaaa8d80062"],["/blog/Keep-Your-Commits-Atomic.html","68a1d585584f432672cc6fa1c3a64b11"],["/blog/MacType-conflict.html","6bd17d9bea94e3126a7c8c3df0fe5a9d"],["/blog/Minor-CPU-model-of-gem5.html","2a65358cdd8b9d50fcfba5f40eea70b3"],["/blog/Python-translate-maketrans.html","ab908f68f8de5421a4d93f45cfa3d4cf"],["/blog/Raspberry-PI-Using.html","362383f82920969ac57a77e4af22d2f2"],["/blog/Test-My-Blog.html","a5467a5de91a97de59f879916f15b12d"],["/blog/Xilinx-can-not-find-gpioh.html","ef352c1911877a1748f1197a6d5f6115"],["/blog/android.html","11e7689c05b60a4dec936c97453b2b70"],["/blog/anime-18-10.html","e5d682fdbc78f38e07edb5a5aa3e1ab1"],["/blog/anime-19-01.html","b09854ed9f4c7f971c42b569d6bb5309"],["/blog/anime-19-04.html","9ca897779b566085c52392eaecfeac75"],["/blog/anime-2016-10.html","727d36dc64b74b8527e36104f65dda68"],["/blog/anime-2017-1.html","9b0bb2f9208d7324dac292831cab6455"],["/blog/anime-2017-10.html","82d8389d05fc9fe0526dd9cd5b7eed89"],["/blog/anime-2017-4.html","d594e189d20f64069f86a3badf8f34b5"],["/blog/anime-2017-7.html","049316d4909f19cd197e2ca6487c5355"],["/blog/anime-2018-01.html","f38a52ed9be7775e65e5912f48031148"],["/blog/anime-2018-7.html","60d13ef801e40c60c81a3a34ac685fe8"],["/blog/anime-list.html","24ff9466b534f805251ca977a2524e96"],["/blog/archlinux-android-sdk.html","111443da421693f87df823fca523317c"],["/blog/archlinux-gui.html","b06157b1a90a1717742cc91b8f1dc59b"],["/blog/archlinux-install.html","0e72eea561fd8a4fcecc2827ff6efb9f"],["/blog/bat-command-line-parametric.html","e0618dfd29c08a9c6a71616125d55191"],["/blog/bat-file-argv.html","f8012e6a4c3924b37cfdba424c52d3f4"],["/blog/bing-to-qqpinyin.html","5ea7af449e37c6c47327ea440f7e4c1d"],["/blog/blog-categries-change.html","15723028bb2defb1580b527f82ebae53"],["/blog/blog-update.html","689224aa49efba59a76535e853307079"],["/blog/bookmark.html","7be481b1aa645e5d5a698081a3d2701b"],["/blog/bufanjilu.html","6153a546cbb443eb8c56b6f5ade7888e"],["/blog/byr-spider.html","ba650b41592c5e9b2fefd4dd8b4f5802"],["/blog/c-standard-library-learn-1.html","6113b7250a5e7f20795c999c9af8b3b5"],["/blog/chinese-hacker.html","84e625d9b34c069dcc0885f6ad75abf8"],["/blog/choulaobie.html","5cdb1fb6426667689630d8a6e520ef7e"],["/blog/chuanyuelishi.html","8e18cbc21cfff4ffaaa7c114eae345ad"],["/blog/cordova-usage-01.html","0d5b93c4dca1812aa231a4619f5cbd8d"],["/blog/database-test.html","91a47b0acb7d3fddeb2ade6a38e128be"],["/blog/diandongche.html","2e86460ba29fdf37674bcbdc6420fcab"],["/blog/digital-image-processing-hw4.html","6e1c844cf80373b9a4d8c06b44ca9710"],["/blog/fortune-lolcat.html","66d88e244b4bba8afc7b35268f6ce527"],["/blog/from-observable-universe-to-planck-length.html","f9e84d482be0fcbf4f5d19b0813490cb"],["/blog/fsutil-hardlink-junction-and-ln.html","012bc774edc47b1bd6ed6fb63c96a98f"],["/blog/geek-tech-internet-browser-to-editor.html","3b58b4e66a0e7594c87560ac894a8e49"],["/blog/gem5-tutorials.html","495f86834ad96d7229a6edbe4139755c"],["/blog/git-undo.html","e4b8831bc20506c9b982cc44103a3624"],["/blog/github-education-pack.html","4d039647613ecfb9ebf577cdbec4bf47"],["/blog/graduate.html","50f11d883410bcad505ff23f6e183121"],["/blog/helloseed-api.html","480372ed2f7056807f98375be4ec8c0e"],["/blog/https-github-pages-custom-domain.html","bffeb6f349842baf6b186edd9dd535d1"],["/blog/huawei-P7-error.html","7b090ff99b6a6f16a315aacbfb48500c"],["/blog/install-archlinux-on-USB.html","8371e78d39b814994df46c4a4e4d71d8"],["/blog/jekyll-editor-hack.html","662b4d8c5410eac6dd19b76dbb0badcd"],["/blog/linux.html","f289a890a662c29455b96f836be536cd"],["/blog/magic-weekly-1.html","ca39e0cc3d8023340d01ab21587d1afc"],["/blog/malatang.html","99da56934f0d96f970c348a6f5aed99c"],["/blog/markdown-extended-latex.html","9539c6effaba64a2c4614680e090927a"],["/blog/master-interview.html","bd6d1650d69ff9f18217be3e052ccfcf"],["/blog/midnight-thought-1.html","67d121146cb26c045fffb11a2a77c26a"],["/blog/midnight-thought-2.html","f6a7c1f318a0cf3ba92c47675cb38a10"],["/blog/midnight-thought-3.html","200b681660e66f402e9d318d6bec415e"],["/blog/midnight-thought-4.html","04a86818baf035f0a515ed66ff0070fd"],["/blog/minicom-the-best.html","4c621eaf79ecba6cde605f9fc98cdecb"],["/blog/my-desktop.html","7d69fd789ee3c689ad378754f4416c1d"],["/blog/note-take-tools.html","66c6aad6537ee6422e0d9782e7088a08"],["/blog/owncloud-nextcloud-install.html","93fa9658b72525b3534fadf62476b318"],["/blog/pass-google-pagespeed.html","47559b85f353f107f5a204e656797168"],["/blog/pep-257-docstring-conventions-zh.html","d07bcd28afb3149948c48c47054e56e3"],["/blog/python-argv-error-in-windows.html","01b3a46e0282d9535f12e076d81ad9ee"],["/blog/python-skills.html","3ce81114f4a1b935ddc076e1b408f5a4"],["/blog/python-special-method-names.html","7e06f2731858f93304fdba50f4e7a384"],["/blog/quickstart-for-simulink.html","3f8c5b55dcb0e53b040068070c251bcb"],["/blog/research-about-time-track-tools.html","739bf87173fa3f15d680a4ea2b3bdf09"],["/blog/run-background.html","9083c55465b8017adcfdc7e352eaf23a"],["/blog/sanguosha-pudg.html","e6c343d52fd038c532c13aded24c46bf"],["/blog/simplest-note-develop-note.html","cda043985a90fc1eea90265d0bbc55d4"],["/blog/simplify-the-img-upload-in-markdown.html","bd83727cbd3b7446552f27f1ab2131c5"],["/blog/ss-set.html","c983c8a14d0af85d3016d3db424e0ace"],["/blog/tools.html","13685ecf875912fb7abf729540cea500"],["/blog/use-mklink-to-save-space-of-C.html","63b7d1a0e37412372d0482bb5442be61"],["/blog/verilog.html","5b3eb54cfdade4b38c16f9453da0e27e"],["/blog/vim.html","d8607a7daed84ebf9ce09e5746782df9"],["/blog/virtualbox-add-physical-disk.html","e74bb5fae53addf38d85cda84f22f1a4"],["/blog/vps-choice.html","251166130be20d971b538a972ad7e3e5"],["/blog/whats-new-in-python.html","0a513e52d4f504549bf66daff9a50518"],["/blog/win10-boot-repair.html","6c8255434a0b8a71615b1017766ed95c"],["/blog/win10-bug-about-bing.html","41a315077bf8f948892d4461196427c1"],["/blog/windows-linux-autostart.html","41ea5b6922d21108da93fb564df6e1a8"],["/blog/windows-or-linux.html","73a1a65fb6ed522d6cb677a55c48020c"],["/blog/windows.html","575092d80dba395c0b091a1d7bd9ae1f"],["/blog/xiaoshuo.html","c5d17d4413f9e4b0cce0a00b8b384c55"],["/blog/xilinx-vivado-usage.html","cc49c5694398110948b536b37e4a2944"],["/blog/xipai.html","1df0f370634e92c8012ec88956a6dc9e"],["/blog/your-name.html","3e54f69ca8d9ba576721b7e747bb8479"],["/blog/zedboard-1.html","f1605fc46b0488cb316a0946d7ca72f2"],["/blog/zedboard-2.html","801994f7caa0836fc2e6c4241588a46a"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","9310b5397e5739a19586701bb6dfb724"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","902e9f27c8f1ce490a5eca3378838a06"],["/page11/index.html","28118bce4d37be0d456e069de6a97637"],["/page2/index.html","4930b90cdcf48abe01115761f6a282cb"],["/page3/index.html","fae209d6298751f19ed7bbe118f93b64"],["/page4/index.html","3b962f434851df6c2761e6303e2fdb07"],["/page5/index.html","3df2747d102082c04a6db7334cc87539"],["/page6/index.html","f6edb41e93a4edbcd2224014c6bf8976"],["/page7/index.html","28048236efe941abe1f4559bd1e63f5d"],["/page8/index.html","8cde9809ea64fe6ab038017ad765a187"],["/page9/index.html","4527c768e75290af4d3ffca780574718"],["/tag.html","d56db0dea1d04b4b538955df83da32ae"]];
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







