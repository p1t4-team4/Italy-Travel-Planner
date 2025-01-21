const romeButton = document.querySelector('#Rome');
const milanButton = document.querySelector('#Milan');
const comoButton = document.querySelector('#Como');
const veniceButton = document.querySelector('#Venice');
const naplesButton = document.querySelector('#Naples');
const italy = document.querySelector("#Italy");
const cityButtons = document.querySelectorAll('.btn');

const cityNames = [];
let visitedArray  = [];

// const storedTodos = JSON.parse(localStorage.getItem('todos'));
// localStorage.setItem('todos', JSON.stringify(todos);


cities = [
{name: "Rome", visited: false, button: romeButton},
{name: "Naples", visited: false, button: naplesButton},
{name: "Venice", visited: false, button: veniceButton},
{name: "Como", visited: false, button: comoButton},
{name: "Milan", visited: false, button: milanButton},
]


for(i = 0; i < cities.length; i++){
    cityNames.push(cities[i].name);
};

for(i = 0; i < cities.length; i++){
    visitedArray.push(cities[i].visited);
}

if(localStorage.getItem('visitedArray') != undefined){
    visitedArray = JSON.parse(localStorage.getItem('visitedArray'));
    for(i = 0; i < cities.length; i++){
        cities[i].visited = visitedArray[i];
    }
}

localStorage.setItem('visitedArray', JSON.stringify(visitedArray));
setCooler();

italy.addEventListener("click", e =>{
    if (e.target.matches("#have")){
        i = cityNames.indexOf(document.querySelector('[status="active"]').getAttribute("id"));
        cities[i].visited = true;
        visitedArray[i] = true;
        localStorage.setItem('visitedArray', JSON.stringify(visitedArray));
        setCooler();
    }
});

italy.addEventListener("click", e =>{
    if (e.target.matches("#haveNot")){
        i = cityNames.indexOf(document.querySelector('[status="active"]').getAttribute("id"));
        cities[i].visited = false;
        visitedArray[i] = false;
        localStorage.setItem('visitedArray', JSON.stringify(visitedArray));
        setCooler();
    }
});

italy.addEventListener("click", e =>{
    if (e.target.matches("#blog")){
        i = cityNames.indexOf(document.querySelector('[status="active"]').getAttribute("id"));
        cityName =  cityNames[i].toLowerCase();
        window.location.href = `./${cityName}.html`;
    }
});

italy.addEventListener("click", e =>{
    if (e.target.matches("#X")){
        Win = document.querySelector("#cityWindow");
        Win.remove();
        document.querySelector('[status="active"]').setAttribute("status", "inactive");
        setOpacity()
    }
});

italy.addEventListener("click", e =>{
    if (e.target.matches(".btn")){

        i = cityNames.indexOf(e.target.getAttribute("id"));

        if(document.querySelector("#cityWindow") != undefined){
            Win = document.querySelector("#cityWindow");
            button = document.querySelector('[status="active"]');
            Win.remove();
            button.style.zIndex = 0;
            button.setAttribute("status", "inactive");
        }
        
        
        cityWindow = document.createElement('div');
        cityWindow.setAttribute("id", "cityWindow");
        X = document.createElement('div');
        X.setAttribute("id", "X");
        X.innerText = "✖";
        yesNo = document.createElement('div');
        yesNo.setAttribute("id", "yesNo");
        have = document.createElement('div');
        have.setAttribute("id", "have");
        have.innerText = "Been";
        haveNot = document.createElement('div');
        haveNot.innerText = "Not Been";
        haveNot.setAttribute("id", "haveNot");
        Blog = document.createElement('div');
        Blog.setAttribute("id", "blog");
        Blog.innerText = "Blog";
        
        cities[i].button.appendChild(cityWindow);
        cities[i].button.setAttribute("status", "active");
        cities[i].button.style.zIndex = 9;
        cityWindow.appendChild(X);
        cityWindow.appendChild(yesNo);
        yesNo.appendChild(have);
        yesNo.appendChild(haveNot);
        cityWindow.appendChild(Blog);
        setOpacity()
        }
    }); 

function setOpacity(){
    inactiveCities = document.querySelectorAll('[status="inactive"]')
    if(document.querySelector('[status="active"]') == undefined){
        for(i = 0; i < inactiveCities.length; i++){
          inactiveCities[i].style.opacity = 1;  
        }
    }else{
        for(i = 0; i < inactiveCities.length; i++){
            inactiveCities[i].style.opacity = .5;  
        }
        document.querySelector('[status="active"]').style.opacity = 1;
    }
}

function setCooler(){
    for(i = 0; i < cities.length; i++){
        if(cities[i].visited){
            cities[i].button.classList.add("btn-success");
            cities[i].button.classList.remove("btn-danger");
        }else{
            cities[i].button.classList.remove("btn-success");
            cities[i].button.classList.add("btn-danger");
        };
    }; 
}