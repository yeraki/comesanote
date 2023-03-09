import { Component, OnInit, NgModule } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { producto } from '../../explore-container/explore-container.module';
import { ToastController, LoadingController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-all-pro',
  templateUrl: './all-pro.page.html',
  styleUrls: ['./all-pro.page.scss'],
})

export class AllProPage implements OnInit {

  newPro: producto;

  loading : any;
  listado: producto[] = [];
  path :string = '';
  enlace = 'product';
  newImage = 'https://media.giphy.com/media/fmO9vBzPWbx5t7AYvA/giphy.gif';
  newFile = '';

  constructor(public database: ProductsService, 
    private toastController: ToastController, 
    public loadingController: LoadingController,
    public productservice: ProductsService,
    public firestorageService: AngularFireStorage) { }

  ngOnInit() {
    this.getItems();
  }

  
  async deleteProducto(idpro : producto){
    this.database.delProduct(this.enlace, idpro.id)

  }

  async save(){
    this.loading = this.presentLoading();
    console.log('ESTO SE GUARDA', this.newPro);
    
    const data = this.newPro;
    
    const path = 'Productos';
    const name = this.createFileName();
    
    const res =await this.productservice.uploadImage(this.newFile, path, name);
    data.imgurl = res;
    
    data.id = this.database.creaId();
    await this.database.createProduct<producto>(data, this.enlace, data.id).then(()=>{
      this.presentToast('Producto Guardado Correctamente',1000);
    }).catch (error =>{
      this.presentToast('Error al guardar',1000);

    });
    
    
    
    
    this.newPro = {
      id : '',
      name: '',
    variedad: '',
    category: '',
    pvp: null,
    pvd: null,
    Stock: null,
    imgurl: ''
    };
    

  }

  enableNewProduct = false;

  nuevo(){
    this.enableNewProduct = true;
    this.newPro = {
      id : '',
      name: '',
    variedad: '',
    category: '',
    pvp: null,
    pvd: null,
    Stock: null,
    imgurl: ''
    }


  }

  async presentToast(mensaje: string, tiempo: number) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: tiempo,
      position: 'middle'
      
    });

    await toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Guardando',
      duration: 300
    });
    await loading.present();
    
  }

  getItems(){
    const enlace = 'product';
    this.database.getColletionChanges<producto>(enlace).subscribe(res => {
      this.listado = res;
    });
  }

  createFileName() {
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + ".jpg";
    return newFileName;
}  

async newImageUpload(event: any){

  const path = 'Productos';
  const name = this.createFileName();
  const file = event.target.files[0];
  const res =await this.productservice.uploadImage(file, path, name);
  this.newPro.imgurl = res;
}

nImage(event: any){
    if(event.target.files && event.target.files[0]){
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = ((image)=>{
        this.newImage = image.target.result as string;});
        reader.readAsDataURL(event.target.files[0]);
    }

}

  //final
}
