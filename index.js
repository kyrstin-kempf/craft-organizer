// Globals ----------------------------------------------------------------------------------------------------

const localURL = 'http://localhost:3000';

let crafts = [];

const fullStar = '★'
const emptyStar = '☆'

const trashCan = '🗑'

// Nodes -------------------------------------------------------------------------------------------------------

const mainDiv = () => document.getElementById('main');
const homePageLink = () => document.getElementById('craft-list-link');
const craftFormLink = () => document.getElementById('craft-form-link');
const mediumValue = () => document.getElementById('medium');
const methodValue = () => document.getElementById('method');
const levelValue = () => document.getElementById('level');
const sourceValue = () => document.getElementById('source');
const sourceLinkValue = () => document.getElementById('source-link');

// Templates --------------------------------------------------------------------------------------------------------

const craftTemplate = (craft) => {
  const tr = document.createElement('tr');
    const tdFavorite = document.createElement('td');
    const tdMedium = document.createElement('td');
    const tdMethod = document.createElement('td');
    const tdLevel = document.createElement('td');
    const tdSource = document.createElement('td');
    const tdSourceLink = document.createElement('a');
    const tdLink = document.createElement('a');
      tdSourceLink.setAttribute('href', tdLink);
      tdSourceLink.classList.add('allLinks')
      tdSource.appendChild(tdSourceLink);
    const tdTrash = document.createElement('td');
  tdMedium.innerText = craft.medium;
  tdMethod.innerText = craft.method;
  tdLevel.innerText = craft.level;
  tdLink.innerText = craft.link;
  tdSourceLink.innerText = craft.source;
  tdFavorite.innerText = emptyStar;
    tdFavorite.className = 'star';
  tdTrash.innerText = trashCan;
    tdTrash.className = 'trash';
  tr.appendChild(tdFavorite);
  tr.appendChild(tdMedium)
  tr.appendChild(tdMethod)
  tr.appendChild(tdLevel)
  tr.appendChild(tdSource);
  tr.appendChild(tdTrash);
  return tr;
}

// Renderers --------------------------------------------------------------------------------------------------------

  const renderCraftListPage = () => {
    mainDiv().innerHTML = ''
    const h1 = document.createElement('h1');
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const thead = document.createElement('thead');
      const thFavorites = document.createElement('th');
      const thMedium = document.createElement('th');
      const thMethod = document.createElement('th');
      const thLevel = document.createElement('th');
      const thSource = document.createElement('th');
      const thTrash = document.createElement('th');
      const tbody = document.createElement('tbody');
    h1.innerText = 'All Crafts'
    h1.classList.add('title')  
    thFavorites.innerText = 'Favorite';  
    thFavorites.classList.add('favorite');  
    thMedium.innerText = 'Medium';  
    thMedium.classList.add('thMedium');  
    thMethod.innerText = 'Method';
    thMethod.classList.add('method');  
    thLevel.innerText = 'Level';
    thLevel.classList.add('thLevel');  
    thSource.innerText = 'Source';  
    thSource.classList.add('thSource');  
    thTrash.innerText = 'Delete';  
    thTrash.classList.add('delete');
    table.classList.add('highlight');
      tr.appendChild(thFavorites);
      tr.appendChild(thMedium);
      tr.appendChild(thMethod);
      tr.appendChild(thLevel);
      tr.appendChild(thSource);
      tr.appendChild(thTrash);
    thead.appendChild(tr);
    table.appendChild(tr);
    crafts.forEach(craft => tbody.appendChild(craftTemplate(craft)))
    table.appendChild(tbody);
    mainDiv().appendChild(h1);
    mainDiv().appendChild(table); 

    document.querySelectorAll('.star').forEach(s => {
      s.addEventListener('click', (e) => {
        console.log(e.target);
        e.target.innerText = e.target.innerText === emptyStar ? fullStar : emptyStar;
      })
    }); 
}

const renderCrafts = () => {
    return crafts.map(craft => craftTemplate(craft));
}

