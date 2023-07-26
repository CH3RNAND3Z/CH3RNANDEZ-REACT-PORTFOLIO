import React from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.section`
  padding: 20px;
`;

const ResumeLink = styled.a`
  display: block;
  margin-bottom: 10px;
`;

const Resume = () => {
  return (
    <ResumeContainer>
      <ResumeLink href="file:///C:/Users/chris/OneDrive/Documents/Christopher%20Hernandez%20Resume%202023.pdf" target="_blank">
        Download Resume
      </ResumeLink>
      <h3>Proficiencies</h3>
      <ul>
        <li>MERN Stack</li>
        <li>Front-end & Back-end Development</li>
        {/* Add more proficiencies */}
      </ul>
    </ResumeContainer>
  );
};

export default Resume;
