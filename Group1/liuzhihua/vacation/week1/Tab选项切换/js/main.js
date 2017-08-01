window.onload = function (){

    var oBtns = document.getElementsByTagName('button');
    var oTab = document.getElementById('tab');
    var arr = ["一","二","三","四","五"];

    function printTable(theIndex){
        oTab.innerHTML = "";
        for(var i=0;i<5;i++){
            var oTr = document.createElement('tr');
            for(var j=0;j<4;j++){
                var oTd = document.createElement('td');
                oTd.innerHTML = "第"+arr[theIndex]+"张Tab";
                oTr.appendChild(oTd);
            }
            oTab.appendChild(oTr);
        }
    }
    printTable(0);
    (function (){
        for(var i=0;i<oBtns.length;i++){
        oBtns[i].index = i;
        oBtns[i].onclick = function (){
            for(var j=0;j<oBtns.length;j++){
                oBtns[j].className = "";
            }
            oBtns[this.index].className = "active";
            printTable(this.index);
        };
    }
    })();

};