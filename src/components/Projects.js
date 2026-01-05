const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="project">
                <h3>Cloud Infrastructure Management</h3>
                <p>
                    Designed, deployed, and managed <b>AWS cloud infrastructure using Terraform</b>,
                    ensuring scalable, secure, and highly available environments across multiple applications.
                </p>
            </div>

            <div className="project">
                <h3>Microservices Management</h3>
                <p>
                    Successfully managed and operated <b>containerized microservices on Kubernetes (EKS)</b>,
                    achieving high availability, fault tolerance, and optimized resource utilization.
                </p>
            </div>

            <div className="project">
                <h3>CI/CD Pipeline Automation</h3>
                <p>
                    Built and maintained robust <b>CI/CD pipelines for Docker and Kubernetes environments</b>,
                    integrating <b>SonarQube and Trivy</b> for continuous code quality checks and vulnerability scanning.
                </p>
                <p>
                    Designed and implemented automated deployment pipelines using <b>Jenkins and GitLab CI</b>,
                    reducing deployment time by <b>30%</b> and improving release reliability.
                </p>
            </div>

            <div className="project">
                <h3>Cloud Infrastructure – Vulnerability Management</h3>
                <p>
                    Worked with enterprise security tools such as <b>Wiz and Brinqa</b> to identify,
                    assess, and remediate cloud infrastructure vulnerabilities.
                </p>
                <p>
                    Implemented proactive <b>vulnerability management strategies</b>,
                    reducing overall security risks by <b>25%</b>.
                </p>
            </div>

            <div className="project">
                <h3>Cloud Infrastructure – Cost Optimization</h3>
                <p>
                    Developed <b>Python-based ETL pipelines</b> integrated with CI workflows to generate
                    <b>centralized cloud cost optimization reports</b> for 100+ AWS applications.
                </p>
                <p>
                    Implemented effective <b>cost optimization strategies</b>,
                    resulting in a <b>25% reduction in cloud operational expenses</b>.
                </p>
            </div>

            <div className="project">
                <h3>Personal Portfolio Website</h3>
                <p>
                    Built a responsive personal portfolio website using <b>React and CSS</b>,
                    and deployed it on <b>GitHub Pages</b> with a custom domain.
                </p>
                <p>
                    Implemented <b>CI/CD using GitHub Actions</b> to automate build and deployment workflows.
                </p>
                <p>
                    Designed the website to effectively showcase professional skills, projects, and DevOps expertise.
                </p>
            </div>

        </section>
    )
}

export default Projects;
