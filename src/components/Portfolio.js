import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.section`
  padding: 20px;
`;

const ProjectItem = styled.div`
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ProjectTitle = styled.h3`
  margin: 0;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  a {
    text-decoration: none;
    color: #007bff;
  }
`;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <ProjectItem>
        <ProjectTitle>Zest</ProjectTitle>
        <p>We were motivated to create a job tracking app because we wanted to create a tool that would help us organize our job search. Zest allows us to save jobs, contacts, and events to a calendar. This prevents us from applying to the same job twice and allows us to keep track of our progress.</p>
        <ProjectLinks>
          <a href="https://zest-app-2266f75dda29.herokuapp.com/">View App</a>
          <a href="https://github.com/pchandler858/zest">GitHub</a>
        </ProjectLinks>
      </ProjectItem>
      {/* Add more project items */}
    </PortfolioContainer>
  );
};

export default Portfolio;
