import { Symbol } from "./symbol";

export class GameOfTheOld {
  turn: "X" | "0" = "X";
  grid: Symbol[][] = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  checkEndgame() {
    if (this.checkIfDraw()) {
      return true;
    } else {
      return false;
    }
  }

  checkIfDraw() {
    return !this.grid.some((linha) => linha.some((symb) => symb === " "));
  }

  reset() {
    this.turn = "X";
    this.grid = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
  }
}

const a = new GameOfTheOld();

a.checkEndgame();
