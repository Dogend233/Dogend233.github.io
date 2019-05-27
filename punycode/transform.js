function Trim(str)
 { 
  return str.replace(/(^\s*)|(\s*$)/g, ""); 
}

//判断是否为空函数
function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}
var daochu="";
var idn = new idnMapping();
$("#transformer").bind("click",
    function () {
		//清空输入从新开始
		var jieguos="";
		document.getElementById('excontent').value = "";
        var inputcontent = document.getElementById('content').value;
        arr = inputcontent.split('\n');
        for (j = 0; j < arr.length; j++) {
			var newstr = "";
            var trimstr = Trim(arr[j]);
            //如果为空则添加回车符号
            if (!isEmpty(trimstr)) {
				var newstr = idn.toASCII(trimstr);
				console.log(newstr);
            } else {
				newstr = "";
            }
			jieguos += newstr+"\r\n";
        }
		document.getElementById('excontent').value = jieguos;
		daochu = jieguos;
        return false
    });

$("#antitransformer").bind("click",
    function () {
        //清空输入从新开始
		var jieguos="";
        document.getElementById('excontent').value = "";
        var inputcontent = document.getElementById('content').value;
        arr = inputcontent.split('\n');
        for (j = 0; j < arr.length; j++) {
            var newstr = "";
            var trimstr = Trim(arr[j]);
            //如果为空则添加回车符号
            if (!isEmpty(trimstr)) {
				var newstr = idn.toUnicode(trimstr);
            } else {
                newstr = "";
            }
            jieguos += newstr + "\r\n";
        }
        document.getElementById('excontent').value = jieguos;
		daochu = jieguos;
        return false
    });
	
function Copyexcontent() {
        // 获取Dom节点
       var copy = document.getElementById('excontent');
        //  用select函数将文本内容选中
        copy.select();
        document.execCommand('Copy');
        alert('复制成功')
 
}
	
$("#clearallcontent").bind("click",
  function() {
    document.getElementById('content').value = '';
    document.getElementById('excontent').value = '';
    document.getElementById('content').select();
    return false
});