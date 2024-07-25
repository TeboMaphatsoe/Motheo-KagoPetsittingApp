    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
    import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
   
   
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCMVBRQ5raicdNsmQlV6uyJeaZZfC3JiPY",
      authDomain: "petsitting-webapp.firebaseapp.com",
      databaseURL: "https://petsitting-webapp-default-rtdb.firebaseio.com",
      projectId: "petsitting-webapp",
      storageBucket: "petsitting-webapp.appspot.com",
      messagingSenderId: "263226864100",
      appId: "1:263226864100:web:48a6ed71f7abe4de4d57f1"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

   
   

    
    const submit = document.getElementById('SignupBtn')
    const submit2 = document.getElementById('SigninBtn');

    submit.addEventListener("click",function(event){
      event.preventDefault()

    const name = document.getElementById('nameID').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
     
     
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account.....")
    window.location.href = "/Explore.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

    })

    submit2.addEventListener("click",function(event){
      event.preventDefault()

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
     
     
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    toggle();
    window.location.href = "/Explore.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
});

let popup = document.getElementById("popId");
 let btnOk = addEventListener('click',closePopup);

 function toggle(){
 var blur = document.getElementById('blur');
 blur.classList.toggle('active')
}
 function openPopup(){
  popup.classList.add("openpopup")
 }

 function closePopup(){
  popup.classList.remove("openpopup")
 }