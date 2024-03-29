import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  clearIngredients() {

  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredients.splice(
      this.ingredients.indexOf(ingredient), 1
    )
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
