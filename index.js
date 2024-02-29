let create = document.getElementById("create-id");
let login = document.getElementById("main-box");
let signin = document.getElementById("Signin");
let loginPage = document.getElementById("login-page");
let sh = document.querySelector("#s-h");
let sh1 = document.querySelector("#s-h1");
let change = ()=>{
   login.style.display = "none";
    signin.style.display ="block";
}
create.addEventListener("click",change);
let changeTwo = ()=>{
    login.style.display = "block";
 
     signin.style.display ="none";
 }
 loginPage.addEventListener("click",changeTwo);
 let password = document.querySelector(".password")
 let a = ()=>{
    if(password.type === "password")
    password.type = "text"
else
password.type = "password"
 }
sh.addEventListener("click", a);

let password1 = document.querySelector(".password1")
 let a1 = ()=>{
    if(password1.type === "password")
    password1.type = "text"
else
password1.type = "password"
 }
sh1.addEventListener("click", a1);