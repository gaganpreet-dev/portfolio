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
                        I am an entry-level software developer with a strong foundation in Python, SQL, and web development, currently specializing in <strong>Cloud Computing</strong> and <strong>DevOps</strong>.
                    </p>
                    <p>
                        My journey began at Chandigarh University, where I am pursuing my Bachelor of Technology. I've always been fascinated by how large-scale applications handle millions of users, which led me to dive deep into AWS, Azure, and OCI.
                    </p>
                    <p>
                        I am enthusiastic about applying my analytical skills to build and optimize applications in cloud environments. My goal is to grow into a role where I can automate everything—from code commits to production deployments.
                    </p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">3+</span>
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
                        <li>
                            <strong>Oracle Cloud Infrastructure Architect Associate</strong>
                            <span>Core OCI services expertise</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
