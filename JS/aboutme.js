const aboutme =[{
  Image: 'images/about.JPG',
  heading: "I'm Faruq Arowolo, a multidisciplinary designer based in Nigeria.",
  paragraph1: 'As a skilled Product Designer and Frontend Developer, I am passionate about creating mobile apps and websites. With over 3 years of experience in the field and a degree in computer science, my expertise lies in merging UI/UX design with frontend development to craft seamless, engaging, and user-friendly digital experiences. My goal is to captivate and engage users through meticulously designed interfaces and interactions, making technology feel more intuitive and accessible.',
  paragraph2: 'I have worked on various projects in UI/UX, web design, branding and identity, and graphics design. I thrive in collaborative environments and love experimenting with new tools and techniques to enhance my design process.',
  paragraph3: 'Outside of work, I enjoy listening to music, playing basketball, playing chess, dancing, traveling, and keeping up with the latest technologies. '
}];

let aboutmeHTML = '';

aboutme.forEach((aboutme) => {

  aboutmeHTML += `
  <section class="my-image">
    <img class="img1"  src="${aboutme.Image}" alt="Faruq Arowolo">
  </section>

  <section class="about-me-txts">
    <div class="heading-intro-txt">
      <h1>
        ${aboutme.heading}
      </h1>  
    </div>
    <p>
      ${aboutme.paragraph1}
    </p>
      
    <p>
      ${aboutme.paragraph2}      
    </p>

    <p>
      ${aboutme.paragraph3}                      
    </p>
  </section>
  `
});


document.querySelector('.aboutme-js').innerHTML = aboutmeHTML; 
