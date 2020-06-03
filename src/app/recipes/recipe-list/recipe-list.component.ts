import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('FuckerFood','this is good recipes we could have', '../assets/msi-logo.jpg'),
    
  ];
   
  constructor() { }

  ngOnInit() {
  }

}
