
var iframe1 = true;
var iframe2 = false;
var iframe3 = false;
var iframe4 = false;
var illumination1 = true;
var illumination2 = false;
var illumination3 = false;
var illumination4 = false;
var illumination5 = false;
var illumination6 = false;
var illumination7 = false;
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

function illumination_left(){
	if (illumination2 == true) {
		document.getElementById("illumination_list").className = "display_illumination1";
		illumination2 = false;
		illumination1 = true;
		document.getElementById("illumination_left_arrow").style.visibility = "hidden";
	} else if (illumination3 == true){
		document.getElementById("illumination_list").className = "display_illumination2_left";
		illumination3 = false;
		illumination2 = true;
	} else if (illumination4 == true){
		document.getElementById("illumination_list").className = "display_illumination3_left";
		illumination4 = false;
		illumination3 = true;
	} else if (illumination5 == true){
		document.getElementById("illumination_list").className = "display_illumination4_left";
		illumination5 = false;
		illumination4 = true;
	} else if (illumination6 == true){
		document.getElementById("illumination_list").className = "display_illumination5_left";
		illumination6 = false;
		illumination5 = true;
	} else if (illumination7 == true){
		document.getElementById("illumination_list").className = "display_illumination6_left";
		illumination7 = false;
		illumination6 = true;
		document.getElementById("illumination_right_arrow").style.visibility = "visible";
	}
}

function illumination_right(){
	if (illumination1 == true) {
		document.getElementById("illumination_list").className = "display_illumination2_right";
		illumination1 = false;
		illumination2 = true;
		document.getElementById("illumination_left_arrow").style.visibility = "visible";
	} else if (illumination2 == true){
		document.getElementById("illumination_list").className = "display_illumination3_right";
		illumination2 = false;
		illumination3 = true;
	} else if (illumination3 == true){
		document.getElementById("illumination_list").className = "display_illumination4_right";
		illumination3 = false;
		illumination4 = true;
	} else if (illumination4 == true){
		document.getElementById("illumination_list").className = "display_illumination5_right";
		illumination4 = false;
		illumination5 = true;
	} else if (illumination5 == true){
		document.getElementById("illumination_list").className = "display_illumination6_right";
		illumination5 = false;
		illumination6 = true;
	} else if (illumination6 == true){
		document.getElementById("illumination_list").className = "display_illumination7";
		illumination6 = false;
		illumination7 = true;
		document.getElementById("illumination_right_arrow").style.visibility = "hidden";
	}
}