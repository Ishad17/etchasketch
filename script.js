
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
    newDiv.classList.add("row");
    container.appendChild(newDiv);

    for(let i = 1; i<= size; i++){
        const secDiv = document.createElement("div");
        secDiv.classList.add("second");
        secDiv.classList.add("fade-in");
        // secDiv.textContent = `${j}`;
        newDiv.append(secDiv);
        }
    }

        const allDivs = document.querySelectorAll('.second');
        allDivs.forEach((div) => {

            div.addEventListener('mouseenter', () => {
                    div.classList.add('hover');
                    // Get current opacity or default to 0
                let currentOpacity = parseFloat(div.style.opacity);
                    // Increase opacity by 0.1 (max 1.0)
                if (isNaN(currentOpacity)) currentOpacity = 0;

                currentOpacity = Math.min(currentOpacity + 0.1, 1);
                div.style.opacity = currentOpacity.toString();

                });

            // div.addEventListener('mouseleave', () => {
            //     div.classList.remove('hover');
            // });


            


        });
}
