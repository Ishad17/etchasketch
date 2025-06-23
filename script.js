
console.log("WELCOME ETCH A SKETCH!")


const addButton = document.getElementById("add");
const container = document.getElementById("container");

// addButton.addEventListener("click", () => {

    
// addButton.disabled = true;

    for(let j = 1; j<17; j++){

    const newDiv = document.createElement("div");
    newDiv.classList.add(`row`);
    container.appendChild(newDiv);

    for(let i = 1; i<17; i++){
        const secDiv = document.createElement("div");
        secDiv.classList.add("second");
        secDiv.classList.add("fade-in");
        secDiv.textContent = `${j}`;
        newDiv.append(secDiv);
        }
    }

// });















////////////////////////

// function startGame() {
//     console.log("Game Started!");
// }

// startButton.addEventListener("click", startGame);


////////////////////////

// startButton.addEventListener("click", function() {
//     // Your code here
//     console.log("Start button clicked!");
// });

////////////////////////