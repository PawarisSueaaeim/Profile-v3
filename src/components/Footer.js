import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center mt-5">
          <Col size={12} sm={6}>
            <img className="logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-5">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pleum-pawaris-rabeab-234292253/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://web.facebook.com/profile.php?id=100006235390790"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/pawaris_10k/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
