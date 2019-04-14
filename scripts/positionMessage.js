function positionMessage(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.left = "50px";
	elem.style.top = "100px";
	elem.style.position = "absolute";
	moveElement("message",200,100,10);
}
addLoadEvent(positionMessage);