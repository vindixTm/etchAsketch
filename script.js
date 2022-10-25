const sketchpadDiv  = document.querySelector('.sketchpad');
const colourInput   = document.querySelector('#colorpicker');
const btns 			= document.querySelectorAll('button');

//SKETCHPAD GENERATED WHEN OPENED FOR THE FIRST TIME****************************************************

let number = 16;
let prev   = 0;
sketchPadGenerator();
//******************************************************************************************************


btns.forEach(btn => btn.addEventListener('click', buttonFuctions(btn)))

// COLOUR CHANGER **************************************************************************************

colourInput.addEventListener('click', function(){
	let colour = colourInput.value;
	cells = document.querySelectorAll('.cell');
})
//******************************************************************************************************

//FUNCTION TO GENERATE SKECHPAD**************************************************************************

function sketchPadGenerator(int){
	int = number;
	for( let i = 0; i < int; i++ ){
		let row = document.createElement('div');
		row.className = 'row';
		for( let j = 0; j < int ; j++ ){
			let cell = document.createElement('div');
			cell.className ='cell';
			row.appendChild(cell);
		}
		sketchpadDiv.appendChild(row);
	} 

	cells = document.querySelectorAll('.cell');

	cells.forEach(cell => cell.addEventListener('mouseover', function(e){
		cell.style.backgroundColor = colourInput.value;
	}));
	prev = number

}
//*********************************************************************************************************


//FUNCTION TO DELETE A ROW IN SKETCHPAD********************************************************************
function sketchPadRemover(){
	const row = document.querySelector('.row');
	sketchpadDiv.removeChild(row);
	
}
//*********************************************************************************************************
	

//RANDOM COLOUR PICKER*************************************************************************************
function colourPicker(){
	const colours = ['#1ecbe1', '#d34c2c', '#9e2bd4', '#61959e', '#59a66d', '#dec221', '#3aabc5', '#a4845b'];
	let randColour = colours[Math.floor(Math.random() * colours.length)];
	return randColour;
};
//*********************************************************************************************************

//RESET SKETCHPAD******************************************************************************************
function clearSketchPad(){
	for(let i = 0; i < prev; i++)sketchPadRemover();
	number = 16;
	sketchPadGenerator();
};
//********************************************************************************************************

//FUNCTION TO CHANGE THE NUMBER OF PIXELS IN THE  SKETCHPAD***********************************************
function pixelSize(){
	number =parseInt( prompt("input the number of squares per side"), 10); 
	if (number > 100 ) {
	 	number =parseInt( prompt("input the number of squares per side"), 10); 
	}
	else{
		for(let i = 0; i < prev; i++)sketchPadRemover();
		 sketchPadGenerator();
	};	
};
//********************************************************************************************************

//FUNCTION TO PICK A RANDOM COLOUR FOR EACH PIXEL*********************************************************
function rainbow(){
	cells = document.querySelectorAll('.cell');

	cells.forEach(cell => cell.addEventListener('mouseover', function(e){
		cell.style.backgroundColor = colourPicker();
	}));
};
//********************************************************************************************************
//FUNCTIONS TO STATE WHACH EACH BUTTON SHOULD DO WHEN CLICKED*********************************************
function buttonFuctions(btn){
	
	return (btn)=>{
		btn.stopPropagation
		// console.log(btn);
		let idName = btn.target.getAttribute('id');
		console.log(idName);


		if (idName === 'pixelSize'){pixelSize();
		}
		else if (idName === 'reset') {clearSketchPad();	
		}
		else if (idName === 'rainbow') {rainbow();
		}
	};
};
//******************************************************************************************************

