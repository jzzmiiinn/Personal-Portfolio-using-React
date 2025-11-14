import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);  
    alert('Message sent! (Dummy response)');
    setFormData({ name: '', message: '' }); 
  };

  return (
    <div id="contact">
      <div className="touch">
        <h1>GET IN TOUCH</h1>
        <p><strong>Name:</strong> Yasmin Ali Aime</p>
        <p><strong>Email:</strong> <a href="mailto:jzzmiiinnali@gmail.com">jzzmiiinnali@gmail.com</a></p>
        <p><strong>Mobile:</strong> <a href="tel:+251961970874">+251 961 970 874</a></p>
        <p><strong>Location:</strong> Addis Ababa, Ethiopia</p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h3>Contact Me</h3> 
          <br />
          <br />
          <input type="text" id="name" name="name" placeholder='Name' value={formData.name} onChange={handleChange} required />
          <br /><br />
          <br />
          <textarea id="message" name="message" placeholder='Message' rows="4" value={formData.message} onChange={handleChange} required></textarea>
          <br /><br />
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;