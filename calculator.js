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


    let firstNum = " ";
    
    let secondNum = " ";

    let operator = " ";

  


    

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



     
 

const buttons = document.querySelectorAll(".number");





 buttons.forEach(function (element) {

   let firstno = element.textContent;
  

   element.addEventListener("click", function () {

     if ( disp.textContent === "0") {
 

      disp.textContent = " ";
     }
         
     let firstno = element.textContent;
  
     disp.textContent += firstno;

   
   console.log(disp.textContent);


//STEP 5.b = create a variable to store the display value.

  //let value = disp.value;

 


   });

   let storeone = disp.textContent;
    
   console.log(storeone);



});

//STEP 5 = Extra, event listeners operators

const dvd = document.querySelector("divide");

const mlt = document.querySelector("multiply");

const subt = document.querySelector("subtract");

const ad = document.querySelector("add");

const equ = document.querySelector("equal");

//Division

dvd.addEventListener("click", function () {


function divide(a, b) {

    return a/b;

}

});





    




// STEP 6

// a. You’ll need to store the first number and second number that are input into the calculator

//I don't really remeber how I did this in the past, but I might have used something that would tell me whether it's the first or second number I'm storing !





//b. utilize the operator that the user selects





//c. and then operate() on the two numbers when the user presses the “=” key.






