import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration/ngx';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AuthenticateService } from './services/authentication/authentication.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FileSizePipe } from './file-size.pipe';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';






@NgModule({
  declarations: [AppComponent, FileSizePipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireAuthModule,
AngularFireDatabaseModule,
AngularFirestoreModule,
AngularFireStorageModule,
Ng2SearchPipeModule,
HttpClientModule,
AngularFireModule.initializeApp(environment.firebase)
   

  ],
  providers: [
    //StatusBar,
    Vibration,
    SplashScreen, 
    AppRate,
    AuthenticateService, 
    //FileSizeFormatPipe, 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
