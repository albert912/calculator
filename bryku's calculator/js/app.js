let app = {
	elements: {	
		side: document.querySelector('side'),
		text: document.querySelector('textarea'),
		main: document.querySelector('main'),
		buttons: document.querySelectorAll('main button'),
	},
	textUpdate: function(value = ''){
		if(value == 'C'){ // if they clicked c button, clear textarea
			this.elements.text.value = '';
		}else if(value == '='){// if they clicked = button, calculate the string
			this.textCalculate();
		}else{// add to text area
		    console.log(value);
			this.elements.text.value += value;
		}
		// this works great, 
		// but it looks cramped when someone types a symbol after a number like "10+5"
		// Instead I think it would look better if it was "10 + 5"
		// Let's create a function that goes through and adds these extra spaces.
		// You don't really need this, I just want it to look fancy.
		this.textFormat();
	},
	textFormat: function(){
		// if you want, we could also remove characters that aren't numbers or symbols.
		// The easiest way to do this is using regex.
		//     this.elements.text.value = this.elements.text.value.replace(/[^0-9.+/*-]/gmsi, '')
		// However, I want to show you how you can do this without it.
		let acceptableCharacters = ['1','2','3','4','5','6','7','8','9','0','+','-','/','*','.'];
		let string = '';
		for(let valueIndex = 0; valueIndex < this.elements.text.value.length; valueIndex++){
			// .indexOf() will return the index of the match.
			// if there isn't a match, it will return -1 
			if(acceptableCharacters.indexOf(this.elements.text.value[valueIndex]) > -1){
				string+= this.elements.text.value[valueIndex];
			}
		}
		this.elements.text.value = string;
		
console.log(string);

		// Lets format the value text to look like "10 + 5" instead of "10+5"
		// There are many ways to do this, like using regex, but I want to keep it simple.
		// We are going to use .replaceAll() and swap the characters.
		// You will notice that instead of writing out "this.elements.text.value" every time,
		//  we just chain multiple instances of .replaceAll();
		this.elements.text.value = this.elements.text.value
			.replaceAll('+', ' + ')
			.replaceAll('-', ' - ')
			.replaceAll('/', ' / ')
			.replaceAll('*', ' * ');
		// Now we have a problem... sometimes you might get "10 +  - 5"
		// So we want to remove every instances of double spaces.
		this.elements.text.value = this.elements.text.value.replaceAll('  ',' ');
	},
	textCalculate: function(){
		// while this is called "textCalculate" we won't be calculating the string here.
		// Instead, we will call the real calculate function
		// Then when it gives us our result, we will display it using this function.
		this.textFormat();
		let equation = this.elements.text.value;
		//let answer = simpleCalculator(equation) || 'ERROR';
		let answer = simplifiedCalculator(equation) || 'ERROR';
		this.elements.side.innerHTML += `<div>${equation} = <span>${answer}</span></div>`; // add history
		this.elements.side.scrollBy(0, this.elements.side.scrollHeight); // scroll down
		this.elements.text.value = answer; // update textarea with answer
	},
};

// To be honest, I'm lazy.
// I don't want to write event listeners for every button.
// Normally, I would cheat and use the parent to grab all of the events,
// but I want to show you a more... "normal" way.
app.elements.buttons.forEach((button)=>{ // loop through buttons
    button.addEventListener('click', (event)=>{ // add event
    	app.textUpdate(event.target.innerText) // get text of button and send to input.
    });
})
app.elements.text.addEventListener('keyup', (event)=>{
	app.textFormat(); // format text
	if(event.key == 'Enter'){
		app.textCalculate();
	}
});
