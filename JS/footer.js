const socialmedias = [
  {
    id: 1,
    // link: 'https://www.linkedin.com/in/faruq-arowolo-4465461a8',
    // social: 'Linkedin',
    // icon: 'bx bxl-linkedin-square',

    email: 'pharkmanlee@gmail.com',
    emaillink: 'mailto:pharkmanlee@gmail.com',
    phone: '(234) 816 707 8285',
    phonelink: "tel:+2348167078285",
    address: 'No 7, Deji Adeniran Street Agunbelewo, Osogbo, Osun State, Nigeria',
    socialmedia1: 'Twitter',
    socialmedia2: 'Linkedin',
    socialmedia3: 'Facebook',
    portfolio1: 'Behance',
    portfolio2: 'Dribble',
    portfolio3: 'Github',
    socialmedia1link: 'https://twitter.com/Pharkman_',
    socialmedia2link: 'https://www.linkedin.com/in/faruq-arowolo-4465461a8',
    socialmedia3link: 'https://www.facebook.com/pharkmanlee',
    portfolio1link: 'https://www.behance.net/faruqsola',
    portfolio2link: 'https://dribbble.com/Pharkmanlee',
    portfolio3link: 'https://github.com/Pharkman'
  }
  
  //  {
  //   id: 2,
  //   link: 'https://twitter.com/Pharkman_',
  //   social: 'Twitter',
  //   icon: 'bx bxl-twitter'
  // },

  // {
  //   id: 3,
  //   link: 'https://www.instagram.com/pharkmanlee/',
  //   social: 'Instagram',
  //   icon: 'bx bxl-instagram-alt'
  // },

  // {
  //   id: 4,
  //   link: 'https://www.behance.net/faruqsola',
  //   social: 'Behance',
  //   icon: 'bx bxl-behance'
  // },

  // {
  //   id: 5,
  //   link: 'https://dribbble.com/Pharkmanlee',
  //   social: 'Linkedin',
  //   icon: 'bx bxl-dribbble'
  // },

  // {
  //   id: 6,
  //   link: 'https://github.com/Pharkman',
  //   social: 'GitHub',
  //   icon: 'bx bxl-github'
  // }
];




 


let socialmediasHTML = '';

socialmedias.forEach((socialmedias) => {

  socialmediasHTML += `

            <div class="contact-add">
                <p class="footer-headint-txt">Contact</p>
                <div class="social-medias-links">
                    <a class="footer-links" href="${socialmedias.emaillink}">${socialmedias.email}</a>

                    <a class="footer-links" href="${socialmedias.phonelink}">${socialmedias.phone}</a>
                    
                </div>
            
            </div>

        <div class="address-cont">
            <p class="footer-headint-txt">Address</p>
            <span>${socialmedias.address}</span>
        </div>

        <div class="social-medias">
            <p class="footer-headint-txt">Social Media</p>
            <div class="social-medias-links">
                <a class="footer-links" href="${socialmedias.socialmedia1link}">${socialmedias.socialmedia1}</a>
                <a class="footer-links" href="${socialmedias.socialmedia2link}">${socialmedias.socialmedia2}</a>
                <a class="footer-links" href="${socialmedias.socialmedia3link}">${socialmedias.socialmedia3}</a>
            </div>
        </div>

        <div class="social-medias">
            <p class="footer-headint-txt">Portfolio</p>
            <div class="social-medias-links">
                <a class="footer-links" href="${socialmedias.portfolio1link}">${socialmedias.portfolio1}</a>
                <a class="footer-links" href="${socialmedias.portfolio2link}">${socialmedias.portfolio2}</a>
                <a class="footer-links" href="${socialmedias.portfolio3link}">${socialmedias.portfolio3}</a>
            </div>
        </div>

        <div class="copyright">
            <p class="footer-headint-txt">&copy;2024. All Rights Reserved.</p>
            <div class="current-time footer-links" id="currentTime"></div>
        </div>
  
  `
});


document.querySelector('.js-all-socail-links').innerHTML = socialmediasHTML; 
