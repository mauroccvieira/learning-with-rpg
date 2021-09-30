import { Attributes } from "./attributes.entity";

export class Character {
  _name: string;
  _attr: Attributes;
  get name() {
    return this._name;
  }
  get attr() {
    return this._attr;
  }

  constructor(name: string, attr: Attributes) {
    this._name = name;
    this._attr = attr;
  }
}
export default Character;
