export function urlGet() {
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


export function requestAnimationFrame() {
    return (typeof window !== 'undefined' &&
        (window.requestAnimationFrame
        || window.msRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.webkitRequestAnimationFrame))
        || function (func) {
            setTimeout(func, 16);
        };
}

export function noop() {
    
}