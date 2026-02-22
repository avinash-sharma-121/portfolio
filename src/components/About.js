//import profileImg from "../Assets/Avinash_Kumar_Sharma.jpg";
import profileImg from "../Assets/Avinash_Kumar_Sharma_photo.jpeg";

const About = () => {
    return (
        <section id="about">
            <div className="about-intro">
                <img
                    src={profileImg}
                    alt="Avinash Kumar Sharma"
                    className="profile-image"
                />
                <div className="profile-details">

                    <h1>Avinash Kumar Sharma</h1>
                    <p>Cloud + DevOps Engineer - 4 Years</p>
                    <p><a href="https://drive.google.com/file/d/1LDdFpsqKdiUY6UM1EsUtUbm4-dRF2Hry/view?usp=sharing" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }} rel="noreferrer">Resume</a></p>
                </div>
            </div>
            <h2>About Me</h2>
            <p>AWS Certified DevOps Engineer with 4 years of experience in AWS cloud, Linux Administration, CI/CD, Docker, Kubernetes, Terraform, and automation using Python and Bash. Strong background in building secure, scalable, and automated infrastructure using IaC and DevOps best practices. Experienced in monitoring, patching, and cloud operations. Focused on improving reliability and delivering cloud-native solutions.</p>
        </section>
    )
}

export default About;