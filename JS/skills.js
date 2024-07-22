const skills = [
  {
    id: 1,
    image:'images/skills/ui.png',
    skill: 'UI Design',
    skilldescr: ''
  },

  {
    id: 2,
    image:'images/skills/Ux.png',
    skill: 'UX Design',
    skilldescr: ''
  },

  {
    id: 3,
    image:'images/skills/wireframe.png',
    skill: 'Wireframe',
    skilldescr: ''
  },

  {
    id: 4,
    image:'images/skills/prototype.png',
    skill: 'Prototype',
    skilldescr: ''
  },

  {
    id: 5,
    image:'images/skills/Frontend.png',
    skill: 'Frontend Development',
    skilldescr: ''
  },

  {
    id: 6,
    image:'images/skills/testing.png',
    skill: 'Usability Testing',
    skilldescr: ''
  },

  {
    id: 7,
    image:'images/skills/research.png',
    skill: 'User Research',
    skilldescr: ''
  },

  {
    id: 8,
    image:'images/skills/design.png',
    skill: 'Brand Design',
    skilldescr: ''
  }
];




 


let skillsHTML = '';

skills.forEach((skills) => {

  skillsHTML += `

  <section class=" skill-container skill-cont">
    <section class="skill-image">
      <img src="${skills.image}" alt="${skills.skill}">
    </section>

    <section class="skill-description">
      <h1>${skills.skill}</h1>
    </section>
  </section>
  
  `
});


document.querySelector('.js-all-skills').innerHTML = skillsHTML; 
