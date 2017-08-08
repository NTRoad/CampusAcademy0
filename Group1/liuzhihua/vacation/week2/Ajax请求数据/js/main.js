//创建跨浏览器事件对象
var EventUtil = {
        //添加事件
        addHandler: function(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + type, handler);
            } else {
                element['on' + type] = handler;
            }
        },
        //移除事件
        removeHandler: function(element, type, handler) {
            if (event.removeEventListener) {
                event.removeEventListener(type, handler, false);
            } else if (event.detachEvent) {
                event.detachEvent('on' + type, handler);
            } else {
                element['on' + type] = null;
            }
        },
        //返回当前
        getEvent: function(event) {
            return event ? event : window.event;
        }
    }
    //编写请求函数
function createXHR() {
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined") {
        if (typeof arguments.callee.activeXString != "String") {
            var versions = ["MSXML2.XMLhttp.6.0", "MSXML2.XMLhttp.3.0", "MSXML2.XMLhttp"];
            for (var i = 0, len = versions.length; i < len; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) {

                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR object available.");
    }
}

var xhr = createXHR();
EventUtil.addHandler(xhr, 'load', function() {
    if (xhr.status >= 200 && xhr.status < 300 || xhr == 340) {
        var jTable = JSON.parse(xhr.responseText);
        //alert(jTable.length);
        //alert('Object.getOwnPropertyNames(jTable[0]).length='+Object.getOwnPropertyNames(jTable[0]).length);
        var oUl = document.getElementById('ul1');
        for (var i = 0, len = jTable.length; i < len; i++) {
            var oLi = document.createElement('li');

            var oImg = document.createElement('img');
            oImg.src = jTable[i].bigPhotoUrl;
            var oDiv = document.createElement('div');
            oLi.appendChild(oImg);
            var p1 = document.createElement('p');
            p1.innerHTML = "name:<span>" + jTable[i].name + "</span>";
            oDiv.appendChild(p1);
            var p2 = document.createElement('p');
            p2.innerHTML = "provider:<span>" + jTable[i].provider + "</span>";
            oDiv.appendChild(p2);
            var p3 = document.createElement('p');
            p3.innerHTML = "targetUser:<span>" + jTable[i].targetUser + "</span>";
            oDiv.appendChild(p3);
            var p4 = document.createElement('p');
            p4.innerHTML = "providerDesc:<span>" + jTable[i].providerDesc + "</span>";
            oDiv.appendChild(p4);

            oLi.appendChild(oDiv);
            oUl.appendChild(oLi);
        }
    } else {
        alert("请求失败:" + xhr.status);
    }
});


EventUtil.addHandler(window, 'load', function(event) {
    xhr.timeout = 3000;
    xhr.ontimeout = function() {
        alert("请求数据超时"); //超时时弹出
    };
    xhr.open("get", "http://study.163.com/webDev/hotcouresByCategory.htm");
    xhr.overrideMimeType("text/htm");
    xhr.send(null);

    var oUl = document.getElementById('ul1');
    oUl.style.width = 9000 + "px";
    var oBtn1 = document.getElementById('left');
    var oBtn2 = document.getElementById('right');
    var timer = null;
    EventUtil.addHandler(oBtn1, 'click', function(event) {
        //oUl.offsetLeft = -40;
        var sl = 0;
        if (oUl.offsetLeft == -40) {
            timer = setInterval(function() {
                oUl.style.left = oUl.offsetLeft + 40 - 50 + "px";
                sl += 50;
                if (parseInt(sl) >= 8100) {
                    clearInterval(timer);
                }
            }, 2);
        } else {
            timer = setInterval(function() {
                oUl.style.left = oUl.offsetLeft + 40 + 5 + "px";
                sl += 5;
                if (parseInt(sl) >= 900) {
                    clearInterval(timer);
                }
            }, 2);
        }
    });
    EventUtil.addHandler(oBtn2, 'click', function(event) {
        //oUl.offsetLeft = -40;
        var sl = 0;
        if (oUl.offsetLeft == -8140) {
            timer = setInterval(function() {
                oUl.style.left = oUl.offsetLeft + 40 + 50 + "px";
                sl += 50;
                if (parseInt(sl) >= 8100) {
                    clearInterval(timer);
                }
            }, 2);
        } else {
            timer = setInterval(function() {
                oUl.style.left = oUl.offsetLeft + 40 - 5 + "px";
                sl += 5;
                if (parseInt(sl) >= 900) {
                    clearInterval(timer);
                }
            }, 2);
        }
    });
});