//图片更换
function myshuffling() {
	var x = document.getElementById("img");
	var y = parseInt(document.defaultView.getComputedStyle(x, null).left);
	if(y == -4130) {
		y = 0;
	} else {
		y = y - 590;
	}
	x.style.left = y + "px";
}
//更改li样式
//function myli(){
//	var x = document.getElementById("img");
//	var y = parseInt(document.defaultView.getComputedStyle(x, null).left);
//	if(y==0){
//		var z = document.getElementById("imglione");
//		var s = window.getComputedStyle(imglioneElement,":before");
//		z.style.bgColor="rgba(240, 240, 240, 0.4)";
//	    s.bgColor="white";
//	    s.borderColor="white";
//	}
//	if(y==-590){
//		var z = document.getElementById("imglitwo");
//		var s = window.getComputedStyle(imglitwoElement,":before");
//		z.style.bgColor="rgba(240, 240, 240, 0.4)";
//	    s.bgColor="white";
//	    s.borderColor="white";
//	}
//	if(y==-1180){
//		var z = document.getElementById("imglithree");
//		var s = window.getComputedStyle(imglithreeElement,":before");
//		z.style.bgColor="rgba(240, 240, 240, 0.4)";
//	    s.bgColor="white";
//	    s.borderColor="white";
//	}
//	if(y==-1770){
//		var z = document.getElementById("imglifour");
//		var s = window.getComputedStyle(imglifourElement,":before");
//		z.style.bgColor="rgba(240, 240, 240, 0.4)";
//	    s.bgColor="white";
//	    s.borderColor="white";
//	}
//	if(y==-2360){
//		var z = document.getElementById("imglifive");
//		var s = window.getComputedStyle(imglifiveElement,":before");
//		z.style.bgColor="rgba(240, 240, 240, 0.4)";
//	    s.bgColor="white";
//	    s.borderColor="white";
//	}
//	if(y==-2950){
//		var z = document.getElementById("imglisix");
//		var s = window.getComputedStyle(imglisixElement,":before");
//		z.style.bgColor="rgba(240, 240, 240, 0.4)";
//	    s.bgColor="white";
//	    s.borderColor="white";
//	}
//	if(y==-3540){
//		var z = document.getElementById("imgliseven");
//		var s = window.getComputedStyle(imglisevenElement,":before");
//		z.style.bgColor="rgba(240, 240, 240, 0.4)";
//	    s.bgColor="white";
//	    s.borderColor="white";
//	}
//	if(y==-4130){
//		var z = document.getElementById("imglieight");
//		var s = window.getComputedStyle(imglieightElement,":before");
//		z.style.bgColor="rgba(240, 240, 240, 0.4)";
//	    s.bgColor="white";
//	    s.borderColor="white";
//	}
//}

//鼠标移入小图标时显示相对的图片
function mylione() {
	var x = document.getElementById("img");
	x.style.left = "0px";
}

function mylitwo() {
	var x = document.getElementById("img");
	x.style.left = "-590px";
}

function mylithree() {
	var x = document.getElementById("img");
	x.style.left = "-1180px";
}

function mylifour() {
	var x = document.getElementById("img");
	x.style.left = "-1770px";
}

function mylifive() {
	var x = document.getElementById("img");
	x.style.left = "-2360px";
	setTimeout("myli()", 10);
}

function mylisix() {
	var x = document.getElementById("img");
	x.style.left = "-2950px";
}

function myliseven() {
	var x = document.getElementById("img");
	x.style.left = "-3540px";
}

function mylieight() {
	var x = document.getElementById("img");
	x.style.left = "-4130px";
}
//点击左右按钮更换图片
function myright() {
	var x = document.getElementById("img");
	var y = parseInt(document.defaultView.getComputedStyle(x, null).left);
	if(y == -4130) {
		y = 0;
	} else {
		y = y - 590;
	}
	x.style.left = y + "px";
}

function myleft() {
	var x = document.getElementById("img");
	var y = parseInt(document.defaultView.getComputedStyle(x, null).left);
	if(y == 0) {
		y = -4130;
	} else {
		y = y + 590;
	}
	x.style.left = y + "px";
}

function change() {
	var x = document.getElementById("head");
	x.style.display = "none";
}
//循环播放图片
setInterval("myshuffling()", "3500");