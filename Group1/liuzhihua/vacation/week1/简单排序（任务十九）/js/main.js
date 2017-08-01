window.onload = function (){
    var oTex = document.getElementById('text1');
    var oBtn1 = document.getElementById('add1');
    var oBtn2 = document.getElementById('add2');
    var oBtn3 = document.getElementById('remove1');
    var oBtn4 = document.getElementById('remove2');
    var oBtn5 = document.getElementById('sort');
    var oOut = document.getElementById('outline');
    var arr = [];
    function show(){
        oOut.innerHTML = "";
        for(var i=0;i<arr.length;i++){
            var oDiv = document.createElement('div');
            oDiv.style.top = 2*(120-arr[i])+"px";
            oDiv.style.height = 2*arr[i]+"px";
            oOut.appendChild(oDiv);
        }
    }
    oBtn1.onclick = function (){
        var num = parseInt(oTex.value);
        if(num<10||num>=100||isNaN(num)){
            alert("请输入10到99之间的数字");
        }
        else if(arr.length==60){
            alert("你最多只能输入添加60个数字");
        }
        else{
            arr.unshift(num);
        }
        show();
    };
    oBtn2.onclick = function (){
        var num = parseInt(oTex.value);
        if(num<10||num>=100||isNaN(num)){
            alert("请输入10到99之间的数字");
        }
        else if(arr.length==60){
            alert("你最多只能输入添加60个数字");
        }
        else{
            arr.push(num);
        }
        show();
    };
    oBtn3.onclick = function (){
        var s = arr.shift();
        show();
        alert("删除了："+s);
    }
    oBtn4.onclick = function (){
        var s = arr.pop();
        show();
        alert("删除了："+s);
    }
    oBtn5.onclick = function (){
        arr.sort(function (a,b){
            return a-b;
        });
        show();
    }
}