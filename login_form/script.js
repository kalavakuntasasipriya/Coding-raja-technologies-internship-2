const loginForm = document.getElementById('loginForm');
const erroDiv = document.getElementById('error');

loginForm.addEventListener('submit',function(event){

    event.preventDefault();

    const username  =  document.getElementById('username').value;
    const password =  document.getElementById('password').value;

    if(username == '' || password == '' ){
        erroDiv.textContent = 'please fill out both fields.';
    }
    else{
        erroDiv.textContent = 'Login Successful!';
        window.location.href = "../paatalu/index.html";
    }

});