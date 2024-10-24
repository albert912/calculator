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

    let operator = "";

  


    

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

  
  

   element.addEventListener("click", function () {

     if ( disp.textContent === "0") {
 

      disp.textContent = " ";

     }
         
     let dispvalue = element.textContent;
  
     disp.textContent += dispvalue;



   
   console.log(disp.textContent);

 


   });

  
});



// STEP 6




const container = document.querySelector(".operand");


container.addEventListener("click", function(event)  {

 
  
   let op = event.target.textContent;

    operator += op;

    console.log(operator);
  
    if (firstNum === " ") {

    firstNum += disp.textContent;


    console.log(firstNum);

    }
   

    disp.textContent = "0";


   });




let equ = document.querySelector(".equal");




equ.addEventListener("click", function() {




if (firstNum !== " ") {


secondNum += disp.textContent;

console.log(secondNum);

}



function operate(firstNum,secondNum, operator) {



   let result;

   let firstnum = Number(firstNum);

   let secondnum = Number(secondNum);


if (operator === "+") {


result = firstnum + secondnum;

console.log (result);

firstnum = 0;

disp.textContent = "";

firstnum += result;

disp.textContent += firstnum;

console.log(firstnum);



}

if (operator === "-") {

   result = firstnum - secondnum;

   console.log (result);
   
   firstnum = 0;
   
   disp.textContent = "";
   
   firstnum += result;
   
   disp.textContent += firstnum;
   
   console.log(firstnum);
   

}

if (operator === "*") {

   result = firstnum * secondnum;

   console.log (result);
   
   firstnum = 0;
   
   disp.textContent = "";
   
   firstnum += result;
   
   disp.textContent += firstnum;
   
   console.log(firstnum);
   


}

if (operator === "/") {

   result = firstnum / secondnum;

   console.log (result);
   
   firstnum = 0;
   
   disp.textContent = "";
   
   firstnum += result;
   
   disp.textContent += firstnum;
   
   console.log(firstnum);
   


}


operate(firstNum, secondNum, operator);


};





});




































 //const opparent = document.querySelector(".opparent")


 //opparent.addEventListener("click", (event) =>) {


  // disp.textContent = " ";


// });











//const equ = document.querySelector(".equal");












 //let storeone = disp.textContent;
    
   //console.log(storeone);






//const ops = document.querySelectorAll(".operator");



//ops.forEach(function (element) {


//element.addEventListener("click", function () {

   //disp.textContent = "0";



//});

//});





// a. You’ll need to store the first number and second number that are input into the calculator









//b. utilize the operator that the user selects










//c. and then operate() on the two numbers when the user presses the “=” key.


//STEP 5.b = create a variable to store the display value.

  //let value = disp.value;