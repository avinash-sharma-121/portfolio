const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project">
                <h3>Cloud Infrastructure Management</h3>
                <p>Managed <b>AWS infrastructure with Terraform</b>, ensuring scalable and secure environments for multiple applications.</p>
            </div>
            <div className="project">
                <h3>Managing Microservices</h3>
                <p>We have successfully managed microservices using <b>Kubernetes (EKS)</b>, ensuring high availability and efficient resource utilization.</p>
            </div>
            <div className="project">
                <h3>CI/CD Pipeline Automation</h3>
                <p>Managed multiple docker and k8s environments with <b>CI/CD pipelines</b> with SonarQube and Trivy. vulnerability scanning reports</p>
                <p>Designed and implemented automated CI/CD pipelines using <b>Jenkins and GitLab CI</b>, reducing deployment time by 30%.</p>
            </div>
            <div className="project">
                <h3>Cloud Infra - Vulnerability Management</h3>
                <p>Worked with multiple tools like Wiz, Brinqa for <b>vulnerability management</b>.</p>
                <p>Implemented <b>vulnerability management</b> for cloud infrastructure, reducing security risks by 25%.</p>
            </div>
            <div className="project">
                <h3>Cloud Infra - Cost Optimization</h3>
                <p>We have implemented Python based ETL pipelines with CI pipelines to manage <b>centralized cost optimization reports</b> for 100+ AWS applications.</p>
                <p>Implemented <b>cost optimization strategies</b> for cloud infrastructure, reducing operational expenses by 25%.</p>
            </div>
            <div className="project">
                <h3>Personal Portfolio Website</h3>
                <p>Tools: React, CSS, and for deployment: github pages hosting with custom domain</p>
                <p>Implemented continuous integration and deployment (CI/CD) for the portfolio website using github actions.</p>
                <p>Developed a responsive personal portfolio website using React and CSS to showcase my skills and projects.</p>
            </div>


        </section>
    )
}

export default Projects;