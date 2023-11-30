
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getDatabase, set, ref , get, child, update, remove, } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
 

  const firebaseConfig = {
    apiKey: "AIzaSyCyH89A5oNL3UxnF2-_B5tsY7GKUejojKU",
    authDomain: "ebay-c3cdc.firebaseapp.com",
    databaseURL: "https://ebay-c3cdc-default-rtdb.firebaseio.com",
    projectId: "ebay-c3cdc",
    storageBucket: "ebay-c3cdc.appspot.com",
    messagingSenderId: "596393706995",
    appId: "1:596393706995:web:8ddcadbe0df3c64c24be86",
    measurementId: "G-FNEQCK4MS7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
export{
    db,
     set, 
     ref , 
     get,
      child, 
      update, 
      remove
}