self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pwa-conversor-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './favicon.ico',
        './manifest.webmanifest'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
