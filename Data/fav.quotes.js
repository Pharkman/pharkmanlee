const favquotes = [
  { 
    id: 1,
    Image: '/images/juice-wrld.JPG',
    name: 'Juice WRLD',
    role: 'Artiste',
    heading: '999',
    words: "Taking whatever ill, whatever bad situation, whatever struggle you’re going through and turning it into something positive to push yourself forward. "
  },

  { 
    id: 1,
    Image: '/images/lil Wayne.JPG',
    name: 'Lil Wayne',
    role: 'Artiste',
    heading: '',
    words: "Nobody gives you a chance, you gotta take chances. "
  },

  { 
    id: 1,
    Image: '/images/cristiano-ronaldo.JPG',
    name: 'Cristiano Ronaldo',
    role: 'Footballer',
    heading: '',
    words: "Dream are not what you see in your sleep, dreams are things which do not let you sleep."
  }
  ];


 


let favquotesHTML = '';

favquotes.forEach((favquotes) => {

  favquotesHTML += `

    <section class="ppl-bx-1">
        <section class="quote-icon"><i class='bx bxs-quote-right'></i></section>
        <section class="ppl-heading">
            <section class="wht-ppl-profile">
                <img src="${favquotes.Image}" alt="${favquotes.name}">
            </section>
            <section class="name-role">
                <h1>${favquotes.name}</h1>
                <span>${favquotes.role}</span>
            </section>
        </section>
        <span class="quote-hd">${favquotes.heading}</span>
        <span class="what-ppl-says">
          ${favquotes.words}
        </span>
    </section>
  
  `
});


document.querySelector('.js-favquotes').innerHTML = favquotesHTML; 
