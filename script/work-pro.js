let worksHTML = '';

works.forEach((works) => {

  worksHTML += `
  <section class="project-container">
    <section class="project-image">
      <img src="${works.image}">

      <section class="project-year">
          <span>${works.year}</span>
      </section>

      <a href="">
        <section class="project-hover">
          <img src="images/arrow-up-right.svg" alt="">
        </section>
      </a>
    </section>

    <section class="project-name-tag">
        <seection>
            <span class="project-name">${works.name}</span>
        </seection>
        <section class="project-tags">
            <span class="project-sector">${works.sector}</span>
            <span class="project-category">${works.category}</span>
        </section>
    </section>             
  </section>
  `
});


document.querySelector('.js-projects-container').innerHTML = projectsHTML; 
