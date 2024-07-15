//radio parent background
let radios = document.getElementsByName('query');
function changeBackground(radio) {
    let radios = document.getElementsByName('query');
    radios.forEach(radio => {
        let parentDiv = radio.parentElement;
        parentDiv.classList.remove('grey');    
    });
    let div = radio.parentElement;
    if(radio.checked)
    div.classList.add('grey');
}


// - Complete the form only using their keyboard
// - Have inputs, error messages, and the success message announced on their screen reader




//form validation
const form = document.getElementById('form');
form.addEventListener('submit', function (event){
    //prevent submit 
    event.preventDefault();
    
    //full name validation

    //first name validation
    const fName = document.getElementById('fname');
    const fNameError = document.getElementById("fname-error");
     
    if(fName.value === '' ){
        fName.style.border ='1px solid var(--error-color)';
        fNameError.textContent = 'This field is required';
        return;
    }
    else
    {   fName.style.border ='1px solid var(--main-color-grey)';
        fNameError.textContent = '';    
    }
    //last name validation
    const lName = document.getElementById("lname");
    const lNameError = document.getElementById("lname-error");

    if (lName.value === '' ){
        lName.style.border ='1px solid var(--error-color)';
        lNameError.textContent = 'This field is required';
        return;
    }
    else
    {   lName.style.border ='1px solid var(--main-color-grey)';
        lNameError.textContent = '';   
    }
    //email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    if(email.value === ''){
        email.style.border ='1px solid var(--error-color)';
        emailError.textContent = 'This field is required';
        return;
    }
    if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)){
        email.style.border ='1px solid var(--error-color)';
        emailError.textContent = 'Please enter a valid email address';
        return;
    }
    else{
        email.style.border ='1px solid var(--main-color-grey)';
        emailError.textContent = '';
    }
    //query type validation
    const queryGeneral = document.getElementById('general');
    const querySupport = document.getElementById('support');
    const queryError = document.getElementById('query-error');

    if(queryGeneral.checked == false || !querySupport.checked == false){
        
        queryError.textContent = 'Please select a query type';
        return;
    }
    else
    queryError.textContent='';

    //validating message
    const message = document.getElementById('message');
    const messageError = document.getElementById('msg-error');

    if(message.value === ''){
        message.style.border ='1px solid var(--error-color)';
        messageError.textContent = 'This field is required';
        return;
    }
    else{
        message.style.border ='1px solid var(--main-color-grey)';
        messageError.textContent = '';
        }   
    //consent validation
    const checkbox = document.getElementById('consent');
    const consentError = document.getElementById('consent-error');

    if(!checkbox.checked){
        consentError.textContent = 'To submit this form, please consent to being contacted';
        return;
    }
    else
    consentError.textContent = '';

    // Clear the sessionStorage flag once toast is shown
    sessionStorage.setItem('showToastOnLoad', 'true');
    
    
          form.submit();
          showToast();
        
});


document.addEventListener('DOMContentLoaded', function() {
    // Check if a toast message should be displayed from session storage
    const showToastOnLoad = sessionStorage.getItem('showToastOnLoad');
    if (showToastOnLoad === 'true') {
      showToast();
      // Clear the sessionStorage flag once toast is shown
      sessionStorage.removeItem('showToastOnLoad');
    }
  });
//display the toast message
function showToast() {
    const toast = document.getElementById('toast');
    toast.className = 'toast-msg show';
    setTimeout(function() {
      toast.className = toast.className.replace('show', 'fade');
    }, 5000);
  }

  
 