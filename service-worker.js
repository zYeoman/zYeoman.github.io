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

var precacheConfig = [["/404.html","a30f23d10e7b05f984245209643e3570"],["/blog/7z-extract-and-zip.html","c0eeb2014d18bcc0563a8724c34cbc7f"],["/blog/A-bug-in-python-about-import.html","11a05ebda873bc779fce22b3cd78640b"],["/blog/A-script-every-day-1.html","1b48728bcc6f04f3c4308f29aa0bd9e3"],["/blog/DOS-rename-many-txt.html","66604e99349926ff1bd28ffdf6090843"],["/blog/English-punctuation-to-Chinese-punctuation.html","17159d8b97fc93688fa3591e73dcfe7c"],["/blog/How-to-Write-a-Git-Commit-Message.html","89994956d3d4e0b3c5ffaf9561f1d952"],["/blog/ISE-error-when-generate-hls-to-pcore.html","69eef6245e5c1103c6cb470da6008318"],["/blog/Interesting-APIs.html","b6d35fbee16445014e4f947da2e832c3"],["/blog/Keep-Your-Commits-Atomic.html","d6b59be0909e63ef01ae6a205a9f6df7"],["/blog/MacType-conflict.html","96d38f1cda2b3ec221cb1c9cf314512c"],["/blog/Minor-CPU-model-of-gem5.html","c7c8fc05f3c5555e0f0b63061c2d33ec"],["/blog/Python-translate-maketrans.html","6430bb2adbf65401a3bd1add80da8bcc"],["/blog/Raspberry-PI-Using.html","a0122c0f1ff268c84041b8cb96d215f7"],["/blog/Test-My-Blog.html","4afa7272549a442e3b57881a59c6e192"],["/blog/Xilinx-can-not-find-gpioh.html","e555532dfdbae9ea5170d725105bc97f"],["/blog/android.html","9aac11d490b6f439978c8397eb2a306f"],["/blog/anime-18-10.html","e37c8b253db820624dbfe4bcabc80f37"],["/blog/anime-19-01.html","a0bc6f1f943b814d9c1d2fb053face1d"],["/blog/anime-19-04.html","22cd0c97dedd2bfc2a521f46466e578b"],["/blog/anime-2016-10.html","1d72c704e108c27c58c933a9d8a23e3d"],["/blog/anime-2017-1.html","786fcd8fce3c71cdff5f6b580310401f"],["/blog/anime-2017-10.html","ed2677e1ea6c651593bf2e7904e52f6d"],["/blog/anime-2017-4.html","5a9ff97dde77b96195355b85863c0b69"],["/blog/anime-2017-7.html","8cfa3cf36527ae6febfd570bbc11808b"],["/blog/anime-2018-01.html","3246aceac5f0bee4d1594a5a122f8041"],["/blog/anime-2018-7.html","b04b92fb60e2313c2341da136a187dbe"],["/blog/anime-list.html","d7942d0f227b3519d631395c23e87174"],["/blog/archlinux-android-sdk.html","4ebe6f9a3d8eadf5500f0b6ce96bbf6d"],["/blog/archlinux-gui.html","19a22c000082931dafe874154fc706c9"],["/blog/archlinux-install.html","f396d3f81e5f243c2af557f70e354423"],["/blog/bat-command-line-parametric.html","07c90151f7c6e1efaee9ffb8864bbff6"],["/blog/bat-file-argv.html","d6c17064a409507f2ee757e54a20bfec"],["/blog/bing-to-qqpinyin.html","90cad65d065c00a1f6e48e44f33b9ff0"],["/blog/blog-categries-change.html","c1928a96815898b92185e1b0cc161561"],["/blog/blog-update.html","41109dd5cd53347bb726efecd14512f8"],["/blog/bookmark.html","8c32861cd96cdee09b41f850db8d26be"],["/blog/bufanjilu.html","df955d1655c6c825b0efdcfa32fe21d7"],["/blog/byr-spider.html","0c2cf79b3b2a800ee6ab767cdc92f237"],["/blog/c-standard-library-learn-1.html","dc306983fba2190f894efc22a7bad3f3"],["/blog/chinese-hacker.html","fd2a5501986ac71093ada98a1e0533da"],["/blog/choulaobie.html","21d72d5c58cf433b6a33192495f90cfe"],["/blog/chuanyuelishi.html","81191631182d8b014cbbdcdebfa136d3"],["/blog/cordova-usage-01.html","6f9d31ed7d4e6b8d9f13b1d32bf3efb0"],["/blog/database-test.html","064ee4e14dfca1e36ce0d72aeaa68604"],["/blog/diandongche.html","349694fe5c20026b961bc696a3494af3"],["/blog/digital-image-processing-hw4.html","9448424831ce51636964f86f5b1c9f4c"],["/blog/fortune-lolcat.html","bc125adc520917cb16c5dad0a9af4da2"],["/blog/from-observable-universe-to-planck-length.html","2eccbc955563a8c848a49656c9c8abff"],["/blog/fsutil-hardlink-junction-and-ln.html","22f4b7db75e8851637ae24009bebc9d1"],["/blog/geek-tech-internet-browser-to-editor.html","2000ece5360f46bfdad8b164096bd1f0"],["/blog/gem5-tutorials.html","6fbdd2a8e15493f15c08dbef0678c2ba"],["/blog/git-undo.html","852524fafd1aff5c00ba40fef56d6ecb"],["/blog/github-education-pack.html","ee7c89cdc3d9cb1e52588b9200090881"],["/blog/graduate.html","c017f7248ec874ae444c7d354c3bf4f0"],["/blog/helloseed-api.html","43b8356d8060d8e097cd365cde02f13f"],["/blog/https-github-pages-custom-domain.html","f4da261fc0b46358677500f805b7f6c6"],["/blog/huawei-P7-error.html","a35b28e9af85564ccd656e62db7fe72b"],["/blog/install-archlinux-on-USB.html","535b9429ee07d55965c77e27e27cdbbf"],["/blog/jekyll-editor-hack.html","d235368857fcd69b95a6795891127389"],["/blog/linux.html","b67afcae09e9ed216e6622f653505abb"],["/blog/magic-weekly-1.html","cbf35b4f9240f9c31f26bb0c2c47e432"],["/blog/malatang.html","95d72e218580a0c6ba72af8f0f4ffb1b"],["/blog/markdown-extended-latex.html","b3f5c25603b7d84eaf419764518c24be"],["/blog/master-interview.html","81ff2c631458f7694ec1337e13356ac5"],["/blog/midnight-thought-1.html","86b5d8707513886016cc53e4b12d038a"],["/blog/midnight-thought-2.html","8c6a94407f990ae220d8e6fc1efd56ad"],["/blog/midnight-thought-3.html","36bb0662b5210093af145a4cae738787"],["/blog/midnight-thought-4.html","6b778ce28eed1a68003e61c7c81274bf"],["/blog/minicom-the-best.html","a2a43152ef2f347823909c77410993c2"],["/blog/my-desktop.html","53369b467f225c03c712830efdb04ae4"],["/blog/note-take-tools.html","f93c56781ce6461f6c2e9e4352fd9d33"],["/blog/owncloud-nextcloud-install.html","c2bd619e773c99762e78e463e76e20c0"],["/blog/pass-google-pagespeed.html","66209f9b48a2e697b49d4fabc503347b"],["/blog/pep-257-docstring-conventions-zh.html","2b4ad5bca5dd9ebb2d02f17821875897"],["/blog/python-argv-error-in-windows.html","96b5ab7475dcb576f7586b843b4d1b69"],["/blog/python-skills.html","1df2e5181bd163cec905dcb23aaf6c63"],["/blog/python-special-method-names.html","b4f580b1c3f5a4f955329e8f396739a7"],["/blog/quickstart-for-simulink.html","ffa11a0bedfdf807ee005686abc4cba8"],["/blog/run-background.html","a84ad6affe04c9bc324ff9bbd160a603"],["/blog/sanguosha-pudg.html","f8650637d41056e343f9c8024ed974f7"],["/blog/simplest-note-develop-note.html","d2dce9566f6f687c998e9697d06befdb"],["/blog/simplify-the-img-upload-in-markdown.html","932bde7d0bb75eb506f68661a3609ee7"],["/blog/ss-set.html","42a727a13c4b8bb5fae81cb911ec9818"],["/blog/tools.html","41289462461152c2109ae991530d4b29"],["/blog/use-mklink-to-save-space-of-C.html","3ee77b2e0bddca3edb6a01fff116ddda"],["/blog/verilog.html","6968fef4db600337ec9d396125da7025"],["/blog/vim.html","81ec1fbce61e7a58fa194854b54b49fb"],["/blog/vps-choice.html","376059b19a84b4eef14bafbb784c37dc"],["/blog/whats-new-in-python.html","228cae640222fc21f90041a99dd46ca8"],["/blog/win10-boot-repair.html","07b7a41151eefbf160823b3ef94ebd6f"],["/blog/win10-bug-about-bing.html","a74c2b5db66f05feefe438711e7f8de9"],["/blog/windows-linux-autostart.html","76dbce1d09ff739670306584064d1add"],["/blog/windows-or-linux.html","84456e0c8714f2aa151d50bc07edee77"],["/blog/windows.html","774ea8fadd34ff83bf5da1994a679dd6"],["/blog/xiaoshuo.html","5fb4f6c1091c04786bf2ffe3654918f7"],["/blog/xilinx-vivado-usage.html","801f6f11b779137de3638626f9b98711"],["/blog/xipai.html","51465ca065ccd87d2cf9eb4d71a05066"],["/blog/your-name.html","5f75136403f8548f649fcbc5e67cb91c"],["/blog/zedboard-1.html","60afc42061c3c47efa4eda99e7fe6906"],["/blog/zedboard-2.html","91fdc8d3687bd274482a93f2d6ba0e52"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","504ad5e1b6a4b1764a0d16b799e92f76"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","3af8c357a5a101029f65986f937431da"],["/page2/index.html","1357b50a611679fcb27276341e5a286c"],["/page3/index.html","59ab6d16a337da29fe1d8dd482db8c0e"],["/page4/index.html","5c10a89c6140dd6d4d37e74e07f13757"],["/page5/index.html","71420f9f20e6fd96ac0c4607808d490e"],["/page6/index.html","06c24261e6c0100c573058ec965f95e4"],["/page7/index.html","9258ab7a2ff8e610dc4f23aeffa56cae"],["/page8/index.html","02484b1aa1487794d43a2d21bc69c306"],["/page9/index.html","512f19a34add7adadf8902373f0d00bb"],["/tag.html","ce54859c7c32604aa6c87d3e7e483f98"]];
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







