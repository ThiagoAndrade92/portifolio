//Css
import style from './Projects.module.css';

//Images
import { LoginImg, loginScreens } from '../../assets/images/login/index';
import { CepImg, cepScreens } from '../../assets/images/cep/index';
import { TodoImg, todoScreens } from '../../assets/images/todo/index';
import Loja from '../../assets/images/loja.png';

//React
import { useState } from 'react';

//components
import { Modal } from '../../components/Modal';
import { projects } from '../../util/projects';

export const Projects = () => {

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [activeProject, setActiveProject] = useState<number | null>(null);

   const openModal = (id: number) => {
      setActiveProject(id);
      setIsModalOpen(true);
   };

   const closeModal = () => {
  setIsModalOpen(false);
  setActiveProject(null);
};

   return (
      <section className={`${style.projects}`} id='projects'>
         <h1 className='mb-5'>Projetos</h1>

         <div className={`${style.cards_box} d-flex row g-3`}>

            {
               projects.map((project) => (
                  <div className='col-12 col-md-6'
                  key={project.id}>
               <div
               onClick={() => openModal(project.id)}
               className={`${style.card} `}>

                  <div className={`${style.card_img}`}>
                     <img src={project.preview} alt={project.alt} />
                  </div>


                  {/* -------------------------------------- */}
                  <h2 className={`${style.title} text-center`}>{project.title}</h2>
                  <ul className={`${style.info}`}>
                     <li>{project.li1}</li>
                     <li>{project.li2}</li>
                     <li>{project.li3}</li>
                     <li>{project.li4}</li>
                  </ul>
                  <div className={`${style.link}`}>
                     <a href={project.btn1} target='_blank'>Visualizar</a>

                     <a href={project.btn2} target='_blank'>Código</a>
                  </div>
               </div>
            </div>
               ))
            }
            
            {isModalOpen && activeProject !==null && (
               <Modal
               project={projects.find(p => p.id === activeProject)!}
               onClose={closeModal}
               />
            )}

         </div>{/* cards_box */}
      </section>
   )
};