import {Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../recipe-book.model';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  currentRecipeDetails: Recipe;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.paramMap.subscribe(res => {
      this.currentRecipeDetails = this.recipeService.getRecipe(+res.get('id'));
    })
  }

  sendToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(item => this.shoppingListService.addIngredient(item))
  }
}
