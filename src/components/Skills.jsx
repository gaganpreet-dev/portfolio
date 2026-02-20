import React from 'react';
import { Database, Layout, Terminal, Cloud as CloudIcon, Brain, GitBranch } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const categories = [
        {
            title: 'Languages',
            icon: <Terminal size={24} />,
            skills: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS']
        },
        {
            title: 'Cloud Platforms',
            icon: <CloudIcon size={24} />,
            skills: ['AWS (S3, App Runner)', 'Azure (Admin)']
        },
        {
            title: 'DevOps & Tools',
            icon: <GitBranch size={24} />,
            skills: ['Docker', 'Kubernetes', 'Terraform', 'Linux', 'Git/GitHub']
        },
        {
            title: 'Databases',
            icon: <Database size={24} />,
            skills: ['MySQL', 'PostgreSQL', 'Database Mgmt']
        },
        {
            title: 'AI & Innovation',
            icon: <Brain size={24} />,
            skills: ['Gen AI', 'Agentic AI', 'Prompt Eng.']
        },
        {
            title: 'Development',
            icon: <Layout size={24} />,
            skills: ['React', 'Vite', 'OOP', 'REST APIs']
        }
    ];

    return (
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
                <p className="section-subtitle">A comprehensive stack for cloud-native development</p>
            </div>

            <div className="skills-grid">
                {categories.map((cat, index) => (
                    <div key={index} className="skill-card glass-card">
                        <div className="skill-icon">{cat.icon}</div>
                        <h3>{cat.title}</h3>
                        <div className="skill-tags">
                            {cat.skills.map((skill, i) => (
                                <span key={i} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
