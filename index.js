let create = document.getElementById("create-id");
let login = document.getElementById("main-box");
let signin = document.getElementById("Signin");
let loginPage = document.getElementById("login-page");
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