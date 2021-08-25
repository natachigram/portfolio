import FadeIn from 'react-fade-in';
import heroStyle from '../styles/Hero.module.scss';

const Hero = () => {
  return (
    <>
      <section className={heroStyle.hero}>
        <div className={heroStyle.hero_container}>
          <FadeIn transitionDuration={1600} delay={300}>
            <p>Hello, my name is </p>
            <h1>Nnamaka Natachi O.</h1>
            <h2>I am a frontend developer</h2>
            <p className={heroStyle.aboutText}>
              I'm a frontend developer specializing in building  exceptional digital experiences. Currently, I'm focused
              on building accessible, human-centered products.
            </p>
            <button>Get In Touch</button>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Hero;
