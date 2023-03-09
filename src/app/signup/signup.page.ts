import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormControlDirective } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication/authentication.service';
import { user } from '../explore-container/explore-container.module';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {


  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  newUser: user= {
    id: '',
    emaill: '',
    name: '',
    surname: '',
    foto: '',
    address: '',
    tlf: '',
    roll: 'user'
  };

  name: string;
  surname:string;
  address: string;
  tlf: string;
  email5 : string;
  
   validation_messages = {
    'email': [
      { type: 'required', message: 'Email necesario' },
      { type: 'pattern', message: 'Introduzca email correcto' }
    ],
    'password': [
      { type: 'required', message: 'Contraseña necesaria' },
      { type: 'minlength', message: 'Contraseña de al menos 6 caracteres ' }
    ]
  };
  

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    public Fire: AngularFirestore,
    
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      
    });
  }

  

  tryRegister(value) {
    
    this.authService.registerUser(value)
      .then(res => {
        console.log(res);
        
        this.errorMessage = "";
        this.successMessage = "Registrado correctamente, inicie sesión.";

        this.presentAlert();
        
        if (res){
          const path ='USER';
          this.newUser.id = res.user.uid;
          this.newUser.name = this.name;
          this.newUser.surname =  this.surname;
          this.newUser.address = this.address;
          this.newUser.tlf = this.tlf;
          this.newUser.emaill = this.email5;

          this.authService.createUser(this.newUser, path, this.newUser.id);
          this.goLoginPage();
          
        }

      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      });

      
      


      
  }
  do_something1($event) {
    this.name = $event.target.value;
  }
  do_something2($event) {
    this.surname = $event.target.value;
  }
  do_something3($event) {
    this.address = $event.target.value;
  }
  do_something4($event) {
    this.tlf = $event.target.value;
  }
  do_something5($event) {
    this.email5 = $event.target.value;
  }

  goLoginPage() {
    this.router.navigate(['login']);
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Registro',
      subHeader: 'Se ha registrado correctamente',
      message: 'Por favor, inicie sesión',
      buttons: ['OK']
    });

    await alert.present();
  }

    

//fin
}