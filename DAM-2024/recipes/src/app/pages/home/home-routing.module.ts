import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'recipe/:id',//Ruta para los detalles de una recta, id es para dinamico
    component: RecipeDetailPage
  },
  {
    path: '**', // para manejar rutas no definidas
    redirectTo:'',//Redirige a la rut a raiz
    pathMatch: 'full'//Asegura que el redirect solo ocurre si la ruta coincide
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
