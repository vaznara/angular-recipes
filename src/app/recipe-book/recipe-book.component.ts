import { Component } from '@angular/core';
import { Recipe } from './recipe-book.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})

export class RecipeBookComponent {
  currentRecipeDetails: Recipe;

  loadDetails(target: Recipe) {
    this.currentRecipeDetails = target;
  }

}