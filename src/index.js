import $ from '../lib/zepto';
import './css/normalize.css';
import {urlGet} from './js/util';
import Animation from './js/animation';

var url_config = {
    "S": "1",
    "list": [["1333", "2017021710", "2"], ["1328", "2017021709", "2"], ["1324", "2017021708", "2"], ["1319", "2017021707", "2"], ["1325", "2017021706", "0"], ["1320", "2017021705", "0"], ["1316", "2017021704", "0"], ["1315", "2017021703", "0"], ["1306", "2017021702", "0"], ["1302", "2017021701", "0"], ["1297", "2017021700", "0"], ["1292", "2017021623", "0"], ["1287", "2017021622", "0"], ["1282", "2017021621", "0"], ["1277", "2017021620", "0"], ["1272", "2017021619", "0"], ["1271", "2017021618", "0"], ["1264", "2017021617", "0"], ["1259", "2017021616", "0"], ["1254", "2017021615", "0"], ["1250", "2017021614", "0"], ["1245", "2017021613", "0"], ["1240", "2017021612", "0"], ["1235", "2017021611", "0"], ["1230", "2017021610", "0"], ["1224", "2017021609", "0"], ["1217", "2017021608", "0"], ["1208", "2017021607", "0"], ["1207", "2017021606", "0"], ["1203", "2017021605", "0"], ["1200", "2017021604", "0"], ["1197", "2017021603", "0"], ["1194", "2017021602", "0"], ["1191", "2017021601", "0"], ["1188", "2017021600", "0"], ["1185", "2017021523", "0"], ["1184", "2017021522", "0"], ["1181", "2017021521", "0"], ["1176", "2017021520", "0"], ["1175", "2017021519", "0"], ["1170", "2017021518", "0"], ["1167", "2017021517", "0"], ["1164", "2017021516", "0"], ["1161", "2017021515", "0"], ["1158", "2017021514", "0"], ["1155", "2017021513", "0"], ["1151", "2017021512", "0"], ["1149", "2017021511", "0"], ["1146", "2017021510", "0"], ["1143", "2017021509", "0"], ["1140", "2017021508", "0"], ["1137", "2017021507", "0"], ["1136", "2017021506", "0"], ["1131", "2017021505", "0"], ["1128", "2017021504", "0"], ["1125", "2017021503", "0"], ["1122", "2017021502", "0"], ["1121", "2017021501", "0"], ["1117", "2017021500", "0"], ["1114", "2017021423", "0"], ["1111", "2017021422", "0"], ["1108", "2017021421", "0"], ["1105", "2017021420", "0"], ["1102", "2017021419", "0"], ["1099", "2017021418", "0"], ["1096", "2017021417", "0"], ["1093", "2017021416", "0"], ["1091", "2017021415", "0"], ["1087", "2017021414", "0"], ["1084", "2017021413", "0"], ["1081", "2017021412", "0"], ["1078", "2017021411", "0"], ["1075", "2017021410", "0"], ["1071", "2017021409", "0"], ["1067", "2017021408", "0"], ["1061", "2017021407", "0"], ["1053", "2017021406", "0"], ["1048", "2017021405", "0"], ["1044", "2017021404", "0"], ["1040", "2017021403", "0"], ["1036", "2017021402", "0"], ["1032", "2017021401", "0"], ["1028", "2017021400", "0"], ["1024", "2017021323", "0"], ["1020", "2017021322", "0"], ["1016", "2017021321", "0"], ["1012", "2017021320", "0"], ["1008", "2017021319", "0"], ["1004", "2017021318", "0"], ["1000", "2017021317", "0"], ["996", "2017021316", "0"], ["992", "2017021315", "0"], ["988", "2017021314", "0"], ["984", "2017021313", "0"], ["980", "2017021312", "0"], ["976", "2017021311", "0"], ["972", "2017021310", "0"], ["968", "2017021309", "0"], ["964", "2017021308", "0"], ["960", "2017021307", "0"], ["956", "2017021306", "0"], ["952", "2017021305", "0"], ["948", "2017021304", "0"], ["944", "2017021303", "0"], ["940", "2017021302", "0"], ["936", "2017021301", "0"], ["932", "2017021300", "0"], ["928", "2017021223", "0"], ["924", "2017021222", "0"], ["920", "2017021221", "0"], ["916", "2017021220", "0"], ["912", "2017021219", "0"], ["909", "2017021218", "0"], ["905", "2017021217", "0"], ["901", "2017021216", "0"], ["897", "2017021215", "0"], ["893", "2017021214", "0"], ["889", "2017021213", "0"], ["885", "2017021212", "0"], ["881", "2017021211", "0"]]
};
var index = 0;
function getCurLayerUrl() {
    var item = url_config.list[index++];
    if (!item) {
        return false;
    }
    var isnew = item[2];
    var zhibiao = 'aqi';
    var version = item[1];
    var url1 = "http://121.42.153.68:6088/SiteManage/ArcgisPub/images/" + version + "_" + zhibiao + "_" + isnew + ".png";
    return url1;
}

