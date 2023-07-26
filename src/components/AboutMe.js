import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 20px;
`;

const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
`;

const AboutMe = () => {
  return (
    <AboutContainer>
      <Avatar src="path/to/your/photo.png" alt="Your Avatar" />
      <p>
        Your short bio here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        vestibulum massa nec ultricies tristique.
      </p>
    </AboutContainer>
  );
};

export default AboutMe;
