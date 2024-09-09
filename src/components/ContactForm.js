import React, { useRef } from 'react';
import './ContactFormStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';


export default function ContactForm({ id }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('rajoni2uif19', 'template_lzpf4mc', form.current, 'CSe6qTxmPrTDrWivH')
      .then((result) => {
          console.log(result.text);
          toast.success('Message sent successfully.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      }, (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Kindly refresh the page.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      });
  };




  return (
    <div className='contact-window' id={id}>
      <h1>Let's Get in Touch.</h1>
      <p>Let’s make something new, different and more meaning full or make thing more <br></br>attractive. Contact with me using form below.</p>
      <div className="contact-container">
        <div className="contact-wrapper-left">
          <h3>Location</h3>
          <div><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Jamia%20Bilal%20Ibne%20Rabah,%20XCJH+H9,%20Gazipur+(My%20BusiVhoraness%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe></div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-wrapper-right">
          <input id='name' type="text" name="name" placeholder='Full Name'  required/>
          <input id='email' type="email" name="email" placeholder='Email ID' required />
          <textarea id='message' name="message" rows='5' column='15' placeholder='Share your thoughts and insights here; your feedback means a lot.' required/>
          <button className='btn' id='submitBtn' type="submit" value="Send" >Send Message</button>
          <ToastContainer />
        </form>
        
      </div>
    </div>
  )
}


// import cartoon from '../images/cartoon-compressed.png';
// <img src={cartoon} alt='Deepa Jha' className="contact-wrapper-left"></img>  
//     display: flex;
// align-items: flex-end;


// .contact-wrapper-left {
//   width: 450px;
//   height: 100%;
// }