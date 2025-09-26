import { defineCustomElement } from 'vue'

import HelloWorldCe from './components/HelloWorld.ce.vue'

class HelloWorld extends defineCustomElement(HelloWorldCe, { shadowRootOptions: { delegatesFocus: true } }) {
  // do low-level custom element stuff here
}

if (!customElements.get('hello-world')) {
  customElements.define('hello-world', HelloWorld)
}
