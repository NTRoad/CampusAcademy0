window.onload = function() {
    var oTab = document.getElementById('tab');
    var oNextTab = document.getElementById('nextTab');
    var oMls = oTab.getElementsByTagName('div');
    var oZjs = oNextTab.getElementsByTagName('ul');

    (function() {
        for (var i = 0; i < oMls.length; i++) {
            oMls[i].index = i;
            oZjs[i].index = i;

            oMls[i].addEventListener('mouseover', function() {
                oZjs[this.index].style.display = 'block';
                this.style.backgroundColor = '#ccc';
            }, false);
            oMls[i].addEventListener('mouseout', function() {
                oZjs[this.index].style.display = 'none';
                this.style.backgroundColor = '#ade0ff';
            }, false);
            oZjs[i].addEventListener('mouseover', function() {
                this.style.display = 'block';
                oMls[this.index].style.backgroundColor = '#ccc';
            }, false);
            oZjs[i].addEventListener('mouseout', function() {
                this.style.display = 'none';
                oMls[this.index].style.backgroundColor = '#ade0ff';
            }, false);

            var oLis = oZjs[i].getElementsByTagName('li');

            for (var j = 0; j < oLis.length; j++) {
                oLis[j].index = j;
                oLis[j].getElementsByTagName('div')[0].style.display = 'none';
                oLis[j].addEventListener('mouseover', function() {
                    this.style.backgroundColor = '#ccc';
                    //alert(oLis[this.index].getElementsByTagName('div')[0].style.display);
                    //oLis[this.index].getElementsByTagName('div')[0].style.display = "block";
                    this.getElementsByTagName('div')[0].style.display = 'block';
                }, false);
                oLis[j].addEventListener('mouseout', function() {
                    this.style.backgroundColor = '#eef';
                    this.getElementsByTagName('div')[0].style.display = 'none';
                }, false);
            }
        }
    })();
};