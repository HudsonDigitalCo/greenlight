"use strict";
const { running, sleep } = require("./util");

document.querySelector("#state-button").addEventListener("click", async () => {
  if (running.getActive()) {
    document.querySelector("#state-button").innerText = "Start";
    running.setActive(false);
  } else {
    document.querySelector("#state-button").innerText = "Stop";
    await sleep(0.5);
    running.setActive(true);
    running.move();
  }
});
