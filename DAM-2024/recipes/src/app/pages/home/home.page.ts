import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeItem } from 'src/app/components/recipe-item/recipe-item';
import { RecipeDataService } from 'src/app/recipe-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recipes: RecipeItem[] = []; // Lista completa de recetas
  recipesFilter: RecipeItem[] = []; // Lista filtrada

  constructor(
    private readonly router: Router,
    private readonly activateRoute: ActivatedRoute,
    private readonly recipeDataService: RecipeDataService
  ) {
    this.recipeDataService.getAllRecipes().subscribe((data: any) => {
      this.recipes = data.recipes;
      this.recipesFilter = [...this.recipes]; 
    });
  }

  onRecipeClicked(args: RecipeItem) {
    this.router.navigate(['recipe', args.id], {
      relativeTo: this.activateRoute,
    });
  }

  // Método de búsqueda
  buscar(event: any) {
    const textoBusqueda = event.target.value.toLowerCase(); // Pasar texto a minusculas por si es necesario
    this.recipesFilter = this.recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(textoBusqueda) 
    );
  }
  cancelarBusqueda() {
    this.recipesFilter = [...this.recipes]; 
  }
}

  