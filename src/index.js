import { fetchData } from "./Modules/fetch-data";

const icons = require.context("./icons", false, /\.(png|jpe?g|gif|svg)$/);
const temperature = document.querySelector("#temperature");
const location = document.querySelector("#location");
const condition = document.querySelector("#condition");
const time = document.querySelector("#time");
const form = document.createElement("form");
const userInput = document.createElement("input");
userInput.type = "text";
userInput.id = "userInput";
form.appendChild(userInput);
document.querySelector(".container").appendChild(form);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    displayData(userInput.value);
});
window.fetchData = fetchData;

async function displayData(input){
    const data = await fetchData(input);
    if (data !== 0){
        console.log(data);
        temperature.textContent = `TEMP:${data.currentConditions.temp}°C`;
        condition.src = icons(`./${data.currentConditions.icon}.png`);
        time.textContent = `TIME: ${data.currentConditions.datetime}`;
    };
}
displayData("london");