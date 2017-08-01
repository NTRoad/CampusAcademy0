window.onload = function (){

    var oBtn1 = document.getElementById('btn1');
    var oBtn2 = document.getElementById('btn2');
    var oBtn3 = document.getElementById('btn3');
    var oPrint = document.getElementsByTagName('span');
    var timer = null;
    function run(){
        timer = setInterval(function(){
            if(parseInt(oPrint[2].innerHTML)<59){
                if(parseInt(oPrint[2].innerHTML)>=9){
                    oPrint[2].innerHTML = parseInt(oPrint[2].innerHTML)+1+"";
                }
                else{
                    oPrint[2].innerHTML = "0"+(parseInt(oPrint[2].innerHTML)+1);
                }
            }
            else{
                if(parseInt(oPrint[1].innerHTML)<59){
                    oPrint[2].innerHTML = "00";
                    if(parseInt(oPrint[1].innerHTML)>=9){
                        oPrint[1].innerHTML = parseInt(oPrint[1].innerHTML)+1+"";
                    }
                    else{
                        oPrint[1].innerHTML = "0"+(parseInt(oPrint[1].innerHTML)+1);
                    }
                }
                else{
                    oPrint[2].innerHTML = "00";
                    oPrint[1].innerHTML = "00";
                    if(parseInt(oPrint[0].innerHTML)>=9){
                        oPrint[0].innerHTML = parseInt(oPrint[0].innerHTML)+1+"";
                    }
                    else{
                        oPrint[0].innerHTML = "0"+(parseInt(oPrint[0].innerHTML)+1);
                    }
                }
            }
        },1000);
    }
    oBtn1.onclick = function (){
        clearInterval(timer);
    }
    oBtn2.onclick = function (){
        run();
    }
    oBtn3.onclick = function (){
        oPrint[2].innerHTML = "00";
        oPrint[1].innerHTML = "00";
    }
    run();
};