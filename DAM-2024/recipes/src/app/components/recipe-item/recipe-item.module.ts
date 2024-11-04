import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RecipeItemComponent } from './recipe-item.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

  ],
  declarations: [RecipeItemComponent],
  exports: [RecipeItemComponent]
})
export class RecipeItemComponentModule {}
