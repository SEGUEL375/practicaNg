import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductoService } from 'src/app/productos/producto.service';
import { IProducto } from 'src/app/productos/productosinterface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {  
   
  //coleccion de productos 
  public productos:IProducto[] = []; 

  public formularioProducto:FormGroup  
  editar!: boolean;
  productoSeleccionado?: IProducto;  
  public pathImagen: String='';

  //imagen  
  private file!:File; 
  firestore: any;
  db: any;
  public logueado: boolean = false;
  email: any;

  constructor(private fb: FormBuilder,private productoService:ProductoService,private auth: AuthService) {  
   //iniciamos el formulario
  this.formularioProducto = this.fb.group({ 
    nombre:['',Validators.required], 
    precio:['',Validators.required], 
    descripcion:['',Validators.required], 
    url:['',Validators.required]
    
  })
}
  ngOnInit(): void {  
    this.productoService.obtenerProductos().subscribe((productos)=>{ 
      console.log(productos) 
      this.productos = productos;
    })


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
   
  async guardarProducto(){
  //subir la imagen  
 
  //Pregunto si es un formulario valido  
   if (!this.formularioProducto.invalid){  

  //pregunto si quiero editar
     if (this.editar) {
     //pregunto si cargue algo en el file   
     // en caso que no se cargue nada edito el producto sin  subir imagen
     if(this.file==undefined){
     this.productoService.editarProducto(this.productoSeleccionado!.id, this.formularioProducto.value).then(resp=>{ 
       this.editar= false; 
       alert('Producto Editado Con Exito'); 
       this.formularioProducto.reset();
     })
    }// si el file contiene algo entonces lo subo a storage
  
     else{ 
      this.productoService.subirImagen(this.file!, this.formularioProducto.value,this.productoSeleccionado!.id) 
      this.productoSeleccionado= undefined; 
      this.file!=undefined;  
      this.formularioProducto.reset();
     }
     }
    else { 
       console.log(this.formularioProducto.value); 
     //llevar los datos a la base de datos! osea a firestore  
     this.productoService.subirImagen(this.file,this.formularioProducto.value);  
     alert("Producto Agregado Con Exito")
     this.formularioProducto.reset(); 
     
    }
   }
  else{
    alert('el formulario es invalido')
  }
  
  }


 //metodo que se comunica con el servicio para eliminar un producto por el id 
  eliminarProducto(id: string) {  
  let c = confirm("Estas seguro de eliminar el producto??"); 
  if(c){ 
    this.productoService.eliminarProducto(id).then(result =>alert('Producto eliminado con exito'))
  }
}



seleccionarProducto(producto:IProducto){ 
  this.editar=true;  
  this.productoSeleccionado=producto; 
  const {nombre,precio,descripcion,url}=producto; 

  this.formularioProducto.setValue({ 
    nombre, 
    precio,  
    descripcion,  
    url
  })

///resetea los valores del formulario 
}
resetFormulario(){ 
  this.formularioProducto.reset(); 
  this.editar= false;}

obtenerFile(event:any){ 
  this.file=event.target.files[0];
}}


function id(id: any) {
  throw new Error('Function not implemented.');
}

function infoProduc(infoProduc: any) {
  throw new Error('Function not implemented.');
}

