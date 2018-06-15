var works_list = document.getElementsByClassName("works_list")[0];
var works_list_item = document.getElementsByClassName("works_list_item");
var num = 0;
var display_iframe1 = false;
var display_iframe2_right = true;
var display_iframe2_left = false;
var display_iframe3_right = false;
var display_iframe3_left = false;
var display_iframe4 = false;

var iframes = document.getElementsByClassName("iframes_list")[0];

var illumination_list = document.getElementsByClassName("illumination_list")[0];

function works_list_visible(){
	works_list.classList.add("works_list_display");
	works_list.classList.remove("works_list_hide");
		
	for (i = 0; i < works_list_item.length; i++) { 
		works_list_item[i].classList.add("works_list_text_display");
		works_list_item[i].classList.remove("works_list_text_hide");
		num += 1;
	}
		
	num=0;
}

function works_list_hidden(){
	document.getElementsByClassName("works_list")[0].classList.remove("works_list_display");
	document.getElementsByClassName("works_list")[0].classList.add("works_list_hide");
	
	for (i = 0; i < works_list_item.length; i++) { 
			works_list_item[i].classList.remove("works_list_text_display");
			works_list_item[i].classList.add("works_list_text_hide");
			num += 1;
	}
		
	num=0;
}

function iframes_right(){
	
	if (display_iframe2_right == true) {
		iframes.classList.add("display_iframe2");
		document.getElementById("left_arrow").style.visibility = "visible";
		display_iframe2_right = !display_iframe2_right;
		display_iframe1 = !display_iframe1;
		display_iframe3_right = !display_iframe3_right;
	} else if (display_iframe3_right == true){
		iframes.classList.remove("display_iframe2");
		iframes.classList.add("display_iframe3");
		display_iframe1 = !display_iframe1;
		display_iframe3_right = !display_iframe3_right;
		display_iframe4 = !display_iframe4;
		display_iframe2_left = !display_iframe2_left;
	} else if (display_iframe4 == true){
		iframes.classList.remove("display_iframe3");
		iframes.classList.add("display_iframe4");
		document.getElementById("right_arrow").style.visibility = "hidden";
		display_iframe4 = !display_iframe4;
		display_iframe3_left = !display_iframe3_left;
		display_iframe2_left = !display_iframe2_left;
	}
}

function iframes_left(){
	
	if (display_iframe1 == true) {
		
		iframes.classList.remove("display_iframe2");
		iframes.classList.add("display_iframe1");
		display_iframe1 = !display_iframe1;
		display_iframe2_right = !display_iframe2_right;
		display_iframe3_right = !display_iframe3_right;
		document.getElementById("left_arrow").style.visibility = "hidden";
	} else if (display_iframe2_left == true) {
		iframes.classList.remove("display_iframe3");
		iframes.classList.add("display_iframe2");  
		display_iframe1 = !display_iframe1;
		display_iframe2_left = !display_iframe2_left;
		display_iframe3_right = !display_iframe3_right;
		display_iframe4 = !display_iframe4;
	} else if (display_iframe3_left == true){
		iframes.classList.remove("display_iframe4");
		iframes.classList.add("display_iframe3"); 
		display_iframe2_left = !display_iframe2_left;
		display_iframe3_left = !display_iframe3_left;
		display_iframe4 = !display_iframe4;
		document.getElementById("right_arrow").style.visibility = "visible";
	}
}

function illumination_img1(){
	illumination_list.classList.add("illumination_img1");
	illumination_list.classList.remove("illumination_img2");
	illumination_list.classList.remove("illumination_img3");
	illumination_list.classList.remove("illumination_img4");
	illumination_list.classList.remove("illumination_img5");
	illumination_list.classList.remove("illumination_img6");
	illumination_list.classList.remove("illumination_img7");
}

function illumination_img2(){
	illumination_list.classList.remove("illumination_img1");
	illumination_list.classList.add("illumination_img2");
	illumination_list.classList.remove("illumination_img3");
	illumination_list.classList.remove("illumination_img4");
	illumination_list.classList.remove("illumination_img5");
	illumination_list.classList.remove("illumination_img6");
	illumination_list.classList.remove("illumination_img7");
}

function illumination_img3(){
	illumination_list.classList.remove("illumination_img1");
	illumination_list.classList.remove("illumination_img2");
	illumination_list.classList.add("illumination_img3");
	illumination_list.classList.remove("illumination_img4");
	illumination_list.classList.remove("illumination_img5");
	illumination_list.classList.remove("illumination_img6");
	illumination_list.classList.remove("illumination_img7");
}

function illumination_img4(){
	illumination_list.classList.remove("illumination_img1");
	illumination_list.classList.remove("illumination_img2");
	illumination_list.classList.remove("illumination_img3");
	illumination_list.classList.add("illumination_img4");
	illumination_list.classList.remove("illumination_img5");
	illumination_list.classList.remove("illumination_img6");
	illumination_list.classList.remove("illumination_img7");
}

function illumination_img5(){
	illumination_list.classList.remove("illumination_img1");
	illumination_list.classList.remove("illumination_img2");
	illumination_list.classList.remove("illumination_img3");
	illumination_list.classList.remove("illumination_img4");
	illumination_list.classList.add("illumination_img5");
	illumination_list.classList.remove("illumination_img6");
	illumination_list.classList.remove("illumination_img7");
}

function illumination_img6(){
	illumination_list.classList.remove("illumination_img1");
	illumination_list.classList.remove("illumination_img2");
	illumination_list.classList.remove("illumination_img3");
	illumination_list.classList.remove("illumination_img4");
	illumination_list.classList.remove("illumination_img5");
	illumination_list.classList.add("illumination_img6");
	illumination_list.classList.remove("illumination_img7");
}

function illumination_img7(){
	illumination_list.classList.remove("illumination_img1");
	illumination_list.classList.remove("illumination_img2");
	illumination_list.classList.remove("illumination_img3");
	illumination_list.classList.remove("illumination_img4");
	illumination_list.classList.remove("illumination_img5");
	illumination_list.classList.remove("illumination_img6");
	illumination_list.classList.add("illumination_img7");
}