import "animate.css";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects1 = [
    {
      title: "Water Level Prediciton",
      description:
        "A Multilevel Perceptron (MLP) based water level prediction model by processing and utilizing environmental data, and deploying the model using Streamlit.",
      imgUrl: projImg1,
      retUrl: "https://github.com/Manan2401/Water_management_system",
    },
    {
      title: "VidLock",
      description:
        "Secure and fast video file encryption and decryption using AES-256 ensuring efficiency and optimal data protection.",
      imgUrl: projImg2,
    },
    {
      title: "Recon-All",
      description:
        "A Python script with multiple tools for scraping, OSINT, and more, providing a command-line interface for easy interaction.",
      imgUrl: projImg3,
      retUrl: "https://github.com/Manan2401/Recon_All",
    },
  ];

  const projects2 = [
    {
      title: "Service Cloud Specialist",
      description:
        "Designed and updated an agent console, implemented case management features, and displayed service level actions. Furhtermore, configured seamless case routing from email to the agent, created a knowledge-sharing platform, and established automation systems for both cases and agents.",
      imgUrl: projImg4,
    },
    {
      title: "Admin Super Set",
      description:
        "Identified data quality, UI tools, and dashboard configurations. Also demonstrated my knowledge of reports, dashboards, etc and implemented data security and user access best practices.",
      imgUrl: projImg5,
    },
    {
      title: "SalesforceSecurity Specialist Superbadge",
      description:
        "Employed user authentication best practices, like Multi-factor authentication, Secure password policies, User access control and used diverse methods and tools for monitoring a Salesforce org effectively, ensuring comprehensive oversight.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">College</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Internship</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
