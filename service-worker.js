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

var precacheConfig = [["/404.html","33b4ab9a7b374bdbe3021dfdac873da3"],["/blog/7z-extract-and-zip.html","849aa87af6b55dbd312a88053e5117e6"],["/blog/A-bug-in-python-about-import.html","e466054c3f12673fc65d8c666828e205"],["/blog/A-script-every-day-1.html","3ade5b4b57a20c0dd3e533477d9bc5e2"],["/blog/DOS-rename-many-txt.html","56a8832be15f97b8163bd8f51465276b"],["/blog/English-punctuation-to-Chinese-punctuation.html","ba148ecc79363260a293ef3e38ac0f41"],["/blog/How-to-Write-a-Git-Commit-Message.html","c11f503de92d722ea96535804879cdb8"],["/blog/ISE-error-when-generate-hls-to-pcore.html","a614c4f387139a4e989182d2762ed209"],["/blog/Interesting-APIs.html","43e5b5d2e03dfff41e0618b0e61c97ce"],["/blog/Keep-Your-Commits-Atomic.html","abaf93d9aa97d1d86c0eea41f66e2d29"],["/blog/MacType-conflict.html","44737f1d492004bae62e178f8ce6f87b"],["/blog/Minor-CPU-model-of-gem5.html","53c6c43c3ae4d6655b731efdb21588b6"],["/blog/Python-translate-maketrans.html","3308812e3d975cf2e151677d05b68419"],["/blog/Raspberry-PI-Using.html","f58571ae1816dee03ce819d35f94aa90"],["/blog/Test-My-Blog.html","97a6a17551fc9ac17fee61c22bfbe0db"],["/blog/Xilinx-can-not-find-gpioh.html","e142ec50c04b8d6c725490f85e3472d1"],["/blog/android.html","2a3051e6aa44b9a17dfb8a5c52ea3555"],["/blog/anime-2016-10.html","a42d70e65f7f31513f201bd8b2f0f0c4"],["/blog/anime-2017-1.html","c472b96fcddcd888b28d58f8e9517d9d"],["/blog/anime-2017-10.html","c16d583752169f0c56342473129aa280"],["/blog/anime-2017-4.html","31aed7027cbd66c3506921ff688aa39e"],["/blog/anime-2017-7.html","ceeb80463a6bd0edef4ef263d101fece"],["/blog/anime-2018-01.html","c925baa1b1ba64fd3ea6c4369f3dec9b"],["/blog/anime-2018-7.html","0260f4a9aa21c25f6e765df5d7acc645"],["/blog/anime-list.html","a0af58b4d477772bd495aafcd74ac0e3"],["/blog/archlinux-gui.html","038a76098a707daf91b4f00dfe6de478"],["/blog/archlinux-install.html","6404255228dab68f6f5ea3d0974231fe"],["/blog/bat-command-line-parametric.html","9db1cad30256f296987aa430bf804954"],["/blog/bat-file-argv.html","616fd58ef747b515682ae8fc4a06e34c"],["/blog/bing-to-qqpinyin.html","a57f447de8daa2d2126332dde4f5cc5a"],["/blog/blog-categries-change.html","d9f2698814e577f63c8c91146753440e"],["/blog/blog-update.html","b8b733b731b1966878900f99e4fac73a"],["/blog/bookmark.html","fe87dfa3ce373afad62c50d0ba247587"],["/blog/bufanjilu.html","8cd2bb63eb717a53cc57ca5d0f12632a"],["/blog/byr-spider.html","19e230f97ea38b0f66712656b68b8592"],["/blog/c-standard-library-learn-1.html","87fb617b6a94b20f95fb20ca23be85ae"],["/blog/chinese-hacker.html","825ea6985361851501776960e674ff4b"],["/blog/choulaobie.html","dc9787d25e0e24758dc51bb926daa372"],["/blog/chuanyuelishi.html","dd13680ac73157afd06d0e0fa90cb2e2"],["/blog/database-test.html","dd465863137b598fe56c135b784c9f6b"],["/blog/diandongche.html","d0e3e7ea5e0b623138d9f315adf9aa1c"],["/blog/digital-image-processing-hw4.html","76238dbdf34174725279213f8d326b98"],["/blog/fortune-lolcat.html","352e4ae60dc8c4fdf184aaa5406884e6"],["/blog/from-observable-universe-to-planck-length.html","6d3bb45c486a4836fac9dfaa5492de42"],["/blog/fsutil-hardlink-junction-and-ln.html","111276d75a47f0ba13572b5c47094d26"],["/blog/geek-tech-internet-browser-to-editor.html","42e1ad83ca837e564942768c7db8d101"],["/blog/gem5-tutorials.html","7bd62ce2f65cf0a79e39a529ef3a33a9"],["/blog/git-undo.html","56aced489f2dc692a8c3e2886219dc10"],["/blog/github-education-pack.html","2f131c2e4d4d51c2b1b7e28dc1d81367"],["/blog/graduate.html","ee8d9db5b8ea233b0626de281728691c"],["/blog/helloseed-api.html","829f6be3436699597f9f811cff0d0d7f"],["/blog/https-github-pages-custom-domain.html","9817d62f45280679ceb864a7956cbcf1"],["/blog/huawei-P7-error.html","48b07df210c8cc02ed07e07a40b7b5f8"],["/blog/jekyll-editor-hack.html","1cb85073eda682a487aa813a555dc375"],["/blog/linux.html","bef905fad13fd5a2526f66734e32276b"],["/blog/magic-weekly-1.html","a555d3a07032586fd2ec96ca05ed32af"],["/blog/magic-weekly-2.html","a1ab66dd90024ff362bef21f1d382d37"],["/blog/magic-weekly-3.html","074e974de65aeea634c3eaf3fc35d37f"],["/blog/magic-weekly-4.html","763d077e04ab52dd0686782b691c5d64"],["/blog/magic-weekly-5.html","57a5cad4a3239798317c68e4cf697a1f"],["/blog/magic-weekly-6.html","e9b580cc9cb2722bd0f75365f62ccd57"],["/blog/malatang.html","bf20f3f959a3655fff3d12f2b64418df"],["/blog/markdown-extended-latex.html","d8c9f28a691b03a0c8df1e6f12826da4"],["/blog/master-interview.html","c23e17d3215d4d29358323e13750e7e4"],["/blog/midnight-thought-1.html","04da501a5e99e152c4c3cb1798168989"],["/blog/midnight-thought-2.html","1fc24f57372cb5e606f3601b01c4e71d"],["/blog/midnight-thought-3.html","268799d4177c457f5cbbb9ed12a9c8bd"],["/blog/midnight-thought-4.html","c6ecd15327d3009f0f0b76715a124847"],["/blog/minicom-the-best.html","935c0e755f9299eb8116d598bc71f9bb"],["/blog/my-desktop.html","b10633bb0418ddb68f339f3284b39c2e"],["/blog/note-take-tools.html","8b07e5132c348b8092ea1865d5e13099"],["/blog/owncloud-nextcloud-install.html","d2752c89b4860915e7b64a8664992366"],["/blog/pass-google-pagespeed.html","a8487cb1477f0a10301c9b35206b801d"],["/blog/pep-257-docstring-conventions-zh.html","8eb41ca00598436bc948cfc4dec67535"],["/blog/python-argv-error-in-windows.html","933b74dabae317ed9f653931f93197da"],["/blog/python-skills.html","3fe1de7f6f35ea9a880ace1a0025b933"],["/blog/python-special-method-names.html","50b69e280f8e9d1dc91170bbb6cd5dcf"],["/blog/quickstart-for-simulink.html","15e6eb152d52a56b6b45f6d3970b25e6"],["/blog/run-background.html","ad10a47dbe5652c8080d93fd48624264"],["/blog/sanguosha-pudg.html","8e9a390352583ea712b0c0aae3eb919d"],["/blog/simplest-note-develop-note.html","24edc71f78a5e7b641966efda47820c8"],["/blog/simplify-the-img-upload-in-markdown.html","ab257109632320724e3a7e782bd87338"],["/blog/ss-set.html","8eaf429a8434f03b690bb8a72d44f723"],["/blog/tools.html","5f81d41f4d1dc3b839f23cdc55a8805a"],["/blog/use-mklink-to-save-space-of-C.html","fa87664dc4cb909234f4500cb75cd7df"],["/blog/vim.html","9f5ed5b52d06e01c5dfb964b38c4bfa5"],["/blog/welcome-to-jekyll.html","a0db666026876d53a3e95ef019e9023b"],["/blog/whats-new-in-python.html","17b1269dfeae49017935b088e2e97020"],["/blog/win10-bug-about-bing.html","fa321bff74eba25fea0ddc9179a492fa"],["/blog/windows-linux-autostart.html","3505ccaa868c29c337b6a58854b2f300"],["/blog/windows-or-linux.html","4912ec639b73797f00b7f0389cb3f0b2"],["/blog/windows.html","2a7d2998c8a8ec35dcfadf0736d11795"],["/blog/xiaoshuo.html","ca13bb544191304af14b568d13273fab"],["/blog/xilinx-vivado-usage.html","1089ee1bb14a4dc07f72be7ac0161706"],["/blog/xipai.html","b0ee3bf57ca124f7d74b5f67183a6f2f"],["/blog/your-name.html","b78585d79cd438eab90b91a459af107e"],["/blog/zedboard-1.html","2766373be275bfb3b5cc0900d5bcc23b"],["/blog/zedboard-2.html","7cf7367f46a156568cefa252c2052d8f"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","2e127c73e59a943926fac6e95defb6b5"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","6ef7292e4ef512d02a42982a1d8ae199"],["/page2/index.html","bf1e1ed5bcfa473111d620fa46e6a579"],["/page3/index.html","9615b5123fffc79d8aab7285291d13ea"],["/page4/index.html","28f8ba47834044d59d8de47979aa3f0a"],["/page5/index.html","b12911cfbaab3b0d44cc10af3c63f0de"],["/page6/index.html","80107104027a90d628bd381694ac1be9"],["/page7/index.html","7c61a0f2a7c7a3db4f464eac819fb574"],["/page8/index.html","04cdab7e61c4209d3304877ed4c4fcfd"],["/page9/index.html","330071be0c63179becc19ed53aa70ee9"],["/tag.html","6b0b3f2f4aaa85347f31bf89c862975e"]];
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







