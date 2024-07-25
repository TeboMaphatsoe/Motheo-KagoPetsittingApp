import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase,set,ref} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCMVBRQ5raicdNsmQlV6uyJeaZZfC3JiPY",
    authDomain: "petsitting-webapp.firebaseapp.com",
    databaseURL: "https://petsitting-webapp-default-rtdb.firebaseio.com",
    projectId: "petsitting-webapp",
    storageBucket: "petsitting-webapp.appspot.com",
    messagingSenderId: "263226864100",
    appId: "1:263226864100:web:48a6ed71f7abe4de4d57f1"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase();

  var title = document.getElementById("titleId").value;
  var firstName = document.getElementById("inputFname").value;
var lastName = document.getElementById("inputName").value;
  var age = document.getElementById("inputAge");
 var race = document.getElementById("raceId").value;
  var gender = document.getElementById("gender").value;
  var contact = document.getElementById("inputContact").value;
  var textboxId = document.getElementById("myTextbox").value;

  var btnSubmit = document.getElementById("btnSubmit");
  var btnDelete = document.getElementById("Delete");

  function saveData2(){
    set(ref(db,"Sitter_Details/"+contact),{
      title:title,
      firstName:firstName,
      lastName:lastName,
      age:age,
      race:race,
      gender:gender,
      contact:contact,
      bio:textboxId
    })
    .then(()=>{
    
         openPopup();
        window.location.href="Explore.html";
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        })
    }

    function deleteData2(){
        remove(ref(db,"Sitter_Details/"+contact))
        .then(()=>{
          alert("Data removed successfully!")
        })
        .catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
        });
         }

         
btnSubmit.addEventListener('click',saveData2);
btnDelete.addEventListener('click',deleteData2);
let popup = document.getElementById("popId");
let btnOk = addEventListener('click',closePopup);

function openPopup(){
    popup.classList.add("openpopup")
   }
  
   function closePopup(){
    popup.classList.remove("openpopup")
   }
      
   document.getElementById("exploreButton").addEventListener("click",function(){
    window.location.href="Explore.html";
   });
