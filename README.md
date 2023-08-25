# Infinite with Vite

Bundling for salesforce steps

```sh
$ npm run build
```

go to `/dist/assets` and rename `index-<HASH>.js` to `index.js` and `index-<HASH>.css` to `index.css`

Then archive the two files into a single zip and upload to salesforce static resource, let's say `infinitebundle`

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
