import { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

export function Join() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_voek5qi', 'template_9gtqnhg', form.current, 'EvBdnGxQKl1p-deY5')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  };


  return (
    <div className="Join" id="join-us">
      <div className='left-j'>
        <hr />
        <div>
          <span>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span>WITH US?</span>
        </div>
      </div>
      <div className='right-j'>
        <form ref={form} className='email-container' onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder="Enter your Email address" />
          <button type='submit' className='btnPlan btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  );
}
