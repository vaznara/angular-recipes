import {EventEmitter, Injectable, Output} from '@angular/core';
import {Recipe} from "./recipe-book.model";
import {Ingredient} from "../shared/ingredient.model";

@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'test Recipe description',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY2lwZXxlbnwwfHwwfHw%3D&w=1000&q=80',
      [
        new Ingredient('test', 1),
        new Ingredient('test2', 2),
        new Ingredient('test3', 1)
      ]
    ),
    new Recipe(
      'A Test Recipe 2 ',
      'test Recipe description 2',
      'https://i.ndtvimg.com/i/2015-10/urlai-roast_625x350_71444723419.jpg',
      [
        new Ingredient('test1', 1),
        new Ingredient('test3', 1),
        new Ingredient('test5', 1)
      ]
    ),
    new Recipe(
      'A Test Recipe 3 ',
      'test Recipe description 3',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9iMSUmvHYCX4iAHf9bXQmRLm0jZMC-89RKA&usqp=CAU',
      [
        new Ingredient('test2', 1),
        new Ingredient('test2', 5)
      ]
    ),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
