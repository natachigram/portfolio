import contactStyles from '../styles/Contact.module.scss';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Link from 'next/link';
import SendIcon from '@material-ui/icons/Send';
const Contact = () => {
  return (
    <section className={contactStyles.contact} id='contact'>
      <div className={contactStyles.contact__container}>
        <div className={contactStyles.contact__heading}>
          <Fade bottom duration={2000}>
            <h4>Oh! Please Say Hi</h4>
          </Fade>
          <Fade bottom delay={500} duration={2000}>
            <p>
              I am looking for new opportunities, my inbox is always open.
              Whether you have a question or just want to say hi, I'll surely
              get back to you!
            </p>
          </Fade>
        </div>

        <Fade bottom delay={1000} duration={2000}>
          <div className={contactStyles.contact__email}>
            <Pulse delay={2000} duration={5000} forever={true}>
              <Link href='mailto:natachigram@gmail.com'>
                <span>
                  <a>natachigram@gmail.com</a>
                  <SendIcon />
                </span>
              </Link>
            </Pulse>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;
