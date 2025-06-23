
console.log("WELCOME ETCH A SKETCH!")


const startButton = document.getElementById("start");
const addButton = document.getElementById("add");
const container = document.getElementById("container");

addButton.disable = true;


startButton.addEventListener("click", () => {
   
    console.log("Game Started!");

    const newDiv = document.createElement("div");
    //  // Add some text inside the new div
    newDiv.textContent = "I'm a new div!";
    // Optional: Add a class for styling
    newDiv.classList.add("new-box");
    // Append the new div to the container
    container.appendChild(newDiv);

    startButton.disabled = true;
    
});



addButton.addEventListener("click", () => {
   
    const newDiv = document.createElement("div");
    //  // Add some text inside the new div
    newDiv.textContent = "I'm a new div!";
    // Optional: Add a class for styling
    newDiv.classList.add("new-box");
    // Append the new div to the container
    container.appendChild(newDiv);

    if (container.childElementCount == 4) {

        for(i = 0;i<4;i++){
                    console.log("inside if!")
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
        newDiv.textContent = "I'm a flex test!";
        container.classList.add("flex-column");

        }

    }

});















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