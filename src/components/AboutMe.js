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
      <Avatar src="src/assets/ME.jpg" alt="Chris" />
      <p>
      Passionate and driven full stack developer with a strong foundation in both front-end and back-end development. With a deep love for problem-solving and an eagerness to learn, I thrive in dynamic environments where I can bring innovative solutions to life. My journey into programming began with my fascination for technology and its potential to shape the world around us. Equipped with a solid understanding of HTML, CSS, JavaScript, and various front-end frameworks, I enjoy crafting intuitive and visually appealing user interfaces. Additionally, my experience in server-side technologies such as Node.js enables me to build scalable and efficient back-end systems.
      </p>
    </AboutContainer>
  );
};

export default AboutMe;
