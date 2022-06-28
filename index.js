const dropInput = document.getElementById("drop-zone-input");
const dropZone = document.querySelector(".drop-zone");

const dragLeaveEvents = ["dragleave", "dragend"];

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("drop-zone-over");
});

dragLeaveEvents.forEach((event) => {
    dropZone.addEventListener(event, (e) => {
        dropZone.classList.remove("drop-zone-over");
    });
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log(e.dataTransfer);
});

console.log(dropInput, dropZone);
