"use client";
import { useState } from "react";
import AppWrap from "@wrapper/AppWrap";
import MotionWrap from "@wrapper/MotionWrap";
import { client } from "@libs/sanity";

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="text-3xl text-gray-500 font-semibold">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src="./assets/images/email.png" alt="email" />
          <a href="mailto:hello@micael.com" className="text-sm text-gray-500">Musondamakena@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src="./assets/images/mobile.png" alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="text-sm text-gray-500 ">+260 974-085739</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form flex items-center justify-center">
          <div className="flex items-center justify-center">
            <input className="text-sm text-gray-500" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="flex items-center justify-center">
            <input className="text-sm text-gray-500" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="text-sm text-gray-500"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="text-sm text-gray-500" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer,'app__footer'),
  'contacts',
  'app__whitebg'
);