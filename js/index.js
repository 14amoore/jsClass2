function itHere() {
  console.log("JS Is Loaded!");
}
itHere();

document.getElementById("demoButton").onclick = function getTime() {
  document.getElementById("demoPara").innerHTML = Date();
};

Object.addEventListener("mouseover", bigCat);
