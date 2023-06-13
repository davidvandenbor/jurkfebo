// Get the input field element
let jurk_een = document.querySelector("#jurk_een");
let jurk_twee = document.querySelector("#jurk_twee");
let jurk_drie = document.querySelector("#jurk_drie");
let jurk_vier = document.querySelector("#jurk_vier");
let begin = document.querySelector("#begin");

// Add an event listener for the key press event
document.addEventListener("keydown", function (event) {
  let een = document.querySelector(".een");
  let twee = document.querySelector(".twee");
  let drie = document.querySelector(".drie");
  let vier = document.querySelector(".vier");

  // letter a voor jurk_een
  if (event.key === "a") {
    jurk_een.style.cssText = "display:none";
    jurk_twee.style.cssText = "display:block";
    jurk_drie.style.cssText = "display:none";
    jurk_vier.style.cssText = "display:none";
    begin.style.cssText = "display:none";
  }

    // letter w voor jurk_twee
  if (event.key === "w") {
    jurk_een.style.cssText = "display:block";
    jurk_twee.style.cssText = "display:none";
    jurk_drie.style.cssText = "display:none";
    jurk_vier.style.cssText = "display:none";
    begin.style.cssText = "display:none";
  }

    // letter s voor jurk_drie
    if (event.key === "s") {
      jurk_een.style.cssText = "display:none";
      jurk_twee.style.cssText = "display:none";
      jurk_drie.style.cssText = "display:block";
      jurk_vier.style.cssText = "display:none";
      begin.style.cssText = "display:none";
    }

      // letter d voor jurk_vier
      if (event.key === "d") {
        jurk_een.style.cssText = "display:none";
        jurk_twee.style.cssText = "display:none";
        jurk_drie.style.cssText = "display:none";
        jurk_vier.style.cssText = "display:block";
        begin.style.cssText = "display:none";
      }
});
