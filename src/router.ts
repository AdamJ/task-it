// docs for router https://github.com/thepassle/app-tools/blob/master/router/README.md

import { html } from 'lit';

if (!(globalThis as any).URLPattern) {
  await import("urlpattern-polyfill");
}

import { Router } from '@thepassle/app-tools/router.js';
import { lazy } from '@thepassle/app-tools/router/plugins/lazy.js';
import { offline } from '@thepassle/app-tools/router/plugins/offline.js';
import { resetFocus } from '@thepassle/app-tools/router/plugins/resetFocus.js';
import { scrollToTop } from '@thepassle/app-tools/router/plugins/scrollToTop.js';
import { checkServiceWorkerUpdate } from '@thepassle/app-tools/router/plugins/checkServiceWorkerUpdate.js';

import './pages/app-home.js';

const baseURL: string = (import.meta as any).env.BASE_URL;

console.log(baseURL);

export const router = new Router({
  plugins: [
    /** Redirects to an offline page */
    offline,
    /** Checks for service worker updates on route navigations */
    checkServiceWorkerUpdate,
    scrollToTop,
    resetFocus
  ],
  fallback: '/',
    routes: [
      {
        path: resolveRouterPath(),
        title: 'Home',
        render: () => html`<app-home></app-home>`
      },
      {
        path: resolveRouterPath('about'),
        title: 'About',
        plugins: [
          lazy(() => import('./pages/app-about/app-about.js')),
          ()=>{console.error('Failed to load app-about');}
        ],
        render: () => html`<app-about></app-about>`
      },
      {
        path: resolveRouterPath('counter'),
        title: 'EDH Event Tracker',
        plugins: [
          lazy(() => import('./pages/app-counter/app-counter.js')),
          ()=>{console.error('Failed to load app-counter');}
        ],
        render: () => html`<app-counter></app-counter>`
      },
      {
        path: resolveRouterPath('game-tracker'),
        title: 'Tournament Tracker',
        plugins: [
          lazy(() => import('./pages/app-game-tracker.js')),
          ()=>{console.error('Failed to load app-standings');}
        ],
        render: () => html`<app-standings></app-standings>`
      },
      {
        path: resolveRouterPath('standard-tracker'),
        title: 'Standard Counter',
        plugins: [
          lazy(() => import('./pages/app-standard/app-standard.js')),
          ()=>{console.error('Failed to load standard-tracker');}
        ],
        render: () => html`<app-standard></app-standard>`
      }
    ]
  });

  // This function will resolve a path with whatever Base URL was passed to the vite build process.
  // Use of this function throughout the starter is not required, but highly recommended, especially if you plan to use GitHub Pages to deploy.
  // If no arg is passed to this function, it will return the base URL.

  export function resolveRouterPath(unresolvedPath?: string) {
    var resolvedPath = baseURL;
    if(unresolvedPath) {
      resolvedPath = resolvedPath + unresolvedPath;
    }

    return resolvedPath;
  }
