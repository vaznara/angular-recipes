import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe-book.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'test Recipe description',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY2lwZXxlbnwwfHwwfHw%3D&w=1000&q=80'
    ),
    new Recipe(
      'A Test Recipe 2 ',
      'test Recipe description 2',
      'https://i.ndtvimg.com/i/2015-10/urlai-roast_625x350_71444723419.jpg'
    ),
    new Recipe(
      'A Test Recipe 3 ',
      'test Recipe description 3',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9iMSUmvHYCX4iAHf9bXQmRLm0jZMC-89RKA&usqp=CAU'
    ),
  ];

  @Output() onRecipeClicked = new EventEmitter<Recipe>();

  constructor() {

  }

  createNewRecipe() {
    
  }

  onRecipeClick(element: Recipe) {
    this.onRecipeClicked.emit(element);
  }
}