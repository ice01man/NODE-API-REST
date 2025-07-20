import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { db } from "./firebase.js"
import {collection, getDocs, doc, getDoc, addDoc, deleteDoc } from "firebase/firestore"




export const getAllProducts = async()=> {
const productsCollection = collection(db, "products");  
  try {
    const snapshot = await getDocs(productsCollection)
    const products = snapshot.docs.map((doc) => ({
        id: doc.id,  ...doc.data(),
        }));
        console.log(products)
        return products;
    }
    catch (error) {
        console.error('Error al cargar products.json:', error.message);
        return []; 
  }
}

export async function searchProduct(flag, item){
    console.log( 'dentro de model', item)
    const productos = getAllProducts()
    const searchTerm = item
   
    switch(flag){
        
        case 'name':
            const Nombrefiltered = productos.filter((producto) =>
            producto.name.toLowerCase().includes(searchTerm)
            );
            return Nombrefiltered
        break;
        case 'price':
            const priceSearchValue = Number(searchTerm);
            if (isNaN(priceSearchValue)) {
               
                console.error("El valor de búsqueda para precio no es un número válido:", searchTerm);
                return []; 
            }
            const Preciofiltered = productos.filter((producto) =>
                typeof producto.price === 'number' && producto.price === priceSearchValue
            );
            console.log('dentro de model', Preciofiltered); 
            return Preciofiltered;
          
            break;
        case 'category':
            const filtered = productos.filter((producto) => 
            producto.category.includes(searchTerm)
                );
                console.log( 'dentro de model', filtered)
                 return filtered
            break;
        default:
            return err.JSON('Items no encontrado')
    }

}

export const postNewProduct = async (data) => {
    console.log(data)
    const productsCollection = collection(db, "products");  
    try{
        constdocRef = await addDoc(productsCollection, data)
        return { id: docRef.id, ...data };

    }catch (error){
        console.log(error)

    }
};

export const deleteProduct = async (id) => {
    const productsCollection = db.collection('products');
    
    try {
        const docRef = productsCollection.doc(productId);
        const doc = await docRef.get();
       // const prodRef = doc(productsCollection, String(id));
       // const snapshot = await getDoc(prodRef);

        if(!doc.exists()){
            return false;
        }
        await docRef.delete();
        return true; 
        
    } catch (error) {
        console.error(error)
    } 

}