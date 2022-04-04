// alert('hello world!')

/** Globals */

const localURL = 'http://localhost:3000';

let crafts = [];

const fullStar = '★'
const emptyStar = '☆'

/** Nodes */

const mainDiv = () => document.getElementById('main');
const homePageLink = () => document.getElementById('home-page-link');
const craftListLink = () => document.getElementById('craft-list-link');
const craftFormLink = () => document.getElementById('craft-form-link');
const favoritesPageLink = () => document.getElementById('favorites-page-link');
const mediumValue = () => document.getElementById('medium');
const methodValue = () => document.getElementById('method');
const levelValue = () => document.getElementById('level');
const sourceValue = () => document.getElementById('source');
const sourceLinkValue = () => document.getElementById('source-link');
// const starSelection = () => document.getElementById('star');

/* Templates */

const craftTemplate = (craft) => {
  // return `
  // <tr>
  //   <td>${ craft.medium }</td>
  //   <td>${ craft.method }</td>
  //   <td>${ craft.level }</td>
  //   <td><a href=${ craft.link }>${ craft.source }</a></td>
  // </tr>`
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
  // a.href = craft.link;
  // console.log(a)
  tdMedium.innerText = craft.medium;
  tdMethod.innerText = craft.method;
  tdLevel.innerText = craft.level;
  tdSource.appendChild(tdSourceLink);
  tdLink.innerText = craft.link;
  tdSourceLink.innerText = craft.source;
  tdFavorite.innerText = emptyStar;
  tdFavorite.className = 'star';
  // tdSource.innerText = craft.source;
  // tdLink.innerText = craft.link;
  // tdSourceText.innerText = craft.source;
  // tdLink.setAttribute('href', theLink)
  // tdSource.appendChild(tdSourceText);
  // tdLink.href = craft.link;
  tr.appendChild(tdFavorite);
  tr.appendChild(tdMedium)
  tr.appendChild(tdMethod)
  tr.appendChild(tdLevel)
  tr.appendChild(tdSource);
  return tr;
}

/** Renderers **/

const renderHomePage = () => {
    mainDiv().innerHTML = ''
    const h1 = document.createElement('h1');
    h1.classList.add('title');
    h1.innerText = 'Filter Crafts'

    mainDiv().appendChild(h1);
  }
  
  const renderCraftListPage = async () => {
    // mainDiv().innerHTML = craftListTemplate();
    await loadCrafts();
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
    const tbody = document.createElement('tbody');
    h1.innerText = 'All Crafts'
    h1.classList.add('title')  
      thFavorites.innerText = 'Favorite';  
      thMedium.innerText = 'Medium';  
      thMethod.innerText = 'Method';
      thLevel.innerText = 'Level';
      thSource.innerText = 'Source';  
    table.classList.add('highlight');
    // thSource.classList.add('link');
      tr.appendChild(thFavorites);
      tr.appendChild(thMedium);
      tr.appendChild(thMethod);
      tr.appendChild(thLevel);
      tr.appendChild(thSource);
      thead.appendChild(tr);
      table.appendChild(tr);
    // console.log(table)
    crafts.forEach(craft => tbody.appendChild(craftTemplate(craft)))
    table.appendChild(tbody);
    mainDiv().appendChild(h1);
    mainDiv().appendChild(table);  
}

const renderCrafts = () => {
    return crafts.map(craft => craftTemplate(craft));
}

