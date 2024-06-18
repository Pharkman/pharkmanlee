const footletswork = [
  {
    id: 1,
    cv: 'CV/Resume',
    hireme: 'Hire Me',
    cvlink: 'https://drive.google.com/file/d/1GBjrjV9y01Hv8eFy6k9uoyXOFttL-xBM/view?usp=sharing',
    hiremelink: 'contact.html',
  }
];



let footletsworkHTML = '';

footletswork.forEach((footletswork) => {

  footletsworkHTML += `

  <a class="resume-btn" href="${footletswork.cvlink}" target="_blank">
    ${footletswork.cv}
  </a>
  <a class="contact-btn" href="${footletswork.hiremelink}" target="_blank">${footletswork.hireme}</a>
  
  `
});

document.querySelector('.js-hd-foot-lets-work').innerHTML = footletsworkHTML; 
