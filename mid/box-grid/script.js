document.addEventListener("keydown", function (e) {
  const activeBox = document.querySelector(".active");
  // returns all the contents of the grid in an array
  const boxes = Array.from(document.querySelectorAll(".box"));
  // create a counter to keep track of the active box
  const index = boxes.indexOf(activeBox);


  // create a function to set the active box
   function setActiveBox(newIndex) {
     activeBox.classList.remove("active");
     boxes[newIndex].classList.add("active");
   }


 switch (e.key) {
   case "ArrowUp":
     if (index > 2) setActiveBox(index - 3);
     break;
   case "ArrowDown":
     if (index < 6) setActiveBox(index + 3);
     break;
   case "ArrowLeft":
     if (index % 3 !== 0) setActiveBox(index - 1);
     break;
   case "ArrowRight":
     if (index % 3 !== 2) setActiveBox(index + 1);
     break;
 }





});
