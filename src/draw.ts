import { Symbol } from "./symbol";

export class Draw {
  drawGrid(grid: Symbol[][]) {
    this.drawTopLine(grid[0]);
    this.drawMidLine(grid[1]);
    this.drawBottomLine(grid[2]);
  }

  drawTopLine(firstLine: Symbol[]) {
    console.log(` ${firstLine[0]}  ║  ${firstLine[1]}  ║  ${firstLine[2]}`);
    console.log(`═══════════════`);
  }
  drawMidLine(secondLine: Symbol[]) {
    console.log(` ${secondLine[0]}  ║  ${secondLine[1]}  ║  ${secondLine[2]}`);
    console.log(`═══════════════`);
  }
  drawBottomLine(thirdLine: Symbol[]) {
    console.log(` ${thirdLine[0]}  ║  ${thirdLine[1]}  ║  ${thirdLine[2]}`);
  }
}
