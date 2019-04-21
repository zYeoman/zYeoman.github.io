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

var precacheConfig = [["/404.html","0674505de16670d0ed362fb2e5706dae"],["/blog/7z-extract-and-zip.html","e21ec49423083f91c1cd277f6f83036d"],["/blog/A-bug-in-python-about-import.html","56e2a2c10d94ea7cecbf13f25bc865a9"],["/blog/A-script-every-day-1.html","0b696aba397bcf94d19ac400ae6d8748"],["/blog/DOS-rename-many-txt.html","d2a959c669d6fb252432e42403a1263e"],["/blog/English-punctuation-to-Chinese-punctuation.html","1fe16b1767df84ab67f7d5674a4c44b7"],["/blog/How-to-Write-a-Git-Commit-Message.html","2206219192931fab7523e6fe1217b05b"],["/blog/ISE-error-when-generate-hls-to-pcore.html","cd5cbf966f489bd1f9515edf02e6088a"],["/blog/Interesting-APIs.html","248ccba45c5d73d80067a3e76d6e878e"],["/blog/Keep-Your-Commits-Atomic.html","d5e9c11a99e17b612b844bf3a48127e4"],["/blog/MacType-conflict.html","c787d60332141377cece786d68e0a079"],["/blog/Minor-CPU-model-of-gem5.html","65e69e097b022f5a6dedd74d2b3d409a"],["/blog/Python-translate-maketrans.html","0987976bb26bb5eea77a7fdad37335ce"],["/blog/Raspberry-PI-Using.html","2ff1a908be0032343df3b11980df1468"],["/blog/Test-My-Blog.html","d9b0f5ed4f5d80d2b41d611bd06e7918"],["/blog/Xilinx-can-not-find-gpioh.html","291b92b8fc3cf8a7223ef23cd2f50ab7"],["/blog/android.html","d472124198efc6cd1c5ce3126c9ec841"],["/blog/anime-18-10.html","216438721d240167d7f99136a6fee633"],["/blog/anime-19-01.html","832d05b99a4bc5221c53a352824447ef"],["/blog/anime-19-04.html","bf5c01bc04c255afee827cb685876209"],["/blog/anime-2016-10.html","e9a0048637d171236e335d831f0aa137"],["/blog/anime-2017-1.html","6138257586a3552cef88349ce2f79785"],["/blog/anime-2017-10.html","dcae5c33c94830fa8237de20b7521a23"],["/blog/anime-2017-4.html","126fd0e0475f16a6eff4a559acca7e88"],["/blog/anime-2017-7.html","d633fa24f4daca24fa777dc3e8a0d67e"],["/blog/anime-2018-01.html","817676b58d406bf4ae5390c360d3b9c8"],["/blog/anime-2018-7.html","11adf6bfda5e623b7f4786e9906b1f51"],["/blog/anime-list.html","1f7a6f2cec9fbd67eef93811ae7df9dd"],["/blog/archlinux-android-sdk.html","cb8d6eda7c051d0f160ef440e4a3ca05"],["/blog/archlinux-gui.html","97ff9b1d849a145b7630872eee65f488"],["/blog/archlinux-install.html","c446daf018d4d21fc50d4b14777776d0"],["/blog/bat-command-line-parametric.html","f0085488bee3e3b31bbe2756cac4c55a"],["/blog/bat-file-argv.html","803e658625c96f2b51728c40fd4e2ce9"],["/blog/bing-to-qqpinyin.html","599a47f98cc44f670a7c163ac5d58dcc"],["/blog/blog-categries-change.html","9086d63337c3edf4554e914ccb33d9e0"],["/blog/blog-update.html","28ec2f172091de3aa09e0d8989831869"],["/blog/bookmark.html","c0962fb1002900cbe82993c7da7f3f60"],["/blog/bufanjilu.html","c1a4018c95234ef407e301668eefdcfd"],["/blog/byr-spider.html","0dff8114a85ecbe4a73682d9f6cdb831"],["/blog/c-standard-library-learn-1.html","0ff940e8473261f4b28d1f08eb254d7b"],["/blog/chinese-hacker.html","41f5d434cdf756992ea821235ac9f6b4"],["/blog/choulaobie.html","a773ba0aa1504ecde9d58886a45dbe33"],["/blog/chuanyuelishi.html","2525f4c28638e273308a3079daa08a58"],["/blog/cordova-usage-01.html","3d863d74a8abbe7a7cd29bfd4b613f5d"],["/blog/database-test.html","01244357b7852725a1837628c9eb1202"],["/blog/diandongche.html","486cff54903676509ab08324295a4d3e"],["/blog/digital-image-processing-hw4.html","d0b6b1ed6e6505217b06f602f1a4bb09"],["/blog/fortune-lolcat.html","261770e49861c2d8729310003ac79c06"],["/blog/from-observable-universe-to-planck-length.html","8313e4f6fb0e4ab7ff185a58f2215ea4"],["/blog/fsutil-hardlink-junction-and-ln.html","0a5517651c325d885c1dbebee68396de"],["/blog/geek-tech-internet-browser-to-editor.html","29ba24b764287cd7d17e974df25f4011"],["/blog/gem5-tutorials.html","f651e8d0487c6832f57ca4490398e4fa"],["/blog/git-undo.html","e3d5aa03de4f068946a32962723a0eb3"],["/blog/github-education-pack.html","e6adede769bd4b620829e102884f8149"],["/blog/graduate.html","69e676fefe7b8c644aa21419a62cd0ee"],["/blog/helloseed-api.html","8980d8ed0b152aa257bde0a08816aacf"],["/blog/https-github-pages-custom-domain.html","bfbde0ee4c335fbbb8db5b7945148414"],["/blog/huawei-P7-error.html","a25d756818bd4978781c941206ff5fb6"],["/blog/install-archlinux-on-USB.html","110c74ac92ea975050350cf3bed22d11"],["/blog/jekyll-editor-hack.html","5f82d83e0215ab3a234dc4d922b1802b"],["/blog/linux.html","f75da0f4e089dc48ed8b93b420cd7655"],["/blog/magic-weekly-1.html","32dfaeffea347c8969f42f1bb149af13"],["/blog/malatang.html","18e6c0ff89cfd70988630ce613165e82"],["/blog/markdown-extended-latex.html","4d291100e51f9a0db4cc8f1fea892b46"],["/blog/master-interview.html","f9a8cf86cee717845eb981f8e82b8f6e"],["/blog/midnight-thought-1.html","8bd6bfbae9969e91fe7ccba9998d6d61"],["/blog/midnight-thought-2.html","58409851835c253092115d3c14396b48"],["/blog/midnight-thought-3.html","90f6fda61dde3345555bbc7e7ccf2921"],["/blog/midnight-thought-4.html","14f653a2bf81a4ba11650d5a89df3bbd"],["/blog/minicom-the-best.html","016e36a0aceb756f86dc49c388688180"],["/blog/my-desktop.html","2c95f351021c4d30a6bd24d25c14b2cd"],["/blog/note-take-tools.html","ded16cdfab3c2822bceb4bac5a36f947"],["/blog/owncloud-nextcloud-install.html","73eef238a9ca9d1a14013801f9dc1a6a"],["/blog/pass-google-pagespeed.html","757134da30335883be3cd15ea6b245ac"],["/blog/pep-257-docstring-conventions-zh.html","4185768f0e7728de40e634cd1bf5a8f6"],["/blog/python-argv-error-in-windows.html","baa97daad97aa8253ed6a13d9e86b3ae"],["/blog/python-skills.html","2c32cc6e4994fce1cd639b981ba6a400"],["/blog/python-special-method-names.html","66b03753d3b5ad66511a0f7f12d20fdd"],["/blog/quickstart-for-simulink.html","be033c1af8630cd1c443cdeb3a23fffc"],["/blog/research-about-time-track-tools.html","3f76929c94b1740c002060de20b7dc7b"],["/blog/run-background.html","69308a85833eaafa02bcfa9f8fffb26d"],["/blog/sanguosha-pudg.html","39137bc0c2e7608241b37c9ec81e4705"],["/blog/simplest-note-develop-note.html","16e6f7b5a628fee38a0eb022411a9e65"],["/blog/simplify-the-img-upload-in-markdown.html","b4eabd4ee0a1644b2781aecc868fa930"],["/blog/ss-set.html","8a4a39753d5bcad2e8f8296726ce8a27"],["/blog/tools.html","0bec785711f9fcf1e9b8f577823b8e49"],["/blog/use-mklink-to-save-space-of-C.html","af5a90b11e7e52d68463f8a50480e43e"],["/blog/verilog.html","5a3dcb0c13c6c595a08dc1593fc8c28b"],["/blog/vim.html","a5247a07db6df51dd039cedaf1b7406e"],["/blog/vps-choice.html","adc850705d481dfb1b9d0c7274dbc335"],["/blog/whats-new-in-python.html","7e7a3ff395a102b7c781293bfa119801"],["/blog/win10-boot-repair.html","5e706f10be3b9e3ec296d8361200fabc"],["/blog/win10-bug-about-bing.html","8402e9bbbd5f0e367dfab9a178aa8c26"],["/blog/windows-linux-autostart.html","4c8d2ee0384ace24d77de1ecabbb6cee"],["/blog/windows-or-linux.html","e0cf7d7103d005d8e53d8883c4e7cc86"],["/blog/windows.html","c8175d51bf34964d7dda95f33731986d"],["/blog/xiaoshuo.html","b471d6f63c7c191f68a75568a87534b0"],["/blog/xilinx-vivado-usage.html","ec4eda393e20c59b012eec47d268f634"],["/blog/xipai.html","40112ce3f418cb4288b2d0b2e1ab36af"],["/blog/your-name.html","6ddc4dcfe9c9778317b810e1f370e84f"],["/blog/zedboard-1.html","22431958d81c9e6f55a5e5c631a375b8"],["/blog/zedboard-2.html","3732370a2317e898c36ec04cf9f31067"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","dcfd40f83362a74c851dea4c5d3d29bf"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","f6d49c48466202ca142aa2440c64246f"],["/page11/index.html","db146ad616a60258bd6474242427d756"],["/page2/index.html","136b3a05d212b53e0808fb1deb4f335d"],["/page3/index.html","bdd552e3e70a96cedd07e8e7f096f21f"],["/page4/index.html","37c6f24ef1c83a18f260516d322b8aaf"],["/page5/index.html","c1f98b9a464b31c75729d1e3db25139a"],["/page6/index.html","0603e985803988b9888400b1c8a932a6"],["/page7/index.html","827edbaccd98d2adeb9fd7b4d5703a6b"],["/page8/index.html","662849cf4b787d7cebaa1ea203c24265"],["/page9/index.html","1dae924e77161ebb30b3a3e229a99eb7"],["/tag.html","6d67e215b345423a55680a310b30167d"]];
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







