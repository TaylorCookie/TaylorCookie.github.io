import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_gpltiu1";
      const templateId = "template_pipyf8g";
      const userId = "user_7dvpNoy6AzAII8izT9jnP";
      const templateParams = {
        name,
        email,
        message,
      };

      if (!isValidEmail(email)) {
        console.log(`"${email}" is an invalid email address.`);
        return;
      }

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const isValidEmail = (email) => {
    const regex =
      // eslint-disable-next-line
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <div className="contact_form">
      <h1>Get in touch</h1>
      <input
        className="contact_form_input"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="contact_form_input"
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="contact_form_input"
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button className="contact_form_button" onClick={submit}>
        Send Message
      </button>

      <p className="contact_info">Phone: (309) 434-3185</p>
      <span className={emailSent ? null : "hidden"}>
        Thank you for your message, I will be in touch in no time!
      </span>
    </div>
  );
};

export default Contact;
