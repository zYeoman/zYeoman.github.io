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

var precacheConfig = [["/404.html","408ac07f899d1a07f06bbe2fc3b49278"],["/blog/7z-extract-and-zip.html","ef8d55867a9e051d72fb11a488d82f39"],["/blog/A-bug-in-python-about-import.html","862de1da486a83947c72e63c5d9f6a69"],["/blog/A-script-every-day-1.html","9607a50d30879265db3a845abc641176"],["/blog/DOS-rename-many-txt.html","672e8ee6da82daee3dacab922f01871c"],["/blog/English-punctuation-to-Chinese-punctuation.html","25c8d2032969e88c8ef0d40df2106567"],["/blog/How-to-Write-a-Git-Commit-Message.html","5b2beba8ecd62f8e1a13774ad4c9e5d6"],["/blog/ISE-error-when-generate-hls-to-pcore.html","64c0c3dee2cb6928c94e8560025a9972"],["/blog/Interesting-APIs.html","521b17572ffea22effc2e3449f0b3157"],["/blog/Keep-Your-Commits-Atomic.html","dceb6e2ed3e6187a6d6a595fa68827cb"],["/blog/MacType-conflict.html","2ec67749a327d523911d3abe9e2a1286"],["/blog/Minor-CPU-model-of-gem5.html","a5c37e16c2790dc7111b0e76ef5c3539"],["/blog/Python-translate-maketrans.html","342df3c09ed7f96b566fbf9bac134284"],["/blog/Raspberry-PI-Using.html","fe8c11bd812609fe8e93fd096cec8d64"],["/blog/Test-My-Blog.html","1462f3454bc63913fa85dbea1483c97f"],["/blog/Xilinx-can-not-find-gpioh.html","eb043cfa9868a4aa54243a35dcb3ff0d"],["/blog/android.html","fa1cc6fe9b698062f00c781f96c0016c"],["/blog/anime-2016-10.html","27048261677a3791882f3b05177ddc91"],["/blog/anime-2017-1.html","a55bfb92873a8d1ff9df9b89b990f054"],["/blog/anime-2017-10.html","aa53e58e5f218d2a9b10a9d6d127f9d5"],["/blog/anime-2017-4.html","971f249969d92026174ce2bffa83c5e5"],["/blog/anime-2017-7.html","5d1ee07e6f8cae9f8d67bfc75f7ffb97"],["/blog/anime-2018-01.html","538d63608720cc51958a78e69954ea8c"],["/blog/anime-2018-7.html","dd1a81b7406b1d2fa59e798cf9f65929"],["/blog/anime-list.html","b05632f8dcba3ba5c30855dbf155871c"],["/blog/archlinux-gui.html","1e710b8f29d870499c8999aac8017db6"],["/blog/archlinux-install.html","0218bc505692d33128dc5d0f75630aaa"],["/blog/bat-command-line-parametric.html","f2aaa7b889ce94bca20996668e50154a"],["/blog/bat-file-argv.html","4c1208252fa5f15139bece7bcf956d3e"],["/blog/bing-to-qqpinyin.html","33a147a4242a5f4d0240b9f42a01fb50"],["/blog/blog-categries-change.html","7c56f68d671056d505efb3f1f2408cb9"],["/blog/blog-update.html","dc09187a3736ee765e900594697a6c83"],["/blog/bookmark.html","8c77ff25d4f723152e8992734dc29d7c"],["/blog/bufanjilu.html","e2b533fe65b48b771e25d5a1e30e25bc"],["/blog/byr-spider.html","bc8d7d792a3f72afbdf28df78e605dbd"],["/blog/c-standard-library-learn-1.html","92047c9956855257cf09c4cef21661e9"],["/blog/chinese-hacker.html","e56cba589a3940197db2ade3f60d4406"],["/blog/choulaobie.html","9e8eec1aa710919a5b6368568cf2f3f6"],["/blog/chuanyuelishi.html","943fbb59b4bedd779e1104b4bb892992"],["/blog/database-test.html","dfcc805f8483263d28b808496a7f65d5"],["/blog/diandongche.html","6ac771f9630743d4887af989481edca1"],["/blog/digital-image-processing-hw4.html","8084726d93eea9b31bbc9a00df947aa5"],["/blog/fortune-lolcat.html","be60d213421409566c8bd53154cee4bc"],["/blog/from-observable-universe-to-planck-length.html","f26c7de77dc086ec3c090bddae188c05"],["/blog/fsutil-hardlink-junction-and-ln.html","2fcb73bba939b5a2a06c3255458579c0"],["/blog/geek-tech-internet-browser-to-editor.html","df7ea722d6e84e470e692d1f75dc351c"],["/blog/gem5-tutorials.html","5a552750d10c28dc83286223dce21e44"],["/blog/git-undo.html","09af0830dc0f94266b4d2ac8072c6a7e"],["/blog/github-education-pack.html","2467dc96644112716937d22d3426ea63"],["/blog/graduate.html","27acf95427a8b81d2f58875763670e14"],["/blog/helloseed-api.html","618ee22fd2d7d36a06bd43e5e4cf79e1"],["/blog/https-github-pages-custom-domain.html","9153513e9be1dd18dc622b08fc30d094"],["/blog/huawei-P7-error.html","99318f924c3ffe657fcc1f9584e040e1"],["/blog/jekyll-editor-hack.html","4b2d20146f602b9e6e23419267223389"],["/blog/linux.html","0cb1ade02ec75b058b2a161aebae435f"],["/blog/magic-weekly-1.html","db5b8c711f79c877cce35ec31d5863b4"],["/blog/magic-weekly-2.html","06140f9d670e83f29b64ddb6574645e4"],["/blog/magic-weekly-3.html","f635005a07854f6ee2d02b8c07200c6a"],["/blog/magic-weekly-4.html","62c25a8f8cbeb095c6e1873acb070167"],["/blog/magic-weekly-5.html","13811d081524ff95226c8c50ede5557f"],["/blog/magic-weekly-6.html","e7d78e9d78995a78ced6d27211ad44f0"],["/blog/malatang.html","d761e016f50766f417dcb782e48d3e78"],["/blog/markdown-extended-latex.html","82926d7ceab5611d58a45134167f3bdf"],["/blog/master-interview.html","481b31d750cc3ae82716118c7848c604"],["/blog/midnight-thought-1.html","c78b04e7e67f7e6be71bea99e390985d"],["/blog/midnight-thought-2.html","00f061e41a8fde9770bf21cc341fc1fb"],["/blog/midnight-thought-3.html","435bee6fec70e78e9e50e84ced40b936"],["/blog/midnight-thought-4.html","13ecd1113a177e6a39d44a25ade89dba"],["/blog/minicom-the-best.html","b0d2270d1ac9c4d9b3734a379f9a2f32"],["/blog/my-desktop.html","3d5bdc713dd0bda2d7e73cd0d031838b"],["/blog/note-take-tools.html","88236f8485f493d50c9bfaa4650f363e"],["/blog/owncloud-nextcloud-install.html","c40655d262505fc11a25eacf9cf02f25"],["/blog/pass-google-pagespeed.html","182ddeb1f35a242bb0cffc79d4753e6c"],["/blog/pep-257-docstring-conventions-zh.html","6aef4153a0f273b519b32473b00b938a"],["/blog/python-argv-error-in-windows.html","0953651d20bb5972f1c5d3e6e79f8f74"],["/blog/python-skills.html","0f4fae1f6968fd9896354560ba914375"],["/blog/python-special-method-names.html","89dd1dfc33050a4911aebfcc22d89160"],["/blog/quickstart-for-simulink.html","b04445d975dec66b775dfa412c685cdb"],["/blog/run-background.html","cdbe8cd652a4f7d6cf779b8a1f274c71"],["/blog/sanguosha-pudg.html","c3f006f756c019ada728fe1e25426f3a"],["/blog/simplest-note-develop-note.html","cea3017da771bef047f81c0f75a685c6"],["/blog/simplify-the-img-upload-in-markdown.html","5426c5ca0ffbb1d86767c1d7c2fc6f8e"],["/blog/ss-set.html","8dfd3d809fa3ad36c7a10043208a520a"],["/blog/tools.html","cae49eb3380855474ad0b0f0b16aa918"],["/blog/use-mklink-to-save-space-of-C.html","46def30ea95a48ce9339100fe7da53c1"],["/blog/vim.html","3d46653f8fefb36c6415d62800ed7753"],["/blog/whats-new-in-python.html","4597178da13a11ac00b2885ea41d1049"],["/blog/win10-bug-about-bing.html","6b03c9bb151a1071fd40881e3862c2be"],["/blog/windows-linux-autostart.html","c084395dd5c3170c283dbe247a7f5791"],["/blog/windows-or-linux.html","19bc581e6a6c621f3e5eaab66d87e1c1"],["/blog/windows.html","e4a6d0e3eed75ef6bf92754214eb2001"],["/blog/xiaoshuo.html","48126e2d99a9bbd4595970b61d0055dc"],["/blog/xilinx-vivado-usage.html","3ac949fdb155a8f03b574579e0593941"],["/blog/xipai.html","d2b1c94b582d5a42f21e0872178aa6d2"],["/blog/your-name.html","d9e42a293dc26fcfc308a150b082f114"],["/blog/zedboard-1.html","c1464350a6109d08a5991cd715cd05a6"],["/blog/zedboard-2.html","408aaac557989efd45f41dbd75d62031"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","3d18fa54132c4045a4539d43fcfd2659"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","046d3deb568abba755274dd8b4271369"],["/page2/index.html","21806601e6c7a2964394b5b2e6abdfc3"],["/page3/index.html","d6924118c5ad3efc4f1234a7a643a310"],["/page4/index.html","4376d4d07f749c4de771ae483ed575c9"],["/page5/index.html","8cb61b3c8e49134de69f38916a16900c"],["/page6/index.html","a097f1fd58733c336a533d1c176eeac8"],["/page7/index.html","198cd2c386ab5cb87abe35047df5d920"],["/page8/index.html","7964fff7a51a8703eed2ccc8ef59cc34"],["/page9/index.html","b6f76e2db0b8a7fca9809e354412beb3"],["/tag.html","9b94842752f7e05506a1b2b6f8108aff"]];
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







