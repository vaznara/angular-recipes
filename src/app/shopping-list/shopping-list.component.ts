import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  clearIngredientsArray() {
    this.ingredients = [];
    console.log(this.ingredients)
  }

  deleteIngredient(ingredient: Ingredient) {
    const ingredientIndex = this.ingredients.indexOf(ingredient);
    this.ingredients.splice(ingredientIndex, 1)
  }

  constructor() {

  }

}