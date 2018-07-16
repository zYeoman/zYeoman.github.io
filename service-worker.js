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

var precacheConfig = [["/404.html","9b885509e5ede30cec152e08cca2c4a4"],["/blog/7z-extract-and-zip.html","059b639600f9915f0de2bc3925a88ef3"],["/blog/A-bug-in-python-about-import.html","bffb3dd488d7d9c6d00ba18e271a9ad9"],["/blog/A-script-every-day-1.html","5618191dce2afff38978806095d081cd"],["/blog/DOS-rename-many-txt.html","fb9aeea2a1764228655fe75db93c9c8b"],["/blog/English-punctuation-to-Chinese-punctuation.html","05628905f82620f3e98fdb27286712ec"],["/blog/How-to-Write-a-Git-Commit-Message.html","a0b47cf0448485b8794b1d92d0f2e5d7"],["/blog/ISE-error-when-generate-hls-to-pcore.html","454eb9f8afa4713fc529a511094a2f17"],["/blog/Interesting-APIs.html","92d1acb0906b3683d9a33073e4a4516c"],["/blog/Keep-Your-Commits-Atomic.html","9ef778ed00f44d6754412e7ef367d072"],["/blog/MacType-conflict.html","9654e545b1a0de55c312cd7c55e95361"],["/blog/Minor-CPU-model-of-gem5.html","16d25f1854c81eb4c3ea247e34fade1f"],["/blog/Python-translate-maketrans.html","5b56505168cc30230bfde547cacc872a"],["/blog/Raspberry-PI-Using.html","395fe8898913c429967d9b7443fa0eb9"],["/blog/Test-My-Blog.html","0a4f0390c8830f92c447a4761ea7c637"],["/blog/Xilinx-can-not-find-gpioh.html","205008649061aaba1209495882a2579a"],["/blog/android.html","4249f9fbb0569d120fb28035888eb23d"],["/blog/anime-2016-10.html","c2045f20247560ea33c466a77658cf7a"],["/blog/anime-2017-1.html","3e6161b6dac699d52d401116ad9c1b23"],["/blog/anime-2017-10.html","3cb2b9fb345287bee256edb41062490b"],["/blog/anime-2017-4.html","1948a2ace5f4753dc60c207f6b92501e"],["/blog/anime-2017-7.html","c245840a172701caa44f56c5623ffc8a"],["/blog/anime-2018-01.html","d56fd8670fa5d692de1ff86c04deefee"],["/blog/anime-2018-7.html","e988f669a5b7c19398f402bfaf85f8c8"],["/blog/anime-list.html","d248890f9ae7ea26780115ec69773b71"],["/blog/archlinux-gui.html","9dae4810a7712d48cef0cf20fe18dc0f"],["/blog/archlinux-install.html","4b14c01066b5d3e5675a6c9335f3ac48"],["/blog/bat-command-line-parametric.html","56e90f036134747ebc472dab673006e2"],["/blog/bat-file-argv.html","d53cb1bd15340e5d69114c20d3b2775d"],["/blog/bing-to-qqpinyin.html","10cfab5ad2a385876afb5ba65b3ebfd2"],["/blog/blog-categries-change.html","372d7b4ab40654aa6e2e634e2c3ff37b"],["/blog/bookmark.html","fd4bc4e61caa06c7d358b8b578226d08"],["/blog/bufanjilu.html","4a9ac098050967d09954603beed8fcaa"],["/blog/byr-spider.html","de491652b46de734e8c745b8eff8b8df"],["/blog/c-standard-library-learn-1.html","25e74fbf973bf498d8466b527fb44ff6"],["/blog/chinese-hacker.html","c531cfe185c5d7f49926e638d66c9cc2"],["/blog/choulaobie.html","04e630aec02aaf130261dbdd898b6441"],["/blog/chuanyuelishi.html","d0f6206a4998590f27dfcf47e9bf0862"],["/blog/database-test.html","75ab3f5b50d32d2ef70f970f2a61346e"],["/blog/diandongche.html","8d983f6d82083e1aa14a079d40322911"],["/blog/digital-image-processing-hw4.html","d0a0fb529007e0b418794764b34b8095"],["/blog/fortune-lolcat.html","a6ca297a3d2741a34ead403f11f4cab9"],["/blog/from-observable-universe-to-planck-length.html","c0717a9ae7ff3b974fee6e9bdcb5eaaf"],["/blog/fsutil-hardlink-junction-and-ln.html","03b87082f2f43f33c6761d87cdd03aca"],["/blog/geek-tech-internet-browser-to-editor.html","ef69d50592b68531681b624f6623b076"],["/blog/gem5-tutorials.html","f8d69635ecf557eebaa5bd7f365f1dad"],["/blog/git-undo.html","92fd8999fc45e121c59745cd52761e1a"],["/blog/github-education-pack.html","498bf8b2fae3980197870e8db5ba4848"],["/blog/graduate.html","5a3b2c09e9073ea62b232887e0b8e398"],["/blog/helloseed-api.html","311f803b216705f1a310aaefbeb98371"],["/blog/https-github-pages-custom-domain.html","c4443e3d4582f12b49949e0af5d52ccc"],["/blog/huawei-P7-error.html","780c39b1e42e776396ef9ea4c9694ab1"],["/blog/jekyll-editor-hack.html","6d1e199fce7fb13303933c1364035b05"],["/blog/linux.html","5709a15e5aed0c2676891cc379cf254f"],["/blog/magic-weekly-1.html","e288a2e20bb82106c8b86910f5b7bb84"],["/blog/magic-weekly-2.html","20b5f0d1f05e78e65068c8b106a5f031"],["/blog/magic-weekly-3.html","a24316e92a82d76dab63c0abb407f0de"],["/blog/magic-weekly-4.html","f882f50116ef809a2b77c4236feea59b"],["/blog/magic-weekly-5.html","249da29da90e6ed0349687f1025a9b96"],["/blog/magic-weekly-6.html","c7e8fe2ac58ca06a2912356e41708883"],["/blog/malatang.html","f07e2cba5ae78cdad9bed57ef36c5528"],["/blog/markdown-extended-latex.html","a47c44a08f866c891ba1a1a81bff1e3c"],["/blog/master-interview.html","11261ae3bc3218559cf799556125acb0"],["/blog/midnight-thought-1.html","f87cf8b62773ff4c2165fa9f5c17d896"],["/blog/midnight-thought-2.html","5365176fc12e2426a68663e752abfaf7"],["/blog/midnight-thought-3.html","f764bce1566852abf346ab66e3eb43f9"],["/blog/midnight-thought-4.html","f242787834337e6b17ece521ec1c2f6b"],["/blog/minicom-the-best.html","5795b13c77ef7fa007faec6c34255851"],["/blog/my-desktop.html","923714b3e1089d7934e4466185eab16c"],["/blog/note-take-tools.html","b3ee0f06ad0381d70d6d55913d70e212"],["/blog/owncloud-nextcloud-install.html","9ae7d8fb02e529cc2ab9c7cfa99e13c8"],["/blog/pass-google-pagespeed.html","ef8776588467e068f657e1bde8e9abf8"],["/blog/pep-257-docstring-conventions-zh.html","cfc08ba4b1d6fdd8f4b05f75a0d872a8"],["/blog/python-argv-error-in-windows.html","f74b6184678ed14758abdcc54268ec8f"],["/blog/python-skills.html","1bbdd7cc2c6c87dba733e77f27a548ad"],["/blog/python-special-method-names.html","bbb445d94ae9bc309e20b199de1af51a"],["/blog/quickstart-for-simulink.html","1787d00889346f5e233209d379dc4b6b"],["/blog/run-background.html","99ace81b85d759ccba669dffefbc364f"],["/blog/sanguosha-pudg.html","275373aa771f6bf8354954fa1fba7f36"],["/blog/simplest-note-develop-note.html","2ffcda675859349f671a4fba7bc244f7"],["/blog/simplify-the-img-upload-in-markdown.html","83ae27a867104d7b9f404cd68984d84b"],["/blog/ss-set.html","09ffa6b1bae0d2c881f3758d5b2fbf39"],["/blog/tools.html","0ca20354199093d6e48f5a6418f9ff89"],["/blog/use-mklink-to-save-space-of-C.html","343b6501026f51d2074ec8201e7fbe75"],["/blog/vim.html","183a20b6c32f5ab414ec266f3f7a2851"],["/blog/whats-new-in-python.html","9a9f3f5f19f3eb23c741fafdae97dc5b"],["/blog/win10-bug-about-bing.html","9fe556748007451f5a251c118d2d6e36"],["/blog/windows-linux-autostart.html","169be42a110ce1b7712cb4bcca833e38"],["/blog/windows-or-linux.html","343e90dbd9d02fc8051ca68160e2a606"],["/blog/windows.html","1136b5f6bed92ef0cf349fdd9ab93561"],["/blog/xiaoshuo.html","1589beaa14ced823a4c44eadb3204ecb"],["/blog/xilinx-vivado-usage.html","453c33cd5a0053d2f43c3e81356695c4"],["/blog/xipai.html","a85f10d5b2203a986bc0cc13c94275e0"],["/blog/your-name.html","5b634db457cda3e14e259fe75f182db7"],["/blog/zedboard-1.html","9907c3a0d452403a2e304eb8ddba7ef1"],["/blog/zedboard-2.html","f24ebe46087ea6e83d34e45e791abf75"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","aa5f616f80b5401af065d0478fd46bad"],["/manifest.json","ad71d3ed8d2e394ac9fac73be1e9cd48"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","2a7e57252f95207612a12c5a33c735c2"],["/page2/index.html","b14fff781e2031278470ef3f166b88a0"],["/page3/index.html","182878596fb5ba0a9c7625404636318c"],["/page4/index.html","d009bd4b9513a85970985dd8c2d2ee89"],["/page5/index.html","db0c53cbfea26275192b906196694541"],["/page6/index.html","83d05611949630be26a2f9ba6435468a"],["/page7/index.html","6ed4ba5dce72f60e4cb0d0496a2395c9"],["/page8/index.html","2da0597aebb0c6a7f14e560c8473418b"],["/page9/index.html","a227ae2666111c9ecc943588e09bc319"],["/tag.html","827f496f2ef6cca1ec9f451d166f704c"]];
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







