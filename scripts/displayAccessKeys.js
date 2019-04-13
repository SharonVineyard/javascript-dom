function displayAccessKeys(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;

	//取得文档中的所有链接
	var link = document.getElementsByTagName("a");
	var akeys = new Array();
	//遍历链接
	for(var i = 0; i < link.length; i ++){
		var current_link = link[i];
		//如果没有accesskey属性，则继续循环
		if(!current_link.getAttribute("accesskey")) continue;
		//取得accesskey的值
		var key = current_link.getAttribute("accesskey");
		//取得链接文本
		var text = current_link.lastChild.nodeValue;
		akeys[key] = text;
	}

	//创建列表
	var list = document.createElement("ul");
	for(key in akeys){
		var text = akeys[key];
		var str = key + ":" + text;
		//创建列表项
		var item = document.createElement("li");
		var item_text = document.createTextNode(str);
		item.appendChild(item_text);
		list.appendChild(item);
	}

	//创建标题
	var header = document.createElement("h3");
	var header_text = document.createTextNode("Accesskeys");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(list);
}

addLoadEvent(displayAccessKeys);