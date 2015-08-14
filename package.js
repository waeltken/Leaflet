Package.describe({
  name: 'waeltken:leaflet',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Simple package for leaflet v1.0.0-beta.1',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles([
    'dist/leaflet.css',
    'dist/leaflet-src.js'
  ], 'client');
  api.addFiles([
    'dist/images/layers-2x.png',
    'dist/images/layers.png',
    'dist/images/marker-icon-2x.png',
    'dist/images/marker-icon.png',
    'dist/images/marker-shadow.png'
  ], 'client', {isAsset: true});
});
