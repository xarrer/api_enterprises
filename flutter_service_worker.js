'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4ede4cc92de843e1b60fd58b92102174",
"assets/assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/OpenSansCondensed-Bold.ttf": "cfd3dce57f28f5955c90fc5b5385d4b3",
"assets/assets/fonts/OpenSansCondensed-Light.ttf": "3589bddbe338e444d408f4dbc545ca1e",
"assets/assets/images/logo.png": "2900fab6285d42a3fd357894278c9d8e",
"assets/FontManifest.json": "2d1652f294897a69457b966ebf1b2981",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6de54127d381bbc97d66a8b8de2c0536",
"/": "6de54127d381bbc97d66a8b8de2c0536",
"main.dart.js": "6b424e626ea8a42ad4252a0590038e77",
"manifest.json": "15cd1edee6705c95fb2939934f1bb5cf"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
