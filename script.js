//Method that changes the grid amount (Ex: 64x64)
function gridSize(size) {
    const container = document.querySelector(".container");
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
}
//Method that changes the color of the box
function changeColor(box) {
    box.style.backgroundColor = "black";
}

gridSize(20);

const container = document.querySelector(".container");
const rows = container.querySelectorAll(".row");

//Uses the changeColor() method to change the color by hovering over a box
rows.forEach((row) => {
    const boxes = row.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            changeColor(box);
        })
    })
});

