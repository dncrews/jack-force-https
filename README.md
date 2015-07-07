# jack-force-https
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

This Jack-Stack Plugin is used to force HTTPS on all requests. Generally you will use this remotely, but not in localhost:

```js
var isDeployed = !!(~['production', 'staging', 'testing'].indexOf(process.env.NODE_ENV));

if (isDeployed) {
  jack.add(require('olympus-force-https'));
}
```

[npm-image]: https://img.shields.io/npm/v/jack-force-https.svg
[npm-url]: https://www.npmjs.org/package/jack-force-https
[downloads-image]: https://img.shields.io/npm/dm/jack-force-https.svg
[downloads-url]: https://www.npmjs.org/package/jack-force-https
