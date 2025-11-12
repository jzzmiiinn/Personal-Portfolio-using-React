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
        <p><strong>Email:</strong> jzzmiiinnali@gmail.com</p>
        <p><strong>Mobile:</strong> +251961970874</p>
        <p><strong>Location:</strong> Addis Ababa, Ethiopia</p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h3>Contact Me</h3> 
          <br />
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          <br /><br />
          <label htmlFor="message">Message:</label>
          <br />
          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          <br /><br />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;