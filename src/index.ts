#!/usr/bin/env node

import { Draw } from "./draw";
import { readInput } from "./input-reader";
import { Symbol } from "./symbol";

const drawer = new Draw();

async function main() {
  //   const grid: Symbol[][] = [
  //     ["X", "O", "X"],
  //     [" ", " ", " "],
  //     [" ", " ", " "],
  //   ];
  //   const move = await readInput("Qual o seu movimento?");
  //   console.log("o move foi", move);
  //   drawer.drawGrid(grid);
}

main();
