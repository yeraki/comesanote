import { Component, OnInit, NgModule } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { producto } from '../../explore-container/explore-container.module';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart/cart.service';
import { Router } from '@angular/router';
import { AddToCartPage } from '../add-to-cart/add-to-cart.page';



@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {


  newPro: producto;
  loading : any;
  listado: producto[] = [];
  path :string = '';
  enlace = 'product';
  newFile = '';
  filter: string;


  constructor(
    private httpClient: HttpClient,
    public database: ProductsService, 
    public productservice: ProductsService,
    public modalCtrl : ModalController,
    public cart : CartService,
    private router: Router,
    public routerOutlet : IonRouterOutlet,
    public firestorageService: AngularFireStorage) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    const enlace = 'product';
    this.database.getColletionChanges<producto>(enlace).subscribe(res => {
      this.listado = res;
    });
  }

  async addToCartModal(producto: producto){
    console.log('item_id :>> ', producto);
    let isAdded = this.cart.isAddedToCart(producto.id);

    if ( !isAdded ) {
      this.cart.placeItem(producto);
      const modal = await this.modalCtrl.create({
        component: AddToCartPage,
        cssClass: 'add-to-cart-modal',
        presentingElement: this.routerOutlet.nativeEl
      });
  
      await modal.present();
      
      await modal.onWillDismiss().then((result) => {
        console.log('result :>> ', result);
      }).catch((err) => {
        console.log('err :>> ', err);
      });

    } else {
      this.router.navigate(['/pages/hom2']);
    } 

  }

  
  
  
//fin
}
