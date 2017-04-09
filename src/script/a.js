function a(){ 
    function hello(str){    
    var tdom = document.getElementsByTagName("body")[0].innerHTML;
    tdom += str;
    document.getElementsByTagName("body")[0].innerHTML = tdom;
}

    hello("hello world!!!");
    
    document.getElementsByTagName("body")[0].onclick = function(){
    require.ensure(['./box.js'], function(require) {

        }, 'boxs');
    }    
}
a();