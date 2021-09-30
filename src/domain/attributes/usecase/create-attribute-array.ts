import { AttributeArrayDirector } from "../builders/attribute-array-builder/attribute-array-director";
import { EpicAttributeArrayBuilder } from "../builders/attribute-array-builder/builders/epic-attribute-array-builder";
import { HeroAttributeArrayBuilder } from "../builders/attribute-array-builder/builders/hero-attribute-array-builder";
import { AttributeArrayBuilderInterface } from "../builders/attribute-array-builder/interface/attribute-array-builder.interface";

export const CreateAttributeArray = (
  arrayType: CreateAttributeArray.AttributeArrayTypes,
  arrayOrientation: CreateAttributeArray.AttributeOrientation
) => {
  const builder = getArrayTypeBuilder(arrayType);
  const director = new AttributeArrayDirector(builder);
  return buildOrientation(arrayOrientation, director);
};

const types: CreateAttributeArray.TypeBuilders = {
  hero: new HeroAttributeArrayBuilder(),
  epic: new EpicAttributeArrayBuilder(),
};

const getArrayTypeBuilder = (
  arrayType: CreateAttributeArray.AttributeArrayTypes
) => {
  return types[arrayType];
};

const buildOrientation = (
  arrayOrientation: CreateAttributeArray.AttributeOrientation,
  director: AttributeArrayDirector
) => {
  if (arrayOrientation === "barbarian") {
    return director.makeBarbarian();
  } else if (arrayOrientation === "wizard") {
    return director.makeWizard();
  }
  return director.makeWizard();
};

export namespace CreateAttributeArray {
  export type TypeBuilders = {
    [type: string]: AttributeArrayBuilderInterface;
  };
  export type AttributeArrayTypes = "hero" | "epic";
  export type AttributeOrientation = "wizard" | "barbarian";
}
