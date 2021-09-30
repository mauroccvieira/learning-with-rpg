import Character from "../entities/character.entity";
import { CreateStarterAttributes } from "../gateway/create-starter-attributes.interface";

export function createNPC(
  name: string,
  getAttributes: CreateStarterAttributes
) {
  return new Character(name, getAttributes());
}
