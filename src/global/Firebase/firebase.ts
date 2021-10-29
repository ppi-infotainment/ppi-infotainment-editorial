import app from 'firebase/app';
 
const firebaseConfig = {
    apiKey: "AIzaSyDOeaR71nZ3SH2rXK32MphN6eMwaJtzmwQ",
    authDomain: "ppi-infotainment.firebaseapp.com",
    projectId: "ppi-infotainment",
    storageBucket: "ppi-infotainment.appspot.com",
    messagingSenderId: "861688563487",
    appId: "1:861688563487:web:23e3dfb142cc8bfb39522a"
  };
 
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}
 
export default Firebase;