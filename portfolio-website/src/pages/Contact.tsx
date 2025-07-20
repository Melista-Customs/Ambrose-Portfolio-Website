import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <p>If you have any questions or inquiries, feel free to reach out using the form below.</p>
            <ContactForm />
            <div className="contact-info">
                <h2>Additional Contact Information</h2>
                <p>Email: your-email@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Follow me on social media:</p>
                <ul>
                    <li><a href="https://twitter.com/yourprofile">Twitter</a></li>
                    <li><a href="https://linkedin.com/in/yourprofile">LinkedIn</a></li>
                    <li><a href="https://github.com/yourprofile">GitHub</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;