const form = document.getElementById('form');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const alertMessage = document.querySelector('.alertMessage');
const alertTitle = document.getElementById('alertTitle');


let isValid = false;
let passwordMatch = false;

function validateForm() {
  isValid = form.checkValidity();
  console.log(isValid);
  if (!isValid) {
    alertTitle.textContent = 'Fill all the blanks please!';
    alertTitle.style.color = 'red';
    alertMessage.style.borderColor = 'red';
    return;
  }

  if(password.value === repassword.value){

    passwordMatch=true
    password.style.borderColor='green';
    repassword.style.borderColor='green';
  }
  else{
    passwordMatch=false;
    alertTitle.textContent = 'Your password does not match!';
    alertTitle.style.color = 'red'
    alertMessage.style.color = 'red'
    password.style.borderColor='red';
    repassword.style.borderColor='red';
    return;
  }
  if(isValid && passwordMatch){
    alertTitle.textContent = 'You registered!';
    alertTitle.style.color = 'green'
    alertMessage.style.color = 'green'
  }

}
function takeFormInformation(){
    const user ={
        name:form.name.value,
        surname:form.surname.value,
        email:form.email.value,
        phone:form.phone.value,
        password:form.password.value,
        address:form.address.value,

    };
    console.log(user);
}


function submitForm(e){
   e.preventDefault();
   validateForm();

   if(isValid && passwordMatch)
   {
     takeFormInformation();
   }
}

form.addEventListener('submit',submitForm)