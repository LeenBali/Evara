let email=document.querySelector('.email');
let btnlogin=document.querySelector('.btnlogin');
let pass=document.querySelector('.pass');
let log=document.querySelector('.log');
btnlogin.onclick=function(){
    if(email.value!=='leenbali@gmail.com' || pass.value !=='12345'){
    log.innerHTML='the email or password is not correct';
    }
    else {
        window.open('index.html')
    }
}
let emails=document.querySelector('.emails');
let password=document.querySelector('.password');
let confirm=document.querySelector('.confirm');
let Register=document.querySelector('.Register');
let reg=document.querySelector('.reg');
let user=document.querySelector('.user');
Register.onclick=function(){
    if(!emails.value.includes('@')){
       reg.innerHTML='the email is not include "@"';
       reg.style.color='red';
    }
     else  if(password.value.length<8){
        reg.innerHTML='Password must be greater than 8 letters or number ';
        reg.style.color='red';
      }
   else if(confirm.value !== password.value){
        reg.innerHTML='the password incorrect';
        reg.style.color='red';
    }
    else if(user.value=='' || emails.value=='' || password.value=='' || confirm.value==''){
        reg.innerHTML='Please fill out the fields';
        reg.style.color='red'
    }
    else{
        reg.innerHTML='the account has been created';
        reg.style.color='green';
        window.open('index.html');
    }

}