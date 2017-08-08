window.onload = function (){
    var aqiData = {};

    /**
     * 从用户输入中获取数据，向aqiData中增加一条数据
     * 然后渲染aqi-list列表，增加新增的数据
     */
    function addAqiData() {
        var oCity = document.getElementById('aqi-city-input');
        var oNum = document.getElementById('aqi-value-input');
        if(oCity.value.trim()==""||oCity.value.trim()==""){
            alert('输入不能为空！');
            return;
        }
        //alert('xxx');
        if(/[^\u4E00-\u9FA5a-zA-Z\\s ]/.test(oCity.value.trim())){
            alert('城市名必须中英文');
            return;
        }
        if(/[^0-9]/.test(oNum.value.trim())){
            alert("空气指数必须为整数");
            return;
        }
        //alert('xxx');
        aqiData[oCity.value] = oNum.value;
    }

    /**
     * 渲染aqi-table表格
     */
    function renderAqiList() {
        var oCtiys = Object.getOwnPropertyNames(aqiData);
        var oTable = document.getElementById('aqi-table');
        oTable.innerHTML = "";
        if(oCtiys.length==0){
            return;
        }
        for(var i=-1;i<oCtiys.length;i++){
            var oTr = document.createElement('tr');
            if(i==-1){
                oTr.innerHTML = "<td>城市</td><td>空气质量</td><td>操作</td>";
            }
            else{
                oTr.innerHTML = "<td>"+oCtiys[i]+"</td>"+"<td>"+aqiData[oCtiys[i]]+"</td><td><button>删除</button></td>";
            }
            oTable.appendChild(oTr);
        }

    }

    /**
     * 点击add-btn时的处理逻辑
     * 获取用户输入，更新数据，并进行页面呈现的更新
     */
    function addBtnHandle() {
        addAqiData();
        renderAqiList();
    }

    /**
     * 点击各个删除按钮的时候的处理逻辑
     * 获取哪个城市数据被删，删除数据，更新表格显示
     */
    function delBtnHandle() {
        // do sth.
        var oTable = document.getElementById('aqi-table');
        var oBtns = oTable.getElementsByTagName('button');
        for(var i=0;i<oBtns.length;i++){
            oBtns[i].index = i;
            oBtns[i].addEventListener('click',function (){
                var aCity = Object.getOwnPropertyNames(aqiData);
                delete aqiData[aCity[this.index]];
                renderAqiList();
                delBtnHandle();
            },false);
        }

        //renderAqiList();
    }

    function init() {

        // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
        var oBtn = document.getElementById('add-btn');
        oBtn.addEventListener('click',function(){
            addBtnHandle();
            delBtnHandle();
        },false);
        // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
        // var oTable = document.getElementById('aqi-table');

        // oTable.addEventListener('change',function (){
        //     alert('4555');
        //     delBtnHandle();
        // },false);
    }

    init();
};