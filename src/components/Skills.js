import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import iconHtml from "../assets/img/icons8-html-5.svg";
import iconCss from "../assets/img/icons8-css3.svg";
import iconJS from "../assets/img/icons8-javascript.svg";
import iconTS from "../assets/img/icons8-typescript.svg";
import iconReact from "../assets/img/icons8-react-native.svg";
import iconPython from "../assets/img/icons8-python.svg";
import iconVueJs from "../assets/img/icons8-vue-js.svg";
import iconJest from "../assets/img/jest-snapshot-svgrepo-com.svg";
import iconNextJS from "../assets/img/icons8-next.js.svg";
import iconGit from "../assets/img/icons8-git.svg";
import iconGithub from "../assets/img/icons8-github.svg";
import iconPostman from "../assets/img/icons8-postman.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" id="skills">
              <h2>Skills</h2>
              <h4>Qualification</h4>
              <p>Self-knowledge, Problem-solving skills, Fast learner</p>
              <h4>Programming Skills</h4>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={iconHtml} alt="html" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={iconCss} alt="css" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={iconJS} alt="javascript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={iconTS} alt="typescript" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={iconPython} alt="typescript" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={iconReact} alt="typescript" />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img src={iconJest} alt="Jest" />
                  <h5>Jest</h5>
                </div>
                <div className="item">
                  <img src={iconVueJs} alt="VueJS" />
                  <h5>VueJS</h5>
                </div>
                <div className="item">
                  <img src={iconNextJS} alt="VueJS" />
                  <h5>NextJS</h5>
                </div>
                <div className="item">
                  <img src={iconGithub} alt="VueJS" />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <img src={iconGit} alt="VueJS" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={iconPostman} alt="VueJS" />
                  <h5>Postman</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="colorSharp"
      />
    </section>
  );
};
