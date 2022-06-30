const dropInput = document.getElementById("drop-zone-input");
const dropZone = document.querySelector(".drop-zone");

const dragLeaveEvents = ["dragleave", "dragend"];

dropZone.addEventListener("click", (e) => {
    dropInput.click();
});

dropInput.addEventListener("change", (e) => {
    updateImage(e.target.files[0]);
});

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("drop-zone-over");
});

dragLeaveEvents.forEach((event) => {
    dropZone.addEventListener(event, (e) => {
        remove();
    });
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        updateImage(file);
    }
});

function remove() {
    dropZone.classList.remove("drop-zone-over");
}

function updateImage(file) {
    const image = document.querySelector(".image");
    const heading = document.querySelector(".heading");
    const supported = document.querySelector(".supported");
    const imgContainer = document.querySelector(".img-container");
    const imgLabel = document.querySelector(".img-label");

    remove();

    if (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg") {
        dropInput.files[0] = file;
    } else {
        alert("Incorrect file type");
        return;
    }

    if (image != undefined && heading != undefined && supported != undefined) {
        image.style.display = "none";
        heading.style.display = "none";
        supported.style.display = "none";
    }

    imgContainer.style.display = "block";
    imgLabel.style.display = "block";
    imgLabel.textContent = file.name;

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
        imgContainer.style.backgroundImage = `url('${reader.result}')`;
    };
}

console.log(dropInput, dropZone);
