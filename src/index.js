// task 1
import { alert } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";

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
