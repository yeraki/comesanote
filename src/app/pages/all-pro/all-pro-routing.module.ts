import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllProPage } from './all-pro.page';

const routes: Routes = [
  {
    path: '',
    component: AllProPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllProPageRoutingModule {}
