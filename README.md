# olympus-force-https
This Olympus Plugin is used to force HTTPS on all requests. Generally you will use this remotely, but not in localhost:

```js
var isEB = !!(~['production', 'staging', 'testing'].indexOf(process.env.NODE_ENV));

if (isEB) {
  olympus.use(require('olympus-force-https')());

  //or
  olympus.loadPlugins([
    require('olympus-force-https')()
  ]);
}
```
