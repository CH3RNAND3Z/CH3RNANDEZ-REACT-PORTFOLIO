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
        <ProjectTitle>Project 1</ProjectTitle>
        <p>Project description here.</p>
        <ProjectLinks>
          <a href="link-to-deployed-app">View App</a>
          <a href="link-to-github-repo">GitHub</a>
        </ProjectLinks>
      </ProjectItem>
      {/* Add more project items */}
    </PortfolioContainer>
  );
};

export default Portfolio;
