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

var precacheConfig = [["/404.html","6226f90305e7a9475beed1487ab3c729"],["/blog/7z-extract-and-zip.html","722ed57bd22492dc49135d0f621870f5"],["/blog/A-bug-in-python-about-import.html","3e96d38d7903dcd32c849883819d1fad"],["/blog/A-script-every-day-1.html","7795eda469d6ac0e81911b77157ebccd"],["/blog/DOS-rename-many-txt.html","717b4dce7f434d425ff28b16fe4aa938"],["/blog/English-punctuation-to-Chinese-punctuation.html","75ca865e70db3a1987f229ae2ac1c989"],["/blog/How-to-Write-a-Git-Commit-Message.html","936125f2a1c0a698ee636fae08657477"],["/blog/ISE-error-when-generate-hls-to-pcore.html","a5464feb1bc713189bd657bc1fa7f028"],["/blog/Interesting-APIs.html","08f6b6df0f93878f6fe5401e66bb4ce1"],["/blog/Keep-Your-Commits-Atomic.html","89a5bc418c0413ed4f468761ce09e3f4"],["/blog/MacType-conflict.html","b8cf3fc715e5b799492c7927929d1e5a"],["/blog/Minor-CPU-model-of-gem5.html","38a0c78b1f79953035a3a93f48ca4de3"],["/blog/Python-translate-maketrans.html","a4a8c755d217b1258637791dab583d51"],["/blog/Raspberry-PI-Using.html","791c4555738781f4d62f05bbc32d28a8"],["/blog/Test-My-Blog.html","f108bcb0c08553fa5d114cb9814b3b0d"],["/blog/Xilinx-can-not-find-gpioh.html","c1b39b623b6cb3f0543a1c717e7b30f7"],["/blog/android.html","3cfd7c7f84176f35182611f802fcf455"],["/blog/anime-18-10.html","104abeb8c4d29829a7e0b49821900f44"],["/blog/anime-2016-10.html","273639f5bddb06d5942dc8973e43729e"],["/blog/anime-2017-1.html","af9e94afb9ebc934736671c173f13845"],["/blog/anime-2017-10.html","411fafe9fd628b8fe263176ab9e4e774"],["/blog/anime-2017-4.html","3b5f719b2745fe4a60dcf7aff71b3076"],["/blog/anime-2017-7.html","94a2899651d6b782dfb7c52dea63a1b1"],["/blog/anime-2018-01.html","a4fc460e2d5f68b97f7af586e16af00a"],["/blog/anime-2018-7.html","05c4a1516219d35fcbf89d73138201fc"],["/blog/anime-list.html","0b207322c43f4311a25f748b5c268d9d"],["/blog/archlinux-gui.html","a4f7c14749b3c7e99fafdb287631c4ca"],["/blog/archlinux-install.html","363facfa3a83d553dca2359b232caa1e"],["/blog/bat-command-line-parametric.html","3b370520c39bc4fed86206f691711cf6"],["/blog/bat-file-argv.html","a781a11320698a9bd5d6a94ffafb32a0"],["/blog/bing-to-qqpinyin.html","c8585bb85f7257e80d3cc4815f61ce76"],["/blog/blog-categries-change.html","c1644006b848cb78333a36d7e91163c2"],["/blog/blog-update.html","b314d47ec8f45683b9acbbcba1b9fdb5"],["/blog/bookmark.html","b316f7839f26860946d45cf1923be048"],["/blog/bufanjilu.html","11e619a5fadb43821ca5c9b9fcf6dff7"],["/blog/byr-spider.html","39bc1c3f087117a1275e9de532f46b22"],["/blog/c-standard-library-learn-1.html","038d09ef648f89d1e6bf31793a95a125"],["/blog/chinese-hacker.html","9a486349ef53255ada6a81f04d16968c"],["/blog/choulaobie.html","ad0c77602ed5895e62bb5fe04840aeaa"],["/blog/chuanyuelishi.html","3fc7700d4683a156ea51fb233f5bf275"],["/blog/database-test.html","0d917913402c270d8d566a1f040afffa"],["/blog/diandongche.html","2e107ae287bf170770037b5742472128"],["/blog/digital-image-processing-hw4.html","48a9d994dcbc412130cee63302428b8f"],["/blog/fortune-lolcat.html","f49f3e3f9d50a914f74dc91c3293b4c5"],["/blog/from-observable-universe-to-planck-length.html","301ebe854f683a176128df29a91d4041"],["/blog/fsutil-hardlink-junction-and-ln.html","11c31984f3b9210149756c519f0a879f"],["/blog/geek-tech-internet-browser-to-editor.html","bb1ff5c362a8688923c80b165f3d73f6"],["/blog/gem5-tutorials.html","0e964f03abe611eb895158f5cdc805d9"],["/blog/git-undo.html","33c7e0e04517e67cae0d34ae44b37cee"],["/blog/github-education-pack.html","1c18f6c1f2774ee37bbd024e0d562125"],["/blog/graduate.html","b041303f89cdca11bf74ff3302d1d67c"],["/blog/helloseed-api.html","ecd64d86c37ed92dfebdd60b3254485c"],["/blog/https-github-pages-custom-domain.html","117993b3b961ab92a9d2b99ce53c510c"],["/blog/huawei-P7-error.html","9804ea384490af73c8cf8c4a690c181a"],["/blog/install-archlinux-on-USB.html","82d87f444e06895bad07271b3010b76e"],["/blog/jekyll-editor-hack.html","b7e3d41b06c1359970a21e767bdd12e6"],["/blog/linux.html","12ecd0abd4c1e6eeacef432d7189c19e"],["/blog/magic-weekly-1.html","86d7f548e6e268a97f7f2359d88e146b"],["/blog/magic-weekly-2.html","b7014da9e00675df58f6f653b2ea0511"],["/blog/magic-weekly-3.html","d3514089f7fcd207e847bbe67eb01e98"],["/blog/magic-weekly-4.html","6418f8b254635d2f7758d6cea99d2c38"],["/blog/magic-weekly-5.html","b2eb55aecafc0fe09a2d3fd4f1d7448d"],["/blog/magic-weekly-6.html","6d239b1ac510eb24cdd22e346ee61150"],["/blog/malatang.html","5938e7f3817f58e1334d94d2892c4fa4"],["/blog/markdown-extended-latex.html","c8e9eb04ad44daef8db097b93fb7f390"],["/blog/master-interview.html","7eabb116286f5d714fae5f301c281cac"],["/blog/midnight-thought-1.html","0e6f3b4ec4d3bf54e0ae0e4fc6f45808"],["/blog/midnight-thought-2.html","3bd42e8bab7947367c48ca288b4fc937"],["/blog/midnight-thought-3.html","93af7feb25b3b37405f79a150678d32b"],["/blog/midnight-thought-4.html","43f7b8602988572a2ac6ead30cd5ce09"],["/blog/minicom-the-best.html","1e8a6db7083642c5b36853e7ba7371b3"],["/blog/my-desktop.html","22a69403b9e49c1c9afe607fc3de0862"],["/blog/note-take-tools.html","84a1f4e8042b4f05e073cf278a5ceacf"],["/blog/owncloud-nextcloud-install.html","1148e457ff62e32f4ddca9ee5c1523fc"],["/blog/pass-google-pagespeed.html","728f614ab1fca21a13613119caa370f9"],["/blog/pep-257-docstring-conventions-zh.html","0949dadbe80e0c451ca4db80665489bc"],["/blog/python-argv-error-in-windows.html","a3ff5fb4705024ac00c61bca2cc0193d"],["/blog/python-skills.html","f9e9a0c15e6bbdd637aa287412dd7d31"],["/blog/python-special-method-names.html","5803cd086b22a2a43e0d4f21754251f0"],["/blog/quickstart-for-simulink.html","f6615b35aef942cc070199e300fa1458"],["/blog/run-background.html","d0b5eff38cf0812e17ddcbc176b14244"],["/blog/sanguosha-pudg.html","9f4e848f125c1573d43fa0ae05702a11"],["/blog/simplest-note-develop-note.html","c9a5c4ea2d489fcdbb9f60ce99191033"],["/blog/simplify-the-img-upload-in-markdown.html","bf821da70b145ca700f744d7dbefda47"],["/blog/ss-set.html","14a88e7e66b20d7517678e2538ac8ff9"],["/blog/tools.html","edbd278be763f39b460aac26c0b29a4f"],["/blog/use-mklink-to-save-space-of-C.html","86d47836af647ac920c5c567566f4d6c"],["/blog/vim.html","d477a238da7d6b3176e2a467d7b6defe"],["/blog/vps-choice.html","53162062281d5ec32ef4e205d9f70062"],["/blog/whats-new-in-python.html","47dd0241d383cd3582a078ba51a176bb"],["/blog/win10-bug-about-bing.html","d9069b6385daddd92bd78cdd8fa7980b"],["/blog/windows-linux-autostart.html","27cb04aaf070ec6a6746784672c7bc53"],["/blog/windows-or-linux.html","2f2285ead7e736d92a41c75a7173ce96"],["/blog/windows.html","fee09ae7c588ecfb7b700aa7388e9daf"],["/blog/xiaoshuo.html","d9d82c8333ff847fee76c8e8d6be820e"],["/blog/xilinx-vivado-usage.html","1f217dd7e490d993f964e1a639b7c817"],["/blog/xipai.html","32d94b080bdb4dcc7035543caac8aec1"],["/blog/your-name.html","1ab2cf0c106006eef7a84e51ee72f345"],["/blog/zedboard-1.html","238a391178b46578f18b0df69c352015"],["/blog/zedboard-2.html","97aea5d37dccb48c4696d1d4640bfe8e"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","5c973ee0722b5a700e4bba618c24dc31"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","454d4d2d9ff2c95d56853275066f573e"],["/page2/index.html","800700dd98431454456c284a0f123d1d"],["/page3/index.html","50178388e6412b386ab85a4a6cec167f"],["/page4/index.html","7d24c278b4e4e105dbf822cd04a79e73"],["/page5/index.html","684b6e76ce554bcd0c9770a1b68f6355"],["/page6/index.html","99702b9f57c6434e175dbafa98ae69e3"],["/page7/index.html","5c87a3e341df54320300971992e2b21e"],["/page8/index.html","50ac28a5a69b0ea0274d8e416d916d8d"],["/page9/index.html","54b0e1908840bb3ede0c1b1f4f305cc9"],["/tag.html","735dcc208e445cc14b8c392fbf0214f0"]];
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