const renderCraftFormPage = () => {
  mainDiv().innerHTML = ''
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2')
  const formDiv = document.createElement('div');
  const form = document.createElement('form');
  const mediumDiv = document.createElement('div');
    const mediumInput = document.createElement('input');
    const mediumLabel = document.createElement('label');
    const mediumSpan = document.createElement('span');
  const methodDiv = document.createElement('div');
    const methodInput = document.createElement('input');
    const methodLabel = document.createElement('label');
    const methodSpan = document.createElement('span');
  const levelDiv = document.createElement('div');
    const levelInput = document.createElement('input');
    const levelLabel = document.createElement('label');
    const levelSpan = document.createElement('span');
  const sourceDiv = document.createElement('div');
    const sourceInput = document.createElement('input');
    const sourceLabel = document.createElement('label');
    const sourceSpan = document.createElement('span');
  const sourceLinkDiv = document.createElement('div');
    const sourceLinkInput = document.createElement('input');
    const sourceLinkLabel = document.createElement('label');
    const sourceLinkSpan = document.createElement('span');
  const addCraftBtn = document.createElement('input');
  h1.className = 'title';
  h2.className = 'add-craft-title';
  formDiv.className = 'row';
  mediumDiv.className = 'input-field col s6';
    mediumLabel.className = 'active';
    mediumSpan.className = 'helper-text';
  methodDiv.className = 'input-field col s6';
    methodLabel.className = 'active';
    methodSpan.className = 'helper-text';
  levelDiv.className = 'input-field col s6';
    levelLabel.className = 'active';
    levelSpan.className = 'helper-text';
  sourceDiv.className = 'input-field col s6';
    sourceLabel.className = 'active';
    sourceSpan.className = 'helper-text';
  sourceLinkDiv.className = 'input-field col s12';
    sourceLinkLabel.className = 'active';
    sourceLinkSpan.className = 'helper-text';
  addCraftBtn.className = 'waves-effect waves-light btn deep-orange lighten-3';
  mediumInput.setAttribute('id', 'medium');
    mediumInput.setAttribute('type', 'text');
    mediumLabel.setAttribute('for', 'medium');
  methodInput.setAttribute('id', 'method');
    methodInput.setAttribute('type', 'text');
    methodLabel.setAttribute('for', 'method');
  levelInput.setAttribute('id', 'level');
    levelInput.setAttribute('type', 'text');
    levelLabel.setAttribute('for', 'level');
  sourceInput.setAttribute('id', 'source');
    sourceInput.setAttribute('type', 'text');
    sourceLabel.setAttribute('for', 'source');
  sourceLinkInput.setAttribute('id', 'source-link');
    sourceLinkInput.setAttribute('type', 'text');
    sourceLinkLabel.setAttribute('for', 'source-link');
  addCraftBtn.setAttribute('type', 'submit');
  addCraftBtn.setAttribute('value', 'Add Craft');
  h1.innerText = 'Add Craft'; 
  h2.innerText = 'Complete the form below to add a craft to the Craft Compiler.';
  mediumLabel.innerText = 'Medium';
    mediumSpan.innerText = 'painting, clay, paper, etc.';
  methodLabel.innerText = 'Method';
    methodSpan.innerText = 'watercolor, freestyle, collage, etc.';
  levelLabel.innerText = 'Challenge Level';
    levelSpan.innerText = 'easy, medium, hard';
  sourceLabel.innerText = 'Source';
    sourceSpan.innerText = 'YouTube, Google, etc.';
  sourceLinkLabel.innerText = 'Source Link';
    sourceLinkSpan.innerText = 'wwww.youtube.com/watch01';
  mediumDiv.appendChild(mediumInput);
    mediumDiv.appendChild(mediumLabel);
    mediumDiv.appendChild(mediumSpan);
  methodDiv.appendChild(methodInput);
    methodDiv.appendChild(methodLabel);
    methodDiv.appendChild(methodSpan);
  levelDiv.appendChild(levelInput);
    levelDiv.appendChild(levelLabel);
    levelDiv.appendChild(levelSpan);
  sourceDiv.appendChild(sourceInput);
    sourceDiv.appendChild(sourceLabel);
    sourceDiv.appendChild(sourceSpan);
  sourceLinkDiv.appendChild(sourceLinkInput);
    sourceLinkDiv.appendChild(sourceLinkLabel);
    sourceLinkDiv.appendChild(sourceLinkSpan);
  formDiv.appendChild(form);
  form.appendChild(mediumDiv);
  form.appendChild(methodDiv);
  form.appendChild(levelDiv);
  form.appendChild(sourceDiv);
  form.appendChild(sourceLinkDiv);
  form.appendChild(addCraftBtn);
  form.addEventListener('submit', submitFormEvent);
  mainDiv().appendChild(h1);
  mainDiv().appendChild(h2);
  mainDiv().appendChild(formDiv);
}

// Events --------------------------------------------------------------------------------------------------------

const loadCrafts = () => {
  fetch(localURL + '/crafts')
  .then(resp => resp.json())
  .then(data => {
    crafts = data
    renderCraftListPage();
    homePageLinkEvent();
    craftFormLinkEvent();
  })
}

// LOGO TO 'HOME PAGE' WITH LIST OF CRAFTS
const homePageLinkEvent = () => {
  homePageLink().addEventListener('click', (e) => 
  {
     e.preventDefault();
     renderCraftListPage(); 
  })  
} 

// ADD CRAFT LINK TO FORM PAGE
const craftFormLinkEvent = () => {
  craftFormLink().addEventListener('click', (e) => 
  {
    e.preventDefault();
    renderCraftFormPage();
  })
}

// SUBMIT FORM 
const submitFormEvent = (e) => {
  e.preventDefault();
  fetch('http://localhost:3000/crafts', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      medium: mediumValue().value,
      method: methodValue().value,
      level: levelValue().value,
      source: sourceValue().value,
      sourceLink: sourceLinkValue().value,
    })
  })
  .then(resp => resp.json())
  .then(craft => {
    crafts.push(craft);
    renderCraftListPage();
  })
}

// When DOM Loads ----------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    loadCrafts();
});