const activitiesInput = document.querySelector('#activitiesText');
const activitiesForm = document.querySelector('#activitiesForm');
const activitiesList = document.querySelector('#activitiesList');
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

activities = [];

renderActivities()

activitiesForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const activitiesText = activitiesInput.value.trim();
    if (planText === '') {
      return;
    }
    activities.push(activitiesText);
    activitiesInput.value = '';

    renderActivities()
});

function renderActivities() {
       activitiesList.innerHTML = '';
  
    for (let i = 0; i < activities.length; i++) {
      const activity = activities[i];
  
      const li = document.createElement('li');
      li.textContent = activity;
      li.setAttribute('data-index', i);

      todoList.appendChild(li);
    }
  }
