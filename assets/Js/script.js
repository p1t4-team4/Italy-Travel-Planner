const romeButton = document.querySelector('#Rome');
const milanButton = document.querySelector('#Milan');
const comoButton = document.querySelector('#Como');
const veniceButton = document.querySelector('#Venice');
const naplesButton = document.querySelector('#Naples');
const iHaveButton = document.querySelector('#Naples');
const iHaveNotButton = document.querySelector('#Naples');

userInfo = {
    Rome: false,
    Naples: false,
    Venice: false,
    Como: false,
    Milan: false,
};

if(userInfo.Rome){
    romeButton.classList.add("btn-success");
    romeButton.classList.remove("btn-danger");
}else{
    romeButton.classList.remove("btn-success");
    romeButton.classList.add("btn-danger");
};

if(userInfo.Milan){
    milanButton.classList.add("btn-success");
    milanButton.classList.remove("btn-danger");
}else{
    milanButton.classList.remove("btn-success");
    milanButton.classList.add("btn-danger");
};

if(userInfo.Como){
    comoButton.classList.add("btn-success");
    comoButton.classList.remove("btn-danger");
}else{
    comoButton.classList.remove("btn-success");
    comoButton.classList.add("btn-danger");
};

if(userInfo.Venice){
    veniceButton.classList.add("btn-success");
    veniceButton.classList.remove("btn-danger");
}else{
    veniceButton.classList.remove("btn-success");
    veniceButton.classList.add("btn-danger");
};

if(userInfo.Naples){
    naplesButton.classList.add("btn-success");
    naplesButton.classList.remove("btn-danger");
}else{
    naplesButton.classList.remove("btn-success");
    naplesButton.classList.add("btn-danger");
};

iHaveButton.addEventListener('click', function (){
    localStorage.setItem("Rome", true);
})
iHaveNotButton.addEventListener('click', function (){
    localStorage.setItem("Rome", false);
})