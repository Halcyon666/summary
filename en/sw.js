// Deprecated Service Worker.
// Keep this file to safely migrate existing users off the previous
// fetch-intercept logic that could amplify refresh failures.
const CACHE_PREFIX = 'halcyon666-';

// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter((key) => key.startsWith(CACHE_PREFIX))
        .map((key) => caches.delete(key))
    );
    await self.clients.claim();
  })());
});
