function itHere() {
  console.log("JS Is Loaded!");
}
itHere();

document.getElementById("demoButton").onclick = function getTime() {
  document.getElementById("demoPara").innerHTML = Date();
};

function bigCat(x) {
  x.style.height = "331px";
  x.style.width = "500px";
}

function normalCat(x) {
  x.style.width = "166px";
  x.style.height = "250px";
}

function keyedDown() {
  alert("You pressed a key inside of the input field.");
}
