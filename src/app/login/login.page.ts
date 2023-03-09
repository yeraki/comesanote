import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { user } from '../explore-container/explore-container.module';
import { AuthenticateService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  correo = '';
 
  constructor(

    private navCtrl: NavController,
    private authService: AuthenticateService,
    private router: Router,
    private alertController: AlertController,
    public Fire: AngularFirestore,
    public auth: AngularFireAuth,
    public auths: AuthenticateService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {

    this.auths.userDetails().subscribe( res=> {this.correo = res.email
      console.log(this.correo)}
      );

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

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email necesario.' },
      { type: 'pattern', message: 'Introduzca email válido' }
    ],
    'password': [
      { type: 'required', message: 'Contraseña necesaria' },
      { type: 'minlength', message: 'Contraseña debe ser al menos 6 caracteres' }
    ]
  };


  loginUser(value) {
    this.authService.loginUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.navCtrl.navigateForward('/home');
        
      }, err => {
        this.errorMessage = err.message;
      })
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/signup');
  }

  



//fin
}
