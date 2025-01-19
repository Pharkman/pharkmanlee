import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Rename `Link` from react-scroll
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import "./display-project.css";

const AvaLaundry = ({ project }) => {
  return (
    <section className="display-project-cont">
      <div className="display-project">
      <div className="back-button">
        <RouterLink to="/" className="go-back-btn">
          <img src="./images/prev.png" alt="next-prev"></img>
          <p>Back home</p>
        </RouterLink>
        <h1>Faruq Arowolo</h1>
      </div>


      <div className="project-content" id="avalaundry">
        <div className="project-note">
          <p>An extended version of this project is on <a href="https://www.behance.net/faruqsola" target="_blank" rel="noopener noreferrer">
            Behance
          </a> and <a href="https://dribbble.com/Pharkmanlee" target="_blank" rel="noopener noreferrer">
            Dribbble
          </a>.</p>
        </div>
        <div className="project-desc">
          <h1 className="project-name">Avalaundry</h1>
          <p className="project-short-desc">Laundry Service website</p>

          <div className="designer-year">
            <div className="picture-cont">
              <img src="./images/picture2.png" alt="faruq" />
            </div>
            <p className="designer-name">Faruq Arowolo</p>
            <p className="published-date">Published on dec 2024</p>
          </div>
        </div>

        <div className="project-cover">
          <img src="./images/avalaundry/avalaundry-cover.png" alt="avalaundry" />
        </div>
        <div className="introduction">
          <h1>Introduction</h1>
          <p>Avalaundry makes laundry day a thing of the past. Enjoy fresh, clean clothes delivered to your door with the convenience of professional washing, ironing, and folding—all at your fingertips.</p>
          <img src="./images/avalaundry/avalaundry-intro.png" alt="avalaundry" />
        </div>

        <div className="problem">
          
          <h1>Problem Statement</h1>
          <p>Laundry day can be time-consuming and stressful, leaving you with little time for what matters most. Finding reliable, high-quality laundry services can also be a challenge.</p>
          <img src="./images/avalaundry/avalaundry-pro.jpg" alt="avalaundry" />
        </div>

        <div className="problem">
          
          <h1>Solution</h1>
          <p>Avalaundry provides a hassle-free laundry experience, offering washing, ironing, and folding services with fast, reliable delivery straight to your door.</p>
           <img src="./images/avalaundry/avalaundry-solu.jpg" alt="avalaundry" />
        </div>

        <div className="problem">
          <h1>UI Screens</h1>
          <p>I designed high-fidelity screens for Avalaundry, focusing on a clean, user-friendly interface for a seamless and engaging experience.</p>
          <img src="./images/avalaundry/avalaundry-1.png" alt="avalaundry" />
          <img src="./images/avalaundry/avalaundry-2.png" alt="avalaundry" />
          <img src="./images/avalaundry/avalaundry-3.png" alt="avalaundry" />
          <img src="./images/avalaundry/avalaundry-4.png" alt="avalaundry" />
          <img src="./images/avalaundry/avalaundry-5.png" alt="avalaundry" />
          <img src="./images/avalaundry/avalaundry-6.png" alt="avalaundry" />
          <img src="./images/avalaundry/avalaundry-7.png" alt="avalaundry" />
          <img src="./images/avalaundry/avalaundry-8.png" alt="avalaundry" />
          
          
        </div>
      </div>

      <div className="next-prev-button">
        <RouterLink to="/mediscan">
          <img src="./images/prev.png" alt="next-prev"></img>
          <p>MedicScan</p>
        </RouterLink>
        <RouterLink to="/avapay">
          <p>Avapay</p>
          <img src="./images/next.png" alt="next-prev"></img>
        </RouterLink>
      </div>
      </div>
      
    </section>
  );
};

export default AvaLaundry;






// import React from "react";
// import "./display-project.css";

// const DisplayProject = ({ project }) => {
//   return (
//     <div className="display-project">
//       {/* Back Button Section */}
//       <div className="back-button">
//         <button>
//           <img src="./images/prev.png" alt="previous-icon" />
//           Back home
//         </button>
//         <h1>Faruq Arowolo</h1>
//       </div>

//       {/* FarmWise Project */}
//       <div className="project-content">
//         <div className="project-desc">
//           <h1 className="project-name">FarmWise</h1>
//           <p className="project-short-desc">Agriculture app for farmers</p>

//           <div className="designer-year">
//             <div className="picture-cont">
//               <img src="./images/picture2.png" alt="faruq" />
//             </div>
//             <p className="designer-name">Faruq Arowolo</p>
//             <p className="published-date">Published on Nov 2023</p>
//           </div>
//         </div>

//         <div className="project-cover">
//           <img src="./images/farmer-cover.png" alt="FarmWise cover" />
//         </div>

