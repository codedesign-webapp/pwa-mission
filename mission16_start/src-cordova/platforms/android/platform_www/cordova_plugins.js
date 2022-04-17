cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "phonegap-plugin-media-stream.MediaDevices",
      "file": "plugins/phonegap-plugin-media-stream/www/android/MediaDevices.js",
      "pluginId": "phonegap-plugin-media-stream",
      "clobbers": [
        "navigator.mediaDevices"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-splashscreen": "6.0.1",
    "es6-promise-plugin": "4.2.2",
    "phonegap-plugin-media-stream": "1.2.1",
    "phonegap-plugin-image-capture": "1.1.2"
  };
});