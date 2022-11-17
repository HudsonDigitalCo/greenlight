"use strict";
const { running, sleep } = require("./util");

document.querySelector("#state-button").addEventListener("click", async () => {
  if (running.getActive()) {
    document.querySelector("#state-button").innerText = "Start";
    document.querySelector("#state-button").style.color = "#98c379";

    running.setActive(false);
  } else {
    document.querySelector("#state-button").innerText = "Stop";
    document.querySelector("#state-button").style.color = "#E06C75";
    await sleep(0.5);
    running.setActive(true);
    running.move();
  }
});