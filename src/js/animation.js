/**
 * 动画主类
 */


import {requestAnimationFrame, noop}  from './util';
import easing from './easing'

/**
 * @typedef {Object} IZRenderStage
 * @property {Function} update
 */


var Animation = function (options) {
    options = options || {};
    this.onframe = options.onframe || noop;
    this._totalTime = options.totalTime;
    this._easyFunc = options.easeFunc || easing.linear;
    this._doneBack = options.doneBack || noop;
    this._running = false;
    this._time = null;
};

Animation.prototype = {

    _update: function () {
        var now = new Date().getTime();
        var delta = now - this._time;
        var percent = delta / this._totalTime;
        this.onframe(this._easyFunc(percent));
        if (percent >= 1) {
            this.stop();
            this._doneBack();
        }
    }

    , _startLoop: function () {
        var self = this;
        this._running = true;
        function step() {
            if (self._running) {
                requestAnimationFrame()(step);
                self._update();
            }
        }

        requestAnimationFrame()(step);
    }

    /**
     * 开始运行动画
     */
    , start: function () {
        this._time = new Date().getTime();
        this._startLoop();
    }

    /**
     * 停止运行动画
     */
    , stop: function () {
        this._running = false;
    }
};


export default Animation;
