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

var precacheConfig = [["/404.html","bccd5c3234ca55a17314ad06250e1d96"],["/blog/7z-extract-and-zip.html","36448d92f62cac5c812b55996134b922"],["/blog/A-bug-in-python-about-import.html","e13c6437c9b4c97200cbeff2ffc6eb4e"],["/blog/A-script-every-day-1.html","9d6cdfe89eb0666263ab5fe6787d7e2d"],["/blog/DOS-rename-many-txt.html","dc2b9c2b6f8b35ad86e0402c83c47824"],["/blog/English-punctuation-to-Chinese-punctuation.html","80e9df31e2705e9adec6a6a4824610b2"],["/blog/How-to-Write-a-Git-Commit-Message.html","cdf7a6cb547396f08ce9c08730aacf2a"],["/blog/ISE-error-when-generate-hls-to-pcore.html","06111eceba182c8e48023b63861a89ea"],["/blog/Interesting-APIs.html","ba2c9d6753ed48dd23f7cc4a32b098fa"],["/blog/Keep-Your-Commits-Atomic.html","d4c232a9b659993cfeef73a98f0698b8"],["/blog/MacType-conflict.html","490c9c951ea9ce9acdc6ed499ce59c23"],["/blog/Minor-CPU-model-of-gem5.html","3c78ce27b7e93bf32d121d1521c6a055"],["/blog/Python-translate-maketrans.html","32b10ac6e522215ad6f8c563502ececc"],["/blog/Raspberry-PI-Using.html","92f5c55a62ba31d07c36d5c4634f3ecc"],["/blog/Test-My-Blog.html","1b9c553abe7cd38a4d575b04f7c3a75f"],["/blog/Xilinx-can-not-find-gpioh.html","cd001811a8fda607baaa7108e7a44d98"],["/blog/android.html","ecfd07a31b8d3d6f45a46f4ae9b9dffb"],["/blog/anime-2016-10.html","4664ca7cb79ac93c3a5428fe0ed6dbf0"],["/blog/anime-2017-1.html","9d81de58a81d85cf09cad934b01dff57"],["/blog/anime-2017-10.html","edb94784978da6afb1ea8dd474602668"],["/blog/anime-2017-4.html","31712595e6c15652ae555c7aca674f11"],["/blog/anime-2017-7.html","f70b4b08a3c22aee4f171255250df366"],["/blog/anime-2018-01.html","fe757691dc846e090bc98c758fedd522"],["/blog/anime-2018-7.html","7f647276dcd44598f2824ae6b563c155"],["/blog/anime-list.html","1d0c10af1b452da5bcc9ed104e5f8d32"],["/blog/archlinux-gui.html","5d1595d827415c7845c192f23439dbff"],["/blog/archlinux-install.html","e26e880cd3ad8e89a9b86a0c854f1519"],["/blog/bat-command-line-parametric.html","dfb25771c162eeda633e0d49f45791f4"],["/blog/bat-file-argv.html","5c23b81f697bd041eef4a83248c3cdd6"],["/blog/bing-to-qqpinyin.html","581151b381f7ce2f7fe9b287eb3e60d3"],["/blog/blog-categries-change.html","70214995e18eed8f72ab2baf6e85d68d"],["/blog/blog-update.html","e381179ada1e5924980e6751abcc17ca"],["/blog/bookmark.html","4b7ce01e6f30ab2186cb2c125e3ccac1"],["/blog/bufanjilu.html","cfecad3ac9f20b462f61b1ba9b507b0b"],["/blog/byr-spider.html","99146e59a931f243c43065615dc73915"],["/blog/c-standard-library-learn-1.html","5502ca2ef259453ba6a0a404779cce27"],["/blog/chinese-hacker.html","f70807f2d91295aabe606599d6971dba"],["/blog/choulaobie.html","329e7c62c24e35ebed4d246cf15e7092"],["/blog/chuanyuelishi.html","93d99da1e5db700c753e9091458531f2"],["/blog/database-test.html","3d1a8d4783309728275ece42d3c0cc3c"],["/blog/diandongche.html","8905e2ba889dc3de63115d64970f23f6"],["/blog/digital-image-processing-hw4.html","78f9158542c44572da282c9019d5f988"],["/blog/fortune-lolcat.html","6e930bc88d74ec7522a13281485d768b"],["/blog/from-observable-universe-to-planck-length.html","46b9a8afd14b53d3188b26a28a8b01d8"],["/blog/fsutil-hardlink-junction-and-ln.html","2571656707d77995797a9eb27dc989a0"],["/blog/geek-tech-internet-browser-to-editor.html","9c839ef4c7d19e7e6432fe9a50e4ca8d"],["/blog/gem5-tutorials.html","a00ea6392a37a5442c4d9aec8b3dc834"],["/blog/git-undo.html","09c33e03a6dc28c893c342ffb05d9eb0"],["/blog/github-education-pack.html","d4b2b881bfacda4c4917ced174e0e7c7"],["/blog/graduate.html","90afeffbf6d16f67efb45ce4fc37f6ca"],["/blog/helloseed-api.html","b3de5a865e863a3f810b5b85c5aa1c2a"],["/blog/https-github-pages-custom-domain.html","b5c81dbbd624444461ccd0cb6353490c"],["/blog/huawei-P7-error.html","98ec59d856c58900c5aab2dd90752724"],["/blog/jekyll-editor-hack.html","b2b164da77d0aa53acf9cb9383383af1"],["/blog/linux.html","54d1723a82459ae6772a8b0adfc69c44"],["/blog/magic-weekly-1.html","5487ebc7f39c3021805743d7be3803f3"],["/blog/magic-weekly-2.html","f3812095bbb0269de8f85fbb2b139d59"],["/blog/magic-weekly-3.html","ff10ac706eca3cc97415a2bb0b749fce"],["/blog/magic-weekly-4.html","e72f87183587a804f642a3bf97646335"],["/blog/magic-weekly-5.html","5513425929f41e4cce73a936a5143cf1"],["/blog/magic-weekly-6.html","10c22ddf4fbf54865db7af92477bec5e"],["/blog/malatang.html","0a68ab977f14800a682f47210e959f73"],["/blog/markdown-extended-latex.html","f1d196b78529b0241d1f71bafc0b9d23"],["/blog/master-interview.html","d06fac93ab99de1025e40d9a45e23938"],["/blog/midnight-thought-1.html","cf947d0ded4dfe3ad604a65c4ea760d1"],["/blog/midnight-thought-2.html","bfde8ea4ff90ce73a6a6e68ed5a0327a"],["/blog/midnight-thought-3.html","1a09f103ccda2cef62a8ee2e5d736304"],["/blog/midnight-thought-4.html","7f765fa5fe52e0537791fe047f4b6285"],["/blog/minicom-the-best.html","b3c273c804cb5e8a60270c24de03221f"],["/blog/my-desktop.html","89a97bdd93f30b86db3939acb220d2fd"],["/blog/note-take-tools.html","e0f91482ab70395c7f28d59c12328a67"],["/blog/owncloud-nextcloud-install.html","7961d0ae909b98a753440d196be93bae"],["/blog/pass-google-pagespeed.html","7b06b918114ef0ff49a853adb50aae38"],["/blog/pep-257-docstring-conventions-zh.html","8510d8d1da0adc0d662bd47995c4e32d"],["/blog/python-argv-error-in-windows.html","0ec9cb029879d8b12b9cf4c272997574"],["/blog/python-skills.html","dd378174414961ac08e1635d1e566068"],["/blog/python-special-method-names.html","4293703ceb0b1b4c4220d95cf98bc1a0"],["/blog/quickstart-for-simulink.html","79a32d1fc5b57bad8765d64a100f2395"],["/blog/run-background.html","384c90e87ed38863f0d1da67ab4e77a5"],["/blog/sanguosha-pudg.html","b5a52ac3b9ec466d9591fc22c0a8582e"],["/blog/simplest-note-develop-note.html","d902289ded1f2d0251d5750b203bd6ad"],["/blog/simplify-the-img-upload-in-markdown.html","363cd6df17306b467d7a5ff0168ea6fa"],["/blog/ss-set.html","09404f2ea3cdbf4d0d179ee04c035ec1"],["/blog/tools.html","a762c5ab20f676c5da4e1627b616589e"],["/blog/use-mklink-to-save-space-of-C.html","16bdb0d7393ecefda90b0016c6efa14f"],["/blog/vim.html","4080e12d2cacb0097b21de8054e5af4e"],["/blog/whats-new-in-python.html","3fde2bea320aaa0ae3976c19f765d8b5"],["/blog/win10-bug-about-bing.html","de319643561925679a1b66978e60b25e"],["/blog/windows-linux-autostart.html","8d7280e5eaf492cf8f95de3ea4ed3ade"],["/blog/windows-or-linux.html","6132e62aa6dd6c44c2b1c6a472514256"],["/blog/windows.html","75465ad0cb36531e7fc21b2a4014395f"],["/blog/xiaoshuo.html","825d46b99e690acd5244aa5726fd4e3e"],["/blog/xilinx-vivado-usage.html","5e32d2c4d59a8215837d8038d345c9be"],["/blog/xipai.html","7bbac322eef014ebca69c4dbcd620a44"],["/blog/your-name.html","306e9647c635240c1a8241957ae8a973"],["/blog/zedboard-1.html","59f836821c36829d51f41f91f4c7d297"],["/blog/zedboard-2.html","e4b43135eff37ca5dfb7fa8242f29cd4"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","5421e875c458db824ca0e50ad7e0f1ed"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","baa4531ec9e2187f9e2b28d2c7c01a1d"],["/page2/index.html","7e6139e844b987bcc645de60b6c95a46"],["/page3/index.html","c23a00ab90ef2a50b463b0e025adda5d"],["/page4/index.html","77f4ee92ae6f6114244342b74eb43630"],["/page5/index.html","9ab696035c18a33920e10492fa6a5a62"],["/page6/index.html","3a997c208cc9260391c120f888c22aa9"],["/page7/index.html","c28e55e744e0cf629e094744f3a0f3c1"],["/page8/index.html","e45f73e480c01d2e59184262264f570f"],["/page9/index.html","36e2f1fd4ecb8676ad50f9c0657d06c2"],["/tag.html","9a5409bcecbdf0a4c3315db93916b0e0"]];
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







