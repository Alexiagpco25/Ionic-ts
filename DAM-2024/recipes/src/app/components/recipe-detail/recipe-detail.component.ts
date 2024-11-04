import { Component, Input } from '@angular/core';
import { RecipeItem } from '../recipe-item/recipe-item';

@Component({
  selector: 'app-recipe-detail-c',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  @Input() recipe!: RecipeItem; // Recibe la receta como input
}

