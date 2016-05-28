# google-cdn-data-angular

> [Google CDN](https://developers.google.com/speed/libraries/devguide) data for [google-cdn](https://github.com/passy/google-cdn).

This module makes it easy to replace references to your bower resources in your app with links to the Angular libraries on the Google CDN.

## Install

```bash
$ npm install --save-dev google-cdn google-cdn-data-angular
```

## Usage

*bower.json*:

```json
{
  "name": "my-awesome-app",
  "dependencies": {
    "angular": "1.5.6"
  }
}
```

```javascript
const googlecdn = require('google-cdn');
const fs = require('fs');
const assert = require('chai').assert;
const bowerJSON = JSON.parse(fs.readFileSync('bower.json', 'utf8'));

const markup = '<script src="bower_components/angular/angular.js"></script>';
googlecdn(markup, bowerJSON, { cdn: require('google-cdn-data-angular') }, function(err, result) {
  if (err) {
    throw err;
  }
  assert.equal(result, '<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>');
});
```

## License

MIT
