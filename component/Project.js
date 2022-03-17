import Link from 'next/link';
import Image from 'next/image';
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';
import projectStyle from '../styles/Project.module.scss';
import netflix from '../public/netflix.png';
import tinder from '../public/tinder.png';
import Fade from 'react-reveal/Fade';

function Project() {
  return (
    <section className={projectStyle.project} id='projects'>
      <div className={projectStyle.project__content}>
        <Fade bottom duration={2000}>
          <span className={projectStyle.projectTitle}>
            <h2>Some Projects I've Built</h2>
            <div className={projectStyle.hr}></div>
          </span>
        </Fade>

        <Fade bottom delay={500} duration={2500}>
          <div className={projectStyle.projects__container}>
            <div className={projectStyle.project__card}>
              <div className={projectStyle.project__thumbnail}>
                <Link href='https://netflix-clone-fa5ba.web.app/'>
                  <a className={projectStyle.thumb}>
                    <Image
                      src={netflix}
                      layout='fill'
                      className={projectStyle.image}
                    />
                    <div></div>
                  </a>
                </Link>
              </div>
              <div className={projectStyle.project__description}>
                <h4>Netflix Clone</h4>
                <div className={projectStyle.textSummary}>
                  <span>
                    A Simple Netflix Frontend UI built based on reactJs and
                    integrated with netflix movies based API.
                  </span>
                </div>
                <div className={projectStyle.technologies}>
                  <span>ReactJs Firebase </span>
                </div>
                <div className={projectStyle.links}>
                  <Link href='https://netflix-clone-fa5ba.web.app/'>
                    <a>
                      <LaunchIcon />
                    </a>
                  </Link>
                  <Link href='/'>
                    <a>
                      <GitHubIcon />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={projectStyle.project__card}>
              <div className={projectStyle.project__thumbnail}>
                <Link href='https://tinder-clone-4eaf2.web.app/'>
                  <a className={projectStyle.thumb}>
                    <Image
                      src={tinder}
                      layout='fill'
                      className={projectStyle.image}
                    />
                    <div></div>
                  </a>
                </Link>
              </div>
              <div className={projectStyle.project__description}>
                <h4>Tinder Clone</h4>
                <div className={projectStyle.textSummary}>
                  <span>A Simple Tinder MERN Stack build.</span>
                </div>
                <div className={projectStyle.technologies}>
                  <span>ReactJs Nodejs </span>
                </div>
                <div className={projectStyle.links}>
                  <Link href='https://tinder-clone-4eaf2.web.app/'>
                    <a>
                      <LaunchIcon />
                    </a>
                  </Link>
                  <Link href='https://github.com/natachigram/tinder-clone'>
                    <a>
                      <GitHubIcon />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={projectStyle.project__card}>
              <div className={projectStyle.project__thumbnail}>
                <Link href='/'>
                  <a className={projectStyle.thumb}>
                    <Image
                      src={netflix}
                      layout='fill'
                      className={projectStyle.image}
                    />
                    <div></div>
                  </a>
                </Link>
              </div>
              <div className={projectStyle.project__description}>
                <h4>Netflix Clone</h4>
                <div className={projectStyle.textSummary}>
                  <span>
                    A Simple Netflix Frontend UI built based on reactJs and
                    integrated with netflix movies based API.
                  </span>
                </div>
                <div className={projectStyle.technologies}>
                  <span>ReactJs Firebase </span>
                </div>
                <div className={projectStyle.links}>
                  <Link href='/'>
                    <a>
                      <LaunchIcon />
                    </a>
                  </Link>
                  <Link href='/'>
                    <a>
                      <GitHubIcon />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Project;
