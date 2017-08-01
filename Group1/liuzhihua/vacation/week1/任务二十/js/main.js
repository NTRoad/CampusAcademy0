window.onload = function (){
    var oBtn1 = document.getElementById('add1');
    var oBtn2 = document.getElementById('add2');
    var oBtn3 = document.getElementById('remove1');
    var oBtn4 = document.getElementById('remove2');
    var oBtn5 = document.getElementById('find');
    var oTex1 = document.getElementById('text1');
    var oTex2 = document.getElementById('text2');
    var oShow = document.getElementById('outline');
    var sArr = [];
    function show(){
        oShow.innerHTML = "";
        for(var i=0;i<sArr.length;i++){
            var oDiv = document.createElement('div');
            oDiv.innerHTML = sArr[i];
            oShow.appendChild(oDiv);
        }
    }
    oBtn1.onclick = function (){
        if(oTex1.value==""){
            alert("无输入");
        }
        else{
            var sText = oTex1.value;
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
            for(var i=0;i<newArr.length;i++){
                if(newArr[i].trim()!="")
                sArr.unshift(newArr[i]);
            }
            show();
        }
    }
        oBtn2.onclick = function (){
        if(oTex1.value==""){
            alert("无输入");
        }
        else{
            var sText = oTex1.value;
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
            for(var i=0;i<newArr.length;i++){
                if(newArr[i].trim()!="")
                sArr.push(newArr[i]);
            }
            show();
        }
    }
    oBtn4.onclick = function (){
        var s = sArr.pop();
        show();
        alert("删除了："+s);
    }
    oBtn3.onclick = function (){
        var s = sArr.shift();
        show();
        alert("删除了："+s);
    }
    oBtn5.onclick = function (){
        var sfin = oTex2.value;
        oShow.innerHTML = "";
        for(var i=0;i<sArr.length;i++){
            var oDiv = document.createElement('div');
            oDiv.innerHTML = sArr[i];
            if(sArr[i].indexOf(sfin)>-1){
                oDiv.className = "finded";
            }
            oShow.appendChild(oDiv);
        }
    }
}