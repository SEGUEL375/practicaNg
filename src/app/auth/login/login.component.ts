import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logueado: boolean = false;
  public email:string = '';
  formularioLogin: any;
  
  productoService: any;

  constructor(private fb: FormBuilder,private auth: AuthService, private router:Router) { 

    //inicializo mi formulario
  
    this.formularioLogin = fb.group({
      username:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    
    })
  }

  ngOnInit(): void {
    
    //Verifico el estado del usuario.
    this.auth.user.subscribe((user) => {
      if(user){
        this.logueado =true;
        this.email = user.email;
      }else{
        this.logueado =false;
      }
    })
  }
 
  iniciarSesion(){
    //Preguntamos si el formulario es Validators
   if(!this.formularioLogin.invalid){

    //Obtengo esos datos del formulario
    const {username,password} = this.formularioLogin.value;
    //inicio sesion en firebase llamando al metodo de mis servicio.
    this.auth.login(username, password).then((resp)=>{
      alert("iniciaste sesion de forma correcta");
      this.router.navigateByUrl('productos')
    }).catch(error=>{
      alert("Datos incorrectos,verifique si el email o la password son de un usuario valido!")
    })
    }
    else{
      alert("Revise los datos,son incorrectos");
    }
  }
  cerrarSesion(){
    this.auth.logOut().then(()=>{
      alert("Sesion cerrada con exito");
    }).catch(()=>{
    alert("Problemas al cerrar sesion")
    })
  }
}
