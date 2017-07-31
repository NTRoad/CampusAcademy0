window.onload = function (){

    var oUl = document.getElementById('ul1');
    var oLis = oUl.getElementsByTagName('li');
    var oBtns = document.getElementsByTagName('button');
    var oLeft = document.getElementById('left');
    var oRight = document.getElementById('right');

    var speed=-2;
    var timer = null;
    var timer2 = null;

    oUl.innerHTML =  oUl.innerHTML+oUl.innerHTML+"";
    //alert( oUl.offsetLeft);
    function run(){
        clearInterval(timer2);
        timer = setInterval(function (){
            oUl.style.left = (oUl.offsetLeft+40)+speed+"px";
            if((oUl.offsetLeft+40)<-2400){
            oUl.style.left = -40+2+"px";
        }
        if((oUl.offsetLeft+40)>0){
            oUl.style.left = -2400+2+"px";
        }
        if((oUl.offsetLeft+40)%600==0){
            clearInterval(timer);
            timer2=setInterval(function (){
                    run();
                },1500);
            }
        },2);
    }
    for(var i=0;i<oBtns.length;i++){
        oBtns[i].index = i;
        oBtns[i].onmousemove = function (){
            oUl.style.left = this.index*(-600)+"px";
            clearInterval(timer);
        };
        oBtns[i].onmouseout = function (){
            run();
        }
    }
    run();
    oRight.onclick = function (){
        speed = 2;
    }
    oLeft.onclick = function (){
        speed = -2;
    }
};