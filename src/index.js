// task 1
import { alert } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";

import Chart from "chart.js/auto";


const keys = ["!", "o", "v", "7", "5", "t", "$", "#", "k", "}"];

let currentKeyIndex = 0;
let lastKey;

const keyElem = document.getElementById("key");

function fillKeyElem() {
  keyElem.innerText = keys[currentKeyIndex];
}

fillKeyElem();

function checkKey(e) {
  const currentKey = keys[currentKeyIndex];

  if (e.key === currentKey) {
    currentKeyIndex = (currentKeyIndex + 1) % keys.length;
    fillKeyElem();

    return;
  }

  if (e.key !== lastKey && e.key !== "Shift") {
    alert({
      text: "Incorrect key! Try again",
      type: "error",
      hide: true,
      delay: 3000,
    });

    lastKey = e.key;
  }
}

document.addEventListener("keydown", checkKey);

document.addEventListener("keypress", (e) => {
  e.preventDefault();
});

const button = document.getElementById("start-new-game");

function startAgain() {
  currentKeyIndex = 0;
  fillKeyElem();
}

button.addEventListener("click", startAgain);


// task 2

const chart = document.getElementById('sales-chart');

const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const salesChart = new Chart(chart, {
  type: 'line',
  data: chartData
});
