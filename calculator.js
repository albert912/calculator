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


    let firstNum = "";
    
    let secondNum = "";

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

bspace.addEventListener("click", () => {

let text = disp.textContent;

let backspace = text.slice(0, -1);

/// find a solution later on how to set first digit numbers to 0 if this is clicked

if (disp.textContent !== "0") {

disp.textContent = backspace;
}








});


let result;

let firsty; 


const buttons = document.querySelectorAll(".number");


 buttons.forEach(function (element) {


  

   element.addEventListener("click", function () {


   if (storeddisp === disp.textContent) {

      disp.textContent = "";
     }



     if ( disp.textContent === "0") {
 

      disp.textContent = "";

     }

    

     if (result !== 0) {

      disp.textContent = "";

      result = 0;
     }



   
         
     let dispvalue = element.textContent;

     if (disp.textContent.length < 15) {
  
     disp.textContent += dispvalue;

   }

   
   console.log(disp.textContent);


   });

  
});



// STEP 6

let storefirstnum = false;

function calculate() {

let firstnum = Number(firstNum);

let secondnum = Number(secondNum);

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
   
    firsty = result.toString();
   
   
   
   if (firsty.includes(".")) {
   
      
   
      disp.textContent += firstnum.toFixed(3);
   }
   

   else {
  
  disp.textContent += firstnum;

}


    console.log(firstnum);
   
   
   
   
   
   }
   
   if (operator === "-") {
   
      result = firstnum - secondnum;
   
      console.log (result);
      
      
      disp.textContent = "";
   
      operator = "";
   
   
      firstNum = result;
      
      firstnum = result;
   
   
   
   
       firsty = result.toString();
   
   
   
      if (firsty.includes(".")) {
      
         
      
         disp.textContent += firstnum.toFixed(3);
      }


      
   
   
   
   else {
      
     disp.textContent += firstnum;
      
      console.log(firstnum);
   
   }
      
   
   }
   
   if (operator === "*") {
   
      result = firstnum * secondnum;
   
      console.log (result);
   
      
      disp.textContent = "";
   
      operator = "";
   
   
      firstNum = result;
      
      firstnum = result;
   
   
   
    firsty = result.toString();
   
   
      if (firsty.includes(".")) {
      
         
      
      disp.textContent += firstnum.toFixed(3);
     }
     
     
     else {
      
        disp.textContent += firstnum;
      
      console.log(firstnum);

     firstNum.textContent = "0";

   }
   
   
   }
   
   
   
   
   
   if (operator === "/" && secondnum !== 0) {
   
   
      result = firstnum / secondnum;
   
      console.log (result);
     
      
      disp.textContent = "";
   
      operator = "";
   
      firstNum = result;
      
      firstnum = result;
   
   
          
      firsty = result.toString();

      
   
   
   
      if (firsty.includes(".")) {
      
         
      
       disp.textContent += firstnum.toFixed(3);
      }

      else  {

         disp.textContent += firstnum;
      
      console.log(firstnum);
   
      }
      
      
      
   
      
   }
   
   if (operator === "/" && secondNum === "0"
      //|| disp.textContent === "0" 
      ) {
      alert("No number can be divided by 0, don't you know?");
   
      disp.textContent = "0";
   }
   
   if (storefirstnum) {

      firstNum = " ";
   }
   
secondNum = "";

operator = "";
   
   };
   




let storeddisp;

const operators = document.querySelectorAll(".operator");


 operators.forEach(function (element) {



   element.addEventListener("click", function () {





   if (firstNum !== "") {

      secondNum += disp.textContent;
     }

  


   
   if (operator !== "") {

    

    return calculate();

 
 
     }



   if (firstNum === "") {

      firstNum += disp.textContent;
  
  
      console.log(firstNum);
  
      }
  
      let op = element.textContent;
      


      if (operator === "") {
       
         operator += op;

         if (secondNum !== "") {


return calculate();

   }
   
   
       console.log(operator);
     
      }

  

   storeddisp = disp.textContent;


});


   });




