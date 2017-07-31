window.onload =  function (){
	
	var oNum = document.getElementsByName("numbers");
	var oPri = document.getElementById("outputId");//获取输出
	var oCle = document.getElementById("clear");//AC
    var oDop = document.getElementById("doPrint");
	//这个函数用于判断输入
    function inspect(str){
        var charCount = 0;
        var coCount = 0;
        for(var i=0;i<str.length;i++){
            if(str[i]=="+"||str[i]=="-"||str[i]=="x"||str[i]=="%"||str[i]=="÷"){
                if(i==0||str[i-1]=="."||i==str.length||str[i+1]=="."){
                    return -1;
                }
                charCount++;
                if(coCount==1){
                    coCount--;
                }
            }
            if(str[i]=="."){
                if(i==0||i==str.length){
                    return -1;
                }
                coCount++;
            }
        }
        if(charCount!=1||coCount>1){
            return -1;
        }
    }
    

    (function (){
		for( var i=0;i<oNum.length;i++){
            oNum[i].index = i;
			oNum[i].onclick=function (){
				if(parseInt(oPri.innerHTML)==0){
					oPri.innerHTML=oNum[this.index].value+"";
				}
				else{
					oPri.innerHTML=oPri.innerHTML+""+oNum[this.index].value;
				}
			};
		}
        oCle.onclick = function (){
            oPri.innerHTML = 0+"";
        };
        oDop.onclick = function (){
            var str = oPri.innerHTML;  
            if(inspect(str)==-1){
                alert("输入格式不正确");
                return;
            }  
            else{
                for(var i=0;i<str.length;i++){
                    if(str[i]=="+"){
                        oPri.innerHTML=parseFloat(str.split("+")[0])+parseFloat(str.split("+")[1]);
                        break;
                    }
                    if(str[i]=="-"){
                        oPri.innerHTML=parseFloat(str.split("-")[0])-parseFloat(str.split("-")[1]);
                        break;
                    }
                    if(str[i]=="x"){
                        oPri.innerHTML=parseFloat(str.split("x")[0])*parseFloat(str.split("x")[1]);
                        break;
                    }
                    if(str[i]=="÷"){
                        oPri.innerHTML=parseFloat(str.split("÷")[0])/parseFloat(str.split("÷")[1]);
                        break;
                    }
                    if(str[i]=="%"){
                        oPri.innerHTML=parseFloat(str.split("%")[0])%parseFloat(str.split("%")[1]);
                        break;
                    }
                }
            }
        };
    }
	)();
};