const renderCraftFormPage = () => {
  // alert('meal form has been loaded!')
  // use alert to test!
  mainDiv().innerHTML = ''
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2')
  const formDiv = document.createElement('div');
  const form = document.createElement('form');
  // const firstRowDiv = document.createElement('div');
  const mediumDiv = document.createElement('div');
  const mediumInput = document.createElement('input');
  const mediumLabel = document.createElement('label');
  const mediumSpan = document.createElement('span');
  const methodDiv = document.createElement('div');
  const methodInput = document.createElement('input');
  const methodLabel = document.createElement('label');
  const methodSpan = document.createElement('span');
  // const secondRowDiv = document.createElement('div');
  const levelDiv = document.createElement('div');
  const levelInput = document.createElement('input');
  const levelLabel = document.createElement('label');
  const levelSpan = document.createElement('span');
  const sourceDiv = document.createElement('div');
  const sourceInput = document.createElement('input');
  const sourceLabel = document.createElement('label');
  const sourceSpan = document.createElement('span');
  // const thirdRowDiv = document.createElement('div');
  const sourceLinkDiv = document.createElement('div');
  const sourceLinkInput = document.createElement('input');
  const sourceLinkLabel = document.createElement('label');
  const sourceLinkSpan = document.createElement('span');
  const addCraftBtn = document.createElement('input');
  // const addCraftBtn = document.createElement('input');
  h1.className = 'title';
  h2.className = 'add-craft-title';
  formDiv.className = 'row';
  // form.className = 'col s12';
  // firstRowDiv.className = 'row';
  // secondRowDiv.className = 'row';
  // thirdRowDiv.className = 'row';
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
  // mediumInput.setAttribute('placeholder', 'painting, clay, paper, etc.');
  mediumInput.setAttribute('id', 'medium');
  mediumInput.setAttribute('type', 'text');
  mediumLabel.setAttribute('for', 'medium');
  // methodInput.setAttribute('placeholder', 'watercolor, freestyle, collage, etc.');
  methodInput.setAttribute('id', 'method');
  methodInput.setAttribute('type', 'text');
  methodLabel.setAttribute('for', 'method');
  // levelInput.setAttribute('placeholder', 'easy, medium, hard');
  levelInput.setAttribute('id', 'level');
  levelInput.setAttribute('type', 'text');
  levelLabel.setAttribute('for', 'level');
  // sourceInput.setAttribute('placeholder', 'YouTube, Google, etc.');
  sourceInput.setAttribute('id', 'source');
  sourceInput.setAttribute('type', 'text');
  sourceLabel.setAttribute('for', 'source');
  // sourceLinkInput.setAttribute('placeholder', 'wwww.youtube.com/watch01');
  sourceLinkInput.setAttribute('id', 'source-link');
  sourceLinkInput.setAttribute('type', 'text');
  sourceLinkLabel.setAttribute('for', 'source-link');
  addCraftBtn.setAttribute('type', 'submit');
  addCraftBtn.setAttribute('value', 'Add Craft');
  h1.innerText = 'Add Craft'; 
  h2.innerText = 'Complete the form below to add a craft to the Craft Organizer.';
  mediumLabel.innerText = 'Medium';
  methodLabel.innerText = 'Method';
  levelLabel.innerText = 'Challenge Level';
  sourceLabel.innerText = 'Source';
  sourceLinkLabel.innerText = 'Source Link';
  mediumSpan.innerText = 'painting, clay, paper, etc.';
  methodSpan.innerText = 'watercolor, freestyle, collage, etc.';
  levelSpan.innerText = 'easy, medium, hard';
  sourceSpan.innerText = 'YouTube, Google, etc.';
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
  // form.appendChild(firstRowDiv);
  // form.appendChild(secondRowDiv);
  // form.appendChild(thirdRowDiv);
  form.appendChild(mediumDiv);
  form.appendChild(methodDiv);
  form.appendChild(levelDiv);
  form.appendChild(sourceDiv);
  form.appendChild(sourceLinkDiv);
  form.appendChild(addCraftBtn);
  // firstRowDiv.appendChild(mediumDiv);
  // firstRowDiv.appendChild(methodDiv);
  // secondRowDiv.appendChild(levelDiv);
  // secondRowDiv.appendChild(sourceDiv);
  // thirdRowDiv.appendChild(sourceLinkDiv);

  form.addEventListener('submit', submitFormEvent);

  // console.log(mediumInput);
  // console.log(mediumLabel);
  // console.log(mediumDiv);
  // console.log(formDiv);

  mainDiv().appendChild(h1);
  mainDiv().appendChild(h2);
  mainDiv().appendChild(formDiv);
}

