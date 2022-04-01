// alert('hello world!')

/** Globals */

const localURL = 'http://localhost:3000';

let crafts = [];

/** Nodes */

const mainDiv = () => document.getElementById('main');
const homePageLink = () => document.getElementById('home-page-link');
const craftListLink = () => document.getElementById('craft-list-link');
const craftFormLink = () => document.getElementById('craft-form-link');

/* Templates */

// const homePageTemplate =  () => {
//     return `
//     <h1 class="center-align">Add craft idea</h1>
//     `
// }

// const craftListTemplate = () => {
//     return `
//     <h1 class="center">All Crafts</h1>
//     <table class="highlight">
//       <thead>
//         <tr>
//             <th>Medium</th>
//             <th>Method</th>
//             <th>Challege Level</th>
//             <th>Video Tourturial</th>
//         </tr>
//       </thead>
//       <tbody>
//         ${ renderCrafts() }
//       </tbody>
//     </table>
//     `
// }

const craftTemplate = (craft) => {
  // return `
  // <tr>
  //   <td>${ craft.medium }</td>
  //   <td>${ craft.method }</td>
  //   <td>${ craft.level }</td>
  //   <td><a href=${ craft.link }>${ craft.source }</a></td>
  // </tr>`
  const tr = document.createElement('tr');
  const tdMedium = document.createElement('td');
  const tdMethod = document.createElement('td');
  const tdLevel = document.createElement('td');
  const tdSource = document.createElement('td');
  const tdSourceLink = document.createElement('a');
  const tdLink = craft.link;
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
  // tdSource.innerText = craft.source;
  // tdLink.innerText = craft.link;
  // tdSourceText.innerText = craft.source;
  // tdLink.setAttribute('href', theLink)
  // tdSource.appendChild(tdSourceText);
  // tdLink.href = craft.link;
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
  
  const renderCraftListPage = () => {
    // mainDiv().innerHTML = craftListTemplate();
    mainDiv().innerHTML = ''
    const h1 = document.createElement('h1');
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const thead = document.createElement('thead');
      const thMedium = document.createElement('th');
      const thMethod = document.createElement('th');
      const thLevel = document.createElement('th');
      const thSource = document.createElement('th');
    const tbody = document.createElement('tbody');
    h1.innerText = 'All Crafts'
    h1.classList.add('title')  
      thMedium.innerText = 'Medium';  
      thMethod.innerText = 'Method';
      thLevel.innerText = 'Level';
      thSource.innerText = 'Source';  
    table.classList.add('highlight');
    // thSource.classList.add('link');
      tr.appendChild(thMedium);
      tr.appendChild(thMethod);
      tr.appendChild(thLevel);
      tr.appendChild(thSource);
      thead.appendChild(tr);
      table.appendChild(tr);
    console.log(table)
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

  // mainDiv.innerHTML = ''
  // const h1 = document.createElement('h1');
  // mainDiv().appendChild(h1);

  <h1 class="title">Add Craft</h1>
      <h2 class="add-craft-title">Complete the form below to add a craft to the Craft Organizer.</h2>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input id="medium" placeholder="painting, clay, paper, etc." type="text">
              <label for="medium">Medium</label>
            </div>
            <div class="input-field col s6">
              <input id="method" placeholder="watercolor, freestyle, collage, etc." type="text">
              <label for="method">Method</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="level" placeholder="easy, medium, hard" type="text">
              <label for="level">Challenge Level</label>
            </div>
            <div class="input-field col s6">
              <input id="source" placeholder="YouTube, Google, etc." type="text">
              <label for="source">Source</label>
            </div>
          </div>
          <div class="input-field unique">
              <input placeholder="wwww.youtube.com/watch01" type="text">
              <label for="link">Source Link</label>
          </div>
          <input type="submit" value="Add Craft" class="waves-effect waves-light btn deep-orange lighten-3">
        </form>
        </div>
}

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
  console.log('a')
  const resp = await fetch(localURL + '/crafts')
  console.log('b')
  const data = await resp.json(); 
  console.log('c')
  crafts = data;
  console.log('d')
}

const homePageLinkEvent = () => {
  homePageLink().addEventListener('click', (e) => 
  {
     e.preventDefault();
     renderHomePage(); 
  })  
} 

const craftPageLinkEvent = () => {
    craftListLink().addEventListener('click', async (e) => 
    {
       e.preventDefault();
       await loadCrafts();
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


/** When DOM Loads **/

document.addEventListener('DOMContentLoaded', () => {
    // renderHomePage();
    homePageLinkEvent();
    craftPageLinkEvent();
    craftFormLinkEvent();
})

