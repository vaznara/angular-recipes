import {Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../recipe-book.model';
import {RecipeService} from "../recipe.service";
import {ShoppingListComponent} from "../../shopping-list/shopping-list.component";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() currentRecipeDetails: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
  }

  sendToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(item => this.shoppingListService.addIngredient(item))
  }
}