const renderFavoritesPage = () => {
  mainDiv().innerHTML = ''
  const h1 = document.createElement('h1');
  h1.classList.add('title');
  h1.innerText = 'Favorites'

  mainDiv().appendChild(h1);
}

// const renderFullStar = (e) => {
//   const star = e.target;
//   mimicServerCall()
//     .then(function ) {
      
//       if(star.innerText === emptyStar) {
//         star.classList.add("activated-star");
//         star.innerText = fullStar;
//       }
//       else {
//         star.classList.remove("activated-star");
//         star.innerText = emptyStar;
//       }
// }

/** Events **/

// when does it happen?
// what will trigger this event?
// what will happen when event is triggered?

// fetch() places action at the bottom of the stack, use async to load in order

// const loadCrafts = () => {
//   fetch(localURL + '/crafts')
//   .then(resp => resp.json())
//   .then(data => crafts = data)
// }

const loadCrafts = async () => {
  // console.log('a')
  const resp = await fetch(localURL + '/crafts')
  // console.log('b')
  const data = await resp.json(); 
  // console.log('c')
  crafts = data;
  // console.log('d')
}

const homePageLinkEvent = () => {
  homePageLink().addEventListener('click', (e) => 
  {
     e.preventDefault();
     renderHomePage(); 
  })  
} 

const craftPageLinkEvent = () => {
    craftListLink().addEventListener('click', (e) => 
    {
       e.preventDefault();
      //  await loadCrafts();
       renderCraftListPage(); 
    })  
  } 

const craftFormLinkEvent = () => {
  craftFormLink().addEventListener('click', (e) => 
  {
    e.preventDefault();
    renderCraftFormPage();
  })
}

const submitFormEvent = (e) => {
  e.preventDefault();
  // console.log(e.target.children);
  const [medium, method, level, source, sourceLink] = e.target.children;
  // const medium = e.target.children[0]
  // const method = e.target.children[1]
  // const level = e.target.children[2]
  // const source = e.target.children[3]
  // const sourceLink = e.target.children[4]
  // console.log(e)
  // // console.log(e.target)
  // // console.log(e.target.children)
  // console.log('medium', mediumValue().value);
  // console.log('method', methodValue().value);
  // console.log('level', levelValue().value);
  // console.log('source', sourceValue().value);
  // console.log('sourceLink', sourceLinkValue().value);
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
    renderCraftFormPage();
    // crafts.push(craft);
    // console.log(craft)
  })
}

const favoritesPageLinkEvent = () => {
  favoritesPageLink().addEventListener('click', (e) => {
    // e.preventDefault();
    renderFavoritesPage(e);
  })
}

// const favoriteButtonEvent = () => {
//   starSelection().addEventListener('click', (e) => {
//     e.preventDefault();
//     renderFullStar();
//   })
// }

const selectStar = document.querySelectorAll('.star');
console.log(selectStar);

selectStar.forEach(selectStar => selectStar.addEventListener("click", likeStar))

function likeStar(event) {
  const favoriteStar = event.target;
  favoriteCraftSelction()
    .then(function(e){
      if(favoriteStar.innerText === emptyStar) {
        favoriteStar.classList.add("activated-star");
        favoriteStar.innerText = fullStar;
      }
      else {
        favoriteStar.classList.remove("activated-star");
        favoriteStar.innerText = emptyStar;
      } 
    })   
}


/** When DOM Loads **/

document.addEventListener('DOMContentLoaded', () => {
    // renderHomePage();
    homePageLinkEvent();
    craftPageLinkEvent();
    craftFormLinkEvent();
    favoritesPageLinkEvent();
})

