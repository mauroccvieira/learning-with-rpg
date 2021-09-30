import { Attributes } from "../../entities/attributes.entity";
import { AttributeArrayBuilderInterface } from "./interface/attribute-array-builder.interface";

export class AttributeArrayDirector {
  constructor(private arrayBuilder: AttributeArrayBuilderInterface) {}

  makeWizard(): Attributes {
    const numbers = this.arrayBuilder.build().sort();
    const pos = this.shuffleArray([0, 1, 2, 3]);
    return {
      int: numbers[5],
      con: numbers[4],
      dex: numbers[pos[0]],
      cha: numbers[pos[1]],
      str: numbers[pos[2]],
      wis: numbers[pos[3]],
    };
  }

  makeBarbarian(): Attributes {
    const numbers = this.arrayBuilder.build().sort();
    const pos = this.shuffleArray([0, 1, 2, 3]);
    return {
      str: numbers[5],
      con: numbers[4],
      dex: numbers[pos[0]],
      cha: numbers[pos[1]],
      int: numbers[pos[2]],
      wis: numbers[pos[3]],
    };
  }




  private shuffleArray(array: number[]): number[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
}
