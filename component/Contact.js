import contactStyles from '../styles/Contact.module.scss';
const Contact = () => {
  return (
    <section className={contactStyles.contact}>
      <div className={contactStyles.contact__container}>
        <div className={contactStyles.contact__heading}>
          <h4>Oh! Please Say Hi</h4>
          <p>
            I'm looking for any new opportunities, my inbox is
            always open. Whether you have a question or just want to say hi,
            I'll surely get back to you!
          </p>
        </div>
        <form>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email Address'  />
            <textarea name="" id="" placeholder='Type in message'></textarea>
            <button>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
