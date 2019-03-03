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

var precacheConfig = [["/404.html","14320b75de45f79e24b3c2d0794dca0e"],["/blog/7z-extract-and-zip.html","b4be3a184fcf3f1964691b1975b42b52"],["/blog/A-bug-in-python-about-import.html","70685399bf252b19aafa2ba5a7dbddaa"],["/blog/A-script-every-day-1.html","5a68eb896a9483072cca20251ee194a3"],["/blog/DOS-rename-many-txt.html","c3f567404c65861539615ce110e54dbb"],["/blog/English-punctuation-to-Chinese-punctuation.html","d799723b8a217225270e738e8e42cc9b"],["/blog/How-to-Write-a-Git-Commit-Message.html","7bc5f2af1052885edd9b9f624de79549"],["/blog/ISE-error-when-generate-hls-to-pcore.html","27d70b1e6b65e2fc1d756ae6821d3a7d"],["/blog/Interesting-APIs.html","5f14683c3ed3e276ac0f0e70a934e72f"],["/blog/Keep-Your-Commits-Atomic.html","314a0ecfebf62ddf003d1d0eeb0a4279"],["/blog/MacType-conflict.html","d005c1c034f55393cb39919da2e44575"],["/blog/Minor-CPU-model-of-gem5.html","6a656e42a74c6fe6ad8c15e925877a08"],["/blog/Python-translate-maketrans.html","7a750d0e0da5995d8a6ff5dd02cdeaa4"],["/blog/Raspberry-PI-Using.html","b9e14c63b96d694ce62c352422f27820"],["/blog/Test-My-Blog.html","af330cfd9884db5c50ebc4d154baa827"],["/blog/Xilinx-can-not-find-gpioh.html","775dd1506eadd030eb271852a19e89fd"],["/blog/android.html","70cbd917cc8b9aa484bccbceb6665573"],["/blog/anime-18-10.html","b9eaf0b2a9bc77c2c99179152dcaf940"],["/blog/anime-19-01.html","6daf830593af0c6033215fcc13deb4cb"],["/blog/anime-2016-10.html","14e41c4a3e8a0035bab21f64ce40681e"],["/blog/anime-2017-1.html","ba6191154bbd313203a38c6a9e5075f0"],["/blog/anime-2017-10.html","8809e0de43c512dc481c6fd9f76760e7"],["/blog/anime-2017-4.html","6d783dafd55cf08a5c523edcb015090c"],["/blog/anime-2017-7.html","849df07ea5050f26631fd4a24817bfca"],["/blog/anime-2018-01.html","d087f8bc1a172cafd0384a51099a481d"],["/blog/anime-2018-7.html","241ffdd7a5a9da296655066673ffe175"],["/blog/anime-list.html","c1b85579ef4ed8dd4cfa99f545cff77b"],["/blog/archlinux-gui.html","47a371d948389e96a8955b6ccb308702"],["/blog/archlinux-install.html","720e907dfedcf512b4efde5ee2c38b86"],["/blog/bat-command-line-parametric.html","3b07f61b4c110f0e58f2365d51e7ead8"],["/blog/bat-file-argv.html","3a7660d60b09817595cddd90c719e2ff"],["/blog/bing-to-qqpinyin.html","83cce63aaf495602f57ef875b8856a12"],["/blog/blog-categries-change.html","f618c304dcea7178fe964a92e361c38e"],["/blog/blog-update.html","319eb6d1ab0c9e8a7fe2808960b2fa8b"],["/blog/bookmark.html","0b5c5da1d7f33ee03d08f77c12991f4f"],["/blog/bufanjilu.html","cdae32a9b758a46908ae6204e6590580"],["/blog/byr-spider.html","0c7bb57c9c5e932e737cc35aae8a0d20"],["/blog/c-standard-library-learn-1.html","e1f78991b4c499e9a8aa940005b468c2"],["/blog/chinese-hacker.html","14a38e38975beefef67a6e0e620ca087"],["/blog/choulaobie.html","22843ab0cf6e19d8a185700908e0694e"],["/blog/chuanyuelishi.html","7c1176cba66b49a303523b099748377b"],["/blog/database-test.html","70cd6b57e70befb1e9190274a163a5fe"],["/blog/diandongche.html","ec4dbff4772d06ea7e4277a2f57c8aa6"],["/blog/digital-image-processing-hw4.html","7ee078d7fb643351590e9e9da75c7d23"],["/blog/fortune-lolcat.html","1fb1a406bb08db32627fa32ca3bc6da6"],["/blog/from-observable-universe-to-planck-length.html","72753e45f7bdd15283b7621b97ed42ad"],["/blog/fsutil-hardlink-junction-and-ln.html","42c888dcb853109eac38be29b3d29af4"],["/blog/geek-tech-internet-browser-to-editor.html","f74a8a20200cea5ab43fe7855d8298ca"],["/blog/gem5-tutorials.html","bbff8b32b12df99c1cdfc5536267387a"],["/blog/git-undo.html","b370a7e7b344425755de8cb570d5bc56"],["/blog/github-education-pack.html","f68deee8442f605d188d5c796ed35f95"],["/blog/graduate.html","56abe3d10fed99a4e685e01b02612029"],["/blog/helloseed-api.html","885b7400cfc0974637ce8c0a016831d7"],["/blog/https-github-pages-custom-domain.html","16e9c8b372290025a0ebdf37198ae9d0"],["/blog/huawei-P7-error.html","a1d87759276fd1a42e8720b3d210b283"],["/blog/install-archlinux-on-USB.html","888794cd809db5dac0d1abeb6a41ea7d"],["/blog/jekyll-editor-hack.html","231c90a323fb44db50add9d624790cc5"],["/blog/linux.html","95eac618d344aaa6b0dbc3462eb50c8c"],["/blog/magic-weekly-1.html","ed3360098cb5633f113f557ade46fc2f"],["/blog/malatang.html","422c0bbb375c9724f23337e056b7b4cb"],["/blog/markdown-extended-latex.html","5114d9004770383de6e9799a6fc39813"],["/blog/master-interview.html","cf6a32151d455e622f56ee5ce069d6ad"],["/blog/midnight-thought-1.html","bc5b679c5f97c9c89f4ca1ec5303e9c3"],["/blog/midnight-thought-2.html","d2a4a8d7fe66c84faf2b29ff6ee203af"],["/blog/midnight-thought-3.html","8f391bee7d2b8a055cb6d951713cbf44"],["/blog/midnight-thought-4.html","41a4fd1ada37361042b5fe2eb48e20ef"],["/blog/minicom-the-best.html","c2c2c1236e7ba35df9ded239204d2a67"],["/blog/my-desktop.html","0d31a0da126d75477f96bf5b4a8763bf"],["/blog/note-take-tools.html","c3ae71f2d435cb8a55709853f8cd8eb7"],["/blog/owncloud-nextcloud-install.html","a81e15f2de2c2d8f6feeda2f26ba6366"],["/blog/pass-google-pagespeed.html","08c5b5afd819279ba151bb6074507864"],["/blog/pep-257-docstring-conventions-zh.html","41e2a880eb3ca289a93cf05e80e164f2"],["/blog/python-argv-error-in-windows.html","a30cec420b3b0248c24fda528be9d3c7"],["/blog/python-skills.html","05824d383dc8385b93c590bc642849a0"],["/blog/python-special-method-names.html","92c3514c83c98229216c86e72b763e63"],["/blog/quickstart-for-simulink.html","c5eeeea8085ac5e9a5099e974ae5189f"],["/blog/run-background.html","9068477b71d432f1287176f1625a4504"],["/blog/sanguosha-pudg.html","e94494aec3e05a85670a595a7f43222d"],["/blog/simplest-note-develop-note.html","faddc5b3e8f52bb2a4636b13a2b95300"],["/blog/simplify-the-img-upload-in-markdown.html","0d917121175999a5a923d0dfebe451d3"],["/blog/ss-set.html","c14f7c80c8c36d6baee08fbc7fe645df"],["/blog/tools.html","cab397d8d02f30a0a91cf635bc3c0a0e"],["/blog/use-mklink-to-save-space-of-C.html","863c4639c0d6c50048e12687eb6a8cfc"],["/blog/verilog.html","cf17623586fed75254621e98c207ac06"],["/blog/vim.html","2ff29754cc9a301ed84fd12d41bb816f"],["/blog/vps-choice.html","32d0f0b5f2ebe23b8f3845ca8bb7784d"],["/blog/whats-new-in-python.html","387d5f404a151d7ad9df3a0c54a78a8b"],["/blog/win10-boot-repair.html","cfb4942276c03f86d4875ebcf18263e5"],["/blog/win10-bug-about-bing.html","7bc654ad7399cf7f718d1837dea05bee"],["/blog/windows-linux-autostart.html","566272fb16135f264eecf5046efaf78e"],["/blog/windows-or-linux.html","5e443db3e9d10e6658dc6c36030a76d4"],["/blog/windows.html","ce130c4bb866f2b25f7ffd12f11cfff3"],["/blog/xiaoshuo.html","e03160e0b10f1f9e15abe1cbf5fe3a16"],["/blog/xilinx-vivado-usage.html","0d603a3f907f2c39a444e02b36d8df7f"],["/blog/xipai.html","e16dabfb150b096a518d51f5227ae87b"],["/blog/your-name.html","edff90371e9976ac20937ec7a035d0a2"],["/blog/zedboard-1.html","c8a9d104e57113aca703b71f5fd57b0c"],["/blog/zedboard-2.html","78a82d43c10e9e4abda802352ad89164"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","796eb50053e1088bb7f604a0f3a3e6da"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","ae24f395d3c25d16da369e3e391a099d"],["/page2/index.html","567e3ff9082124e48b58a62f5a20d471"],["/page3/index.html","b58cafbfe7446500c2cf196ad4003c00"],["/page4/index.html","da20a250a68b29d5c4fdb5c94267806c"],["/page5/index.html","2343026aa9ed70ca702943ef4a23ea03"],["/page6/index.html","67faa08ed48cfbc9670dfcd024cb6397"],["/page7/index.html","172139388d668af62ab45b7d237251e3"],["/page8/index.html","2eef815bfb0e3369a3d3a3bd12d6b5d1"],["/page9/index.html","3b8f229aa8e80a61158d6544689c7aef"],["/tag.html","d30b5e978dd8329fa48e1a6e21284221"]];
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







