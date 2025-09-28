import style from './Projects.module.css';

export const Projects = () => {




   return (
      <section className={`${style.projects}`}>
         <h1 className='mb-5'>Projetos</h1>

         <div className={`${style.cards_box}`}>

            <div className={`${style.card} card mb-5`}>
               <div className={`${style.card_img}`}>
                  <div className={`${style.img}`}></div>
               </div>
                  <h1 className={`${style.title} text-center`}>Nome projeto</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae maxime nam? Voluptas, sint molestiae? Ducimus delectus ratione id ipsa non quo quia magnam totam rerum eveniet, dolorum maiores asperiores!</p>
            </div>

            <div className={`${style.card} card mb-5`}>
               <div className={`${style.card_img}`}>
                  <div className={`${style.img}`}></div>
               </div>
                  <h1 className={`${style.title} text-center`}>Nome projeto</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae maxime nam? Voluptas, sint molestiae? Ducimus delectus ratione id ipsa non quo quia magnam totam rerum eveniet, dolorum maiores asperiores!</p>
            </div>

            <div className={`${style.card} card mb-5`}>
               <div className={`${style.card_img}`}>
                  <div className={`${style.img}`}></div>
               </div>
                  <h1 className={`${style.title} text-center`}>Nome projeto</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae maxime nam? Voluptas, sint molestiae? Ducimus delectus ratione id ipsa non quo quia magnam totam rerum eveniet, dolorum maiores asperiores!</p>
            </div>

         </div>{/* cards_box */}
      </section>
   )
};