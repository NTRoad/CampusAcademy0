window.onload = function (){

    var oBtn1 = document.getElementById('btn1'); //开始游戏按钮
    var oBtn2 = document.getElementById('btn2'); //重新开始按钮
    var oBack = document.getElementById('games'); //游戏主体
    var boomArr = new Array();      //存放游戏的数组
    var oP = document.getElementsByTagName('span');
    var arrX = 0;       //行数
    var arrY = 0;       //列数
    var boomNum = 0;    //炸弹数

    var timer = null;   //定时器


    //初始化存放炸弹的数组
    function setBoomArr(){
        var setBoomCount = 0;
        for(var i=0;i<arrX;i++){
            boomArr[i] = new Array();
            for(var j=0;j<arrY;j++){
                boomArr[i][j] = 0;
            }
        }
        var ran1 = 0;
        var ran2 = 0;
        while(setBoomCount<boomNum){
            ran1 = parseInt(Math.random()*arrX);
            ran2 = parseInt(Math.random()*arrY);
            if(boomArr[ran1][ran2]==0){
                setBoomCount++;
                boomArr[ran1][ran2] = 1;
            }
        }
    }


    //根据宽高生成背景
    function getBack(){
        oBack.style.width = arrY*20+"px";
        oBack.style.height = arrX*20+"px";
        oBack.style.left = parseInt((820-arrY*20)/2)+"px"
    }

    //根据周围雷的数量生成块的数字
    function getNumber(x,y){
        var count = 0;
        if(x>0&&y>0&&boomArr[x-1][y-1]==1){
            count++;
        }
        if(x>0&&boomArr[x-1][y]==1){
            count++;
        }
        if(x>0&&y<arrY-1&&boomArr[x-1][y+1]==1){
            count++;
        }
        if(y>0&&boomArr[x][y-1]==1){
            count++;
        }
        if(y<arrY-1&&boomArr[x][y+1]==1){
            count++;
        }
        if(x<arrX-1&&y>0&&boomArr[x+1][y-1]==1){
            count++;
        }
        if(x<arrX-1&&boomArr[x+1][y]==1){
            count++;
        }
        if(x<arrX-1&&y<arrY-1&&boomArr[x+1][y+1]==1){
            count++;
        }

        if(count==0){
            return "";
        }
        else{
            return count;
        }
    }

    //游戏结束，显示全部
    function showAll(){
        var oDivs = oBack.getElementsByTagName('div');
        for(var i=0;i<arrX*arrY;i++){
            oDivs[i].firstChild.style.display = "block";
        }
    }

    //打开空格周围区域
    function showSome(ind){
        var oDivs = oBack.getElementsByTagName('div');
        var x=parseInt(ind/arrY);
        var y=parseInt(ind%arrY);
        if(x>0&&y>0&&oDivs[ind-arrY-1].firstChild.style.display == "none"&&!oDivs[ind-arrY-1].firstChild.src){
            oDivs[ind-arrY-1].firstChild.style.display = "block";
            oDivs[ind-arrY-1].state = 1;
            if(oDivs[ind-arrY-1].firstChild.innerHTML==""){
                showSome(ind-arrY-1);
            }
        }
        if(x>0&&oDivs[ind-arrY].firstChild.style.display == "none"&&!oDivs[ind-arrY].firstChild.src){
            oDivs[ind-arrY].firstChild.style.display = "block";
            oDivs[ind-arrY].state = 1;
            if(oDivs[ind-arrY].firstChild.innerHTML==""){
                showSome(ind-arrY);
            }
        }
        if(x>0&&y<arrY-1&&oDivs[ind-arrY+1].firstChild.style.display == "none"&&!oDivs[ind-arrY+1].firstChild.src){
            oDivs[ind-arrY+1].firstChild.style.display = "block";
            oDivs[ind-arrY+1].state = 1;
            if(oDivs[ind-arrY+1].firstChild.innerHTML==""){
                showSome(ind-arrY+1);
            }
        }
        if(y>0&&oDivs[ind-1].firstChild.style.display == "none"&&!oDivs[ind-1].firstChild.src){
            oDivs[ind-1].firstChild.style.display = "block";
            oDivs[ind-1].state = 1;
            if(oDivs[ind-1].firstChild.innerHTML==""){
                showSome(ind-1);
            }
        }
        if(y<arrY-1&&oDivs[ind+1].firstChild.style.display == "none"&&!oDivs[ind+1].firstChild.src){
            oDivs[ind+1].firstChild.style.display = "block";
            oDivs[ind+1].state = 1;
            if(oDivs[ind+1].firstChild.innerHTML==""){
                showSome(ind+1);
            }
        }
        if(x<arrX-1&&y>0&&oDivs[ind+arrY-1].firstChild.style.display == "none"&&!oDivs[ind+arrY-1].firstChild.src){
            oDivs[ind+arrY-1].firstChild.style.display = "block";
            oDivs[ind+arrY-1].state = 1;
            if(oDivs[ind+arrY-1].firstChild.innerHTML==""){
                showSome(ind+arrY-1);
            }
        }
        if(x<arrX-1&&oDivs[ind+arrY].firstChild.style.display == "none"&&!oDivs[ind+arrY].firstChild.src){
            oDivs[ind+arrY].firstChild.style.display = "block";
            oDivs[ind+arrY].state = 1;
            if(oDivs[ind+arrY].firstChild.innerHTML==""){
                showSome(ind+arrY);
            }
        }
        if(x<arrX-1&&y<arrY-1&&oDivs[ind+arrY+1].firstChild.style.display == "none"&&!oDivs[ind+arrY+1].firstChild.src){
            oDivs[ind+arrY+1].firstChild.style.display = "block";
            oDivs[ind+arrY+1].state = 1;
            if(oDivs[ind+arrY+1].firstChild.innerHTML==""){
                showSome(ind+arrY+1);
            }
        }
    }

    function doJug(){
        var oDivs = oBack.getElementsByTagName('div');
        var s = 0;
        for(var i=0;i<oDivs.length;i++){
            //alert(oDivs[i].firstChild.src+" "+oDivs[i].firstChild.display);
            if(!oDivs[i].firstChild.src&&oDivs[i].firstChild.style.display=="none"){
                return;
            }
        }
        showAll();
        setTimeout(function (){
            alert('恭喜您完成挑战！\n用时：'+oP[1].innerHTML+"秒\n点击继续重新开始");
            setBoomArr(); //初始化数组
            setGame();//初始化游戏
            //初始化用时和剩余雷数
            if(timer){
                clearInterval(timer);
                oP[1].innerHTML=0;
            }
            timer = setInterval(function(){
                oP[1].innerHTML = parseInt(oP[1].innerHTML)+1;
            },1000);
            oP[2].innerHTML = boomNum;
            },10);
    }

    //初始化游戏
    function setGame(){
        oBack.innerHTML = "";
        //alert(arrX*arrY);
        for(var i=0;i<arrX*arrY;i++){
            var oDiv = document.createElement('div');
            oDiv.className = 'bulk';

            oBack.appendChild(oDiv);

            if(boomArr[parseInt(i/arrY)][parseInt(i%arrY)]){
                oDiv.innerHTML = "<img src='imgs/boom.png'>";
            }
            else{
                oDiv.innerHTML = "<nums>"+getNumber(parseInt(i/arrY),parseInt(i%arrY))+"</nums>";
            }
            oDiv.firstChild.style.display = "none";

            //去掉游戏部分浏览器自带的右键点击事件
            oBack.oncontextmenu = function (e){
                return false;
            }
            oDiv.state = 0;     //保存每个游戏块的状态
            oDiv.index = i;     //给每个块添加索引
            //给每个块添加点击事件
            oDiv.onmousedown = function (event){
                //判断是否是左键点击
                if(event.button===0){
                    //判断这个块此时的状态
                    if(this.state==0){
                        this.firstChild.style.display = "block";
                        this.state = 1;
                        //alert(this.firstChild.src.substr(this.firstChild.src.length-13));
                        //如果踩到地雷，游戏结束
                        if(this.firstChild.src&&this.firstChild.src.substr(this.firstChild.src.length-13)
                        =="imgs/boom.png"){
                            showAll();      //游戏结束，显示全部
                            setTimeout(function (){
                                alert('对不起！您踩到地雷了,已阵亡！点击确定重新开始');
                                setBoomArr(); //初始化数组
                                setGame();//初始化游戏
                                //初始化用时和剩余雷数
                                if(timer){
                                    clearInterval(timer);
                                    oP[1].innerHTML=0;
                                }
                                timer = setInterval(function(){
                                    oP[1].innerHTML = parseInt(oP[1].innerHTML)+1;
                                },1000);
                                oP[2].innerHTML = boomNum;
                                return;
                            },10);
                        }
                        //如果打开空区域，则把其周围的也打开
                        if(!this.firstChild.src&&this.firstChild.innerHTML==""){        
                            showSome(this.index);
                        }
                        setTimeout(function() {
                            doJug(); //判断是否完成挑战
                        }, 10);
                    }
                }
                else if(event.button===2){
                    if(this.state===0){
                            var oImg2 = document.createElement('img');
                            oImg2.src = "imgs/sign.jpg";
                            this.appendChild(oImg2);
                            this.state = 2;
                            oP[2].innerHTML = parseInt(oP[2].innerHTML)-1;
                        }
                        else if(this.state===2){
                            var ofi = this.firstChild;
                            this.innerHTML = null;
                            this.appendChild(ofi);
                            this.state = 0;
                            oP[2].innerHTML = parseInt(oP[2].innerHTML)+1;
                        }
                }
            }
        }
    }

    //点击开始按钮根据难度初始化
    oBtn1.onclick = function (){
        var oChoose = document.getElementById('choose');
        if(oChoose.value === '简单'){
            arrX = 10;
            arrY = 15;
            boomNum = 25;
        }
        else if(oChoose.value === '中等'){
            arrX = 15;
            arrY = 25;
            boomNum = 70;
        }
        else{
            arrX = 20;
            arrY = 40;
            boomNum = 150;
        }
        getBack(); //生成背景大小
        setBoomArr(); //初始化数组
        setGame(); //初始化游戏
        //初始化用时和剩余雷数
        if(timer){
            clearInterval(timer);
            oP[1].innerHTML=0;
        }
        timer = setInterval(function(){
            oP[1].innerHTML = parseInt(oP[1].innerHTML)+1;
        },1000);
        oP[2].innerHTML = boomNum;
        //alert(oP[1].innerHTML);
    };

    //点击重新开始
    oBtn2.onclick = function (){
        setBoomArr(); //初始化数组
        setGame();//初始化游戏
        //初始化用时和剩余雷数
        if(timer){
            clearInterval(timer);
            oP[1].innerHTML=0;
        }
        timer = setInterval(function(){
            oP[1].innerHTML = parseInt(oP[1].innerHTML)+1;
        },1000);
        oP[2].innerHTML = boomNum;
    }
};