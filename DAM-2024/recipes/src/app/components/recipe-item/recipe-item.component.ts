import { Component, EventEmitter, Input, Output } from '@angular/core'; 
import { RecipeItem } from './recipe-item';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent  {
  @Input() recipe!: RecipeItem;

  @Output() recipeClicked = new EventEmitter<RecipeItem>()

  onRecipeClick(){
    this.recipeClicked.emit(this.recipe);

  }
}
