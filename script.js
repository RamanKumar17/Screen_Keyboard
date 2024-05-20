const txtarea = document.querySelector("#ta");

var colorDetails = true;
var selectedColor;

function append(val) {
  var textColor = val.innerText;
  txtarea.value += val.innerText;
  txtarea.focus();

  switch(selectedColor){
    case 1: document.getElementById("ta").style.color="yellow";
    break;
    case 2: document.getElementById("ta").style.color="skyblue";
    break;
    case 3: document.getElementById("ta").style.color="purple";
    break;
    case 4:document.getElementById("ta").style.color="magenta";
    break;
    default: document.getElementById("ta").style.color="black";
  }
}

function addSpace() {
  txtarea.value += " ";
  txtarea.focus();
}

function remove() {
  var currentValue = txtarea.value;
  txtarea.value = currentValue.slice(0, currentValue.length - 1);
  txtarea.focus();
}

function hitEnter(){
  alert("Successfully Saved");
  txtarea.value="";
}

var displayPalatte = true;

function showPalatte(){

  if(displayPalatte===true){
    document.getElementsByClassName("palette-container")[0].style.display="flex";
    displayPalatte=false;
  }else{
    selectedColor=0;
    document.getElementsByClassName("palette-container")[0].style.display="none";
    displayPalatte=true;
  }
}
var textCase = true;
function textUpperCase() {
  var buttons = document.getElementsByClassName("buttons");
  if(textCase){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.textTransform = "uppercase";
        textCase=false;
    }
  }else{
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.textTransform = "lowercase";
        textCase=true;
    }
  }
}


//for color yellow
function colorYellow(){
  selectedColor=1;
}
// for color skyblue
function colorSkyblue(){
  selectedColor=2;
}
// for color purple
function colorPurple(){
  selectedColor=3;
}
// for color magenta
function colorMagenta(){
  selectedColor=4;
}