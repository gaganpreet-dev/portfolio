import React from 'react';
import { Github, Server, Database, Globe, Brain } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Job Alert Agent',
            description: 'AI-powered automation agent that scrapes job boards and sends personalized email alerts using LLMs for summarization.',
            tags: ['Python', 'AI Agents', 'LLM', 'SMTP'],
            icon: <Brain size={24} />,
            github: 'https://github.com/gaganpreet-dev/Job-Alert-Agent'
        },
        {
            title: 'Serverless Web App',
            description: 'Fully serverless application using AWS App Runner & ECR. Dockerized for efficient container management.',
            tags: ['AWS', 'Docker', 'App Runner', 'ECR'],
            icon: <Server size={24} />,
            github: 'https://github.com/gaganpreet-dev/aws-serverless-app'
        },
        {
            title: 'Data Visualization Dashboard',
            description: 'Interactive dashboard for real-time KPIs and business metrics. Integrated multiple data sources (APIs, DBs).',
            tags: ['Python', 'SQL', 'API Integration'],
            icon: <Database size={24} />,
            github: 'https://github.com/gaganpreet-dev/data-visualization-dashboard'
        },
        {
            title: 'Static Website on AWS',
            description: 'Responsive personal resume website using S3 static hosting with IAM roles and bucket policies.',
            tags: ['AWS S3', 'IAM', 'HTML/CSS'],
            icon: <Globe size={24} />,
            github: 'https://github.com/gaganpreet-dev/aws-static-resume-site'
        }
    ];

    return (
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                <p className="section-subtitle">Real-world applications of cloud and software engineering</p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card glass-card">
                        <div className="project-top">
                            <div className="project-icon">{project.icon}</div>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
                            </div>
                        </div>

                        <div className="project-body">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>

                        <div className="project-footer">
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="p-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
