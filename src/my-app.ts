// src/my-app.ts
import { LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './pages/app-home';
import { router } from './router';

@customElement('my-app') // Updated custom element name
export class MyApp extends LitElement { // Updated class name
  static styles = css`
    main, .main {
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1rem;
    }
    app-home {
      width: 800px;
    }
    @media (min-width: 1200px) {
      app-standings,
      app-counter {
        width: 1200px;
      }
    }
  `;

  firstUpdated() {
    router.addEventListener('route-changed', () => {
      if ("startViewTransition" in document) {
        (document as any).startViewTransition(() => this.requestUpdate());
      }
      else {
        this.requestUpdate();
      }
    });
  }

  render() {
    return router.render();
  }
}
