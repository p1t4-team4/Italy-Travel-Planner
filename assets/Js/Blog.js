const activitiesInput = document.querySelector('#activitiesText');
const activitiesForm = document.querySelector('#activitiesForm');
const activitiesList = document.querySelector('#activitiesList');
const budgetSection = document.querySelector('#budget');
const budgetForm = document.querySelector('#budgetForm');
const itemInput = document.querySelector('#item');
const priceInput = document.querySelector('#price');
const budgetList = document.querySelector('#budgetList');
const editButton = document. querySelector('#editButton');
const hero = document.querySelector('#hero');
const facts = document.querySelector('#facts');

Cities=[
    {Name:"Rome", imagesURLs:[], blrup:"", items:[], plans:[]},
    {Name:"Naples", imagesURLs:[], blrup:"", items:[], plans:[]},
    {Name:"Venice", imagesURLs:[], blrup:"", items:[], plans:[]},
    {Name:"Como", imagesURLs:[], blrup:"", items:[], plans:[]},
    {Name:"Milan", imagesURLs:[], blrup:"", items:[], plans:[]}
];

let activities = [];
let budget = [];
let total = 0;

if (localStorage.getItem('activities') == undefined){
   let activitiesList = JSON.parse(localStorage.getItem('activities'));
}

if (localStorage.getItem('budget') != undefined){
  budget = JSON.parse(localStorage.getItem('budget'));
}
if (localStorage.getItem('total') != undefined){
  total = localStorage.getItem('total');
}


renderBudget();
renderActivities();

activitiesForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const activitiesText = activitiesInput.value.trim();
    if (activitiesText === '') {
      return;
    }
    activities.push(activitiesText);
    localStorage.setItem('activities', JSON.stringify(activities));
    activitiesInput.value = '';

    renderActivities();
});

function renderActivities() {
    activitiesList.innerHTML = '';
  
    for (let i = 0; i < activities.length; i++) {
      const activity = activities[i];
  
      const li = document.createElement('li');
      li.textContent = activity;
      li.setAttribute('data-index', i);

      const button = document.createElement('button');
      button.textContent = 'Remove';

      li.appendChild(button);
      activitiesList.appendChild(li);
    }
}

activitiesList.addEventListener('click', function (event) {
  const element = event.target;
  if (element.matches('button') === true) {
    const index = element.parentElement.getAttribute('data-index');
    localStorage.setItem('activities', JSON.stringify(activities));
    activities.splice(index, 1);
    renderActivities();
  }
});

budgetForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const item = itemInput.value.trim();
  const price = priceInput.value.trim();
  if (price === '' || item === '') {
    return;
  }
  
  budget.push([item, price]);

  total = 0;
  for(i=0; i < budget.length; i++){
    total = Number(total) + Number(budget[i][1]);
    console.log(total)
  }

  localStorage.setItem('budget', JSON.stringify(budget));
  localStorage.setItem('total', JSON.stringify(total));
  itemInput.value = '';
  priceInput.value = '';
  renderBudget();
});

function renderBudget() {
  budgetList.innerHTML = '';

  for (let i = 0; i < budget.length; i++) {
    const item = budget[i][0];
    const price = budget[i][1];

    const li = document.createElement('li');
    li.textContent = `Item: ${item} Price: ${price}`;
    li.setAttribute('data-index', i);
    
    const button = document.createElement('button');
    button.textContent = 'Remove';

    li.appendChild(button);
    budgetList.appendChild(li);
  }

  if (document.querySelector("#Total") == undefined ){
    totalDiv = document.createElement("div");
    totalDiv.setAttribute("id",  "Total");
    totalDiv.innerText = `Total: ${total}`;
    budgetSection.appendChild(totalDiv);
  }else{
    totalDiv = document.querySelector("#Total");
    totalDiv.innerText = `Total: ${total}`;
  }

}
budgetList.addEventListener('click', function (event) {
  const element = event.target;
  if (element.matches('button') === true) {
    const index = element.parentElement.getAttribute('data-index');
    budget.splice(index, 1);
    total = 0;
    for(i=0; i < budget.length; i++){
      total = Number(total) + Number(budget[i][1]);
    }
    localStorage.setItem('budget', JSON.stringify(budget));
    localStorage.setItem('total', JSON.stringify(total));
    renderBudget();
  }
});