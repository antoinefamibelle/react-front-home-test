export type IngredientType = {
  name: string;
  names?: string;
  type?: string;
  unit?: string;
  prefix?: string;
};

export type IngredientWithQuantityType = {
  ingredient: IngredientType;
  unit?: string;
  quantity: number;
};
