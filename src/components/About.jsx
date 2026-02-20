import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                <div className="title-underline"></div>
            </div>

            <div className="about-grid">
                <div className="about-text glass-card">
                    <p>
                        I am currently an intern working as a <strong>Junior Software Engineer</strong>, with a strong foundation in Python, SQL, and web development, specializing in <strong>Cloud Computing</strong>, <strong>Agentic AI</strong>, and <strong>Generative AI</strong>.
                    </p>
                    <p>
                        I have completed my Bachelor of Technology in Computer Science and Engineering with a specialization in Cloud Computing from <strong>Chandigarh University</strong>. I've always been fascinated by how large-scale applications handle millions of users, which led me to dive deep into AWS and Azure.
                    </p>
                    <p>
                        I am enthusiastic about applying my analytical skills to build and optimize AI-driven applications in cloud environments. My goal is to grow into a role where I can automate everything—from code commits to autonomous agent workflows.
                    </p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">2+</span>
                            <span className="stat-label">Cloud Certs</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Real-world Projects</span>
                        </div>
                    </div>
                </div>

                <div className="about-certs glass-card">
                    <h3>Certifications</h3>
                    <ul className="certs-list">
                        <li>
                            <strong>Microsoft Azure Administrator (AZ-104)</strong>
                            <span>Azure services, infrastructure & administration</span>
                        </li>
                        <li>
                            <strong>Google Cloud Digital Leader</strong>
                            <span>GCP business application overview</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
