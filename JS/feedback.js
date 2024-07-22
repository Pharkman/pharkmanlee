const feedbacks = [
  { 
    id: 1,
    Image: '/images/corly.jpg',
    name: 'Jasper Corlet',
    role: 'Team Lead',
    words: "He consistently demonstrated exceptional dedication, expertise, and support, playing a pivotal role in our team's success. He went above and beyond to ensure our project's success."
  },

  { 
    id: 1,
    Image: '/images/ojo-joseph.png',
    name: 'Ojo Joseph',
    role: 'Project Manager',
    words: "I have worked with over 15 Designers and Faruq is enthusiastic, communicates well, and possesses exceptionally design skills. He's someone I'll be open to working with over and over again and I highly recommend him for any project."
  },

  { 
    id: 1,
    Image: '/images/mavin.jpg',
    name: 'Amusan Marvellous',
    role: 'Team Mate',
    words: "Working with Faruq has been excellent. We collaborate seamlessly, and he consistently enhances our projects. Faruq excels at problem-solving, bringing our projects to life with designs that resonate well with users."
  }
  ];


 


let feedbacksHTML = '';

feedbacks.forEach((feedbacks) => {

  feedbacksHTML += `

    <section class="ppl-bx-1">
        <section class="quote-icon"><i class='bx bxs-quote-right'></i></section>
        <section class="ppl-heading">
            <section class="wht-ppl-profile wht-1-img">
              <img src="${feedbacks.Image}" alt="${feedbacks.name}">
            </section>
            <section class="name-role">
                <h1>${feedbacks.name}</h1>
                <span>${feedbacks.role}</span>
            </section>
        </section>
        <span class="what-ppl-says">
            ${feedbacks.words}       
        </span>
    </section>
  
  `
});


document.querySelector('.js-ppl-wrds').innerHTML = feedbacksHTML; 
