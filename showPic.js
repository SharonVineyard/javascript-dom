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
			return (showPic(this)?false:true);
		}
	}
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

addLoadEvent(prepareGallery);