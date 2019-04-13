function displayAbbreviations(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;


	//获取abbr标签
	var abbreviations = document.getElementsByTagName("abbr");
	if(abbreviations.length < 1) return false;
	var defs = new Array();
	//遍历所有的缩略词
	for(var i = 0;i < abbreviations.length;i ++){
		var current_abbr = abbreviations[i];

		//如果浏览器不支持abbr标签，那么在统计abbr元素 的子节点个数时总是会返回一个错误的值——0
		if(current_abbr.childNodes.length < 1) continue;


		//获取完整名称
		var definition = current_abbr.getAttribute("title");
		//获取简写
		var key = current_abbr.firstChild.nodeValue;
		defs[key] = definition;
	}

	//创建定义列表
	var dlist = document.createElement("dl");
	//遍历definition，创建列表元素
	for (key in defs){
		var definition = defs[key];
		//创建定义标题
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//创建定义描述
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);

		//添加到定义列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}

	if(dlist.childNodes.length < 1) return false;

	//创建标题
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	//把标题添加到页面主体
	document.body.appendChild(header);
	//把定义列表添加到页面主体
	document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);