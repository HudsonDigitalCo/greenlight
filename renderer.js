"use strict";

const { mouse, left, right, up, down, straightTo, centerOf, Region} = require("@nut-tree/nut-js");

const square = async () => {
  await mouse.move(right(500));
  await mouse.move(down(500));
  await mouse.move(left(500));
  await mouse.move(up(500));
};

document.querySelector("#btnStart").addEventListener("click", async () => {
  await square();
  await mouse.move(straightTo(centerOf(new Region(100, 100, 200, 300))));
});
