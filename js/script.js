//Unsorted & Sorted array//

let rand_array = [];

for(let i= 0; i < 10; i++){
    rand_array.push(Math.floor(Math.random()*100));
}

document.getElementById("array").innerHTML = rand_array;

rand_array.sort();
document.getElementById("sort").innerHTML = rand_array;


//Javascript Validation//

function validateEmail(){
    var email = document.getElementById("email").value;
    
if(email.includes("@") && email.includes(".")){
    return true;
}
else{
    alert("Email is invalid");
}
}

function validateCheckbox(){
    var checkBox = document.getElementById("checkbox");
    if(checkBox.checked == false){
        alert("Please check the box");
    }

}

function validateForm(){
    if(validateCheckbox() && validateEmail() === true){
        window.location.href = "html/actionpage.html";
    }
}



