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
  

 


 var petowner = document.getElementById("petownerId").value;
  var typeOfpet = document.getElementById("typeOfpetId").value;
var address = document.getElementById("addressId").value;
  var dateAndTime = document.getElementById("dateTimeId");
 var duration = document.getElementById("durationId").value;
  var contact = document.getElementById("contactId").value;

   //pet details
 var petname = document.getElementById("petNameId").value;
 var age = document.getElementById("ageId").value;
 var sex = document.getElementById("sexId").value;
 var species = document.getElementById("speciesId").value;
 var color = document.getElementById("colorId").value;
 var feedingInstruct = document.getElementById("feedingId").value;

 var btnSave = document.getElementById("saveBtn");
var btnDelete = document.getElementById("dltBtn");
  
 function saveData(event){
  event.preventDefault();
  set(ref(db,"Customer_Details/"+contact),{
    petowner: petowner,
    typeOfpet:typeOfpet,
    address:address,
    dateAndTime:dateAndTime,
    duration:duration,
    contact:contact,

    petname:petname,
    age:age,
    sex:sex,
    species:species,
    color:color,
    feedingInstruct:feedingInstruct
  })
  .then(()=>{
    
    openPopup();
  window.location.href="/To-DoList.html";
  })
  .catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    })
 }

 function deleteData(){
remove(ref(db,"Customer_Details/"+contact))
.then(()=>{
  alert("Data removed successfully!")
})
.catch((error)=>{
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage)
});
 }

btnSave.addEventListener('click',saveData);
btnDelete.addEventListener('click',deleteData)

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


 

 


  
    
    
  



