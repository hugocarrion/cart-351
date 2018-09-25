// JavaScript Document

function showAssignment1Div() {
    var x = document.getElementById("assignemnt1_div");
	var y = document.getElementById("assignment1_button");
    if (x.style.display === "none") {
        x.style.display = "block";
		y.innerHTML = "Less";
    } else {
        x.style.display = "none";
		y.innerHTML = "More";
    }
}

function showPlayaDiv() {
    var x = document.getElementById("assignment2_div");
	var y = document.getElementById("assignment2_button");
    if (x.style.display === "none") {
        x.style.display = "block";
		y.innerHTML = "Less";
    } else {
        x.style.display = "none";
		y.innerHTML = "More";
    }
}

function showSilverDiv() {
    var x = document.getElementById("assignment3_div");
	var y = document.getElementById("assignment3_button");
    if (x.style.display === "none") {
        x.style.display = "block";
		y.innerHTML = "Less";
    } else {
        x.style.display = "none";
		y.innerHTML = "More"
    }
}

function showPeopleDiv() {
    var x = document.getElementById("assignment4_div");
	var y = document.getElementById("assignment4_button");
    if (x.style.display === "none") {
        x.style.display = "block";
		y.innerHTML = "Less";
    } else {
        x.style.display = "none";
		y.innerHTML = "More"
    }
}
