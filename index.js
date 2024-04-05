// Your code here

    /*document.addEventListener("keydown",function (event) {
    if(event.key ==="ArrowLeft"){
        const ArrowLeft=dodger.style.left.replace("px","");
        const left=parseInt(ArrowLeft,10);

        dodger.style.left=`${left-1}px`;
    }
    
})
}
moveDodgerLeft();*/
/*function moveDodgerLeft(){
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
          const leftNumbers = dodger.style.left.replace("px", "");
          const left = parseInt(leftNumbers, 10);
      
          dodger.style.left = `${left -1}px`;
        }
      });
    }
  
    function moveDodgerRight() {
      document.addEventListener("keyup", function (event) {
        if (event.key === "ArrowRight") {
          let rightNumbers = dodger.style.right.replace("px", "");
      
          if (!rightNumbers.length) {
            rightNumbers = "0";
          }
      
          const right = parseInt(rightNumbers, 10);
      
          dodger.style.right = `${left + 1}px`;
        }
      })
    }
*/
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight(){
    const rightNumbers=dodger.style.left.replace("px","");
    const left=parseInt(rightNumbers,10);

    if (left<360){
        dodger.style.left =`${left +1}px`;
    }
    }
    document.addEventListener("keyup",function(e){
        if(e.key==="ArrowRight"){
           moveDodgerRight();
        }
    });
    