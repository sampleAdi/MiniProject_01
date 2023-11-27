let form=document.forms['Sign-up'];
function showError(errorElement,errorMassage){
    document.querySelector("."+errorElement).innerHTML=errorMassage;
}
function clearError(){
    document.querySelector(".pass-error").innerHTML="";
}

form.onsubmit= function(event){
    clearError();
    if(form.password.value!==form['confirm-password'].value){
        showError('pass-error','Password and Confirm Password did not match');
        return false;
    }
    // event.preventDefault();
}