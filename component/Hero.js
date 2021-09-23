import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import heroStyle from '../styles/Hero.module.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Hero = () => {
  return (
    <>
      <section className={heroStyle.hero} id='home'>
        <div className={heroStyle.hero_container}>
          <Fade bottom duration={2000} delay={300}>
            <p>Hello, my name is </p>
            <h1>Nnamaka Natachi O.</h1>
            <h2>I am a frontend developer</h2>
            <p className={heroStyle.aboutText}>
              I'm a frontend developer specializing in building exceptional
              digital experiences. Currently, I'm focused on building
              accessible, human-centered products.
            </p>
            <Link href='/#contact'>
              <a>
                <button>Get In Touch</button>
              </a>
            </Link>
          </Fade>

          <div className={heroStyle.socialIcons}>
            <div></div>

            <Link href='/'>
              <a>
                <TwitterIcon />
              </a>
            </Link>
            <Link href='/'>
              <a>
                <InstagramIcon />
              </a>
            </Link>
            <Link href='/'>
              <a>
                <LinkedInIcon />
              </a>
            </Link>
            <Link href='/'>
              <a>
                <GitHubIcon />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
