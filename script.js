let color;

const container = document.getElementById("container");
const button = document.getElementById("button");
button.addEventListener('click', newGrid);
window.addEventListener("load", setDefaultGrid);
window.addEventListener("load", createButtons);

function setDefaultGrid() {
  makeGrid(16,16);
}

function newGrid () {
	let keepGoing = true;
  let squares = parseInt(prompt("How many squares do you want:", 16));
	while(keepGoing) {
    if (squares > 64 || squares < 1){
        alert('Use a range between 1 and 64 squares');
        squares = parseInt(prompt("How many squares do you want:", 16));
  	} else {
  			keepGoing= false;
    }
  }

  let rows = squares;
  let cols = squares; 
  
  erraseGrid();
  makeGrid(rows, cols);
}

function makeGrid(rows, cols) {

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
      cell.addEventListener("mouseenter", gridColor);
    }
}

function erraseGrid() {
// Eliminando todos los hijos de un elemento
	while (container.firstChild) {
  container.removeChild(container.firstChild);
  }
}

let randomColor = '#FFFFFF';

function gridColor() {
	if (color == 'black') {
    	this.style.backgroundColor = 'black';
   } else if (color == 'red') {
   		this.style.backgroundColor = 'red';
   } else if (color == 'white') {
   		this.style.backgroundColor = 'white';
   } else if (color == randomColor) {
   		this.style.backgroundColor = random_rgba();
   } 
}

function changeColor() {
	if (this.id == 'blackButton') {
  		color = 'black';
  } else if (this.id == 'redButton'){
  		color = 'red';
  } else if (this.id == 'erraseButton'){
  		color = 'white';
  } else if (this.id == 'randomButton'){
  		color = randomColor;
  }
}

function createButtons() {
		//black button
    const blackButton = document.createElement("button");
    buttonContainer.appendChild(blackButton).className = 'button-color';
    blackButton.setAttribute('id','blackButton');
    blackButton.innerText = 'Black';
    blackButton.addEventListener("click", changeColor);
    //red button
    const redButton = document.createElement("button");
    buttonContainer.appendChild(redButton).className = 'button-color';
    redButton.innerText = 'Red';
    redButton.setAttribute('id','redButton');
    redButton.addEventListener("click", changeColor);
     //random button
    const randomButton = document.createElement("button");
    buttonContainer.appendChild(randomButton).className = 'button-color';
    randomButton.innerText = 'Random';
    randomButton.setAttribute('id','randomButton');
    randomButton.addEventListener("click", changeColor);
    //errase button
    const erraseButton = document.createElement("button");
    buttonContainer.appendChild(erraseButton).className = 'button-color';
    erraseButton.innerText = 'Errase';
    erraseButton.setAttribute('id','erraseButton');
    erraseButton.addEventListener("click", changeColor);
    
}

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
