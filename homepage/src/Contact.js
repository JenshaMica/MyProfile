import React, { useState } from 'react';
 
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
 
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
 
    return (
 
        <div className="contact-page" style={{ backgroundColor: '#e6f2e6', color: '#006600', padding: '20px' }}>
            {submitted ? (
                <div>
                    <h1>Thank you, {formData.name}!</h1>
                    <p>Your message has been sent.</p>
                    <p>Email: {formData.email}</p>
                    <p>Message: {formData.message}</p>
 
                </div>
 
            ) : (
 
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
 
                    </div>
 
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
                    </div>
 
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
              </form>
 
            )}
        </div>
    );
};

 
export default Contact;