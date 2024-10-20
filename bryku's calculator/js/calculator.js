// There are many ways to create a calculate, 
//  but I wanted to focus on something easily and adjustable.
// This part handles */+- but you could easily add power or other functions.


function simpleCalculator(value){
	let symbols = ['.','*','/','+','-'];
	let array = value.split(' ');
		array = array.filter((v)=>{ return v.length > 0 }); // filter out extra space
		array = array.map((v)=>{ // converts our number strings to integers
			if(symbols.indexOf(v) > -1){ return v; }
			else{ return Number(v); }
		});

	// *
	while(array.indexOf('*') > -1){
		let symbolIndex = array.indexOf('*');
		let numb1Index = symbolIndex - 1;
		let numb2Index = symbolIndex + 1;
		// trigger error if index is before array (0)
		if(numb1Index < 0){	return 'ERROR'; }
		// trigger error if index is outside of array
		if(numb2Index > array.length - 1){ return 'ERROR'; }

		// get our new value
		let value = array[symbolIndex - 1] * array[symbolIndex + 1];
		// remove old values and update
		array.splice(numb1Index, numb2Index - numb1Index + 1, value);
	}
	// Ideal we would turn this code into a seperate function.
	// However, I don't want to over complicate this.
	// So, for now I'm just copying & pasting it.
	// Just don't forget to update the symbol for each one, which is on 3 lines.

	// /
	while(array.indexOf('/') > -1){
		let symbolIndex = array.indexOf('/');
		let numb1Index = symbolIndex - 1;
		let numb2Index = symbolIndex + 1;
		// trigger error if index is before array (0)
		if(numb1Index < 0){	return 'ERROR'; }
		// trigger error if index is outside of array
		if(numb2Index > array.length - 1){ return 'ERROR'; }

		// get our new value
		let value = array[symbolIndex - 1] / array[symbolIndex + 1];
		// remove old values and update
		array.splice(numb1Index, numb2Index - numb1Index + 1, value);
	}

	// +
	while(array.indexOf('+') > -1){
		let symbolIndex = array.indexOf('+');
		let numb1Index = symbolIndex - 1;
		let numb2Index = symbolIndex + 1;
		// trigger error if index is before array (0)
		if(numb1Index < 0){	return 'ERROR'; }
		// trigger error if index is outside of array
		if(numb2Index > array.length - 1){ return 'ERROR'; }

		// get our new value
		let value = array[symbolIndex - 1] + array[symbolIndex + 1];
		// remove old values and update
		array.splice(numb1Index, numb2Index - numb1Index + 1, value);
	}

	// -
	while(array.indexOf('-') > -1){
		let symbolIndex = array.indexOf('-');
		let numb1Index = symbolIndex - 1;
		let numb2Index = symbolIndex + 1;
		// trigger error if index is before array (0)
		if(numb1Index < 0){	return 'ERROR'; }
		// trigger error if index is outside of array
		if(numb2Index > array.length - 1){ return 'ERROR'; }

		// get our new value
		let value = array[symbolIndex - 1] - array[symbolIndex + 1];
		// remove old values and update
		array.splice(numb1Index, numb2Index - numb1Index + 1, value);
	}

	return array.join(' ');
}

// The above code works, but it has an issue...
// We repeat a lot of the same code.
// Instead of doing that, we can make a second function that handles it for us.
// This will help reduce the code and making it easier to update.

function simplifiedCalculatorReplace(array, symbol){
	while(array.indexOf(symbol) > -1){
		let symbolIndex = array.indexOf(symbol);
		let numb1Index = symbolIndex - 1;
		let numb2Index = symbolIndex + 1;

		if(numb1Index < 0){	return 'ERROR'; }
		if(numb2Index > array.length - 1){ return 'ERROR'; }

		let value;
		switch(symbol){
			case '*': value = array[symbolIndex - 1] * array[symbolIndex + 1]; break;
			case '/': value = array[symbolIndex - 1] / array[symbolIndex + 1]; break;
			case '+': value = array[symbolIndex - 1] + array[symbolIndex + 1]; break;
			case '-': value = array[symbolIndex - 1] - array[symbolIndex + 1]; break;			
		}
		array.splice(numb1Index, numb2Index - numb1Index + 1, value);
	}
	return array;
}
function simplifiedCalculator(value){
	let symbols = ['.','*','/','+','-'];
	let array = value.split(' ');
		array = array.filter((v)=>{ return v.length > 0 }); // filter out extra spacequerySelector
		array = array.map((v)=>{ // converts our number strings to integers
			if(symbols.indexOf(v) > -1){ return v; }
			else{ return Number(v); }
		});

	// *
	array = simplifiedCalculatorReplace(array, '*');
	array = simplifiedCalculatorReplace(array, '/');
	array = simplifiedCalculatorReplace(array, '+');
	array = simplifiedCalculatorReplace(array, '-');

	return array.join(' ');
}


