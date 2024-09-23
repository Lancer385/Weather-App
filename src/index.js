import { fetchData } from "./Modules/fetch-data";

const icons = require.context("./icons", false, /\.(png|jpe?g|gif|svg)$/);
const temperature = document.querySelector("#temperature");
const location = document.querySelector("#location");
const condition = document.querySelector("#condition");
const conditionText = document.querySelector("#condition2");
const time = document.querySelector("#time");
const form = document.createElement("form");
const userInput = document.createElement("input");
userInput.type = "text";
userInput.id = "userInput";
form.appendChild(userInput);
document.querySelector(".container").appendChild(form);

async function displayData(input) {
  const data = await fetchData(input);
  if (data !== 0) {
    temperature.textContent = `TEMP:${data.currentConditions.temp}°C/${data.currentConditions.feelslike}°C`;
    condition.src = icons(`./${data.currentConditions.icon}.png`);
    conditionText.textContent = data.currentConditions.conditions;
    time.textContent = `TIME: ${data.currentConditions.datetime}`;
    location.textContent = data.timezone;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  displayData(userInput.value);
});
window.fetchData = fetchData;

displayData("london");
