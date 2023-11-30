import {db, set, ref , get, child, update, remove} from "./firebase/firebase-config.js"

//===========reference to get input field and buttons =======

var nameInput = document.getElementById('name');
var rollNumberInput = document.getElementById('rollNumber');
var genderInput = document.getElementById('gender');



var createRecord = document.getElementById('createRecord');
var readRecord = document.getElementById('readRecord');
var updateRecord = document.getElementById('updateRecord');
var  deleteRecord= document.getElementById('deleteRecord');

//===================interface ====================
function Interface(e) {
   let btnId = e.target.id;
   if (btnId == "readRecord") {
    SelectData();
    return
   }
   const dbRef = ref(db);
   get(child(dbRef , "StudentsData/"+ rollNumber.value))
   .then((snapShot)=>{
       if(snapShot.exists()){
 if (btnId == "createRecord") {
    Swal.fire({
        title: "Employed cnic already exist please correct it",
        text: "Not found: ",
        icon: "error",
        timer : 4000,
        timerProgressBar: true,
    });
 }
else if (btnId == "updateRecord"){
updateData();

}
else if (btnId == "deleteRecord"){
removeData();

}
           
       }
       else{
        if (btnId == "createRecord") {
          insertData()
         }
        else if (btnId == "updateRecord"){
      alert("cannot update, employed not exists")
        
        }
        else if (btnId == "deleteRecord"){
            alert("cannot delete, employed not exists")
        
        }
           
       }
   })
   .catch((error)=>{
       alert("Data is not added " + error)
    
    
   })
}
//=============insert data==============

function insertData() {
    set(ref(db, "StudentsData/"+ rollNumberInput.value),{
        StudentName : nameInput.value,
        StudentRollNumber : rollNumberInput.value,
StudentGender : genderInput.value
    })
    .then(()=>{
        Swal.fire({
            title: "data is added",
            text: "You clicked the button!",
            icon: "success",
            timer : 4000,
            timerProgressBar: true,
          });
       
        nameInput.value = '';
rollNumberInput.value = '';
 genderInput.value = '';
    })
    .catch((error)=>{
        alert("Data is not added: " + error)
      
    })

}



// //=============select data==============
function SelectData() {
    const dbRef = ref(db);
    get(child(dbRef , "StudentsData/"+ rollNumber.value))
    .then((snapShot)=>{
        if(snapShot.exists()){
            nameInput.value = snapShot.val().StudentName;
            rollNumberInput.value = snapShot.val().StudentRollNumber;
            genderInput.value = snapShot.val().StudentGender;
            
        }
        else{
            Swal.fire({
                title: "Error",
                text: "Not found: ",
                icon: "error",
                timer : 4000,
                timerProgressBar: true,
            });
            nameInput.value = '';
            rollNumberInput.value = '';
             genderInput.value = '';
            
        }
    })
    .catch((error)=>{
        alert("Data is not added " + error)
     
     
    })
    
}


//==================update data============
function updateData() {
    update(ref(db, "StudentsData/"+ rollNumberInput.value),{
        StudentName : nameInput.value,
        StudentGender : genderInput.value
    })
    .then(()=>{
        Swal.fire({
            title: "data is update",
            text: "data is update: ",
            icon: "success",
            timer : 4000,
            timerProgressBar: true,
        });
        
        
        nameInput.value = '';
        rollNumberInput.value = '';
        genderInput.value = '';
    })
    .catch((error)=>{
        alert("data is not update" + error)
        
        
    })
}



//================delete data==========
function removeData() {
    remove(ref(db, "StudentsData/"+ rollNumberInput.value),{
        
    })
    .then(()=>{
        
        Swal.fire({
            title: "data is delete",
            text: "data is delete ",
            icon: "success",
            timer : 4000,
            timerProgressBar: true,
        });
    })
    .catch((error)=>{
        alert("data is not delete" + error)
        
    })
}



//============= assign event to btn==============
createRecord.addEventListener('click', Interface);
deleteRecord.addEventListener('click', Interface)
updateRecord.addEventListener('click', Interface)
readRecord.addEventListener('click', Interface);