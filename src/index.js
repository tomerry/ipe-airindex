import $ from '../lib/zepto';
import './css/normalize.css';
import {urlGet} from './js/util';
import Animation from './js/animation';

var s = 2017021612;
function b() {
    var version = s++;
    var isnew = '2';
    var zhibiao = 'aqi';
    var url1 = "http://121.42.153.68:6088/SiteManage/ArcgisPub/images/" + version + "_" + zhibiao + "_" + isnew + ".png";
    return url1;
}

function a() {
    var map = new AMap.Map('container', {
        resizeEnable: true,
        center: [116.33719, 39.942384],
        zoom: 6,
        layers: [
            new AMap.TileLayer()]
    });

    var aaa = {
        add: function (url, doneback) {
            var opacity = 0.75;

            function fade(fadeDoneBack, fadeFrame) {
                var b = new Animation({
                    doneBack: fadeDoneBack
                    , totalTime: 100
                    , onframe: function (a) {
                        aaa._currentLayer && aaa._currentLayer.setOptions({opacity: opacity * (1 - a)});
                        fadeFrame(a);
                    }
                });
                b.start();
            }

            function show(showDoneBack) {
                var b = new Animation({
                    doneBack: function () {
                        showDoneBack();
                    }
                    , totalTime: 100
                    , onframe: function (a) {
                        aaa._currentLayer && aaa._currentLayer.setOptions({opacity: opacity * a});
                    }
                });
                b.start();
            }

            fade(function () {
                aaa._currentLayer && map.remove([aaa._currentLayer]);
                aaa._currentLayer = aaa._newlayer;
                aaa._newlayer = null;
                show(doneback);
            }, function (f) {
                if (f < 0.5) {
                    return;
                }
                var imageLayer = new AMap.ImageLayer({
                    url: url,
                    bounds: new AMap.Bounds(
                        [73.361945079999998, 10.289688560000005],
                        [135.07842411999999, 58.2061676]
                    ),
                    zooms: [1, 18],
                    opacity: 0
                });
                map.add([imageLayer]);
                aaa._newlayer = imageLayer;
                show(doneback);
            });
        }

    };

    function slider_pre() {
        var url = b();
        var image = new Image();
        image.src = url;
        image.onload = function () {
            image.onload = null;
            aaa.add(url, slier);
        }
    }

    function slier() {
        setTimeout(()=> {
            slider_pre();
        }, 2000);
    }

    // slider_pre();

    map.plugin(["AMap.ToolBar"], function () {
        map.addControl(new AMap.ToolBar());
    });

    map.setStatus({scrollWheel: false})

}
$(document).ready(()=> {
    a();
});