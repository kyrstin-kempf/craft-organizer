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
    h1.classList.add('center-align');
    h1.innerText = 'Filter crafts'
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
  // mainDiv.innerHTML = ''
  // const h1 = document.createElement('h1');
  // mainDiv().appendChild(h1);
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
    renderHomePage();
    homePageLinkEvent();
    craftPageLinkEvent();
    craftFormLinkEvent();
})

