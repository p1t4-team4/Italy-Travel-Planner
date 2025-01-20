const romeButton = document.querySelector('#Rome');
const milanButton = document.querySelector('#Milan');
const comoButton = document.querySelector('#Como');
const veniceButton = document.querySelector('#Venice');
const naplesButton = document.querySelector('#Naples');
const italy = document.querySelector("#Italy");
const cityButtons = document.querySelectorAll('.btn');

const cityNames = [];
const windows = [];

let cities = [
    {name: "Rome", visited: false, button: romeButton},
    {name: "Naples", visited: false, button: naplesButton},
    {name: "Venice", visited: false, button: veniceButton},
    {name: "Como", visited: false, button: comoButton},
    {name: "Milan", visited: false, button: milanButton},
];



for(i = 0; i < cities.length; i++){
    cityNames.push(cities[i].name);
};

setCooler();

italy.addEventListener("click", e =>{
    if (e.target.matches(".btn")){
        i = cityNames.indexOf(e.target.getAttribute("id"));
        if(cities[i].visited){
            cities[i].visited = false;
        }else{
            cities[i].visited = true;
        }
        setCooler();
    }
});

// italy.addEventListener("click", e =>{
//     if (e.target.matches(".btn")){
//         i = cityNames.indexOf(e.target.getAttribute("id"));
//         if(windows[0] == undefined){
//             windows.push(document.createElement('div'));
//             windows[0].innerText = "hello";
//             cities[i].button.appendChild(windows[0]);
//             console.log(window[0]);
//         }else{
//             windows.pop();
//             windows[0].innerText = "hello";
//             cities[i].button.appendChild(windows[0]);
//             console.log(window[0]);
//         }
//     }})

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