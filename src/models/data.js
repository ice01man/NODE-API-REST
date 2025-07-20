// const firebaseConfig = { ... } // Esto ya no se usa con Admin SDK

import admin from 'firebase-admin'; // Importa el módulo admin

// Importa tu archivo de clave de cuenta de servicio
// Asegúrate de que la ruta sea correcta. Si 'serviceAccountKey.json' está en la raíz del proyecto
// y este archivo está en 'src/models', necesitarás ajustar la ruta como hicimos con 'products.json'.
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ajusta esta ruta si tu serviceAccountKey.json no está en la raíz del proyecto
// Si está en la raíz y este archivo está en src/models
const serviceAccount = join(__dirname, '..', '..', 'npapirest.json');

// Inicializa Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  // Si vas a usar Realtime Database o Cloud Storage, también necesitarás databaseURL o storageBucket
  // databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  // storageBucket: "gs://<BUCKET_NAME>.appspot.com"
});

// Ahora puedes acceder a los servicios de Firebase:
const db = admin.firestore(); // Para Cloud Firestore
// const auth = admin.auth(); // Para autenticación de usuarios (solo para manejar usuarios de forma programática)
// const storage = admin.storage(); // Para Cloud Storage
// ...

console.log('Firebase Admin SDK inicializado exitosamente.');

// Ejemplo de uso (leer un documento de Firestore)
// async function getDocumentFromFirestore() {
//   try {
//     const docRef = db.collection('your_collection').doc('your_document_id');
//     const doc = await docRef.get();
//     if (doc.exists) {
//       console.log('Datos del documento:', doc.data());
//     } else {
//       console.log('No se encontró el documento.');
//     }
//   } catch (error) {
//     console.error('Error al obtener el documento:', error);
//   }
// }

// getDocumentFromFirestore();