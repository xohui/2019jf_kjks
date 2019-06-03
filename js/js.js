//弹框
function dialog(id,time,url){
	$(id).show();
	if(time){
		setTimeout(function(){dialogClose(id)},time);
	}
	if(url){
		setTimeout(function(){dialogUrl(url);},time);
	}
}
function dialogClose(id){
	$(id).hide();
}
function dialogUrl(url) {
	window.location.href = url;
}
function stopClick(){
	if(event.stopPropagation)
		event.stopPropagation();
	else
		event.cancelBubble = true;
}