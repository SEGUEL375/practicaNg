import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user!: Observable<any>;

  constructor(private auth:AngularFireAuth) {
    this.user = this.auth.authState
  }
/**
 * Metodo para iniciar sesion
 * parametros necesarios:
 * usermane: email-->string
 * password: -->string 
  */
  login(usermane: string,password: string){
  
    return this.auth.signInWithEmailAndPassword(usermane,password);
   }
/**
 * Metodo para cerrar iniciar sesion
 * parametros no necesitamos.
  */
  logOut(){
   return this.auth.signOut();
  }

 currentUser(){
   this.auth.authState;
 }


}