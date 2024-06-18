const tools = [
  {
    id: 1,
    image:'images/tools/figma.png',
    tool: 'Figma',
    tooldescr: 'Design'
  },

  {
    id: 2,
    image:'images/tools/VSC.webp',
    tool: 'VS Code',
    tooldescr: 'Coding'
  },

  {
    id: 3,
    image:'images/tools/AI.webp',
    tool: 'AI',
    tooldescr: 'Brand Design'
  },

  {
    id: 4,
    image:'images/tools/adobe-ps.webp',
    tool: 'Photoshop',
    tooldescr: 'Graphics Design'
  },

  {
    id: 5,
    image:'images/adobe.webp',
    tool: 'Adobe XD',
    tooldescr: 'Design'
  },

  {
    id: 6,
    image:'images/maze.jpeg',
    tool: 'Maze',
    tooldescr: 'Usability Testing'
  },

  {
    id: 7,
    image:'images/tools/protopie.png',
    tool: 'Protopie',
    tooldescr: 'Prototyping'
  },

  {
    id: 8,
    image:'images/tools/framer.webp',
    tool: 'Framer',
    tooldescr: 'No-code'
  },

  {
    id: 9,
    image:'images/tools/github.png',
    tool: 'GitHub',
    tooldescr: 'Development'
  }
];





let toolsHTML = '';

tools.forEach((tools) => {

  toolsHTML += `

  <section class="tool-container">
    <section class="tool-image">
      <img src="${tools.image}" alt="">
    </section>

    <section class="tool-description">
      <h1>${tools.tool}</h1>
      <p>${tools.tooldescr}</p>
    </section>
  </section>
  
  `
});


document.querySelector('.js-all-tools').innerHTML = toolsHTML; 
