/*! @name w1tplay @version 1.0.0 @license Apache-2.0 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('video.js')) :
    typeof define === 'function' && define.amd ? define(['video.js'], factory) :
    (global.w1tplay = factory(global.videojs));
}(this, (function (videojs) { 'use strict';

    videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;

    function test() {
      console.log('test', videojs);
    }

    return test;

})));
