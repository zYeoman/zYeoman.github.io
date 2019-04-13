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

var precacheConfig = [["/404.html","dd3ac7d2007914dce3d76a204837bce9"],["/blog/7z-extract-and-zip.html","7fe6fed868016b1844a22f73d4a3c678"],["/blog/A-bug-in-python-about-import.html","de1bbe95e9e67fe334f3e916fb6dbd44"],["/blog/A-script-every-day-1.html","da2fd02b0d061c1bb42e682180fddf98"],["/blog/DOS-rename-many-txt.html","7c8849fcd604f5885021109a09d98043"],["/blog/English-punctuation-to-Chinese-punctuation.html","1f6aec64573c4d296d72b93a968f7b52"],["/blog/How-to-Write-a-Git-Commit-Message.html","5baf4c94485983446129a38a926ab461"],["/blog/ISE-error-when-generate-hls-to-pcore.html","d0692495aaef5ee691a51f4c3ff559bd"],["/blog/Interesting-APIs.html","4fb63bcb68fd6594f4e0976cd032f177"],["/blog/Keep-Your-Commits-Atomic.html","f4d35be454e35d0a3e6534fe9859b8c9"],["/blog/MacType-conflict.html","ffcc2383ffd59ff3f2841e8f54a636f4"],["/blog/Minor-CPU-model-of-gem5.html","927ed12e13e32cb0b6de117e4a6318ea"],["/blog/Python-translate-maketrans.html","edb6ddcd75a011c72f19f81c5bf9de55"],["/blog/Raspberry-PI-Using.html","10da377d4078d0c596c9b3b67e2e171d"],["/blog/Test-My-Blog.html","4434798a708c35e86d1f15303411fdf4"],["/blog/Xilinx-can-not-find-gpioh.html","18de9a7ce6d59c8be993759f0e3c5c49"],["/blog/android.html","6206de618a664fbb18422d1accaa4b8e"],["/blog/anime-18-10.html","ab6ebca59311c73ffbfac42824d94adf"],["/blog/anime-19-01.html","0aaf3c812072c165429ff33ff9b5f8e8"],["/blog/anime-19-04.html","cffb02f2ea202158d0c3be2d56899936"],["/blog/anime-2016-10.html","ce8dd2bfdd0649fb349e41587dfeddb9"],["/blog/anime-2017-1.html","093863dd0fd03bbb8e6ce4c1d946f417"],["/blog/anime-2017-10.html","888bce8c596e8245ac049bc4c4e82f52"],["/blog/anime-2017-4.html","c794bdd1a01dc0c48dbf48552eda2240"],["/blog/anime-2017-7.html","9d9dfb63a3307c763e6a84101c3604f3"],["/blog/anime-2018-01.html","f4417d3470419a4d895ceec1a93af0af"],["/blog/anime-2018-7.html","65ec1ce85ec9e700d9360222ab5702a5"],["/blog/anime-list.html","7bcadd177cdeea7a4fbc9352deee7200"],["/blog/archlinux-android-sdk.html","67b22a0c89c08679317eaaaea26ba0e1"],["/blog/archlinux-gui.html","1d03142c4e5178c417dfa75a9410beaa"],["/blog/archlinux-install.html","4406aa95ab531854b80dd080d5db6bf5"],["/blog/bat-command-line-parametric.html","5d76324486f03e77382900a1eeea293f"],["/blog/bat-file-argv.html","aaad0cda8c3a51054f24c8058b7cec11"],["/blog/bing-to-qqpinyin.html","bbbc6e639f241070051de22051f7d2cf"],["/blog/blog-categries-change.html","052dbf143f02833493cca9fe7b125127"],["/blog/blog-update.html","ec98e83b84874fa2397d0ec8687a2caf"],["/blog/bookmark.html","38b072e4540801122afa07b469e899a4"],["/blog/bufanjilu.html","6b68373069ec2320f47f179d5cd6350e"],["/blog/byr-spider.html","3ff814581c645ed511bd88f311750494"],["/blog/c-standard-library-learn-1.html","d581ff8272918fad2c70b9d4773b4b3f"],["/blog/chinese-hacker.html","8e560b739138140ff86ddce04cf78813"],["/blog/choulaobie.html","284b259aa0456694c79b4ab807accafb"],["/blog/chuanyuelishi.html","412bd4cc063e074d74b0c05851b78a81"],["/blog/cordova-usage-01.html","8d2438ac6fed323ac80de7f8dfc871f0"],["/blog/database-test.html","2597371078441aec9eacb19fbbeebfb3"],["/blog/diandongche.html","0dbd31d630c4bf4bd1b055e78537b77a"],["/blog/digital-image-processing-hw4.html","7b96032b2d43285c5395ec3cbe5b135c"],["/blog/fortune-lolcat.html","3346b35c05463ac39bd2143b60acc7be"],["/blog/from-observable-universe-to-planck-length.html","dd4e67ac17659dc8002ec12050d9d4b8"],["/blog/fsutil-hardlink-junction-and-ln.html","b7fcee135aefb662afd18a3516ed699a"],["/blog/geek-tech-internet-browser-to-editor.html","fe3a6d6a83d675db6115115b8c811a9f"],["/blog/gem5-tutorials.html","e2e51c5a7be11e9ddc5af9ca53c1c0b9"],["/blog/git-undo.html","2bf523a3a9b4368df4a61562c4843896"],["/blog/github-education-pack.html","f75aca172b19af1bc4a790bd37989921"],["/blog/graduate.html","8e0f9d580482659b00d52b3d674133c2"],["/blog/helloseed-api.html","e1d202833dcceb9210e084a0862dba75"],["/blog/https-github-pages-custom-domain.html","afa3b9f0306ebbc5d99f7c8e4c1aa343"],["/blog/huawei-P7-error.html","ca00437fcc9b3575f59e31f999867a7a"],["/blog/install-archlinux-on-USB.html","20b434be436deb314402b122256ddf23"],["/blog/jekyll-editor-hack.html","7ec534c5696fb23bb52b5299188ca9a2"],["/blog/linux.html","9025214f970043f9315d94fc1a703247"],["/blog/magic-weekly-1.html","baaaeff7b4433f8dd5dfd3e39e5e8fb4"],["/blog/malatang.html","b77a6b04c39f4538664c2f99040be1e3"],["/blog/markdown-extended-latex.html","407f2d8107dc811be3e3a62e5958ca13"],["/blog/master-interview.html","43fa14c210e8b1ac4cf23c2abe273000"],["/blog/midnight-thought-1.html","4b5648043874348b7b662d9ae806246e"],["/blog/midnight-thought-2.html","d955bd805a6cd1e48621e4f1a9907b3c"],["/blog/midnight-thought-3.html","90d2d1481beaaa2ed2ff9eca41e1a60e"],["/blog/midnight-thought-4.html","83844128de66835b0110f1909ec174eb"],["/blog/minicom-the-best.html","72e7df2af1f5ddb08506ed30332ed354"],["/blog/my-desktop.html","370a26d58c67bc1c055f9dc8f9334037"],["/blog/note-take-tools.html","7da523388bf356402b2b9e55e5d2c5c7"],["/blog/owncloud-nextcloud-install.html","34a907b4bac1253062e9101b15cc9a38"],["/blog/pass-google-pagespeed.html","3a16fe83644d800a8d9adfe583fd0513"],["/blog/pep-257-docstring-conventions-zh.html","4366a4b4e01bd5a54c81712a1ed28f3e"],["/blog/python-argv-error-in-windows.html","5f43dd7138fba5e6fc181b486cc93151"],["/blog/python-skills.html","36f8a3880f1c9e2bee8841006730fcb6"],["/blog/python-special-method-names.html","ec501c4e05d4ede287129e4940570500"],["/blog/quickstart-for-simulink.html","a0cd56e35b12eda59142262e40c36a5e"],["/blog/run-background.html","8ed6838c1f7f20161b6f4048749ba4cf"],["/blog/sanguosha-pudg.html","bee7b072bec90494fa2fc3afe2a929ee"],["/blog/simplest-note-develop-note.html","538dc3a09334a7f920a198dd68358911"],["/blog/simplify-the-img-upload-in-markdown.html","4b406f4cebc9afb637da5bdf39d42add"],["/blog/ss-set.html","720e473044c1090569868a971fae8d86"],["/blog/tools.html","e07d6d8733381560c2f5392e339abcb0"],["/blog/use-mklink-to-save-space-of-C.html","441c2b7725d04fce487cb79d55807560"],["/blog/verilog.html","dc411ca8f0ce671203b4a9a33f742926"],["/blog/vim.html","399089c3830f019431886a1162ce0bc8"],["/blog/vps-choice.html","bac0ac14555d8dd36e0a35e1550e1b01"],["/blog/whats-new-in-python.html","9af09b1c8289ff77bee7b40bf79273c2"],["/blog/win10-boot-repair.html","5e56da9934745fe23ca734f48a938c3e"],["/blog/win10-bug-about-bing.html","23e2177520bd24780148cb55ecda078f"],["/blog/windows-linux-autostart.html","76f1ed4b7307634ba8b4c0536f7dcd61"],["/blog/windows-or-linux.html","713b0464beca66563f637b79d6ca153a"],["/blog/windows.html","fb859d361780deb3718eee49d2d344c3"],["/blog/xiaoshuo.html","e4c0b73bc27f1f73da478a32dec1bebe"],["/blog/xilinx-vivado-usage.html","e7b33d253fcf4b0f3875ae9efb1d0688"],["/blog/xipai.html","9582f869402fb2b9b798474723340da0"],["/blog/your-name.html","151d0d97d5426c5dc272cabbecd1e1ec"],["/blog/zedboard-1.html","aab7d64eb3aca858e6b6a5453fe10fb2"],["/blog/zedboard-2.html","b9f62c0a4ac1faa4995b7bafce3465fb"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","ec49f70b8ec8e166816560736ceaccd1"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","cb10d1ef4e7f6be2c362f1c671d1cfd9"],["/page2/index.html","7adc8da196c4a8e045466ff763f14d51"],["/page3/index.html","4af90c30466fc2f0745489f115759b7c"],["/page4/index.html","38fd775c80adba9c245425db15ca0429"],["/page5/index.html","f9fe3711ecb67e53f43d3d989d9d4f69"],["/page6/index.html","8d02691b72f6884e405fb3abbe7bc06c"],["/page7/index.html","1f2abc23454d0aa958b814bf2f9bb7c5"],["/page8/index.html","bc1f7fe0b3968951d0e37a95ec3fb82c"],["/page9/index.html","ba04724e2730c184b0212855526dc1bd"],["/tag.html","cf6b9c04013f207cf77baaf60c267ff7"]];
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







