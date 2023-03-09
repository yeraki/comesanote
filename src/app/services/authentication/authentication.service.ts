import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { Router } from '@angular/router';
import { ValueAccessor } from "@ionic/angular/directives/control-value-accessors/value-accessor";
import { Observable } from "rxjs";
import { user } from "src/app/explore-container/explore-container.module";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public Fire: AngularFirestore,
    public storage: AngularFireStorage
  ) { }

  newUser1: user;

  nuevo(){
      
    this.newUser1 = {
      id: '',
      emaill: '',
      name: '',
      surname: '',
      foto: '',
      address: '',
      tlf: '',
      roll: ''
    }


  }

  createUser<tipo>(data: tipo, enlace: string, id:string)
  {
            
    const ref = this.Fire.collection<tipo>(enlace);
    return ref.doc(id).set(data);
  }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {

      this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          
          err => reject(err))
    })

  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  logoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.afAuth.currentUser) {
        this.afAuth.signOut()
          .then(() => {
            console.log("LOG Out");
            this.router.navigate(['/login']);
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return this.afAuth.user
  }

  getUser<tipo>(path: string, id:string){
    const collection = this.Fire.collection(path);
    return collection.doc<tipo>(id).valueChanges();
  }



  editUser(data: any, path: string, id: string){
    const collection = this.Fire.collection(path);
    return collection.doc(id).update(data);
  }

  getUserLogin <tipo>(enlace:string): Observable<tipo[]> {

    const itemsCollection: AngularFirestoreCollection<tipo>= this.Fire.collection<tipo>(enlace);
    return itemsCollection.valueChanges();

  }

  stateUser(){
    return this.afAuth.authState;
  }

  //fin
}