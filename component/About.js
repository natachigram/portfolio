import Image from 'next/image';
import profilePic from '../public/natachi.jpg';

import aboutStyle from '../styles/About.module.scss';

function About() {
  return (
    <section className={aboutStyle.about}>
      <div className={aboutStyle.aboutContent}>
        <span className={aboutStyle.aboutTitle}>
          <h2>About Me</h2>
          <div className={aboutStyle.hr}></div>
        </span>
        <div className={aboutStyle.aboutBox}>
          <div className={aboutStyle.aboutBox_text}>
            <p>
              Hello! My name is Natachi and I love building things that live on
              the internet. My interest in web development started back in 2019
              when I decided to try editing custom free themes — turns out
              hacking together a custom search button taught me a lot about HTML
              and CSS!
            </p>
            <p className={aboutStyle.hide}>
              Speed-up to today, I've had the privilege of working at a
              tech-charity community and as a freelancer. My main focus these
              days is building accessible, inclusive, web products for a variety
              of clients.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul>
              <li>
                <div></div> JavaScript (ES6+)
              </li>
              <li>
                <div></div> React
              </li>
              <li>
                <div></div> NodeJS
              </li>
              <li>
                <div></div> NextJS
              </li>
              <li>
                <div></div> Html 5
              </li>
              <li>
                <div></div> CSS
              </li>
            </ul>
          </div>
          <div className={aboutStyle.image}>
            <div className={aboutStyle.frame}>
            </div>
            <Image src={profilePic} alt='Picture of the author' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