//         <div className="introduction">
//           <h1>Introduction</h1>
//           <p>
//             FarmWise transcends the role of a mere application; it emerges as a transformative force in the agricultural sector. By synergizing farmer networking, weather intelligence, news updates, marketplace capabilities, farm tracking functionalities, and the added ability to hire tools and workers, FarmWise elevates farming methodologies, encourages progressive thinking, and enables effortless communication within the farming community. With FarmWise, agriculture's future is readily accessible to farmers, poised to reshape their practices, outcomes, and the way they manage resources.
//           </p>
//           <img src="./images/farmer-intr.png" alt="FarmWise introduction" />
//         </div>

//         {/* Problem Statement */}
//         <div className="problem">
//           <h1>Problem Statement</h1>
//           <p>
//             Traditional agricultural practices often leave farmers isolated and lacking access to essential resources and information. Farmers struggle to connect with peers, receive accurate weather forecasts, stay informed about industry news, access fair market prices, track their farm activities, and efficiently manage their operations. The absence of a comprehensive solution results in reduced productivity, uninformed decision-making, and limited growth opportunities within the agricultural sector.
//           </p>
//           <img src="./images/farmerpro.webp" alt="FarmWise problem" />
//         </div>

//         {/* Solution */}
//         <div className="problem">
//           <h1>Solution</h1>
//           <p>
//             FarmWise addresses these challenges by introducing an all-encompassing mobile application that empowers farmers with a unified platform. The application facilitates networking among farmers, providing a space for collaboration and knowledge-sharing. Real-time weather updates offer accurate forecasts, enabling farmers to optimize their tasks based on weather conditions. Current news updates keep farmers informed about industry trends and innovations, promoting modernization. The buy and sell feature establishes a direct marketplace, connecting farmers with consumers and ensuring equitable pricing.
//           </p>
//           <img src="./images/farmersolu.jpeg" alt="FarmWise solution" />
//         </div>

//         {/* Wireframe */}
//         <div className="problem">
//           <h1>Wireframe</h1>
//           <p>
//             I designed wireframes to outline FarmWise’s structure and features, ensuring a clear vision for the app before moving to high-fidelity designs.
//           </p>
//           <img src="./images/farmer-wire.png" alt="FarmWise wireframe" />
//         </div>

//         {/* UI Screens */}
//         <div className="problem">
//           <h1>UI Screens</h1>
//           <p>
//             I designed high-fidelity screens for FarmWise, focusing on a clean, user-friendly interface for a seamless and engaging experience.
//           </p>
//           <img src="./images/farmwise/farmer-1.png" alt="FarmWise screen 1" />
//           <img src="./images/farmwise/farmer-2.png" alt="FarmWise screen 2" />
//           <img src="./images/farmwise/farmer-3.png" alt="FarmWise screen 3" />
//           <img src="./images/farmwise/farmer-4.png" alt="FarmWise screen 4" />
//           <img src="./images/farmwise/farmer-5.png" alt="FarmWise screen 5" />
//         </div>
//       </div>

//       {/* Note */}
//       <div className="project-content" id="farmwise">
//         <div className="project-note">
//           <p>An extended version of this project is on Behance and Dribble.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisplayProject;



// import React from "react";
// import { Link } from "react-scroll";
// import { motion } from "framer-motion"; // Import Framer Motion
// import "./display-project.css";

// // Project-specific components
// const FarmWise = () => (
//   <>
//     <h1>FarmWise</h1>
//     <p>Agriculture app for farmers</p>
//     <img src="./images/farmer-cover.png" alt="FarmWise" />
//     <p>FarmWise transcends the role of a mere application; it emerges as a transformative force in the agricultural sector...</p>
//     {/* Add more specific sections here */}
//   </>
// );

// const Mediscan = () => (
//   <>
//     <h1>Mediscan</h1>
//     <p>Healthcare app</p>
//     <img src="./images/mediscan/mediscan-cover.png" alt="Mediscan" />
//     <p>The MediScan project aims to develop a user-friendly mobile application to simplify medication management...</p>
//     {/* Add more specific sections here */}
//   </>
// );

// const MatchSingle = () => (
//   <>
//     <h1>MatchSingle</h1>
//     <p>Dating app</p>
//     <img src="./images/matchsingle/matchsinglec-over.png" alt="MatchSingle" />
//     <p>The MatchSingle UI/UX case study explores the development of a contemporary dating app...</p>
//     {/* Add more specific sections here */}
//   </>
// );

// const DisplayProject = ({ projectId }) => {
//   return (
//     <section className="display-project-cont">
//       <div className="display-project">
//         <div className="back-button">
//           <button>
//             <img src="./images/prev.png" alt="next-prev" />
//             Back home
//           </button>
//           <h1>Faruq Arowolo</h1>
//         </div>

//         <div className="project-content">
//           {/* Conditional rendering based on projectId */}
//           {projectId === "farmwise" && <FarmWise />}
//           {projectId === "mediscan" && <Mediscan />}
//           {projectId === "matchsingle" && <MatchSingle />}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DisplayProject;
