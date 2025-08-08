
import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";

export default function Dishi() {
  return (
    <CaseStudyLayout
      title="DiSHi"
      subtitle="MVP fullstack app for a digital food-sharing network."
      backButtonClass="back-button-dishi"
    >
      <img
        src="/assets/dishiLandingPage.jpg"
        alt="Dishi homepage"
        className="case-study-image"
      />
      <div className="case-study-description">
        <p>
          <strong className="font-bold">My Role:</strong> As part of a
          collaborative final project, we designed and built DiSHi as a
          responsive, mobile-first React MVP. I focused on structured layouts,
          pagination, CRUD operations, UI state management, and accessibility.
        </p>
      </div>

      <img
        src="/assets/dishiAddDish.jpg"
        alt="Add dish page"
        className="case-study-image"
      />
      <div className="case-study-description">
        <p>
          Users can add food items with minimal effort. The form is mobile-first,
          with just a few required fields, reducing friction.
        </p>
      </div>

      <img
        src="/assets/dishiUserProfile.jpg"
        alt="User profile page"
        className="case-study-image"
      />
      <div className="case-study-description">
        <p>
          Each user has a personal dashboard with editable preferences and post
          history. Designed for clarity and ease of use.
        </p>
      </div>
    </CaseStudyLayout>
  );
}


// import React from "react";
// import "./Dishi.css";
// import BackButton from "../../components/BackButton";
// import DiagonalBackgroundShapes from "../../components/DiagonalBGShapes";

// export default function Dishi() {
//   return (
//     <main className="dishi-page">
//       <DiagonalBackgroundShapes variant="bw" />

//       <div className="dishi-wrapper">
//         <section className="dishi-card">
//           <header className="dishi-header">
//             <div className="dishi-header-row">
//               <BackButton className="back-button-dishi" />

//               <h1 className="dishi-title">DiSHi</h1>
//             </div>
//             <p className="dishi-subtitle">
//               MVP fullstack app for a digital food-sharing network.
//             </p>
//           </header>

//           <section className="dishi-body">
//             {/* Section 1 */}
//             <img
//               src="/assets/dishiLandingPage.jpg"
//               alt="Dishi homepage"
//               className="dishi-image"
//             />
//             <div className="dishi-description">
//               <p>
//                 <strong className="font-bold">My Role:</strong> As part of a
//                 collaborative final project, we  designed and built DiSHi as a responsive,
//                 mobile-first React MVP. I focused on structured layouts,
//                 pagination, CRUD operations, UI state management, and
//                 accessibility. The project also emphasized usability and solving
//                 a specific user problem: connecting people to share surplus food
//                 within local communities.
//               </p>
//             </div>

//             {/* Section 2 */}
//             <img
//               src="/assets/dishiAddDish.jpg"
//               alt="Add a dish page"
//               className="dishi-image"
//             />
//             <div className="dishi-description">
//               <p>
//                 The app allows users to add available food items with just a few
//                 fields. Creating new offers is simple, mobile-friendly, and
//                 designed with minimal friction for the user.
//               </p>
//             </div>

//             {/* Section 3 */}
//             <img
//               src="/assets/dishiUserProfile.jpg"
//               alt="User profile page"
//               className="dishi-image"
//             />
//             <div className="dishi-description">
//               <p>
//                 Each user has a profile page where they can manage their active
//                 posts, update their contact preferences, and see a summary of
//                 past activity.
//               </p>
//             </div>
//           </section>
//         </section>
//       </div>
//     </main>
//   );
// }
