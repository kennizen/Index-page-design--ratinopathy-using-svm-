const submitForm = document.getElementById("drop-form");
const inputField = document.getElementById("drop-zone-input");

submitForm.addEventListener("submit", (e) => handleSubmit(e));

async function handleSubmit(e) {
    e.preventDefault();
    const file = inputField.files[0];

    if (file == undefined) {
        alert("No file selected");
        return;
    }

    const fd = new FormData();
    fd.append("image", file);

    const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: fd,
        mode: "cors",
    });

    console.log(await res.json());
}
