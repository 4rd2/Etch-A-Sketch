//Initialzied container constant
const container = document.querySelector(".container");

//Method that changes the color of the box
function changeColor(box) {
    box.style.backgroundColor = "black";
}

//Uses the changeColor() method to change the color by hovering over a box
function attachEventListeners() {
    const rows = container.querySelectorAll(".row");
    rows.forEach((row) => {
        const boxes = row.querySelectorAll(".box");
        boxes.forEach((box) => {
            box.addEventListener("mouseover", () => {
                changeColor(box);
            })
    })
});
}

//Method that changes the grid amount (Ex: 64x64)
function gridSize(size) {
    if (container.hasChildNodes()) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
    }
    attachEventListeners();
}
gridSize(5);
//Changes the grid size number at the top with the increase/decrease
//button
function gridChange(choice) {
    const num = document.getElementById('num');
    if (choice == "Increase") {
        num.innerHTML++;
    }
    else {
        if (num.innerHTML > 0) {
            num.innerHTML--;
        }
    }
    gridSize(num.innerHTML);
}

//Increase button functionality
const increase = document.getElementById('increase');
increase.addEventListener("click", () => {
    gridChange(increase.innerHTML);
});
//Decrease button functionality
const decrease = document.getElementById('decrease');
decrease.addEventListener("click", () => {
    gridChange(decrease.innerHTML);
})

