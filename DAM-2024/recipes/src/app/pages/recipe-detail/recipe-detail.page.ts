import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeItem } from 'src/app/components/recipe-item/recipe-item';
import { RecipeDataService } from 'src/app/recipe-data.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe!: RecipeItem;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly recipeDataService: RecipeDataService//para cargar por ID
  ) { 
    const id = this.route.snapshot.params['id'];//obtenemos id de la receta desde los parametros de la ruta
    this.recipeDataService.getRecipeById(id).subscribe((data:any)=>{
      this.recipe = data;
    });
  }

  ngOnInit() {
  }

}
