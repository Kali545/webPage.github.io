
//function helloWorld(){
//alert("Hello, world");
//}
document.getElementById("textBox");
function big(){
  textBox.style.fontSize ="24pt";
}

document.getElementsByName("radioButton")[0].addEventListener("change",function(){
    textBox.style.fontWeight="bold";
    textBox.style.color="blue";
    textBox.style.textDecoration="underline"
    alert("changed");
})

document.getElementsByName("radioButton")[1].addEventListener("change",function(){
    textBox.style.fontWeight="normal";
    textBox.style.color="black";
    textBox.style.textDecoration="none"
    alert("unchanged");
})

function moo(){
  textBox.style.textTransform="uppercase";
  var parts = textBox.value.split(".");
  var str = parts.join("-Moo");
  textBox.value=str;

}
