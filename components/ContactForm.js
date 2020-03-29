import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import { Button, Form, Icon, Input } from "antd";

class ContactForm extends Component {
  state = { email: "", name: "", subject: "", message: "", sent: false };

  constructor(props) {
    super(props);
    this.state = { email: "", name: "", subject: "", message: "" };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.id]: event.target.value });
    console.log(this.state);
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      sent: true
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let dateRN = new Date();
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };

    const { message, subject, email, name } = this.state;
    let templateParams = {
      from_name: email,
      person_name: name,
      send_date: dateRN.toLocaleDateString("de-DE", options),
      to_name: "<YOUR_EMAIL_ID>",
      subject_text: subject,
      message_html: message
    };

    emailjs.send(
      "gmail",
      "template_7CxiivqV",
      templateParams,
      "user_ZqTnsBPEbKQnhUMXcqogj"
    );

    this.resetForm();
  }

  render() {
    const { message, subject, email, name, sent } = this.state;

    return sent ? (
      <div>
        <h3>Vielen Dank für Ihre Nachricht!</h3>
        <p>Wir werden uns zeitnah bei Ihnen melden.</p>
      </div>
    ) : (
      <div>
        Ihre Email Adresse:{" "}
        <small style={{ color: "#aaaaaa" }}>(Pflichtfeld)</small>
        <br></br>
        <Input
          onChange={this.handleInput}
          id="email"
          type="email"
          placeholder="max.mustermann@web.de"
          required
          value={email}
        ></Input>
        <br></br>
        Ihre Name: <small style={{ color: "#aaaaaa" }}>(Pflichtfeld)</small>
        <br></br>
        <Input
          onChange={this.handleInput}
          id="name"
          placeholder="Max Mustermann"
          required
          value={name}
        ></Input>
        <br></br>
        Ihr Anliegen <small style={{ color: "#aaaaaa" }}>(Pflichtfeld)</small>
        <br></br>
        <Input
          onChange={this.handleInput}
          id="subject"
          placeholder="Betreff eintragen"
          required
          value={subject}
        ></Input>
        <br></br>
        Nachricht: <small style={{ color: "#aaaaaa" }}>(Pflichtfeld)</small>
        <br></br>
        <Input.TextArea
          onChange={this.handleInput}
          id="message"
          as="textarea"
          rows="8"
          required
          value={message}
        ></Input.TextArea>
        <br></br>
        <Button type="submit" onClick={this.handleSubmit}>
          Nachricht senden
        </Button>
      </div>
    );
  }
}

export default ContactForm;
