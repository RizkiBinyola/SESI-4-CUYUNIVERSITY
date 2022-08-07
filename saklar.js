let toggleall = document.getElementById("toggleall");
let toggle1 = document.getElementById("toggle1");
let toggle2 = document.getElementById("toggle2");
let toggle3 = document.getElementById("toggle3");
let toggle4 = document.getElementById("toggle4");
let lamp1 = document.getElementById("lampu1");
let lamp2 = document.getElementById("lampu2");
let lamp3 = document.getElementById("lampu3");
let lamp4 = document.getElementById("lampu4");

function cetek() {
    if (toggle1.checked) {
        lamp1.src = "assets/images/on.gif";
        lamp1.style.backgroundColor = "white";
    } else {
        lamp1.src = "assets/images/off.gif";
        lamp1.style.backgroundColor = "rgb(23 23 23)";
    }
    if (toggle2 != null){
        if (toggle2.checked) {
            lamp2.src = "assets/images/on.gif";
            lamp2.style.backgroundColor = "white";
        } else {
            lamp2.src = "assets/images/off.gif";
            lamp2.style.backgroundColor = "rgb(23 23 23)";
        }
    }
    if (toggle3 != null) {
        if(toggle3.checked){
            lamp3.src = "assets/images/on.gif";
            lamp3.style.backgroundColor = "white";
        } else {
            lamp3.src = "assets/images/off.gif";
            lamp3.style.backgroundColor = "rgb(23 23 23)";
        }
    }
    if (toggle4 != null) {
        if(toggle4.checked){
            lamp4.src = "assets/images/on.gif";
            lamp4.style.backgroundColor = "white";
        } else {
            lamp4.src = "assets/images/off.gif";
            lamp4.style.backgroundColor = "rgb(23 23 23)";
        }
    }
    if (toggle1.checked && toggle2.checked && (toggle3 == null || toggle3.checked) && (toggle4 == null || toggle4.checked)) {
        toggleall.checked = true;
        if (toggleall.checked == true) document.body.style.backgroundColor = "white";
        if (toggleall.checked == true) document.body.style.color = "rgb(23 23 23)";
    }else {
        toggleall.checked = false;
        if (toggleall.checked == false) document.body.style.backgroundColor = "rgb(23 23 23)";
        if (toggleall.checked == false) document.body.style.color = "white";
    }
}

function cetekall() {
    if (toggleall.checked) {
        lamp1.src = "assets/images/on.gif";
        lamp1.style.backgroundColor = "white";
        lamp2.src = "assets/images/on.gif";
        lamp2.style.backgroundColor = "white";
        toggle1.checked = true;
        toggle2.checked = true;
        if(toggle3 != null){
            lamp3.src = "assets/images/on.gif";
            lamp3.style.backgroundColor = "white";
            toggle3.checked = true;
        }
        if(toggle4 != null){
            toggle4.checked = true;
            lamp4.src = "assets/images/on.gif";
            lamp4.style.backgroundColor = "white";
        }
        if (toggleall != null) {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "rgb(23 23 23)";
        }
    } else {
        lamp1.src = "assets/images/off.gif";
        lamp1.style.backgroundColor = "rgb(23 23 23)";
        lamp2.src = "assets/images/off.gif";
        lamp2.style.backgroundColor = "rgb(23 23 23)";
        toggle1.checked = false;
        toggle2.checked = false;
        if(toggle3 != null){
            toggle3.checked = false;
            lamp3.src = "assets/images/off.gif";
            lamp3.style.backgroundColor = "rgb(23 23 23)";
        }
        if(toggle4 != null){
            toggle4.checked = false;
            lamp4.src = "assets/images/off.gif";
            lamp4.style.backgroundColor = "rgb(23 23 23)";
        }
        if (toggleall != null) {
            document.body.style.backgroundColor = "rgb(23 23 23)";
            document.body.style.color = "rgb(226 232 240)";
        }
    }
}

