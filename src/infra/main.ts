import { CreateAttributeArray } from "../domain/attributes/usecase/create-attribute-array";
import { createNPC } from "../domain/character/usecase/create-non-player-character";

export const main = async () => {
  const grog = createNPC("Grog, the Barbarian", () =>
    CreateAttributeArray("hero", "barbarian")
  );

  const caleb = createNPC("Caleb, the Wizard", () =>
    CreateAttributeArray("epic", "wizard")
  );

  console.log("Caleb is: ", caleb);
  console.log("Grog is: ", grog);
};
