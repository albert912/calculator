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
 
    //let firstno = element.textContent;
   
 
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
 
 
 
 
 
 // STEP 6
 
 // a. You’ll need to store the first number and second number that are input into the calculator
 
 
 
 
 
 
 
 
 
 //b. utilize the operator that the user selects
 
 const opparent = document.querySelector(".opparent");
 
 opparent.addEventListener("click", (event) => {
 
   if (event.target.textContent === "+") {
 
      
 function add(a, b) {
    return a + b;
 }
 
 const additionresult = add();
 
   }
 
 
 
 
   if (event.target.textContent === "-") {
 
    function subtract(a, b) {
 
       return a - b;
      }
      
      const subtractresult = subtract();
 
    }
  
  
    
   
 
 
   if (event.target.textContent === "/") {
 
    function divide(a, b) {
 
       if (b === 0) {
          alert("A number can't be divided by zero, don't you know this??")
       } 
       
       else {
 
       return a/b;
    }
   
   }
    
   const divideresult = divide();
    
   }
 
 
 
   if (event.target.textContent === "*") {
 
    function multiply(a, b) {
 
       return a*b; 
   
   }
 
   const multiplyresult = multiply();
 
    
   }
 
 
 
 
 
 
 });
 
 
 
 
 
 
 //c. and then operate() on the two numbers when the user presses the “=” key.
 
 
 
 
 
 
 

 ///EXTRA CODE

 function operate(operator) {



   

   if (operator === "+") {
   
   
   result = firstnum + secondnum;
   
   console.log (result);
   
   firstnum = 0;
   
   disp.textContent = "";
   
   operator = "";
   
   firstNum = result;
   
   firstnum = result;
   
   disp.textContent += firstnum;
   
   
   console.log(firstnum);
   
   return firstnum;
   
   
   
   }
   
   if (operator === "-") {
   
      result = firstnum - secondnum;
   
      console.log (result);
      
      firstnum = 0;
      
      disp.textContent = "";
   
      operator = "";
   
   
      firstNum = result;
      
      firstnum += result;
      
      disp.textContent += firstnum;
      
      console.log(firstnum);
   
      return firstnum;
      
   
   }
   
   if (operator === "*") {
   
      result = firstnum * secondnum;
   
      console.log (result);
      
      firstnum = 0;
      
      disp.textContent = "";
   
      operator = "";
   
   
      firstNum = result;
      
      firstnum += result;
      
      disp.textContent += firstnum;
      
      console.log(firstnum);
   
      return firstnum;
      
   
   
   }
   
   
   
   
   
   if (operator === "/" && secondnum !== 0) {
   
   
      result = firstnum / secondnum;
   
      console.log (result);
      
      firstnum = 0;
      
      disp.textContent = "";
   
      operator = "";
   
      firstNum = result;
      
      firstnum += result;
      
      disp.textContent += firstnum;
      
      console.log(firstnum);
   
      return firstnum;
      
   }
   
   if (operator === "/" && secondnum === 0 || disp.textContent === "0" ) {
      alert("No number can be divided by 0, don't you know?");
   
      disp.textContent = "0";
   }
   
   