window.onload = function (){
    
    var oTab = document.getElementById('tab');
    var oNex = document.getElementById('nextTab');
    var oMls = oTab.getElementsByTagName('div');//获取目录
    var oZjs = oNex.getElementsByTagName('div');
    
    (function (){
        for(var i=0;i<oMls.length;i++){
            oMls[i].index = i;
            oZjs[i].index = i;
            oMls[i].onmouseover = function (){
                oZjs[this.index].style.display = 'block';
                this.style.backgroundColor = '#ccc';
            };
            oMls[i].onmouseout = function (){
                oZjs[this.index].style.display = 'none';
                this.style.backgroundColor ='#ade0ff';
            };
            oZjs[i].onmouseover = function (){
                oZjs[this.index].style.display = 'block';
                oMls[this.index].style.backgroundColor = '#ccc';
            };
            oZjs[i].onmouseout = function (){
                oZjs[this.index].style.display = 'none';
                oMls[this.index].style.backgroundColor = '#ade0ff';
            };
            
        }
    })();
};