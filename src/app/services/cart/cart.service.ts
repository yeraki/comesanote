import { Injectable } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { UtilityService } from '../utility/utility.service';
import { producto } from '../../explore-container/explore-container.module';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any = [];
  item: any;
  total_price: number = 0;
  total_cart_qty:number = 0;
  unseen: number = 0;
  path: string = 'producto';
  uid: string;

  constructor(
    private utility: UtilityService,
    private products: ProductsService) { }

  getPro(id: string){
    this.products.getPro<producto>(this.path, id).subscribe(res =>{
      this.item = res;
    })

  }  

  placeItem(product) {
    this.item = null;
    this.item = product;
  }

  isAddedToCart(id) {
    this.uid = id;
    return this.items.some(item => item['id'] == id );
  }

  getCartTotalQty() {
    console.log(this.items);
    this.total_cart_qty = 0;

    for (let item of this.items) {
      this.total_cart_qty += item['Stock'];
    }
  }

  addToCart() {
    if ( this.item['cartQuantity'] > 0 ) { 
      this.addLocalCartItems();
    }
  }

  increaseCartQty(index) {

    let increasedQty = this.items[index]['cartQuantity'] + 1;

    if ( increasedQty <= this.items[index]['totalStock'] ) {
     
      this.increaseLocalCartItem( index );
      this.getCartTotalQty();

    } else {

      this.utility.showToast("No hay más Stock", "top");
    }
    
  }

  decreaseCartQty(index) {

    let decreasedQty = this.items[index]['cartQuantity'] - 1;

    if ( decreasedQty >= 1 ) {
      this.decreaseLocalCartItem( index );
      this.getCartTotalQty();

    } else {

      this.utility.showToast("La cantidad no puede ser inferior a 1", "Máximo");
    }
    
  }

  removeItem(index) {
    this.removeLocalCartItem(index);
  }

  
  increaseLocalCartItem(index) {
    this.items[index]['cartQuantity'] += 1;
    this.total_price += this.items[index]['price'];
  }

  decreaseLocalCartItem(index) {
    this.items[index]['cartQuantity'] -= 1;
    this.total_price -= this.items[index]['price'];
  }

  removeLocalCartItem(index) {
    this.total_price -= this.calculatePrice(this.items[index]);
    this.items.splice(index, 1);
  }

  addLocalCartItems() {
    this.unseen += 1;
    console.log('add to cart>:', this.items, this.item);
    let index = this.items.length > 0 ? this.items.findIndex(value => value.id === this.item.id) : -1;
   
    if ( index > -1 ) {
      console.log(this.items[index]['cartQuantity'], this.item['cartQuantity']);
      this.items[index]['cartQuantity'] += this.item['cartQuantity'];
    } else {
      this.items.push(this.item);
    } 
  }

  totalPrice() {
    this.total_price = 0;

    for ( let item of this.items ) {
      this.total_price += this.calculatePrice(item);
    }
  }

  calculatePrice(product) {
    let price = product['price'];
    return Number(product['cartQuantity']) * Number(price); 
  }
  
  resetCart() {
    this.items = [];
    this.item = null;
  }
}