import { Link } from "react-router-dom";

function Cv() {
  return (
    <section className="page-section">
      <p className="eyebrow">CV</p>

      <h1>Hassan Raza</h1>

      <p className="page-introduction">
        I build practical machine-learning and AI solutions that turn data
        into reliable, user-focused products. I am a recent BS Computer Science
        graduate exploring junior roles in machine learning, AI, and software
        engineering.
      </p>

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
        <a href="mailto:hassansoomroraza@gmail.com?subject=Booking%20a%20conversation%20with%20Hassan%20Raza">
          Book a conversation
        </a>
      </div>

      <div className="about-content-section">
        <h2>Selected work</h2>
        <p>
          FlyRank. I compared a hand-written baseline with a decision-tree
          classifier, with the evaluation kept on the same split and the same
          metric.
        </p>
        <p>
          Smart Document Verification. An AI-assisted workflow that extracts
          document details, compares them with user input, and highlights
          mismatches.
        </p>
        <p>
          SentiAware. A moderation project that reviews text, images, and text
          embedded in images.
        </p>
        <Link className="text-link" to="/projects">
          Read the project pages →
        </Link>
      </div>

      <div className="about-content-section">
        <h2>Skills</h2>
        <p>
          Python, JavaScript, React, FastAPI, Node.js, SQL, MongoDB, machine
          learning, computer vision, OCR, and retrieval-augmented generation.
        </p>
      </div>
    </section>
  );
}

export default Cv;
