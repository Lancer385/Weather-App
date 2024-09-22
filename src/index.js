import { fetchData } from "./Modules/fetch-data";
const form = document.createElement("form");
const userInput = document.createElement("input");
userInput.type = "text";
userInput.id = "userInput";
form.appendChild(userInput);
document.body.appendChild(form);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchData(userInput.value);
});
window.fetchData = fetchData;