"use strict";

const { mouse, left, right, up, down } = require("@nut-tree/nut-js");

const square = async () => {
  await mouse.move(right(500));
  await mouse.move(down(500));
  await mouse.move(left(500));
  await mouse.move(up(500));
};

const sleep = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};

class Running {
  constructor() {
    this.active = false;
  }

  getActive = () => {
    return this.active;
  };

  setActive = (status) => {
    this.active = status;
  };

  move = async () => {
    while (running.getActive()) {
      await square();
      await sleep(3);
    }
    console.log("Stopping move")
  };
}

const running = new Running();

document.querySelector("#state").addEventListener("click", async () => {
  if (running.getActive()) {
    document.querySelector("#state").value = "Start";
    running.setActive(false);
  } else {
    document.querySelector("#state").value = "Stop";
    await sleep(.5);
    running.setActive(true);
    running.move();
  }
});
