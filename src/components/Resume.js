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
      <ResumeLink href="link-to-your-resume.pdf" target="_blank">
        Download Resume
      </ResumeLink>
      <h3>Proficiencies</h3>
      <ul>
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        {/* Add more proficiencies */}
      </ul>
    </ResumeContainer>
  );
};

export default Resume;
