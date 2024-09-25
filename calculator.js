//STEP 1

function add(a, b) {
   return a + b;
}

function subtract(a, b) {

 return a - b;
}

function multiply(a, b) {

    return a*b;

}

function divide(a, b) {

    return a/b;

}

//STEP 2


    let firstNum;
    
    let secondNum;

    let operator;

  




// STEP 3 ?
function operate(func, a, b) {

   return func(a,b);
}


// STEP 5

//Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

// STEP 5.a = create a click event listener and find a way to display the numbers --- click --> textContent --> parseInt/parseFloat()

const disp = document.querySelector(".display");


const clr = document.querySelector(".clear");

clr.addEventListener("click", () => {

   disp.textContent = "0";
});



const buttons = document.querySelectorAll("button[id]");


 buttons.forEach(function (element) {

   element.addEventListener("click", function () {

     if ( disp.textContent === "0") {
 

      disp.textContent = " ";
     }
         

      disp.textContent += element.id;



//STEP 5.b = create a variable to store the display value.


      let value = disp.textContent;

   });



});







