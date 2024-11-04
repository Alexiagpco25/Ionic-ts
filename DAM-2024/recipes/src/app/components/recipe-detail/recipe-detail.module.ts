import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecipeDetailComponent } from './recipe-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [RecipeDetailComponent],
  exports: [RecipeDetailComponent]
})
export class RecipeDetailComponentModule {}
