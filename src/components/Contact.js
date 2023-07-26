import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;

  label {
    margin-bottom: 8px;
  }

  input,
  textarea {
    padding: 8px;
    margin-bottom: 16px;
  }

  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" rows="5" required />

        <button type="submit">Send Message</button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