function run() {
    var map;

    (function initMap() {
        map = new AMap.Map('container', {
            resizeEnable: true,
            center: [116.33719, 39.942384],
            zoom: 6,
            layers: [
                new AMap.TileLayer()]
        });
        map.plugin(["AMap.ToolBar"], function () {
            map.addControl(new AMap.ToolBar());
        });
        map.setStatus({scrollWheel: false});
    })();

    function creatImageLyaer(url) {
        var imageLayer = new AMap.ImageLayer({
            url: url,
            bounds: new AMap.Bounds(
                [73.361945079999998, 10.289688560000005],
                [135.07842411999999, 58.2061676]
            ),
            zooms: [1, 18],
            opacity: 0
        });
        return imageLayer;
    }

    var layerSwitcher = {
        switch: function (url, switchDoneBack) {
            var opacity = 0.75;

            function startFade(fadeLayer, fadeDoneBack, onFadeFrame) {
                new Animation({
                    totalTime: 100
                    , doneBack: ()=> {
                        fadeDoneBack(fadeLayer)
                    }
                    , onframe: (rate)=> {
                        onFadeFrame(rate, fadeLayer)
                    }
                }).start();
            }

            function whenFadeDone(fadeLayer) {
                fadeLayer && map.remove([fadeLayer]);
            }

            function onFadeFrame(rate, fadeLayer) {
                // fadeLayer && fadeLayer.setOptions({opacity: Math.max(0.3, opacity * (1 - rate))});
            }

            // ----

            function startShow(showLayer, showDoneBack, onShowFrame) {
                new Animation({
                    totalTime: 50
                    , doneBack: ()=> {
                        showDoneBack(showLayer)
                    }
                    , onframe: (rate)=> {
                        onShowFrame(rate, showLayer)
                    }
                }).start();
            }

            function onShowFrame(rate, showLayer) {
                showLayer && showLayer.setOptions({opacity: Math.min(0.6, opacity * rate)});
            }

            // ----

            var imageLayer = creatImageLyaer(url);
            map.add([imageLayer]);
            startShow(imageLayer, switchDoneBack, onShowFrame);

            if (layerSwitcher._currentLayer) {
                startFade(layerSwitcher._currentLayer, whenFadeDone, onFadeFrame);
            }

            layerSwitcher._currentLayer = imageLayer;
        }
    };

    function loadLayerImage(url, doneBack) {
        var image = new Image();
        image.src = url;
        image.onload = function () {
            image.onload = null;
            doneBack();
        }
    }

    function showSlider(url) {
        loadLayerImage(url, ()=> {
            layerSwitcher.switch(url, showNextSlider);
        })
    }

    function showNextSlider() {
        setTimeout(()=> {
            var url = getCurLayerUrl();
            url && showSlider(url);
        }, 2000);
    }

    showSlider(getCurLayerUrl());
}

$(document).ready(run);