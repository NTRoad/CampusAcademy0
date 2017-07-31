window.onload = function (){
    var oText1 = document.getElementById('text1');
    var oText2 = document.getElementById('text2');
    var oBtn1 = document.getElementById('btn1');
    var sArry1 = [];
    var sArry2 = [];
    
    //show2()渲染爱好输出Div部分
    function show2(){
        var oShow2 =document.getElementById('show2');
        oShow2.innerHTML = "";
        for(var i=0;i<sArry2.length;i++){
            var oDiv = document.createElement('div');
            oDiv.index = i;
            oDiv.innerHTML = sArry2[i];
            oDiv.onmouseover = function (){
                this.innerHTML = "删除"+this.innerHTML;
                this.className = "onmous";
            }
            oDiv.onmouseout = function (){
                this.innerHTML = sArry2[this.index];
                this.className = "";
            }
            oDiv.onclick = function (){
                sArry2.splice(this.index,1);
                show2();
                return;
            }
            oShow2.appendChild(oDiv);
        }
    }
    //确认兴趣爱好按钮点击事件
    oBtn1.onclick = function (){
        if(oText2.value==""){
            alert("无输入");
        }
        else{
            var sText = oText2.value;
            var newArr = [];
            var x1=0;
            for(var j=0;j<sText.length;j++){
                if(sText[j]=='\n'||sText[j]==','||sText[j]=='.'
                ||sText[j]=='\\'||sText[j]=='\''||sText[j]==' '
                ||sText[j]=='\t'||sText[j]=='，'||sText[j]=='/'
                ){
                    //if(x1==0){
                        newArr.push(sText.substr(x1,j-x1));
                    //}else{
                      //  newArr.push(sText.substr(x1+1,j-x1+1));
                    //}
                    x1=j+1;
                }
            }
            newArr.push(sText.substr(x1));
            pit:
            for(var i=0;i<newArr.length;i++){
                if(newArr[i].trim()!=""){
                    for(var j=0;j<sArry2.length;j++){
                    if(sArry2[j]==newArr[i]){
                        oText2.value = "";
                        continue pit;
                    }
                }
                if(sArry2.length==10){
                    sArry2.shift();
                }

                sArry2.push(newArr[i]);
                }
            }
            oText2.value = "";
            show2();
        }
    }
    //show1()渲染Tag输出Div
    function show1(){
        var oShow1 = document.getElementById('show1');
        oShow1.innerHTML = "";
        for(var i=0;i<sArry1.length;i++){
            var oDiv = document.createElement('div');
            oDiv.index = i;
            oDiv.innerHTML = sArry1[i];
            oDiv.onmouseover = function (){
                this.innerHTML = "删除"+this.innerHTML;
                this.className = "onmous";
            }
            oDiv.onmouseout = function (){
                this.innerHTML = sArry1[this.index];
                this.className = "";
            }
            oDiv.onclick = function (){
                sArry1.splice(this.index,1);
                show1();
                return;
            }
            oShow1.appendChild(oDiv);
        }
    }
    //做出判断,是否需要调用show1()
    function doJudre(){
        //alert("..");
        var lastCh = oText1.value[oText1.value.length-1];
        //alert(lastCh);
        if(lastCh=='\n'||lastCh==','||lastCh=='.'
            ||lastCh=='\\'||lastCh=='\''||lastCh==' '
            ||lastCh=='\t'||lastCh=='，'||lastCh=='/'
            ){
                var newArr = oText1.value.substr(0,oText1.value.length-1).trim();
                if(newArr==""){
                    return;
                }
                for(var i=0;i<sArry1.length;i++){
                    if(sArry1[i]==newArr){
                        oText1.value = "";
                        return;
                    }
                }
                if(sArry1.length==10){
                    sArry1.shift();
                }
                sArry1.push(newArr);
                show1();
                oText1.value = "";
                }
        }
    
    
    //Tag输入框的输入绑定事件
    (function(){if(oText1&&oText1.addEventListener){
            oText1.addEventListener('keyup',function(e){
                var ev = e||window.event;
                var target = ev.target||ev.srcElement;
                doJudre();
            },false);
        }
    })();

}