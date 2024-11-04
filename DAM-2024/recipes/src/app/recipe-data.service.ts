import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {
  private apiAll = 'https://dummyjson.com/recipes?limit=0';
  private apiBase = 'https://dummyjson.com/recipes';

  constructor( private readonly httpClient: HttpClient) { }

//este metodo se encarga de obtener todas las recetas
  getAllRecipes(){
    return this.httpClient.get(this.apiAll);

  }
//Metodo para obtener receta por ID
  getRecipeById(id: number){
    const api = this.apiBase  + '/'+ id;
    return this.httpClient.get(api);
  }
}
