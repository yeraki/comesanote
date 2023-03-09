import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-fogotpassword',
  templateUrl: './fogotpassword.page.html',
  styleUrls: ['./fogotpassword.page.scss'],
})
export class FogotpasswordPage implements OnInit {

  captchaValid = false;
  key = environment.recaptcha.sitekey;

  constructor(private router:Router,
     ) { }

  ngOnInit() {
  }

  
  signUPUser(){
    this.router.navigate(['login']);
     }

}
