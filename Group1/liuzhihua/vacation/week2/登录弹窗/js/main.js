//定义跨浏览器事件对象
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
            alert('xxx');
        } else if (event.detachEvent) {
            event.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    getEvent: function(event) {
        return event ? event : window.event;
    }
};

EventUtil.addHandler(window, 'load', function(event) {
    var oBtn1 = document.getElementById('log');
    var oBack = document.getElementById('theBack');
    var oBtn2 = document.getElementById('btn2');
    oBack.style.height = window.innerHeight + "px";
    var oLog = document.getElementById('logIn');
    EventUtil.addHandler(oBtn1, 'click', function() {
        oBack.style.display = 'block';
        oLog.style.display = 'block';
    });
    EventUtil.addHandler(oBtn2, 'click', function(event) {
        event = EventUtil.getEvent(event);
        event.preventDefault();
        var oText1 = document.getElementById('text1');
        var oPass = document.getElementById('passworld');
        if (/[^\u4E00-\u9FA5a-zA-Z\\s ]/.test(oText1.value.trim())) {
            alert('用户名必须由中英文与空格组成\n请重新输入');
            return;
        }
        if (!/[0-9]{6,20}/.test(oPass.value.trim())) {
            alert("密码不能为空且必须大于6位数！\n请重新输入");
            return;
        }
        alert("亲爱的" + oText1.value + "，您已成功登录！");
        oText1.value = "";
        oPass.value = "";
        oBack.style.display = 'none';
        oLog.style.display = 'none';
    });


    //实现拖拽功能
    var oHead = document.getElementById('thehead');
    var xdX = 0;
    var xdY = 0;
    EventUtil.addHandler(oHead, 'mousedown', function(event) {
        event = EventUtil.getEvent(event);
        xdX = event.pageX - oLog.offsetLeft;
        xdY = event.pageY - oLog.offsetTop;
        //EventUtil.addHandler(oHead, 'mousemove', move);
        oHead.onmousemove = move;
    });
    EventUtil.addHandler(oHead, 'mouseup', function(event) {

        event = EventUtil.getEvent(event);
        //EventUtil.removeHandler(oHead, 'mousemove', move);
        oHead.onmousemove = null;
    });

    function move(event) {
        var oText = document.getElementById('text1');
        oLog.style.left = event.pageX - xdX + "px";
        oLog.style.top = event.pageY - xdY + "px";
    }
});