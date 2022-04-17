cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "id": "es6-promise-plugin.Promise",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "file": "plugins/phonegap-plugin-image-capture/src/browser/ImageCapture.js",
        "id": "phonegap-plugin-image-capture.ImageCapture",
        "pluginId": "phonegap-plugin-image-capture",
        "clobbers": [
            "window.ImageCapture"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-splashscreen": "6.0.1",
    "es6-promise-plugin": "4.2.2",
    "phonegap-plugin-media-stream": "1.2.1",
    "phonegap-plugin-image-capture": "1.1.2"
}
// BOTTOM OF METADATA
});