let equ = document.querySelector(".equal");




equ.addEventListener("click", clickEvent);

function clickEvent () {


   storefirstnum = true;


if (firstNum !== " ") {

   

secondNum += disp.textContent;

console.log(secondNum);

}



return calculate();


};


// KEYBOARD SUPPORT 

//clear

document.addEventListener("keydown", (event)=> {

if (event.key === "c") {


   disp.textContent = "0";

   firstNum = "";

   secondNum = "";

   operator = "";


}
});



//decimal

document.addEventListener("keydown", (event) =>  {

   if (event.key === ".") {
   
   
   
      let text = disp.textContent;
   
      if (!text.includes("."))
     disp.textContent += ".";
   
   
   }
   
   });
  

//backspace


document.addEventListener("keydown", (event) => {

   if (event.key === "Backspace") {

   
      let text = disp.textContent;
   
      let backspace = text.slice(0, -1);
      
      /// find a solution later on how to set first digit numbers to 0 if this is clicked
      
      if (disp.textContent.length <= 1) {
         
         disp.textContent = 0;
     
     }

    if (disp.textContent.length >= 2)  {
   
      disp.textContent = backspace;

     }
      
    
   }
   
   
   });





//numbers

document.addEventListener("keydown",  (event) => {


   

if (event.key === "0") {

   if (storeddisp === disp.textContent) {

      disp.textContent = "";
     }


   if ( disp.textContent === "0") {
 
     
      disp.textContent = "";


   } 

   if (result !== 0) {

      disp.textContent = "";

      result = 0;
     }

      if (disp.textContent.length < 15) {

      disp.textContent += "0"

   }

     }




if (event.key === "1") {

   if (storeddisp === disp.textContent) {

      disp.textContent = "";
     }


   if ( disp.textContent === "0") {
 
     
      disp.textContent = "";


   } 

   if (result !== 0) {

      disp.textContent = "";

      result = 0;
     }


     if (disp.textContent.length < 15) {

   disp.textContent += "1"

     }
}

if (event.key === "2") {

   if (storeddisp === disp.textContent) {

      disp.textContent = "";
     }


   if ( disp.textContent === "0") {
 
     
      disp.textContent = "";


   } 

   if (result !== 0) {

      disp.textContent = "";

      result = 0;
     }


   
     if (disp.textContent.length < 15) {

   disp.textContent += "2"

     }
}

if (event.key === "3") {

   if (storeddisp === disp.textContent) {

      disp.textContent = "";
     }


   if ( disp.textContent === "0") {
 
     
      disp.textContent = "";


   } 

   if (result !== 0) {

      disp.textContent = "";

      result = 0;
     }

  
     if (disp.textContent.length < 15) {

   disp.textContent += "3"

     }
}


if (event.key === "4") {

   if (storeddisp === disp.textContent) {

      disp.textContent = "";
     }


   if ( disp.textContent === "0") {
 
     
      disp.textContent = "";


   } 

   if (result !== 0) {

      disp.textContent = "";

      result = 0;
     }

   

     if (disp.textContent.length < 15) {
   disp.textContent += "4"

     }
}


if (event.key === "5") {

   if (storeddisp === disp.textContent) {

      disp.textContent = "";
     }


   if ( disp.textContent === "0") {
 
     
      disp.textContent = "";


   } 

   if (result !== 0) {

      disp.textContent = "";

      result = 0;
     }



     if (disp.textContent.length < 15) {
  

   disp.textContent += "5"

     }
}


if (event.key === "6") {

   if (storeddisp === disp.textContent) {

      disp.textContent = "";
     }


   if ( disp.textContent === "0") {
 
     
      disp.textContent = "";


   } 

   if (result !== 0) {

      disp.textContent = "";

      result = 0;
     }

   
     if (disp.textContent.length < 15) {

   disp.textContent += "6"

     }
}


if (event.key === "7") {

   if (storeddisp === disp.textContent) {

      disp.textContent = "";
     }


   if ( disp.textContent === "0") {
 
     
      disp.textContent = "";


   } 

   if (result !== 0) {

      disp.textContent = "";

      result = 0;
     }

   
     if (disp.textContent.length < 15) {

   disp.textContent += "7"

     }
}

if (event.key === "8") {

   if (storeddisp === disp.textContent) {

      disp.textContent = "";
     }


   if ( disp.textContent === "0") {
 
     
      disp.textContent = "";


   } 

   if (result !== 0) {

      disp.textContent = "";

      result = 0;
     }

  
     if (disp.textContent.length < 15) {

   disp.textContent += "8"

     }
}

if (event.key === "9") {

   if (storeddisp === disp.textContent) {

      disp.textContent = "";
     }


   if ( disp.textContent === "0") {
 
     
      disp.textContent = "";


   } 

   if (result !== 0) {

      disp.textContent = "";

      result = 0;
     }

  
     if (disp.textContent.length < 15) {

   disp.textContent += "9"

     }
}



});


