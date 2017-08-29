console.log('Loaded!');
var ele = document.getElementById("hi");
ele.innerHTML = "New val";

var img = document.getElementById("im");
img.onclick = function () {
    img.style.marginLeft = "100px";
};