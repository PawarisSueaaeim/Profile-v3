import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ imgUrl,company, position, description }) => {
  return (
    <React.Fragment>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="imgUrl" style={{ objectFit: 'cover' }}/>
          <div className="proj-txtx">
            <h4>{company}</h4>
            <span>{position}</span>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};
