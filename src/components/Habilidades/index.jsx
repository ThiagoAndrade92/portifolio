//Css
import styles from '../Habilidades/styles.module.css';

//Fonts Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';


export const Habilidades = () => {
  return (
    <section className={`${styles.habilidades} pb-5`} id='habilidades'>
      <div className='container'>
        <h2 className='titulo text-center pb-5'>Habilidades</h2>
        <div className="row justify-content-center">

            <div className={`${styles.skill} col-lg-3 col-md-6 col-12`}>
              <FontAwesomeIcon icon={faHtml5} className={styles.awesome} />
              <div className={styles.nome_skill}>HTML</div>
            </div>{/* html */}

            <div className={`${styles.skill} col-lg-3 col-md-6 col-12`}>
              <FontAwesomeIcon icon={faCss3Alt} className={styles.awesome} />
              <div className={styles.nome_skill}>CSS</div>
            </div>{/* css */}

            <div className={`${styles.skill} col-lg-3 col-md-6 col-12`}>
              <FontAwesomeIcon icon={faJs} className={styles.awesome} />
              <div className={styles.nome_skill}>JavaScript</div>
            </div>{/* js */}

            <div className={`${styles.skill} col-lg-3 col-md-6 col-12`}>
              <FontAwesomeIcon icon={faGit} className={styles.awesome} />
              <div className={styles.nome_skill}>Git</div>
            </div>{/* git */}

            <div className={`${styles.skill} col-lg-3 col-md-6 col-12`}>
              <FontAwesomeIcon icon={faGithub} className={styles.awesome} />
              <div className={styles.nome_skill}>Github</div>
            </div>{/* github */}

            <div className={`${styles.skill} col-lg-3 col-md-6 col-12`}>
              <FontAwesomeIcon icon={faBootstrap} className={styles.awesome} />
              <div className={styles.nome_skill}>Bootstrap</div>
            </div>{/* Bootstrap */}

            <div className={`${styles.skill} col-lg-3 col-md-6 col-12`}>
              <FontAwesomeIcon icon={faReact} className={styles.awesome} />
              <div className={styles.nome_skill}>React</div>
            </div>{/* react */}

        </div>{/* row */}
      </div>
    </section>
  )
}