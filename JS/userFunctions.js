import { db } from './firebaseConfig.js';
import { ref, get, child } from "firebase/database";

// Function to fetch projects
async function fetchProjects() {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, 'projects'));
    if (snapshot.exists()) {
      const projects = snapshot.val();
      return Object.keys(projects).map(key => ({ id: key, ...projects[key] }));
    } else {
      console.log("No data available");
      return [];
    }
  } catch (e) {
    console.error("Error fetching projects: ", e);
  }
}

// Function to display projects
async function displayProjects() {
  const projectsContainer = document.getElementById('projects-container');
  const projects = await fetchProjects();
  projectsContainer.innerHTML = '';
  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';
    projectElement.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.url}" target="_blank">View Project</a>
      <p>Visits: ${project.visits}</p>
    `;
    projectsContainer.appendChild(projectElement);
  });
}

export { displayProjects };
