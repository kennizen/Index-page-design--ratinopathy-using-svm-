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
    console.log(e.dataTransfer);
    if (e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        if (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg") {
            dropInput.files = e.dataTransfer.files;
            updateImage(file);
        } else {
            alert("Incorrect file type");
            remove();
        }
    }

    console.log(dropInput);
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
