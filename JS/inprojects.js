const projects = [
  {
    id: 1,
    category: 'uiux',
    image: 'images/mediScan uiux.png',
    name: 'MediScan',
    year: '2024',
    sector: 'Medical',
    project: 'Mobile App',
    projectlink: '',
    protected: false,
    password: ''
  },

  {
    id: 2,
    category: 'webdev',
    image: 'images/Fintech Webdev.png',
    name: 'Oaypay',
    year: '2024',
    sector: 'Fintech',
    project: 'Website',
    projectlink: 'https://pharkmanlee.vercel.app/fintech-website-flame.vercel.app',
    gitHubLink: 'https://github.com/Pharkman/Fintech-Website',
    protected: false,
    password: ''
  },

  {
    id: 3,
    category: 'uiux',
    image: 'images/Marketpadi uiux.png',
    name: 'Market Padi',
    year: '2024',
    sector: 'Service',
    project: 'Mobile App',
    projectlink: '',
    protected: true,
    password: 'projectlock1234'
  },

  {
    id: 4,
    category: 'branddesign',
    image: 'images/vortex brand.png',
    name: 'Vortex',
    year: '2024',
    sector: 'Fitness',
    project: 'Brand Design',
    projectlink: 'https://www.behance.net/gallery/197920023/Vortex-Brand-Identity',
    protected: false,
    password: ''
  },

  {
    id: 5,
    category: 'webdev',
    image: 'images/Weather webdev.png',
    name: 'Weather App',
    year: '2023',
    sector: 'Technology',
    project: 'Website',
    projectlink: 'https://weather-app-phi-ruby-34.vercel.app/',
    gitHubLink: 'https://github.com/Pharkman/Weather-App',
    protected: false,
    password: '',
  },

  {
    id: 6,
    category: 'uiux',
    image: 'images/Matchsignle uiux.png',
    name: 'Matchsignle',
    year: '2023',
    sector: 'Dating',
    project: 'Mobile App',
    projectlink: 'https://www.behance.net/gallery/183193631/Matchsingle-Dating-App-Case-Study',
    protected: false,
    password: ''
  },

  {
    id: 7,
    category: 'uiux',
    image: 'images/Farmwise uiux.png',
    name: 'FarmWise',
    year: '2023',
    sector: 'Agriculture',
    project: 'Mobile App',
    projectlink: 'https://www.behance.net/gallery/178082215/FarmWise-UIUX',
    protected: false,
    password: ''
  },
];

const allProjectsCont = document.querySelector('.all-project-container');
const filterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', function() {
  // Filter projects to display only 'uiux' category by default
  const defaultCategory = 'uiux';
  const defaultProjects = projects.filter(project => project.category === defaultCategory);
  displayAllProjects(defaultProjects);
});

filterBtns.forEach(function(btn){
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const projectCategory = projects.filter(function(project) {
        return project.category === category;
      });
      
      displayAllProjects(projectCategory);
    });
});

function displayAllProjects(allProjects){
  let displayProjects = allProjects.map(function(works){ 
    let projectLinks = `
      <a class="hover-link" href="${works.projectlink}" target="_blank">
        <section class="project-hover">
          <span class="material-icons">north_east</span>
        </section>
      </a>
    `;

    if (works.category === 'webdev') {
      projectLinks += `
        <a class="hover-link" href="${works.gitHubLink}" target="_blank">
          <section class="project-hover">
            <i class='bx bxl-github'></i>
          </section>
        </a>
      `;
    }

    if (works.protected) {
      return `
        <section class="project-container">
          <section class="project-image">
            <img src="${works.image}">
            <section class="project-year">
              <span>${works.year}</span>
            </section>

            <div class="link-to">
              <div class="link-hover-container">
                <a class="hover-link" href="javascript:void(0)" onclick="showPasswordModal(${works.id})">
                  <section class="project-hover">
                    <span class="material-icons">lock</span>
                  </section>
                </a>
              </div>
            </div>
          </section>

          <section class="project-name-tag">
            <section>
              <span class="project-name">${works.name}</span>
            </section>
            <section class="project-tags">
              <span class="project-sector">${works.sector}</span>
              <span class="project-category">${works.project}</span>
            </section>
          </section>
        </section>
      `;
    } else if (works.projectlink) {
      return `
        <section class="project-container">
          <section class="project-image">
            <img src="${works.image}">
            <section class="project-year">
              <span>${works.year}</span>
            </section>
            <div class="link-to">
              <div class="link-hover-container">
                ${projectLinks}
              </div>
            </div>
          </section>
          <section class="project-name-tag">
            <section>
              <span class="project-name">${works.name}</span>
            </section>
            <section class="project-tags">
              <span class="project-sector">${works.sector}</span>
              <span class="project-category">${works.project}</span>
            </section>
          </section>
        </section>
      `;
    } else {
       return `
        <section class="project-container">
          <section class="project-image">
            <img src="${works.image}">
            <section class="project-year">
              <span>${works.year}</span>
            </section>

            <div class="link-to">
              <div class="link-hover-container">
                <a href="display.html?id=${works.id}">
                  <section class="project-hover">
                    <span class="material-icons">north_east</span>
                  </section>
                </a>
              </div>
            </div>

          </section>
          <section class="project-name-tag">
            <section>
              <span class="project-name">${works.name}</span>
            </section>
            <section class="project-tags">
              <span class="project-sector">${works.sector}</span>
              <span class="project-category">${works.project}</span>
            </section>
          </section>
        </section>
      `;
    }
  });

  displayProjects = displayProjects.join("");
  allProjectsCont.innerHTML = displayProjects;
}

function showPasswordModal(projectId) {
  const modal = document.getElementById('passwordModal');
  const closeBtn = document.getElementsByClassName('close')[0];
  const submitBtn = document.getElementById('passwordSubmit');
  const passwordInput = document.getElementById('passwordInput');

  modal.style.display = 'block';

  closeBtn.onclick = function() {
    modal.style.display = 'none';
    passwordInput.value = '';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      passwordInput.value = '';
    }
  }

  submitBtn.onclick = function() {
    const project = projects.find(proj => proj.id === projectId);
    if (passwordInput.value === project.password) {
      passwordFeedback.textContent = 'Access granted.';
      passwordFeedback.style.color = '#22933d';
      window.location.href = `display.html?id=${projectId}`;
    } else {
      passwordFeedback.textContent = 'Access denied: Incorrect password.';
    }
  }
}
