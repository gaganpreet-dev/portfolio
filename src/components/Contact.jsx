import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container">
            <div className="contact-card glass-card">
                <div className="contact-content">
                    <h2 className="section-title">Let's <span className="gradient-text">Work Together</span></h2>
                    <p>
                        I'm currently looking for new opportunities in Software Engineering, Cloud, or DevOps.
                        Whether you have a question or just want to say hi, my inbox is always open!
                    </p>

                    <div className="contact-methods">
                        <a href="mailto:gagan2020preet@gmail.com" className="method glass-card">
                            <Mail className="method-icon" />
                            <div className="method-info">
                                <span>Email</span>
                                <strong>gagan2020preet@gmail.com</strong>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/gaganpreet-singh-0a5374233?" target="_blank" rel="noreferrer" className="method glass-card">
                            <Linkedin className="method-icon" />
                            <div className="method-info">
                                <span>LinkedIn</span>
                                <strong>gaganpreet-singh</strong>
                            </div>
                        </a>

                        <a href="https://github.com/gaganpreet-dev" target="_blank" rel="noreferrer" className="method glass-card">
                            <Github className="method-icon" />
                            <div className="method-info">
                                <span>GitHub</span>
                                <strong>gaganpreet-dev</strong>
                            </div>
                        </a>
                    </div>

                    <div className="cta-wrapper">
                        <a href="mailto:gagan2020preet@gmail.com" className="btn btn-primary btn-large">
                            Send a Message <Send size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
