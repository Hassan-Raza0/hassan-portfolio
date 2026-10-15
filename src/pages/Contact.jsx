import { useState } from "react";
import { Link } from "react-router-dom";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/hassansoomroraza@gmail.com";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("error");
      setNotice("Add your name, email, and a message before sending.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setStatus("error");
      setNotice("That email address does not look complete.");
      return;
    }

    setStatus("sending");
    setNotice("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          _subject: "Portfolio message for Hassan Raza",
          _template: "table",
          _captcha: "false",
          _honey: "",
        }),
      });
      const data = await response.json().catch(() => ({}));
      const accepted = response.ok && String(data.success) !== "false";

      if (!accepted) {
        const apiMessage = data.message || "";
        if (apiMessage.toLowerCase().includes("activation")) {
          throw new Error(
            "FormSubmit sent a one-time activation email to hassansoomroraza@gmail.com. Open that email and click Activate Form. After that, this form delivers to the inbox.",
          );
        }
        throw new Error(
          "The message did not send. Try again, or email hassansoomroraza@gmail.com.",
        );
      }

      setName("");
      setEmail("");
      setMessage("");
      setStatus("sent");
      setNotice("Thanks. The message is on its way, and I will be in touch.");
    } catch (error) {
      setStatus("error");
      setNotice(
        error instanceof Error && error.message
          ? error.message
          : "The message did not send. Try again, or email hassansoomroraza@gmail.com.",
      );
    }
  }

  return (
    <section className="page-section">
      <p className="eyebrow">Contact</p>

      <h1>Let’s Discuss an Opportunity</h1>

      <p className="page-introduction">
        I am currently exploring junior opportunities in machine learning, AI,
        and software engineering. Send a message here and it comes to my inbox.
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="6"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>

        <button className="primary-button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {notice ? (
          <p className={status === "sent" ? "form-notice success" : "form-notice error"} role="status">
            {notice}
          </p>
        ) : null}
      </form>

      <div className="contact-list">
        <a href="mailto:hassansoomroraza@gmail.com">Email</a>

        <a
          href="https://github.com/Hassan-Raza0"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/hassan-raza-soomro-a11496192/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <Link to="/cv">CV</Link>

        <a href="mailto:hassansoomroraza@gmail.com?subject=Booking%20a%20conversation%20with%20Hassan%20Raza">
          Book a conversation
        </a>
      </div>
    </section>
  );
}

export default Contact;
