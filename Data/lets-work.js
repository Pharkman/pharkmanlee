const letswork = [
  {
    id: 1,
    cv: 'CV/Resume',
    hireme: 'Hire Me',
    cvlink: 'https://drive.google.com/file/d/1GBjrjV9y01Hv8eFy6k9uoyXOFttL-xBM/view?usp=sharing',
    hiremelink: 'contact.html',
  }
];





 


let letsworkHTML = '';

letswork.forEach((letswork) => {

  letsworkHTML += `

  
  <a class="resume-btn" href="${letswork.cvlink}" target="_blank">
    ${letswork.cv}
  </a>
  <a class="contact-btn" href="${letswork.hiremelink}" target="_blank">${letswork.hireme}</a>
  
  `
});


document.querySelector('.js-lets-work').innerHTML = letsworkHTML; 
