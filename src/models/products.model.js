
import { db } from "./firebase.js"
import {collection, getDocs, doc, getDoc, addDoc, deleteDoc , setDoc} from "firebase/firestore"

function conexionDB(){
    const productsCollection = collection(db, "products");  
    if(!productsCollection){ return false}

    return productsCollection
}


export const getAllProducts = async()=> {
    
    const productsCollection = conexionDB()

    try {
        const snapshot = await getDocs(productsCollection)
        const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));   
        return products;

        }
        catch (error) {
            console.error('Error al cargar products.json:', error.message);
            return []; 
    }
}

export const getProductByid = async (id) => {

    const productsCollection = conexionDB()

    try {
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);
        return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;

    } catch (error) {
        console.error('Error al buscar el producto ');
    }

}

export const searchProduct = async () => {
    
    return productsCollection = collection(db, "products");
    
};

export const postNewProduct = async (data) => {
    const productsCollection = conexionDB()

    try{
        return await addDoc(productsCollection, data)

    }catch (error){
        console.error('Error al crear el producto ', error.message);

    }
};
export const updateProduct = async (id, productData) =>{
    const productsCollection = conexionDB()

    try {
        const prodRef = doc(productsCollection, id);
        const snapshot = await getDoc(prodRef);
        if(!snapshot.exists()){
            return false
        }
        await setDoc(prodRef, productData);
        return {id, ...productData}

    } catch(error){
        console.error('Error al actualizar el producto ', error.message)
    }

}

export const deleteProduct = async (productId) => {
    const productsCollection = conexionDB()

    try {
        const productRef = doc(productsCollection, productId);
        const snapshot = await getDoc(productRef);
       
        if(!snapshot.exists()){
            return false;
        }
        await deleteDoc(productRef);
        return true; 
        
    } catch (error) {
        console.error(error)
    } 

}