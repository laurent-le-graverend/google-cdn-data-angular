'use strict';

const angularFiles = [
  'angular',
  'angular-animate',
  'angular-cookies',
  'angular-loader',
  'angular-resource',
  'angular-route',
  'angular-sanitize',
  'angular-touch'
];

let data = module.exports = {};

angularFiles.forEach((item) => {
  const stableVersions = ['1.5.8', '1.5.7', '1.5.6', '1.5.5', '1.5.3', '1.5.2', '1.5.1', '1.5.0', '1.4.9', '1.4.8', '1.4.7', '1.4.6', '1.4.5', '1.4.4', '1.4.3', '1.4.2', '1.4.1', '1.4.0', '1.3.17', '1.3.16', '1.3.15'];
  data[item] = {
    versions: [].concat(stableVersions),
    url: (version) => {
      return '//ajax.googleapis.com/ajax/libs/angularjs/' + version + '/' + item + '.min.js';
    }
  }
});
