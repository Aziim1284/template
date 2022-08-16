let signup = document.getElementById('signup');
let butt = document.querySelector('.fa-regular');
// var buttonss = document.querySelectorAll('button')
// let btt = document.getElementById("floatend")
let login = document.getElementById("login");
let bt = document.querySelector(".fa-solid");
 
function openn(){
    if(login.style.display === "none"){
                login.style.display = "block";
              }else{
                login.style.display = "none"
              }
}
openn();

function opennn(){
    if(signup.style.display === "none"){
        signup.style.display = "block";
              }else{
                signup.style.display = "none"
              }
}
opennn();

bt.addEventListener('click' , function(){
    if(login.style.display === "none"){
        login.style.display = "block";
      }else{
        login.style.display = "none"
      }
})

butt.addEventListener('click' , function(){
      if(signup.style.display === "none"){
        signup.style.display = "block";
      }else{
        signup.style.display = "none"
      }
})
function opennnn(){
    alert("account created successfully")
     
     }
opennnn();
 
 