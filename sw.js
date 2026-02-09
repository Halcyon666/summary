// Service Worker to handle 503 errors with retry logic
const CACHE_NAME = 'halcyon666-v1';
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(self.clients.claim());
});

// Fetch event with retry logic for 503 errors
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Only handle JS and CSS files
  if (request.url.includes('/assets/js/') || request.url.includes('/assets/css/')) {
    event.respondWith(
      fetchWithRetry(request, MAX_RETRIES)
        .catch((error) => {
          console.error('Failed to fetch after retries:', request.url, error);
          return new Response('Service Unavailable', { status: 503 });
        })
    );
  }
});

// Fetch with retry logic
async function fetchWithRetry(request, retriesLeft) {
  try {
    const response = await fetch(request);
    
    // If 503 error and retries left, retry after delay
    if (response.status === 503 && retriesLeft > 0) {
      console.log(`503 error for ${request.url}, retrying... (${retriesLeft} retries left)`);
      await delay(RETRY_DELAY);
      return fetchWithRetry(request, retriesLeft - 1);
    }
    
    // If successful, cache the response
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    // Network error, try to serve from cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      console.log('Serving from cache:', request.url);
      return cachedResponse;
    }
    
    // If retries left, retry
    if (retriesLeft > 0) {
      console.log(`Network error for ${request.url}, retrying... (${retriesLeft} retries left)`);
      await delay(RETRY_DELAY);
      return fetchWithRetry(request, retriesLeft - 1);
    }
    
    throw error;
  }
}

// Delay helper
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
