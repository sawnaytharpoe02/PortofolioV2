import React from "react";
import styles from "./style.module.css";

export default function index({ modal, projects }) {
  const { active, index } = modal;

  return (
    <>
      <div className={styles.modalContainer}>
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
          {projects.map((project, index) => {
            const { src, color } = project;

            return (
              <div
                className={styles.modal}
                style={{ backgroundColor: color }}
                key={`modal_${index}`}>
                <img src={`/${src}`} width="300px" height="0" alt="image" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// const ProjectModal = ({ modal, projects }) => {
//   const { active, index } = modal;

//   return (
//     <>
//       <div className="absolute bg-white width-[400px] height-[350px] flex items-center justify-center overflow-hidden pointer-events-none">
//         <div
//           style={{ top: index * -100 + "%" }}
//           className="transition-top duration-100 ease-[cubic-bezier(0.76, 0, 0.24, 1)]">
//           {projects.map((project, index) => {
//             const { src, color } = project;
//             console.log(color);

//             return (
//               <div
//                 key={`projectmodal_${index}`}
//                 className="relative w-full h-full flex justify-center items-center"
//                 style={{ backgroundColor: color }}>
//                 <img src={`/${src}`} width="300px" height="auto" alt="image" />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProjectModal;
