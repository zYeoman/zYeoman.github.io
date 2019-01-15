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

var precacheConfig = [["/404.html","0b0b6c1306aaa670931eef877fe4ac30"],["/blog/7z-extract-and-zip.html","32a2ec8064a61f8f0dca190b3050f544"],["/blog/A-bug-in-python-about-import.html","8263cdbfcd5db4d2e00daa17bcedb5d9"],["/blog/A-script-every-day-1.html","546dbf137a05cc21bbd455efb9b0ca40"],["/blog/DOS-rename-many-txt.html","a88616ff52a80e5f1bc6387131d5ba1c"],["/blog/English-punctuation-to-Chinese-punctuation.html","449ce44299eecd4958331dac82cbd045"],["/blog/How-to-Write-a-Git-Commit-Message.html","9d7f2b22f2cf721e084ec23c1fd189a0"],["/blog/ISE-error-when-generate-hls-to-pcore.html","6f0c4c51172e5fc3dd567accbf452dd3"],["/blog/Interesting-APIs.html","fd4bcae1602f37e2e9edeece91e58d3b"],["/blog/Keep-Your-Commits-Atomic.html","cc84b26116b694ec353a9d530a1b57bc"],["/blog/MacType-conflict.html","db513a5edbc17f817f95c7be79c331b2"],["/blog/Minor-CPU-model-of-gem5.html","630894c826b3e2fb4affef2aaee1c8bb"],["/blog/Python-translate-maketrans.html","ed2ff87328b1e3c2244535f023a85138"],["/blog/Raspberry-PI-Using.html","444c9bd9fae37f42dc02e8001f1d230f"],["/blog/Test-My-Blog.html","db7177d14021c49c171f1e3c86f1e53b"],["/blog/Xilinx-can-not-find-gpioh.html","ec8021703a060658bcecb03b570add08"],["/blog/android.html","a62978f4fce1b04341faabb3274bf8d5"],["/blog/anime-18-10.html","436dd81da3af20a8377f9fefd6ede0ab"],["/blog/anime-2016-10.html","6a882a226eeedd4f3a6e9b96b2af9081"],["/blog/anime-2017-1.html","b698de6b2a6da2e7459248851a3b02bd"],["/blog/anime-2017-10.html","2a1152c6b597ecb47e1858b7ed4bcdc4"],["/blog/anime-2017-4.html","f7914b1d24fb9a6277a5d539857cfdeb"],["/blog/anime-2017-7.html","2b0504e660f6890ac96a86cebb232098"],["/blog/anime-2018-01.html","cda566b006d5dfaa6f75d48d80c193fd"],["/blog/anime-2018-7.html","5d985b84912d8af189873b57baab65a6"],["/blog/anime-list.html","1824fe2c7cea91dfa9393f2209ee4de9"],["/blog/archlinux-gui.html","a84c58351f6440e9925b8f1832020e51"],["/blog/archlinux-install.html","d637a19fd414909bcc35662c42eb641f"],["/blog/bat-command-line-parametric.html","4ab36cf92d4aabd83796b7d57b0a5dbb"],["/blog/bat-file-argv.html","9b69d07e787ac50c42c18b336d2f3b17"],["/blog/bing-to-qqpinyin.html","79039b7b257ee2c688eb9af155fa314e"],["/blog/blog-categries-change.html","a8f307428881d944a71f1c21a86230c9"],["/blog/blog-update.html","e5383ead2f263fa49ac5c997e2915180"],["/blog/bookmark.html","9eda48a75ad14ff70e37ecc901a547f2"],["/blog/bufanjilu.html","e73af9763199671710191656838ac40e"],["/blog/byr-spider.html","cb91f6b9305ff4078b71065c4356973b"],["/blog/c-standard-library-learn-1.html","186293cd2f635ee0bf59901bc3f2b6ae"],["/blog/chinese-hacker.html","7c72d517d2ca110e339eda5c6b28be98"],["/blog/choulaobie.html","ec079e8da1a76b3e42243713ff7fe1e5"],["/blog/chuanyuelishi.html","e57d2c16cbcdb7b3ea51263c8bdf957c"],["/blog/database-test.html","b715c5ede0445984982ad6b739d264a4"],["/blog/diandongche.html","27e00e01194ea3ee2aeb3b97ac13a838"],["/blog/digital-image-processing-hw4.html","fb6ae2ef8d4bb8a46284b11e76f231d1"],["/blog/fortune-lolcat.html","989fda0db34a46aefd9ebd0f25098442"],["/blog/from-observable-universe-to-planck-length.html","b59621c55de635d9bad35c6b7460548f"],["/blog/fsutil-hardlink-junction-and-ln.html","eabbed5ca3b9a03ad2996564c4e635a1"],["/blog/geek-tech-internet-browser-to-editor.html","928ee6bfe379fcea1c31b7d5103fdc7a"],["/blog/gem5-tutorials.html","bf2add71d5cd66a079d89be3bea1b9df"],["/blog/git-undo.html","064cbfc86f0b3b77800ab575c95ad4e8"],["/blog/github-education-pack.html","a139bb843501e8db487c8f3cad7a43b7"],["/blog/graduate.html","bff0fabd6de8ec2cf4ee73e0c5baa3c2"],["/blog/helloseed-api.html","af1fa2cdacbf2ee045be12476045ea31"],["/blog/https-github-pages-custom-domain.html","5e52ca0db2c70c599e9a419c1b62f22d"],["/blog/huawei-P7-error.html","51452557f27e08c0f571b1d650bbf81d"],["/blog/install-archlinux-on-USB.html","c423b8c16c8ae2a9d19395c98800bc73"],["/blog/jekyll-editor-hack.html","2bf780f5ad4b43ae1c99cb02861e0086"],["/blog/linux.html","f37bb7ab7038a52bf13715371b5004f0"],["/blog/magic-weekly-1.html","ddcb8a5ef79125ea1f7582c688871744"],["/blog/malatang.html","79e3f58126d0bf0d94f9d5cdbf721c3e"],["/blog/markdown-extended-latex.html","f34590b15fbdc09c1b133d337b7969d1"],["/blog/master-interview.html","f5f1243e9dbec9a1d4aa5a8816041bea"],["/blog/midnight-thought-1.html","721e6518322d82a51fc1f17d59ce21f3"],["/blog/midnight-thought-2.html","1af07c49e699ce073fa27c026c3a6fbd"],["/blog/midnight-thought-3.html","52296c4217fdcef504ba0ff1e548416f"],["/blog/midnight-thought-4.html","f1e96c98c9b9788de0f4024190dc6e0d"],["/blog/minicom-the-best.html","c126c6d8344cabe956931e90bd331bc3"],["/blog/my-desktop.html","df4dbf59037b53dd8a2fea26a5a93e7e"],["/blog/note-take-tools.html","89e10c9169c8759aabe5282724f2b41e"],["/blog/owncloud-nextcloud-install.html","b96aa5558ede0d4e0c1b9e50193f245b"],["/blog/pass-google-pagespeed.html","d37d859284bc226fb0377f9841f5c22f"],["/blog/pep-257-docstring-conventions-zh.html","c2fe7876fe60866771741d4e7a6845a5"],["/blog/python-argv-error-in-windows.html","98fbd0355529ebdbdaaa814401632118"],["/blog/python-skills.html","24c94cb28879b3078df210a722749e7e"],["/blog/python-special-method-names.html","f719df04b63a6e0d92c107818e8c6a8b"],["/blog/quickstart-for-simulink.html","a91560c82cdcb17d6b6b7186051d3a55"],["/blog/run-background.html","db4ee2284185308a1a6894e55b23c6db"],["/blog/sanguosha-pudg.html","a47998a08802888d42b0c1726222ad67"],["/blog/simplest-note-develop-note.html","9f7bc0a0c91dcab4d23b4fd7b4345803"],["/blog/simplify-the-img-upload-in-markdown.html","4d296e72b377e53db807b3c599954090"],["/blog/ss-set.html","7c00bc384272f019d15da9918f8a6178"],["/blog/tools.html","ff1069fffb4a950377964236c006c806"],["/blog/use-mklink-to-save-space-of-C.html","a5e2475b0ccf8cd7be739b7beacb5f29"],["/blog/verilog.html","7535396acbfa089af4af63ef5149d05b"],["/blog/vim.html","1c519a667e301febb52e49e8188b90e5"],["/blog/vps-choice.html","54173a5490bc8b70192db66ad389528f"],["/blog/whats-new-in-python.html","8ef795c3bf6084d93fc9b2868a83a2cd"],["/blog/win10-boot-repair.html","38ffd01a26f981512a7af80160704403"],["/blog/win10-bug-about-bing.html","0377987f7ed9eb370ac06413f35b1de9"],["/blog/windows-linux-autostart.html","b8cae858fe5e88e922b2bc28ed844a56"],["/blog/windows-or-linux.html","01f5fde750538c35168f358c594f9bff"],["/blog/windows.html","dbd46e82036fe6959285cb130d0c6a4a"],["/blog/xiaoshuo.html","4c6d29bc43c1487141eccea763f51dd2"],["/blog/xilinx-vivado-usage.html","77fee0c6ea8586739ca17dd910712853"],["/blog/xipai.html","4cc2736afe5c9ba190c75c07969c61fa"],["/blog/your-name.html","3f5f6ef41f7a311a4127dc73478366a2"],["/blog/zedboard-1.html","0e0ca060f488b146f61fcd5e476fed4b"],["/blog/zedboard-2.html","20d77c87290b898a4da746db234e2230"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","6ed698b79eda5065164d4878dc05bf7b"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","0caf8eee5ab1b1f64e229d94899f3eb2"],["/page2/index.html","9f1ec5e2576df4abb6996b4285271c61"],["/page3/index.html","0e8d6f67a300317d7de82022353663a7"],["/page4/index.html","28abeff215f251df4878b3a0202894ad"],["/page5/index.html","4169626427a6c17914a3fe4fbf04ed4b"],["/page6/index.html","c2c42c200a876589c8c35984ea6fa599"],["/page7/index.html","47de93c902bfbe6fdfb192e96ef42914"],["/page8/index.html","849a5685029bab245aa114aa320a1b2f"],["/page9/index.html","9c867148c2aa273d3803f97ba28107ab"],["/tag.html","1632c26b2aa6356579c543875a305e6a"]];
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







