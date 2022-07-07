
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { IProducto } from './productosinterface'; 
import {finalize, map} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/compat/storage'
@Injectable({
    providedIn: 'root'
  })
  export class ProductoService { 
    
    private productoCollection!:AngularFirestoreCollection<IProducto>;  
    private urlImagen:string="";
    productoSeleccionado: any;
   url!: string;
  
    
    constructor(private firestore:AngularFirestore,private storage:AngularFireStorage) {  
      this.productoCollection =this.firestore.collection<IProducto>('productos');
     }   
      
     obtenerProductos(){  
      return this.productoCollection!.snapshotChanges().pipe( 
        map(action=>action.map(a =>a.payload.doc.data()as IProducto))
        )
        }
  
     //agregamos un producto a nuestra base de datos, en este caso firestore
      agregarProducto(producto:IProducto){  
       return new Promise(async(resolve, reject) =>{  
       try {   
       //generamos un id automatico y se lo asignamos al pro
      const id = this.firestore.createId(); 
       producto.id = id;    
       
  
        const result= await this.productoCollection.doc(id).set(producto); 
        resolve(result); 
  
      } catch (error){  
        reject(error);
      } 
     
    })
    }
    eliminarProducto(id: string){  
      return new Promise(async (resolve, reject)=>{ 
        try{ 
          const resultado = await this.productoCollection.doc(id).delete(); 
        resolve(resultado); 
       }catch (error){  
        reject(error);
       }
      }) 
       
     
     
    }  
    editarProducto(id:string, infoProduc: IProducto){ 
    return new Promise(async (resolve,rejects)=>{ 
    try{  
      const result = await this.firestore.collection('productos').doc(id).update(infoProduc); 
      resolve(result); 
    }catch(error) {
      rejects(error);
    }
  })
  }
   subirImagen(file:File,producto:IProducto,idProducto?:string){   
     //la ruta a la imagen
     const imagenPath =`imagenes/productos/${file.name}`;
     //nos creamos la referencia a la imagen!
     const imagenRef =this.storage.ref(imagenPath);  
     //subimos la imagen a storage
     const tarea = this.storage.upload(imagenPath,file); 
     //obtenr la refereancia de la imagen es decir la url 
     tarea.snapshotChanges().pipe( 
       finalize(() => { 
         imagenRef.getDownloadURL().subscribe((url: any) =>{ 
         this.urlImagen= url;   
          
      //agrego la url de la imagen a mi producto
         producto.url = this.urlImagen; 
          
      // de esta forma se si quiero editar o agregar uno nuevo, ya que si viene un id quiero editarlo!
         if(idProducto) {
         this.editarProducto(idProducto,producto); 
         }
          else{ 
            this.agregarProducto(producto);   
          } 
        })
     
      })).subscribe();
      }
  }
  function infoProduc(_infoProduc: any) {
    throw new Error('Function not implemented.');
  }
  
  function snapshotChanges() {
    throw new Error('Function not implemented.');
  }
  
  