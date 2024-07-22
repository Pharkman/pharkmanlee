const experiences = [
  {
    id: 1,
    company: 'Zidio Development',
    city: 'Mumbai',
    country: 'India',
    role: 'Product Designer',
    startdate: 'Feb 2024',
    endate: 'April 2024',
    responsibility1: "Led the design of intuitive and visually striking user interfaces for SaaS products and mobile applications, focusing on enhancing user experience.",
    responsibility2: "Conducted in-depth user research and usability testing to inform design decisions and optimize product performance.",
    responsibility3: "Collaborated closely with product managers and developers to translate user requirements into actionable design solutions.",
    responsibility4: "Established comprehensive design systems and style guides to ensure consistency across multiple products.",
    responsibility5: '',

  },

  {
    id: 2,
    company: 'Collab and Upskill',
    city: 'Lagos',
    country: 'Nigeria',
    role: 'UIUX Designer',
    startdate: 'Sep 2023',
    endate: 'Jan 2024',
    responsibility1: "Conducted user interviews and surveys to gain insights into user needs and pain points, informing product design strategie.",
    responsibility2: "Contributed to product roadmaps and design approaches based on user-centric principles.",
    responsibility3: "Worked collaboratively with engineering teams to implement design solutions and iterate on product features.",
    responsibility4: "Maintained detailed design documentation and style guides to streamline the UI/UX design process.",
    responsibility5: "",

  },

  {
    id: 3,
    company: 'Stay Media',
    city: 'Lagos',
    country: 'Nigeria',
    role: 'UIUX Designer',
    startdate: 'May 2023',
    endate: 'Nov 2023',
    responsibility1: "Designed and prototyped user interfaces for fitness applications and mobile platforms, focusing on optimizing user engagement and conversion rates.",
    responsibility2: "Conducted rigorous A/B testing and usability studies to iteratively improve user experiences",
    responsibility3: "Collaborated closely with stakeholders to align design solutions with business objectives and user needs.",
    responsibility4: "Implemented responsive design principles to ensure seamless experiences across various device.",
    responsibility5: "",
  }
];


let experiencesHTML = '';

experiences.forEach((experiences) => {

  experiencesHTML += `
  <section class="comapany-experiences js-comapany-experiences">
    <section class="comapany-country">
        <span class="company-name">${experiences.company}</span>

        <section class="city-country">
            <span class="city">${experiences.city}</span>,
            <span class="country">${experiences.country}</span>
        </section>
                    
    </section>
                
    <section class="work-responsibilities">

        <section class="my-role-date">
            <span class="my-role">${experiences.role}</span>

            <section class="start-end-date">
                <span class="start-date">${experiences.startdate}</span> -
                <span class="end-date">${experiences.endate}</span>
            </section>
        </section>

      <section>

        <ul class="listing-style">
          <li class="responsibiliies-desc">
            ${experiences.responsibility1}
          </li>

          <li class="responsibiliies-desc">
            ${experiences.responsibility2}
          </li>
      

          <li class="responsibiliies-desc">
            ${experiences.responsibility3}
          </li>

          <li class="responsibiliies-desc">
            ${experiences.responsibility4}
          </li>
        </ul>
      
      </section>
    </section>

</section>
  `
});


document.querySelector('.js-comapany-experiences').innerHTML = experiencesHTML; 


