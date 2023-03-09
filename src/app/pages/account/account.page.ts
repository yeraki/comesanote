import { Component, OnInit, NgModule } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { user } from '../../explore-container/explore-container.module';
import { ToastController, LoadingController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticateService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})

export class AccountPage implements OnInit {

  newUser: user= {
  id: '',
  emaill:'',
  name:  '',
  surname: '',
  foto:  '',
  address:  '',
  tlf:  '',
  roll:  '',
};
  path :string = '';
  enlace = 'USER';
  newFile = '';
  newImage = '';
  listado: user[] = [];
  loading : any;
  correo = '';
  usuario: user;
  idUser ='';
  


  constructor(public database: ProductsService, 
    private toastController: ToastController, 
    public loadingController: LoadingController,
    public productservice: ProductsService,
    public auth: AngularFireAuth,
    public auths: AuthenticateService,
    private router: Router,
    public firestorageService: AngularFireStorage) {     }

  ngOnInit() {
    

    this.auths.userDetails().subscribe( res=> {
       this.correo = res.email;
       this.idUser = res.uid;
       this.getUsuario(this.idUser);
      
    }
      );
    
    
  }
//prueba


//prueba

getUsuario(uid: string){

      const enlace = 'USER';
      const id = uid;
            this.auths.getUser<user>(enlace, id).subscribe(res => {
        this.newUser = res;
        if(res.foto != ''){
          this.newImage = res.foto;
        }else{
          this.newImage = '../../assets/cliente2.jpg';
        }
        
        console.log('LISTA USUARIOS',res);
      });
    } 

    async save(){
      //this.loading = this.presentLoading();
      console.log('ESTO SE GUARDA', this.newUser);
      
      const data = this.newUser;
      
      const path = 'USER';
      const name = this.createFileName();
      
       const res =await this.productservice.uploadImage(this.newFile, path, name);
      data.foto = res;
      
      data.id = this.idUser;
      await this.auths.editUser(data, this.enlace, data.id).then(()=>{
        console.log('INFO GUARDADA')
        //this.presentToast('INFO Guardada Correctamente',1000);
      }).catch (error =>{
        console.log(error);
        //this.presentToast('Error al guardar',1000);
  
      });

      
      
  
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
      this.newUser.foto = res;
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