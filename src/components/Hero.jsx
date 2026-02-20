import React from 'react';
import { ArrowRight, Server, Shield, Code } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Available for new opportunities
                    </div>
                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Gaganpreet Singh</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        Junior Software Engineer & <br />
                        <span className="typewriter">Gen AI, Agentic AI, Cloud & DevOps Enthusiast</span>
                    </h2>
                    <p className="hero-description">
                        Building scalable, secure, and automated AI-driven solutions.
                        Passionate about bridging the gap between Gen AI, Agentic systems, and Cloud Operations.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Let's Connect
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="visual-orb"></div>
                    <div className="floating-icons">
                        <div className="float-icon icon-1 glass-card"><Server size={24} /></div>
                        <div className="float-icon icon-2 glass-card"><Shield size={24} /></div>
                        <div className="float-icon icon-3 glass-card"><Code size={24} /></div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll">
                <div className="scroll-mouse">
                    <div className="mouse-wheel"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
