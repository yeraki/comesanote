import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilityService } from '../utility/utility.service';
import { AngularFireDatabaseModule,  } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
//import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize, Observable } from 'rxjs';
import { StringFormat } from '@angular/fire/storage/interfaces';
import { promise } from 'protractor';
import { AngularFireStorage } from '@angular/fire/storage';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  brands: any = [];
  sizes: any = [];
  
  selectedBrands: any = [];
  selectedSizes: any = [];

  priceRange: PriceRange = {
    lower: 0,
    upper: 5000,
    applied: false
  };

  sort: Sort = {
    latest: false,
    price_lth: false,
    price_htl: false
  };

  items: any = [];
  item: any = {};
  filterItems: any = [];

  cartCount: number = 0;

  listBy: ListBy = {
    nav: false,
    search: false,
    banner: false,
    details: false
  };

  searchTerm: string = '';
  searchIn: string;
  bannerId: string;

  show_result_size: boolean = true;
  bannerImages = [
    {
      imgurl: 'assets/images/slide1.jpg'
    }, {
      imgurl: 'assets/images/slide2.jpg'
    }, {
      imgurl: 'assets/images/slide3.jpg'
    }
  ];
  products = [
    
  ];
  categories : any = [
    {
      category : 'Fruta'
    }, {
      category : 'Verdura'
    }, {
      category : 'Oferta'
    }
  ];
  constructor(
    private modalCtrl: ModalController,
    private utility: UtilityService,
    public Fire: AngularFirestore,
    public storage: AngularFireStorage
  ) { 
    
  }

  creaId (){
    return this.Fire.createId();

  }

  createProduct<tipo>(data: tipo, enlace: string, id:string)
  {
    const ref = this.Fire.collection<tipo>(enlace);
    return ref.doc(id).set(data);
  }

  getProduct(path: string, id:string){
    const collection = this.Fire.collection(path);
    return collection.doc(id).valueChanges();
  }

  getPro<tipo>(path: string, id:string){
    const collection = this.Fire.collection<tipo>(path);
    return collection.doc(id).valueChanges();
  }

  editProduct(data: any, path: string, id: string){
    const collection = this.Fire.collection(path);
    return collection.doc(id).update(data);
  }

  delProduct(path: string, id:string){
    const collection = this.Fire.collection(path);
    return collection.doc(id).delete();
  }

  getColletionChanges <tipo>(enlace:string): Observable<tipo[]> {

    const itemsCollection: AngularFirestoreCollection<tipo>= this.Fire.collection<tipo>(enlace);
    return itemsCollection.valueChanges();

  }

  uploadImage(file: any, path: string, nombre: string): Promise<string> {

    return new Promise( resolve => {
  
    const filePath = path + '/' + nombre;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);

    task.snapshotChanges().pipe(

      finalize(  ()=>{
        ref.getDownloadURL().subscribe( res =>{
          const downloadURL = res;
          resolve(downloadURL);
          return;
        });

      })
      ).subscribe();
  });
  }



  searchProducts ( term: string, sort: string = '' ) {
    this.utility.presentLoading('¡Espere por favor!.');

    this.resetItems();
    this.listBy.search = true;

  }

  getProductsByDepartment(department: string, sort: string = '' ) {
    console.log("Buscar Producto por departamento :", department);
    this.utility.presentLoading('Cargando...');
    
    

  }

  initProductList(items: any) {
    this.items = items;
    this.filterItems = items;
    
    this.setSizes();
    this.setBrands();
    this.showResultCount();
  }

  applySort ( column, order, type ) {
    this.uncheckSorts();
    
    console.log('type :>> ', type, this.sort);
    

    if ( this.listBy.banner ) {
      
    } else if ( this.listBy.nav ) {
      this.resetItems();
      this.listBy.nav = true;

      this.getProductsByDepartment(this.searchIn, `&column=${column}&order=${order}`);
    } else if ( this.listBy.search ) {
      this.searchProducts(this.searchIn, `&column=${column}&order=${order}`);
    }

    this.sort[type] = true;

  }

  applyLocalSort ( column, order, type )  {
    this.uncheckSorts();
    this.sort[type] = true;
    console.log('column :>> ', column);
    this.items = this.items.sort((a, b) => {
      console.log('sort :>> ', a, b);
      if ( order === 'desc' ) {
        return a[column] > b[column];
      } else {
        return a[column] < b[column];
      }
      
    })
  }

  applyFilter() {
    console.log(this.selectedBrands, this.selectedSizes, this.priceRange);
    if ( this.selectedBrands.length > 0 || this.selectedSizes.length > 0 || this.priceRange.applied ) {
      console.log('Filter applied :>> ');
      this.items = [];

      for(let i = 0; i < this.filterItems.length; i++) {
        let foundBrand = true, foundSize = true, foundPrice = true;

        if ( this.selectedBrands.length > 0 ) {
          foundBrand = this.selectedBrands.some( val => val.brand.toLocaleLowerCase() === this.filterItems[i]['brand'].toLocaleLowerCase() && val.isChecked);
        }
        
        if ( this.selectedSizes.length > 0 ) {
          foundSize = this.selectedSizes.some( val => val.size == this.filterItems[i]['size'] && val.isChecked);
        }
        
        if ( this.priceRange.applied ) {
          let price = this.filterItems[i]['rsp'];
          price = !price ? this.filterItems[i]['mrp'] : price;
          foundPrice = ( price >= this.priceRange.lower && price <= this.priceRange.upper );
        }
        
        if(foundBrand && foundSize && foundPrice) {
          this.items.push(this.filterItems[i]);
        }
        
      }
    } else {
      console.log('No Filter found:>> ');
      this.items = this.filterItems;
    }
  } 


  showResultCount() {
    this.show_result_size = true;
    setTimeout(() => {
      this.show_result_size = false;
    }, 2000);
  }

  getBrands() {
    let tempBrands = [];
    this.brands = [];
    this.selectedBrands = [];

   
  }
 
  setBrands() {
    let tempBrands = [];
    this.brands = [];
    this.selectedBrands = [];

    this.items.forEach(val => {
      if ( val.brand && !tempBrands.includes(val.brand) ) {
        tempBrands.push(val.brand); 
        this.brands.push({ 
          'isChecked': false, 
          'brand': val.brand 
        });

      }
    });

    console.log('set brands :>> ', this.brands);

  }

  setSizes() {

    let tempSizes = [];
    this.sizes = [];
    this.selectedSizes = [];

    this.items.forEach(val => {
      console.log('val :>> ', val);
      if ( val.size && !tempSizes.includes(val.size) ) {
          tempSizes.push(val.size);

          this.sizes.push({ 'isChecked': false, 'size': val.size });
      }

    });

    console.log('sizes :>> ', this.sizes);

  }

  resetItems() {
    this.items = [];
    this.filterItems = [];

    this.searchIn = '';
    this.searchTerm = '';
    this.uncheckFilters();
    this.uncheckSorts();
    this.defaultListBy();
  } 

  uncheckSorts() {
    this.defaultSorting();
  }

  uncheckFilters() {
    this.selectedBrands = [];
    this.selectedSizes = [];
    this.defaultPriceRange();

    for( let i = 0; i < this.brands.length; i++) {
      this.brands[i].isChecked = false;
    }

    for( let i = 0; i < this.sizes.length; i++) {
      this.sizes[i].isChecked = false;
    }
  }

  defaultPriceRange() {
    this.priceRange = {
      applied:  false,
      lower : 0,
      upper : 5000
    }
    
  }

  defaultSorting() {
    Object.keys(this.sort).forEach(key => {
      this.sort[key] = false;
    })
  }

  defaultListBy() {
    Object.keys(this.listBy).forEach(key => {
      this.listBy[key] = false;
    })
  }

}

interface PriceRange {
  lower: any,
  upper: any,
  applied: boolean
}

interface Sort {
  latest: boolean,
  price_lth: boolean,
  price_htl: boolean
}

interface ListBy {
  search: boolean,
  banner: boolean,
  nav: boolean,
  details: boolean
}