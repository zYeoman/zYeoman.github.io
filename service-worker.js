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

var precacheConfig = [["/404.html","40ee68d9c0b9eaddb5bbfcfe3cc30f29"],["/blog/7z-extract-and-zip.html","0f62a4512a9e235b92ee9d5201370446"],["/blog/A-bug-in-python-about-import.html","4d5e8e7e678124ae8ba1bac08ced117e"],["/blog/A-script-every-day-1.html","5d5f7628f26756439ecfceb96671f8d1"],["/blog/DOS-rename-many-txt.html","71c31a4fdd9acc8b1397350a47dc0913"],["/blog/English-punctuation-to-Chinese-punctuation.html","6c64c543b3a889848d30bbc6553c7a50"],["/blog/How-to-Write-a-Git-Commit-Message.html","2e60fe0b2bf132bf563ede7a2cb2ac39"],["/blog/ISE-error-when-generate-hls-to-pcore.html","deccc7e88173304169a14605ae1cda15"],["/blog/Interesting-APIs.html","a9e1af3dc36deba731587c80ff532d3f"],["/blog/Keep-Your-Commits-Atomic.html","d885939c571a054fe01f911f1f06ed14"],["/blog/MacType-conflict.html","a80a3bf80041150ff204e4dac82836fc"],["/blog/Minor-CPU-model-of-gem5.html","59539497b066bdfe021e1d74725ebe4a"],["/blog/Python-translate-maketrans.html","30573d878f328d8a8ca398add6ac57de"],["/blog/Raspberry-PI-Using.html","acd8d16351aedbff183b6165d71193b6"],["/blog/Test-My-Blog.html","37f812b96cd462bc25b3c47c25873b1d"],["/blog/Xilinx-can-not-find-gpioh.html","f8547beca7b124cc546b793114cb08cc"],["/blog/android.html","f5e7c4186b1d1dbf1ec5281f12bcfea6"],["/blog/anime-18-10.html","7e96db2f3daefc35cbc3ecd0d8397684"],["/blog/anime-19-01.html","251f1871190421e995a1164579cccf2d"],["/blog/anime-2016-10.html","496f4336e99d148101ef3b6128145fae"],["/blog/anime-2017-1.html","6659a88e871c81e3e04ef2c840234df3"],["/blog/anime-2017-10.html","c93d6e8b36eeeaab799a35728fdb0a80"],["/blog/anime-2017-4.html","7a362be382502af029ec522a60bec94a"],["/blog/anime-2017-7.html","73478fa0a54b01fa67f522b8ddff5028"],["/blog/anime-2018-01.html","e03683b07b41e0fd3750f9cb4e487b4b"],["/blog/anime-2018-7.html","7a7bbb3cd065fa366868291f32f9eb6a"],["/blog/anime-list.html","9f03d4496a6e9bd578862b76144b241c"],["/blog/archlinux-android-sdk.html","50bd68f03f5428bb6773b5223ce060d9"],["/blog/archlinux-gui.html","2bb3ee854fa5841de12fe926f974d63c"],["/blog/archlinux-install.html","d9c09af63e508eccb94a563b025908ed"],["/blog/bat-command-line-parametric.html","3fadf3ee41a6890bafafd8b3cf97d047"],["/blog/bat-file-argv.html","06d232ebb0988e6e37c05462c6ab7448"],["/blog/bing-to-qqpinyin.html","b8abb7b3e22d8b3f283478ca4e6b4550"],["/blog/blog-categries-change.html","f3995efd2f34d0107cb53d1c1b5f9a5b"],["/blog/blog-update.html","8742f2da11f3a248a0eb488349b57312"],["/blog/bookmark.html","e52c385b858eb5af7ebe7e0593d1689d"],["/blog/bufanjilu.html","e0db8353e88460d85fd35b45be47a2c8"],["/blog/byr-spider.html","1d6f002f809e64cfeba8f84c9fa63072"],["/blog/c-standard-library-learn-1.html","b79f18773283d868bdeefa0f5af5a8cd"],["/blog/chinese-hacker.html","450f6e5b60e0261754d9237b005cac62"],["/blog/choulaobie.html","db7709d6110c5d72b7f6815134f72169"],["/blog/chuanyuelishi.html","a9fe5452677daa212da5e343a01f4843"],["/blog/cordova-usage-01.html","7340193f7490b0ad9d7bbe32bce74c6b"],["/blog/database-test.html","f9ca38343a49a73a5ff14e08ead7f042"],["/blog/diandongche.html","ef699192a17bd669fa9b336438a6c23a"],["/blog/digital-image-processing-hw4.html","b85ce3996f2e048b08acb5199f7549d7"],["/blog/fortune-lolcat.html","b898e576c6084fde9c38fba3ccd251ec"],["/blog/from-observable-universe-to-planck-length.html","92a35d3b313594064a132f566caa30a8"],["/blog/fsutil-hardlink-junction-and-ln.html","35130622dfa47e024365b14f8095bc22"],["/blog/geek-tech-internet-browser-to-editor.html","6ff9a16a1ffc9113ce66f95a479abd7c"],["/blog/gem5-tutorials.html","045d0c10c22884275cf5dc6196e18460"],["/blog/git-undo.html","fb1e9bad90d1d0d9114a52e78d7322ba"],["/blog/github-education-pack.html","fe6febed2f15b81a2602929e9050d31e"],["/blog/graduate.html","33d4afc900e9a2674294da0540a9bd14"],["/blog/helloseed-api.html","c00becbb7034d336eb549300280883e9"],["/blog/https-github-pages-custom-domain.html","43a0cc957de7ddfe482b29e075ddf583"],["/blog/huawei-P7-error.html","e93ebc20b3a19feb4cf9ce384db0631e"],["/blog/install-archlinux-on-USB.html","3a0ed8617726f3ced968a2ea017c0336"],["/blog/jekyll-editor-hack.html","09f58d7db6870efe49b5a933ca7ed95a"],["/blog/linux.html","094ba8ed8e192974224bf736a46225d8"],["/blog/magic-weekly-1.html","b897855fa187272bdb69f99eb96d2d39"],["/blog/malatang.html","0d1deab26a8479f131537617b58d90fc"],["/blog/markdown-extended-latex.html","2fdcd7c87eb9759f07d095f3cc624be7"],["/blog/master-interview.html","047dbb60541d3492a7fc03f50805df76"],["/blog/midnight-thought-1.html","ed714f1e4fcace9b47462728389950d2"],["/blog/midnight-thought-2.html","2ab0c5e1c4187546c369b6e610e28e9c"],["/blog/midnight-thought-3.html","89dca172aaec49eab611605257489d9b"],["/blog/midnight-thought-4.html","c28dc7424120b29fa71634688cdf6561"],["/blog/minicom-the-best.html","5606b6c2f04b67b94f14d4c36f0ecf54"],["/blog/my-desktop.html","412b86f3c063d7a217bceb4fb5c1453a"],["/blog/note-take-tools.html","b7fc9af96309a5c99735076ba545233b"],["/blog/owncloud-nextcloud-install.html","96108b4bd21ef502b11938f8a2405068"],["/blog/pass-google-pagespeed.html","df87191985f079904ae40dc87b529464"],["/blog/pep-257-docstring-conventions-zh.html","8acca389d39ec7840b856f9a936eb84a"],["/blog/python-argv-error-in-windows.html","c99f1b2f7cd925e70394991049d6cc14"],["/blog/python-skills.html","0da14e28fa239f82687b9f1d00ed7a40"],["/blog/python-special-method-names.html","9804bc9e2a50516e11aa7bf87e7f1180"],["/blog/quickstart-for-simulink.html","72cbde26f857be7efa5ac12e8e63b035"],["/blog/run-background.html","eba36605a066db81dd58d12d23ca1d5f"],["/blog/sanguosha-pudg.html","e1c96ad38e5cce203c2dc762db985f0b"],["/blog/simplest-note-develop-note.html","11e7118ce5c2e8c7f3076932eacb261b"],["/blog/simplify-the-img-upload-in-markdown.html","40197b702f32851b7967e8208405e85f"],["/blog/ss-set.html","b29c4e40d3921a6bc14b64bbc43a7f68"],["/blog/tools.html","0ec300e31c63eaa1126a09ffb3ab7c34"],["/blog/use-mklink-to-save-space-of-C.html","3f529d461a70a4af036a4ec2bf6b5b47"],["/blog/verilog.html","278080bb7f29470bdbc6693553ecca56"],["/blog/vim.html","58a5feb86fed3abfbcdbf08dd5b7af15"],["/blog/vps-choice.html","a13d69f070702919f5319e6bde2683eb"],["/blog/whats-new-in-python.html","399ebd12c65232ef60f14c302aaad5bc"],["/blog/win10-boot-repair.html","e4e4db955b79d9b6b4818262c00f8b69"],["/blog/win10-bug-about-bing.html","76f34a8c6730f4c7b7d956fd7113d89c"],["/blog/windows-linux-autostart.html","edc2445abb07fd361a3843e2da9f3d90"],["/blog/windows-or-linux.html","aa0f784684287589304ea0ee6b481060"],["/blog/windows.html","f76ad25eb37d4d5eb552d3d6355dab7e"],["/blog/xiaoshuo.html","78720181534b92a7edb567c9053cb464"],["/blog/xilinx-vivado-usage.html","2e1ed9c64c593c19cd588c7f4495375d"],["/blog/xipai.html","b54615d7c06860fc35129a589fc91d98"],["/blog/your-name.html","52ebd6dbbd5003f9b0d27dbaa27142a1"],["/blog/zedboard-1.html","bea83c83e503fa850b677ec6246b0801"],["/blog/zedboard-2.html","2e2e49847312bf34068d3c369ed13c1d"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","bedf3d73ba3f16bfeb79e7c09b0a0b42"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","fe42cd796ea08b66a1019cfd4fd86abb"],["/page2/index.html","1e55c36ac545983ec6ee9c43c307c197"],["/page3/index.html","d4093418ecbce6fcf51262d1e7907631"],["/page4/index.html","36561c08eec146c0f98b2a57255a23a4"],["/page5/index.html","cf9692c16c9b22ceef8139d80960f9c4"],["/page6/index.html","9700a7c09597a15c84733e531072bc80"],["/page7/index.html","1057c580297a387237a1dc0a7f58712b"],["/page8/index.html","7778b231877ee746b7684c238a34bf1f"],["/page9/index.html","458066f86ad554ee0bcad00646347d42"],["/tag.html","6c5bdc34cc25f2bf7aeabebeab4370a8"]];
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







