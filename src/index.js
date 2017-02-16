import $ from '../lib/zepto';
import './css/normalize.css';


function a() {
    function urlGet() {
        var aQuery = window.location.href.split("?");  //取得Get参数
        var aGET = new Array();
        if (aQuery.length > 1) {
            var aBuf = aQuery[1].split("&");
            for (var i = 0, iLoop = aBuf.length; i < iLoop; i++) {
                var aTmp = aBuf[i].split("=");  //分离key与Value
                aGET[aTmp[0]] = aTmp[1];
            }
        }
        return aGET;
    }

    var GET = urlGet(); //获取URL的Get参数

    var version = GET['version'];
    var isnew = GET['isnew'];
    var zhibiao = GET['zhibiao'];

    var url1 = "http://121.42.153.68:6088/SiteManage/ArcgisPub/images/" + version + "_" + zhibiao + "_" + isnew + ".png";


    var imageLayer = new AMap.ImageLayer({
        url: url1,
        bounds: new AMap.Bounds(
            [73.361945079999998, 10.289688560000005],
            [135.07842411999999, 58.2061676]
        ),
        zooms: [1, 18],
        opacity: 0.75
    });
    var map = new AMap.Map('container', {
        resizeEnable: true,
        center: [116.33719, 39.942384],
        zoom: 4,
        layers: [
            new AMap.TileLayer(),
            imageLayer
        ]
    });

}
$(document).ready(()=> {
    a();
});