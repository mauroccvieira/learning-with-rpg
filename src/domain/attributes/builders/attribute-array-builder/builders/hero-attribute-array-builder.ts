import { AttributeArrayBuilderInterface } from "../interface/attribute-array-builder.interface";

export class HeroAttributeArrayBuilder
  implements AttributeArrayBuilderInterface
{
  build(): [number, number, number, number, number, number] {
    return [18, 16, 14, 12, 10, 10];
  }
}
