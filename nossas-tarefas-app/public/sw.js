if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>a(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"2441cc3da3db58fc28587c678c8a1667"},{url:"/_next/static/RxdckyV-o7STJ-JPiO1pW/_buildManifest.js",revision:"bf848f962ec707944117bd614b5cde11"},{url:"/_next/static/RxdckyV-o7STJ-JPiO1pW/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/319-52e410bd3a311a71.js",revision:"RxdckyV-o7STJ-JPiO1pW"},{url:"/_next/static/chunks/4bd1b696-b54c66733e4d5abb.js",revision:"RxdckyV-o7STJ-JPiO1pW"},{url:"/_next/static/chunks/517-da96851ff618a432.js",revision:"RxdckyV-o7STJ-JPiO1pW"},{url:"/_next/static/chunks/app/_not-found/page-1ec06a1eac5e28dd.js",revision:"RxdckyV-o7STJ-JPiO1pW"},{url:"/_next/static/chunks/app/layout-9595c68144895a13.js",revision:"RxdckyV-o7STJ-JPiO1pW"},{url:"/_next/static/chunks/app/page-a85334a112d168cc.js",revision:"RxdckyV-o7STJ-JPiO1pW"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"RxdckyV-o7STJ-JPiO1pW"},{url:"/_next/static/chunks/main-app-e5d7d5c2d2179641.js",revision:"RxdckyV-o7STJ-JPiO1pW"},{url:"/_next/static/chunks/main-c05ffb54497aa169.js",revision:"RxdckyV-o7STJ-JPiO1pW"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"RxdckyV-o7STJ-JPiO1pW"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"RxdckyV-o7STJ-JPiO1pW"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-f029a09104d09cbc.js",revision:"RxdckyV-o7STJ-JPiO1pW"},{url:"/_next/static/css/6f4b40b6a1881bee.css",revision:"6f4b40b6a1881bee"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/apple-touch-icon.png",revision:"b4bce4daea23fee3a825d3b5649d00a7"},{url:"/favicon-96x96.png",revision:"83cc9b7c7c25039efa7334457a70df9f"},{url:"/favicon.ico",revision:"7472de1fa3a65e18f6280051dd524cc6"},{url:"/favicon.svg",revision:"7c08c548d74124218bd1ae27111e9370"},{url:"/site.webmanifest",revision:"093124f41f48420bf95b780af3e93733"},{url:"/web-app-manifest-192x192.png",revision:"ac1594b76c8c9e9f7f0fac30a8b70770"},{url:"/web-app-manifest-512x512.png",revision:"1fd7f745058a4eb040acc49185debd92"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
