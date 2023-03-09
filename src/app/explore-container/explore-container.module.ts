import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}

export interface producto {

  id: string;
  name: string;
  variedad: string;
  category: string;
  pvp: number;
  pvd: number;
  Stock: number;
  imgurl: string;
}

export interface user {

  id: string;
  emaill:string;
  name: string;
  surname: string;
  foto: string;
  address: string;
  tlf: string;
  roll: string;


}