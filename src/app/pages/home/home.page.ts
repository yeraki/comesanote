import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { CartService } from 'src/app/services/cart/cart.service';
import { AddToCartPage } from '../add-to-cart/add-to-cart.page';
import { ProductsService } from 'src/app/services/products/products.service';
import { producto } from '../../explore-container/explore-container.module';
import {AuthenticateService} from './../../services/authentication/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  newPro: producto = {
    id : '',
    name: '',
  variedad: '',
  category: '',
  pvp: null,
  pvd: null,
  Stock: null,
  imgurl: ''
  }
  filter: string;

slideOpts = {
  initialSlide: 0,
  speed: 400,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  }
};

bannerImages: any = [];
products: any = [];
angularFireAuth: any;
loading : any;
listado: producto[] = [];

  constructor(
    public productService : ProductsService,
    public routerOutlet : IonRouterOutlet,
    public modalCtrl : ModalController,
    public cart : CartService,
    private router: Router,
    public database: ProductsService,
    private auth: AngularFireAuth,
    
    private authSer: AuthenticateService
  ) { 
    this.bannerImages = this.productService.bannerImages;
    this.products = this.productService.products;
    this.authSer.stateUser().subscribe( res => {
      if (res){

      }else{
        
      }
    }); 
    
  }
  
  ngOnInit(){
    this.getItems();
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
  
  userDetails() {
    return this.angularFireAuth.user
  }

  getItems(){
    const enlace = 'product';
    this.database.getColletionChanges<producto>(enlace).subscribe(res => {
      this.listado = res;
    });
  }



  //fin
  }



