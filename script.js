
console.log("WELCOME ETCH A SKETCH!")


const addButton = document.getElementById("add");
const container = document.getElementById("container");



addButton.addEventListener("click", () => {
    let size = parseInt(prompt("Enter number of squares per side (max 100):"));

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    createGrid(size);
});
    


function createGrid(size){
    
    container.innerHTML = "";

    for(let j = 1; j<= size; j++){

    const newDiv = document.createElement("div");
    newDiv.classList.add(`row`);
    container.appendChild(newDiv);

    for(let i = 1; i<= size; i++){
        const secDiv = document.createElement("div");
        secDiv.classList.add("second");
        secDiv.classList.add("fade-in");
        // secDiv.textContent = `${j}`;
        newDiv.append(secDiv);
        }
        
            const allDivs = document.querySelectorAll('.second');
            allDivs.forEach((div) => {
                      
                            // div.addEventListener('click', () => {
                            //     div.classList.add('clicked');
                            //  });

                            div.addEventListener('mouseenter',() => {
                            
                                let currentOpacity = parseFloat(div.style.opacity);

                                console.log(div.style.opacity);

                                // If no opacity set yet, default to 0
                                if (isNaN(currentOpacity)) {
                                    currentOpacity = 0;
                                }

                                // Increase by 0.5, max 1.0
                                const newOpacity = Math.min(currentOpacity + 0.1, 1);
                                console.log(div.style.opacity = newOpacity.toString());

                                // Optional: change background for visibility
                                div.style.backgroundColor = 'pink';

                            });

                            // div.addEventListener('mouseleave',() => {
                            //     div.classList.remove('hover');
                            //  });

                            //  div.addEventListener('dblclick', () => {
                            //     div.classList.remove('clicked');
                            //     div.classList.remove('hover');
                            //  });


        });




    }




}


    //      played with javascript on hovereffects
        


    // });

//     //      played with javascript on hovereffects
//         const allDivs = document.querySelectorAll('.second');
//         allDivs.forEach((div) => {

//         div.addEventListener('mouseenter', () => {
//         div.style.backgroundColor = 'rgb(1, 3, 3)';
//         div.style.color = 'white';
//         // div.style.transform = 'scale(1.1)';
//         // div.style.transition = 'all 0.3s ease';
//         });

        

//         div.addEventListener('mouseleave', () => {
//         div.style.backgroundColor = '';
//         div.style.color = '';
//         div.style.transform = '';
//     });
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