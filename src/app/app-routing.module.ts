import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeBookComponent} from "./recipe-book/recipe-book.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeStartComponent} from "./recipe-book/recipe-list/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./recipe-book/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-book/recipe-edit/recipe-edit.component";

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'recipes', component: RecipeBookComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent, data: {editMode: true}}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
