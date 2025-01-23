const activitiesForm = document.querySelector('#activities');
const budgetForm = document.querySelector('#budget');
const hero = document.querySelector('#hero');
const facts = document.querySelector('#facts');





Cities=[
    {Name:"Rome", imagesURLs:[], blrup:"", items:[], plans:[]},
    {Name:"Naples", imagesURLs:[], blrup:"", items:[], plans:[]},
    {Name:"Venice", imagesURLs:[], blrup:"", items:[], plans:[]},
    {Name:"Como", imagesURLs:[], blrup:"", items:[], plans:[]},
    {Name:"Milan", imagesURLs:[], blrup:"", items:[], plans:[]}
];

plans = [];
activitiesForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const planText = todoInput.value.trim();
    if (planText === '') {
      return;
    }
    plans.push(todoText);
    todoInput.value = '';