import { AttributeArrayBuilderInterface } from "../interface/attribute-array-builder.interface";

export class EpicAttributeArrayBuilder
  implements AttributeArrayBuilderInterface
{
  build(): [number, number, number, number, number, number] {
    return [20, 16, 14, 14, 12, 10];
  }
}
