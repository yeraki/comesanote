import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllProPageRoutingModule } from './all-pro-routing.module';

import { AllProPage } from './all-pro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllProPageRoutingModule,
    
  ],
  declarations: [AllProPage]
})
export class AllProPageModule {}
