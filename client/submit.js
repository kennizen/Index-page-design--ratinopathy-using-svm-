const submitForm = document.querySelector("form");
const inputField = document.querySelector("input[type=file]");

submitForm.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
    e.preventDefault();
    const file = inputField.files[0];

    const fd = new FormData();
    fd.append("image", file);

    await postData(fd);
}

async function postData(formData) {
    const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
        mode: "cors",
    });
}
