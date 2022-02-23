const login= document.getElementById("login-head");
const register= document.getElementById("register-head");
const registerInput=document.getElementById("register-input");
const loginInput=document.getElementById("login-input");
const loginLink=document.getElementById("login-link");
const registerLink=document.getElementById("register-link");

register.onclick=()=>{
    registerInput.classList.remove("hide");
    loginInput.classList.add("hide");
    loginLink.classList.add("hide");
    registerLink.classList.remove("hide");
    register.classList.add("prime-color");
    login.classList.remove("prime-color");
}
login.onclick=()=>{
    registerInput.classList.add("hide");
    loginInput.classList.remove("hide");
    loginLink.classList.remove("hide");
    registerLink.classList.add("hide");
    register.classList.remove("prime-color");
    login.classList.add("prime-color");
}