var getOSAndBrowser = function () {
    var os = navigator.platform;
    var userAgent = navigator.userAgent;
    var info = "";
    var tempArray = "";
    if (os.indexOf("Win") > -1) {
        if (userAgent.indexOf("Windows NT 5.0") > -1) {
            info += "Win2000"
        } else if (userAgent.indexOf("Windows NT 5.1") > -1) {
            info += "WinXP"
        } else if (userAgent.indexOf("Windows NT 5.2") > -1) {
            info += "Win2003"
        } else if (userAgent.indexOf("Windows NT 6.0") > -1) {
            info += "WindowsVista"
        } else if (userAgent.indexOf("Windows NT 6.1") > -1 || userAgent.indexOf("Windows 7") > -1) {
            info += "Win7"
        } else if (userAgent.indexOf("Windows NT 6.2") > -1 || userAgent.indexOf("Windows 8") > -1) {
            info += "Win8"
        } else if (userAgent.indexOf("Windows NT 6.3") > -1 || userAgent.indexOf("Windows 8.1") > -1) {
            info += "Win8.1"
        } else if (userAgent.indexOf("Windows NT 10.0") > -1 || userAgent.indexOf("Windows 10") > -1) {
            info += "Win10"
        } else {
            info += "Other"
        }
    } else if (os.indexOf("Mac") > -1) {
        info += "Mac"
    } else if (os.indexOf("X11") > -1) {
        info += "Unix"
    } else if (os.indexOf("Linux") > -1) {
        info += "Linux"
    } else {
        info += "Other"
    }
    info += "/";
    var isOpera = userAgent.indexOf("Opera") > -1;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
    var isEdge = userAgent.toLowerCase().indexOf("edge") > -1 && !isIE;
    var isIE11 = (userAgent.toLowerCase().indexOf("trident") > -1 && userAgent.indexOf("rv") > -1);
    if (/[Ff]irefox(\/\d+\.\d+)/.test(userAgent)) {
        tempArray = /([Ff]irefox)\/(\d+\.\d+)/.exec(userAgent);
        info += tempArray[1] + tempArray[2]
    } else if (isIE) {
        var version = "";
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            version = "IE7"
        } else if (fIEVersion == 8) {
            version = "IE8"
        } else if (fIEVersion == 9) {
            version = "IE9"
        } else if (fIEVersion == 10) {
            version = "IE10"
        } else {
            version = "0"
        }
        info += version
    } else if (isEdge) {
        info += "Edge"
    } else if (isIE11) {
        info += "IE11"
    } else if (/[Cc]hrome\/\d+/.test(userAgent)) {
        tempArray = /([Cc]hrome)\/(\d+)/.exec(userAgent);
        info += tempArray[1] + tempArray[2]
    } else if (/[Vv]ersion\/\d+\.\d+\.\d+(\.\d)* *[Ss]afari/.test(userAgent)) {
        tempArray = /[Vv]ersion\/(\d+\.\d+\.\d+)(\.\d)* *([Ss]afari)/.exec(userAgent);
        info += tempArray[3] + tempArray[1]
    } else if (/[Oo]pera.+[Vv]ersion\/\d+\.\d+/.test(userAgent)) {
        tempArray = /([Oo]pera).+[Vv]ersion\/(\d+)\.\d+/.exec(userAgent);
        info += tempArray[1] + tempArray[2]
    } else {
        info += "unknown"
    }
    return info
};
document.write("????????????" + returnCitySN["cname"] + "?????????");
document.write("<br>?????? IP ??????" + returnCitySN["cip"]);
document.write("<br>??????????????????" + getOSAndBrowser());
