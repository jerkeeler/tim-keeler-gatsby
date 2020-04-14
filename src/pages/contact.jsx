import React from 'react';

import {
  FormButton,
  FormGroup,
  Input,
  Label,
  Select,
  TextArea,
} from '../components/Inputs';
import Content from '../components/Content';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Contact = () => (
  <Layout title="Contact">
    <Content>
      <form
        className="flex flex-col"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        action="/contact/success"
      >
        <p className="hidden">
          <label>Don’t fill this out if you're human:</label>
          <input name="bot-field" />
        </p>
        <FormGroup>
          <Label name="name">Name:</Label>
          <Input name="name" placeholder="Jane Doe" type="text" required />
        </FormGroup>
        <FormGroup>
          <Label name="email">Email:</Label>
          <Input name="email" placeholder="jane@doe.com" type="email" />
        </FormGroup>
        <FormGroup>
          <Label for="subject">Subject:</Label>
          <Select
            name="subject"
            options={['General Inquiry', 'Business']}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message:</Label>
          <TextArea name="message" placeholder="Hello, Tim!" required />
        </FormGroup>
        <div data-netlify-recaptcha="true" />
        <FormGroup>
          <FormButton>Submit</FormButton>
        </FormGroup>
      </form>
    </Content>
  </Layout>
);

export default Contact;
