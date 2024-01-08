import {useRef} from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ts0x49r', 'template_3dywyhn', form.current, 'Q4CHuArYYf066GYVf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
  return (
    <section>
        <div className="container">
            <h2 className='text-center'>Contact Us!</h2>
        </div>
        <form ref={form} onSubmit={sendEmail} action="" className='form-control --card-- --flex-center --dir-column'>
            <input type="text" placeholder='Full Name' name='user_name' required />

            <input type="email" placeholder='Email Address' name='user_email' required />

            <input type="text" placeholder='Subject' name='user_subject' required />

            <textarea name='message' cols='30' rows='10'></textarea>

            <button type='submit' className='--btn --btn-primary'>Send Message</button>
        </form>
    </section>
  )
}

export default Contact;