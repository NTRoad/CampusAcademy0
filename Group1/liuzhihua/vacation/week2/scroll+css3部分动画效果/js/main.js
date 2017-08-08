//创建跨浏览器事件对象
var EventUtil = {
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }

    },
    getEvent: function(event) {
        return event ? event : window.event;
    },
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    //滚动
    getWheelDelta: function(event) {
        return event.wheelDelta ? event.wheelDelta : event.detail * (-40);
    }

}
EventUtil.addHandler(window, 'load', function() {
    var oOutline = document.getElementById('outline');
    var oDivs = oOutline.getElementsByTagName('div');
    for (let i = 0, len = oDivs.length; i < len; i++) {
        oDivs[i].style.height = document.documentElement.clientHeight + "px";
    }
    oOutline.style.height = parseInt(oDivs[0].style.height) * 8 + "px";
    var otoB = document.getElementById('toBottom');
    var otoT = document.getElementById('toTop');
    var otoPs = document.getElementsByClassName('toPrevious');
    var otoNs = document.getElementsByClassName('toNext');

    EventUtil.addHandler(oOutline, 'mousewheel', function(event) {
        event = EventUtil.getEvent(event);
        EventUtil.preventDefault(event);
        if (EventUtil.getWheelDelta(event) > 0) {
            goPrevious();
        } else {
            goNext();
        }
    });

    EventUtil.addHandler(otoT, 'click', function() {
        goTop();
    });
    EventUtil.addHandler(otoB, 'click', function() {
        goBottom();
    });
    for (let i = 0, len = otoPs.length; i < len; i++) {
        EventUtil.addHandler(otoPs[i], 'click', function() {
            goPrevious();
        });
    }
    for (let i = 0, len = otoNs.length; i < len; i++) {
        EventUtil.addHandler(otoNs[i], 'click', function() {
            goNext();
        });
    }
});

function goTop() {
    var oOutline = document.getElementById('outline');
    var timer = null;
    var jl = 0;
    var iDv = parseInt(parseInt(oOutline.style.height) * 7 / 8);
    timer = setInterval(function() {
        if (jl < iDv - 30) {
            jl += 30;
            window.scrollBy(0, -30);
        } else {
            window.scrollBy(0, jl - iDv);
            clearInterval(timer);
        }
    }, 5);
}

function goBottom() {
    var oOutline = document.getElementById('outline');
    var timer = null;
    var jl = 0;
    var iDv = parseInt(parseInt(oOutline.style.height) * 7 / 8);
    timer = setInterval(function() {
        if (jl < iDv - 30) {
            jl += 30;
            window.scrollBy(0, 30);
        } else {
            window.scrollBy(0, iDv - jl);
            clearInterval(timer);
        }
    }, 5);
}

function goNext() {
    var oOutline = document.getElementById('outline');
    var timer = null;
    var jl = 0;
    var iDv = parseInt(parseInt(oOutline.style.height) / 8);
    timer = setInterval(function() {
        if (jl < iDv - 10) {
            jl += 10;
            window.scrollBy(0, 10);
        } else {
            window.scrollBy(0, iDv - jl);
            clearInterval(timer);
        }
    }, 5);
}

function goPrevious() {
    var oOutline = document.getElementById('outline');
    var timer = null;
    var jl = 0;
    var iDv = parseInt(parseInt(oOutline.style.height) / 8);
    timer = setInterval(function() {
        if (jl < iDv - 10) {
            jl += 10;
            window.scrollBy(0, -10);
        } else {
            window.scrollBy(0, jl - iDv);
            clearInterval(timer);
        }
    }, 5);
}