# Infinite with Vite

## Bundling for salesforce

Bundle the app

```sh
$ npm run build
```

then go to `/dist/assets`:
 - rename `index-<HASH>.js` to `index.js`
 - rename `index-<HASH>.css` to `index.css`

Then archive the two files into a single zip and upload to salesforce static resource.

Let's name this resource `infinitebundle` in salesforce.

## In your LWC project

```js
import { LightningElement, api } from "lwc";

import { loadScript, loadStyle } from "lightning/platformResourceLoader";
import InfiniteBundle from "@salesforce/resourceUrl/infinitebundle";

export default class Infinite extends LightningElement {
  @api name;

  connectedCallback() {
    Promise.all([
      loadScript(this, InfiniteBundle + "/index.js"),
      loadStyle(this, InfiniteBundle + "/index.css"),
    ]).then(() => {
      // @ts-ignore
      const el = this.refs.root;

      // this is the global fn the bundle exposed
      mountApp(el);
    });
  }
}
```
