# google-cdn-data-angular

> [Google CDN](https://developers.google.com/speed/libraries/devguide) data for [google-cdn](https://github.com/passy/google-cdn).

This module makes it easy to replace references to your bower resources in your app with links to the Angular libraries on the Google CDN.

## Getting started

Install: `npm install --save-dev google-cdn google-cdn-data-angular`

### Example

*bower.json*:

```json
{
  "name": "my-awesome-app",
  "dependencies": {
    "angular": "~1.5.0"
  }
}
```

```javascript
const googlecdn = require('google-cdn');

const bowerConfig = loadJSON('bower.json');
const markup = '<script src="bower_components/angular/angular.js"></script>';
googlecdn(markup, bowerConfig, { cdn: require('google-cdn-data-angular') }, function (err, result) {
  if (err) {
    throw err;
  }

  assert.equal(result,
    '<script src="bower_components/angular/angular.js"></script>');
});
```

## License

MIT
