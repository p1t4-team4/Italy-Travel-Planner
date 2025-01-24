const activitiesInput = document.querySelector('#activitiesText');
const activitiesForm = document.querySelector('#activitiesForm');
const activitiesList = document.querySelector('#activitiesList');
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

activities = [];
budget = [];

renderActivities()

activitiesForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const activitiesText = activitiesInput.value.trim();
    if (activitiesText === '') {
      return;
    }
    activities.push(activitiesText);
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
  console.log(budget);
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
    const spanItem = document.createElement('span');
    const spanPrice = document.createElement('span');
    spanItem.textContent = item;
    spanPrice.textContent = price;
    li.textContent = 'Item:' + spanItem + 'Price:' + spanPrice;
    li.setAttribute('data-index', i);

    const button = document.createElement('button');
    button.textContent = 'Remove';

    li.appendChild(button);
    budgetList.appendChild(li);
  }
}
budgetList.addEventListener('click', function (event) {
  const element = event.target;
  if (element.matches('button') === true) {
    const index = element.parentElement.getAttribute('data-index');
    budget.splice(index, 1);
    renderBudget();
  }
});
editButton.addEventListener('click', function(event){

})