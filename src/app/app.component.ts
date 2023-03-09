import { Component, OnInit, Output } from '@angular/core';
import { user } from '../app/explore-container/explore-container.module';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticateService } from './services/authentication/authentication.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  userdetail: string;
  rol = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    //private statusBar: StatusBar,
    private router: Router,
    public auth: AngularFireAuth,
    public auths: AuthenticateService,
    public menu: MenuController
  ) {
    this.initializeApp();
  }
  fotoUser: string = '../../assets/cliente2.jpg';

  ngOnInit() {

    this.rol = false;
    this.auths.userDetails().subscribe( res=> {
      this.userdetail = res.email;
      this.auths.getUser<user>('USER', res.uid).subscribe( res =>{
        console.log(res.roll);
        if (res.roll != 'user'){
          this.rol = true;
          console.log(this.rol);
               }else{this.rol = false;
                console.log(this.rol);}
        });
           
   }
     );
    
    this.auths.userDetails().subscribe(response => {
      if (response !== null) {
        this.auths.getUser<user>('USER', response.uid).subscribe( res =>{
          if (res.foto != ''){
            this.fotoUser = res.foto;
          
          }
          
        })
      } else {
        this.router.navigateByUrl('');
      }
    }, error => {
      console.log(error);
    });
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goLoginPage() {
    this.menu.close();
    this.auths.logoutUser();
    this.router.navigate(['login']);
  }

  getuser(){

    return this.auths.userDetails;
  }

  public appPages = [
    
    { title: 'Inicio', url: '/home', icon: 'home-sharp'},
    { title: 'Productos', url: '/products', icon: 'list-sharp'},
    { title: 'Recetas', url: '', icon: 'receipt-sharp'},
    { title: 'Mis Recetas', url: '', icon: 'heart-sharp'},
    { title: 'Mis Compras', url: '', icon: 'wallet-sharp'},
    { title: 'Mi Cuenta', url: '/account', icon: 'person-sharp'},
    { title: 'Contacto', url: '', icon: 'information-circle-sharp'},
    
  ];

   
  
}
