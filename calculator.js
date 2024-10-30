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
function operation(func, a, b) {

   return func(a,b);
}


// STEP 5

//Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

// STEP 5.a = create a click event listener and find a way to display the numbers --- click --> textContent --> parseInt/parseFloat()

const disp = document.querySelector(".display");


const clr = document.querySelector(".clear");

const dcml = document.querySelector(".point");

const bspace = document.querySelector(".backspace");


dcml.addEventListener("click", () => {


let text = disp.textContent;

    if (!text.includes("."))
   disp.textContent += ".";


});


clr.addEventListener("click", () => {

   disp.textContent = "0";

   firstNum = " ";

   secondNum = " ";

   operator = "";
});


bspace.addEventListener('click', () => {
   console.log('backspace clicked')

   let text = disp.textContent

   console.log('text', text)

   let backspace = text.slice(0, -1)

   console.log('updated text', backspace)


  disp.textContent = backspace;
 

//function baspace() {


//return backspace;

//};

//baspace()


});


let result;

let firstnum = Number(firstNum);

let secondnum = Number(secondNum);

result = firstnum + secondnum;


 

const buttons = document.querySelectorAll(".number");


 buttons.forEach(function (element) {


  

   element.addEventListener("click", function () {

     if ( disp.textContent === "0") {
 

      disp.textContent = " ";

     }

 

     if (result !== 0) {

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

 
   if (operator !== "") {

      return clickEvent();
 
     }
 
  
   let op = event.target.textContent;


   if (operator === "") {
    
      operator += op;


   }

 

    console.log(operator);
  
    if (firstNum === " ") {

    firstNum += disp.textContent;


    console.log(firstNum);

    }


    disp.textContent = "0";






   });




let equ = document.querySelector(".equal");




equ.addEventListener("click", clickEvent);

function clickEvent () {






if (firstNum !== " ") {

   

secondNum = disp.textContent;

console.log(secondNum);

}



let result;

let firstnum = Number(firstNum);

let secondnum = Number(secondNum);


function operate() {

   

  
   

   if (operator === "+") {
   
   //calculates the result
   result = firstnum + secondnum;
   
   console.log(result);
   
  
   
   //erases the second number on display
   disp.textContent = "";
   
   //empties the operator so that multiple operators can be used
   operator = "";
   
   // fixes the problem when clicking clear
   firstNum = result;


   //scores the result to firstnum so that further calculation should be done by clicking multiple operators
   firstnum = result;
   
   let firsty = result.toString();
   
   
   
   if (firsty.includes(".")) {
   
      
   
      return disp.textContent += firstnum.toFixed(3);
   }
   
  
  disp.textContent += firstnum;

 
   
    console.log(firstnum);
   
   
   
   
   
   }
   
   if (operator === "-") {
   
      result = firstnum - secondnum;
   
      console.log (result);
      
    
      
      disp.textContent = "";
   
      operator = "";
   
   
      firstNum = result;
      
      firstnum = result;
   
   
   
   
      let firsty = result.toString();
   
   
   
      if (firsty.includes(".")) {
      
         
      
         return disp.textContent += firstnum.toFixed(3);
      }
      
   
   
   
   
      
      return disp.textContent += firstnum;
      
      console.log(firstnum);
   
   
      
   
   }
   
   if (operator === "*") {
   
      result = firstnum * secondnum;
   
      console.log (result);
      
   
      
      disp.textContent = "";
   
      operator = "";
   
   
      firstNum = result;
      
      firstnum = result;
   
   
   
   let firsty = result.toString();
   
   
      if (firsty.includes(".")) {
      
         
      
         return disp.textContent += firstnum.toFixed(3);
      }
      
      
        disp.textContent += firstnum;
      
      console.log(firstnum);

      return firstNum.textContent = "0";

     
   
   
      
   
   
   }
   
   
   
   
   
   if (operator === "/" && secondnum !== 0) {
   
   
      result = firstnum / secondnum;
   
      console.log (result);
      
 
      
      disp.textContent = "";
   
      operator = "";
   
      firstNum = result;
      
      firstnum = result;
   
      let firsty = result.toString();
   
   
   
      if (firsty.includes(".")) {
      
         
      
         return disp.textContent += firstnum.toFixed(3);
      }
      
      
     return disp.textContent += firstnum;
      
      console.log(firstnum);
   
   
      
   }
   
   if (operator === "/" && secondnum === 0 || disp.textContent === "0" ) {
      alert("No number can be divided by 0, don't you know?");
   
      return disp.textContent = "0";
   }
   
   

   
   };
   

   return operate();



};








































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