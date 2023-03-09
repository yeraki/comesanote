import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { ShareComponentModule } from 'src/app/components/share-component.module'; 
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ShareComponentModule,
    Ng2SearchPipeModule,
    
    ExploreContainerComponentModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
