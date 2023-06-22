import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDxNtj5w0cMYjGPVt5c1QOyrSOJ3FFnlR8",
  authDomain: "whatsapp-clone-614f9.firebaseapp.com",
  projectId: "whatsapp-clone-614f9",
  storageBucket: "whatsapp-clone-614f9.appspot.com",
  messagingSenderId: "971009970971",
  appId: "1:971009970971:web:82b5cf810826d0ed12b9be"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;