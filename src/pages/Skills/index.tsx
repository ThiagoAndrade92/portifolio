// Css
import style from './Skills.module.css';

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faGit, faGithub, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

export const Skills = () => {
  return (
    <section id='skills' className={`${style.skills} d-flex align-items-center justify-content-center`}>
      <div className={style.conteudo}>
        <h1 className='text-center mb-5'>Habilidades</h1>

        <div className={`${style.list_skills}`}>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>

        {/* 🔁 container da faixa animada */}
        <div className={style.marquee}>
          <div className={style.track}>
            {[...Array(2)].map((_, i) => (
              <div className={style.icons} key={i}>
                <div className={style.icon} title='HTML'>
                  <FontAwesomeIcon icon={faHtml5} className={style.fa} />
                </div>
                <div className={style.icon} title='CSS'>
                  <FontAwesomeIcon icon={faCss3} className={style.fa} />
                </div>
                <div className={style.icon} title='JavaScript'>
                  <FontAwesomeIcon icon={faJs} className={style.fa} />
                </div>
                <div className={style.icon} title='React'>
                  <FontAwesomeIcon icon={faReact} className={style.fa} />
                </div>
                <div className={style.icon} title='Bootstrap'>
                  <FontAwesomeIcon icon={faBootstrap} className={style.fa} />
                </div>
                <div className={style.icon} title='Git'>
                  <FontAwesomeIcon icon={faGit} className={style.fa} />
                </div>
                <div className={style.icon} title='GitHub'>
                  <FontAwesomeIcon icon={faGithub} className={style.fa} />
                </div>
                <div className={style.svg} title='TypeScript'>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
