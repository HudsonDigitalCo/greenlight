const { mouse, left, right, up, down } = require("@nut-tree/nut-js");

// manages the movement of the cursor
const square = async () => {
  await mouse.move(right(500));
  await mouse.move(down(500));
  await mouse.move(left(500));
  await mouse.move(up(500));
};

// sleep method
const sleep = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};

// running class manages the state of the app
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
  };
}

module.exports = { running: new Running(), sleep };
