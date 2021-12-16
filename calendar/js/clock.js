// JavaScript Document
function showTime(){
	var d = new Date();
	var picture=d.getMonth()+1;
	var pic=picture;
	var date = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
	
	document.getElementById("day").innerHTML=date[d.getDay()];
	
	var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	document.getElementById("mName").innerHTML=month[d.getMonth()];
	
	var monthDate =d.getDate();
	document.getElementById("mDate").innerHTML=monthDate;
	
	var year = d.getFullYear();
	document.getElementById("yea").innerHTML=year;
	var hour = d.getHours();
	if(hour > 12){
		hour = hour - 12;}
	if(hour < 10){
		hour = "0" + hour;}
	document.getElementById("hou").innerHTML=hour;
	
	
	var minute = d.getMinutes();
	if(minute < 10){
		minute = "0" + minute;}
	document.getElementById("minu").innerHTML=minute;
	
	var second =d.getSeconds();
	if(second< 10){
		second = "0" + second;}
	document.getElementById("sec").innerHTML=second;
	
	if(pic==1){
		document.getElementById("showTime").style.backgroundImage="url('images/jan.jpg')";
	}
	if(pic==2){
		document.getElementById("showTime").style.backgroundImage="url('images/feb.jpg')";
	}
	
	if(pic==3){
		document.getElementById("showTime").style.backgroundImage="url('images/mar.jpg')";
	}
	
	if(pic==4){
		document.getElementById("showTime").style.backgroundImage="url('imahes/apr.jpg')";
	}
	
	if(pic==5 && monthDate!==4){
		document.getElementById("showTime").style.backgroundImage="url('images/may.jpg')";
	}
	
	if(pic==6){
		document.getElementById("showTime").style.backgroundImage="url('images/jun.jpg')";
	}
	
	if(pic==7){
		document.getElementById("showTime").style.backgroundImage="url('images/jul.jpg')";
	}
	
	if(pic==8){
		document.getElementById("showTime").style.backgroundImage="url('images/aug.jpg')";
	}
	
	if(pic==9){
		document.getElementById("showTime").style.backgroundImage="url('images/sep.jpg')";
	}
	if(pic==10){
		document.getElementById("showTime").style.backgroundImage="url('images/oct.jpg')";
	}
	if(pic==11){
		document.getElementById("showTime").style.backgroundImage="url('images/nov.jpg')";
	}
	if(pic==12){
		document.getElementById("showTime").style.backgroundImage="url('images/dec.jpg')";
	}
	
	if(d.getMonth()==11&&monthDate==25){
		document.getElementById("showTime").style.backgroundImage="url('images/dec.jpg')";
	}

}
showTime();
setInterval(showTime, 1000);