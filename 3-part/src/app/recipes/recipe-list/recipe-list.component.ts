import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.freeiconspng.com/thumbs/recipes-icon-png/recipe-icon--16.png'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.freeiconspng.com/thumbs/recipes-icon-png/recipe-icon--16.png')
  ];
  constructor() { }

  ngOnInit() {
}
}
