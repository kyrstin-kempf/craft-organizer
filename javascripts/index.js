// alert('hello world!')

/** Globals */

const localURL = 'http://localHost3000';

let crafts = [];

/** Nodes */

const mainDiv = () => document.getElementById('main');

const homePageLink = () => document.getElementById('home-page-link');

const craftListLink = () => document.getElementById('craft-list-link');

/* Templates */

const homePageTemplate =  () => {
    return `
    <h1 class="center-align">Add craft idea</h1>
    `
}

const craftListTemplate = () => {
    return `
    <h1 class="center">All Crafts</h1>
    <table class="highlight">
        <thead>
          <tr>
              <th>Medium</th>
              <th>Method</th>
              <th>Challege Level</th>
              <th>Video Tourturial</th>
          </tr>
        </thead>
        <tbody>
          ${ renderCraftListPage() }
        </tbody>
      </table>
    `
}

const craftTemplate = (craft) => {
  return `
  <tr>
    <td>${ craft.medium }</td>
    <td>${ craft.method }</td>
    <td>${ craft.level }</td>
    <td><a href=${ craft.link }>${ craft.source }</a></td>
  </tr>`
}

/** Renderers **/

const renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
}

const renderCraftListPage = () => {
    mainDiv().innerHTML = craftListTemplate();
}

const renderCrafts = () => {
    return crafts.map(craft => craftTemplate(craft));
}

/** Events **/

// fetch() places action at the bottom of the stack, use async to load in order

// const loadCrafts = () => {
//   fetch(localURL + '/crafts')
//   .then(resp => resp.json())
//   .then(data => crafts = data)
// }

const loadCrafts = async () => {
  const resp = await fetch(loadURL + '/crafts')
  const data = await resp.json();
  meals = data;
}

const homePageLinkEvent = () => {
  homePageLink().addEventListener('click', (e) => {
     e.preventDefault();
     renderHomePage(); 
  })  
} 

const craftPageLinkEvent = () => {
    craftListLink().addEventListener('click', (e) => {
       e.preventDefault();
       loadCrafts();
      //  renderCraftListPage(); 
    })  
  } 

/** When DOM Loads **/

document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
    homePageLinkEvent();
    craftPageLinkEvent();
})