//operators

document.addEventListener("keydown",  (event) => {



   
   // + starts
   if (event.key === "+") {

      console.log (event.key);

   if (firstNum !== "") {
   
      secondNum += disp.textContent;

      
     }
   
   
   
   
   
   if (operator !== "") {
   
    
   
    return calculate();
   
   
   
     }
   
   
   
   if (firstNum === "") {
   
      firstNum += disp.textContent;
   
   
      console.log(firstNum);
   
      }

   
      if (operator === "") {

         operator += "+";

         console.log(operator);
   
          if (secondNum !== "") {
      
      
         return calculate();
      
       } 
     }


      storeddisp = disp.textContent;
   
   
   } //+ ends

   // - starts
   
   if (event.key === "-") {


   if (firstNum !== "") {
   
      secondNum += disp.textContent;
     }
   
   
   
   
   
   if (operator !== "") {
   
    
   
    return calculate();
   
   
   
     }
   
   
   
   if (firstNum === "") {
   
      firstNum += disp.textContent;
   
   
      console.log(firstNum);
   
      }

   
     
      if (operator === "") {

         operator += "-";
   
          if (secondNum !== "") {
      
      
         return calculate();
      
        } }

      storeddisp = disp.textContent;
   } // - ends
   
   // / starts
   if (event.key === "/") {


   if (firstNum !== "") {
   
      secondNum += disp.textContent;
     }
   
   
   
   
   
   if (operator !== "") {
   
    
   
    return calculate();
   
   
   
     }
   
   
   
   if (firstNum === "") {
   
      firstNum += disp.textContent;
   
   
      console.log(firstNum);
   
      }

   
      if (operator === "") {

         operator += "/";
   
          if (secondNum !== "") {
      
      
         return calculate();
      
        } }

      storeddisp = disp.textContent;
   } // / ends
   
   // * starts
   if (event.key === "*") {


   if (firstNum !== "") {
   
      secondNum += disp.textContent;
     }
   
   
   
   
   
   if (operator !== "") {
   
    
   
    return calculate();
   
   
   
     }
   
   
   
   if (firstNum === "") {
   
      firstNum += disp.textContent;
   
   
      console.log(firstNum);
   
      }

   
      if (operator === "") {

      operator += "*";

       if (secondNum !== "") {
   
   
      return calculate();
   
     } }

     storeddisp = disp.textContent;

   } // * ends


    
}

);



   // equal sign


   document.addEventListener("keydown", function(event) {

    

      if (event.key === "=" || event.key === "Enter") {

        
      
         storefirstnum = true;
      
      if (firstNum !== "") {
      
         
      
      secondNum += disp.textContent;
      
      console.log(secondNum);
      
      }
      
      
      
      return calculate();
      
      
      console.log(event.key);
      
      }
      
      
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






