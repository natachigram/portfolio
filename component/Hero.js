import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
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
              I am a frontend developer specializing in building exceptional
              digital experiences. Currently, I am focused on building
              accessible, human-centered products.
            </p>
            <Link href='/#contact'>
              <a>
                <button>Get In Touch</button>
              </a>
            </Link>
          </Fade>

          {/* social media icons */}
          <Pulse delay={1000} duration={2000} forever={true}>
            <div className={heroStyle.socialIcons}>
              <div></div>

              <Link href='https://mobile.twitter.com/natachijs'>
                <a target='_blank'>
                  <TwitterIcon />
                </a>
              </Link>

              <Link href='https://www.instagram.com/natachi.js/'>
                <a target='_blank'>
                  <InstagramIcon />
                </a>
              </Link>
              <Link href='https://www.linkedin.com/in/natachi-nnamaka-156a89209/'>
                <a target='_blank'>
                  <LinkedInIcon />
                </a>
              </Link>
              <Link href='https://github.com/natachigram'>
                <a target='_blank'>
                  <GitHubIcon />
                </a>
              </Link>
            </div>
          </Pulse>
        </div>
      </section>
    </>
  );
};

export default Hero;
