function showPic(whichpic){
	//检查placeholder是否存在
	if(!document.getElementById("placeholder")){
		return false;
	}
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");

	//如果placeholer不是一张图片
	if(placeholder.nodeName != "IMG"){
		return false;
	}
	placeholder.setAttribute("src",source);

	//如果description不存在，则不改变其文本
	if(document.getElementById("description")){
		if(whichpic.getAttribute("title")){
			var text = whichpic.getAttribute("title");
		}else{
			var text = "";
		}
		
		var description = document.getElementById("description");

		//判断description的第一个子元素是不是文本节点
		if(description.firstChild.nodeType == 3){
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}


function prepareGallery(){
	if(!document.getElementById){
		return false;
	}
	if(!document.getElementsByTagName){
		return false;
	}
	if(!document.getElementById("imagegallery")){
		return false;
	}

	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i = 0;i < links.length;i ++){
		links[i].onclick = function(){
			return !showPic(this);
		}
	}
}


//在指定标签后面元素
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

//动态创建标记并将他们添加至html
function preparePlaceholder(){
	if(!document.createElement){
		return false;
	}
	if(!document.createTextNode){
		return false;
	}
	if(!document.getElementById){
		return false;
	}
	if(!document.getElementById("imagegallery")){
		return false;
	}

	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/zhanwei.jpg");
	placeholder.setAttribute("alt","my image gallery");

	var description = document.createElement("p");
	description.setAttribute("id","description");

	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);

	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}

//共享onload事件
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != "function"){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
