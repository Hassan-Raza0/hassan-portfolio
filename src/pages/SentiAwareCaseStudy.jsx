import { Link } from "react-router";

import interfaceImage from "../assets/sentiaware/sentiaware-interface.png";
import textModerationImage from "../assets/sentiaware/sentiaware-text-moderation.png";
import imageModerationImage from "../assets/sentiaware/sentiaware-image-moderation.png";
import ocrModerationImage from "../assets/sentiaware/sentiaware-ocr-moderation.png";

const technologies = [
  "Python",
  "FLAN-T5",
  "EfficientNet-B3",
  "OCR",
  "Natural Language Processing",
  "Computer Vision",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
];

const moderationStages = [
  {
    number: "1",
    title: "Content Submission",
    description:
      "A user writes a post or uploads an image through the social-media application.",
  },
  {
    number: "2",
    title: "Content Analysis",
    description:
      "The application sends the relevant content to the text, image, or OCR moderation service.",
  },
  {
    number: "3",
    title: "Moderation Decision",
    description:
      "The AI pipeline analyzes the content and returns a moderation or safer-content result.",
  },
  {
    number: "4",
    title: "Application Response",
    description:
      "The application displays the result and handles the content according to the moderation outcome.",
  },
];

function SentiAwareCaseStudy() {
  // Add only links that you have checked in an incognito browser window.
  const repositoryUrl = "";
  const liveDemoUrl = "";

  return (
    <article className="page-section case-study-page">
      <header className="case-study-header">
        <p className="eyebrow">Multimodal AI Case Study</p>

        <h1>SentiAware: A Multimodal Content-Moderation Platform</h1>

        <p className="case-study-summary">
          SentiAware is a social-media application that combines text
          moderation, harmful-image classification, and OCR-based analysis to
          identify potentially harmful content before publication.
        </p>

        <ul className="case-technology-list" aria-label="Technologies used">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="button-group">
          {repositoryUrl && (
            <a
              className="primary-button"
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub Repository
            </a>
          )}

          {liveDemoUrl && (
            <a
              className="secondary-button"
              href={liveDemoUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Live Application
            </a>
          )}

          <Link className="secondary-button" to="/projects">
            Back to Projects
          </Link>
        </div>
      </header>

      <figure className="case-hero-image">
        <img
          src={interfaceImage}
          alt="SentiAware social-media application interface"
        />

        <figcaption>
          The SentiAware application interface where users create and review
          social-media content.
        </figcaption>
      </figure>

      <section className="case-content-section">
        <p className="eyebrow">01 — The Problem</p>

        <h2>Moderating several forms of harmful content</h2>

        <p>
          Social-media platforms may receive toxic written posts, harmful
          images, and offensive text embedded inside uploaded images.
        </p>

        <p>
          Reviewing every piece of content manually can be difficult and
          time-consuming. A system that checks only written text may also miss
          harmful visual content or words contained inside an image.
        </p>

        <p>
          Our goal was to build a multimodal moderation workflow that could
          analyze these different content types before they were published.
        </p>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">02 — My Contribution</p>

        <h2>Preparing models and connecting the moderation pipeline</h2>

        <p>
          SentiAware was a team final-year project. My contribution focused
          mainly on the machine-learning and AI components.
        </p>

        <p>
          I worked on preparing and combining datasets, fine-tuning the text and
          image models, and helping integrate the models into the application’s
          moderation pipeline.
        </p>

        <p>
          The wider application used the MERN stack, while Python services
          handled the AI models and moderation processing.
        </p>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">03 — Moderation Workflow</p>

        <h2>One application, multiple moderation stages</h2>

        <div className="moderation-grid">
          {moderationStages.map((stage) => (
            <article className="moderation-card" key={stage.number}>
              <span>{stage.number}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">04 — Text Moderation</p>

        <h2>Rewriting toxic text with FLAN-T5</h2>

        <p>
          We used FLAN-T5 for the text-moderation component. The model received
          potentially toxic text and generated a safer version that attempted
          to preserve the original meaning without the harmful wording.
        </p>

        <p>
          I worked on preparing the text data and fine-tuning the model for the
          moderation task.
        </p>

        <figure className="case-evidence">
          <img
            src={textModerationImage}
            alt="SentiAware text moderation showing toxic and safer rewritten text"
          />

          <figcaption>
            Text-moderation workflow showing how unsafe wording is rewritten
            into a safer form.
          </figcaption>
        </figure>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">05 — Image Moderation</p>

        <h2>Classifying potentially harmful images</h2>

        <p>
          We used EfficientNet-B3 for image classification. The model analyzed
          uploaded images and assigned them to the moderation categories used
          by the project.
        </p>

        <p>
          I worked on preparing the image data and fine-tuning the model for
          this classification task.
        </p>

        <figure className="case-evidence">
          <img
            src={imageModerationImage}
            alt="SentiAware harmful-image classification result"
          />

          <figcaption>
            Image-moderation output showing how an uploaded image is analyzed
            before publication.
          </figcaption>
        </figure>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">06 — OCR Moderation</p>

        <h2>Checking text embedded inside images</h2>

        <p>
          Image classification alone may not identify offensive words written
          inside an otherwise ordinary image.
        </p>

        <p>
          OCR was used to extract text embedded inside uploaded images. The
          extracted text could then be passed through the text-moderation
          workflow.
        </p>

        <figure className="case-evidence">
          <img
            src={ocrModerationImage}
            alt="SentiAware OCR moderation detecting text embedded inside an image"
          />

          <figcaption>
            OCR-based moderation used to detect and process text contained
            inside an uploaded image.
          </figcaption>
        </figure>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">07 — Application Integration</p>

        <h2>Connecting AI models with a full-stack application</h2>

        <p>
          The main application used React, Node.js, Express.js, and MongoDB.
          Python services handled the text, image, and OCR moderation models.
        </p>

        <p>
          I helped integrate the moderation services into the application
          workflow so submitted content could be checked and the result could
          be returned to the user interface.
        </p>

        <p>
          This required the AI services and application backend to exchange
          content and moderation results through clear API requests and
          responses.
        </p>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">08 — Challenges and Decisions</p>

        <h2>Different content types fail in different ways</h2>

        <p>
          Text, images, and OCR each introduced different difficulties. Toxic
          wording can depend on context, image classification can be uncertain,
          and OCR quality can decrease when text is small, unclear, rotated, or
          placed over a complex background.
        </p>

        <p>
          The moderation system therefore needed to treat the AI result as a
          prediction rather than a guaranteed decision.
        </p>

        <ul className="case-list">
          <li>Prepared and combined data from different sources.</li>
          <li>Tested text and image models separately.</li>
          <li>Connected separate AI models to one moderation workflow.</li>
          <li>Handled text embedded inside images using OCR.</li>
          <li>Reviewed failures instead of treating every output as correct.</li>
        </ul>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">09 — Outcome</p>

        <h2>An end-to-end multimodal moderation workflow</h2>

        <p>
          The project produced a working workflow for processing written posts,
          uploaded images, and text embedded inside images.
        </p>

        <p>
          It demonstrated how separate natural-language-processing,
          computer-vision, and OCR components could be integrated with a
          full-stack social-media application.
        </p>

        <p className="case-honesty-note">
          I am not publishing exact model-performance figures unless they are
          confirmed from the final notebooks or evaluation report.
        </p>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">10 — What I Learned</p>

        <h2>Integration matters as much as the individual models</h2>

        <p>
          This project taught me that a model is only one part of a complete AI
          system. Data preparation, API integration, error handling, user
          feedback, and uncertain predictions also affect whether the system is
          useful.
        </p>

        <p>
          I also learned how different AI components can work together to
          address one broader problem rather than functioning as isolated model
          demonstrations.
        </p>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">11 — Limitations and Next Steps</p>

        <h2>What I would improve next</h2>

        <p>
          The moderation models can make mistakes when content differs from the
          training data, language is unusual, images are unclear, or context is
          ambiguous.
        </p>

        <p>My next improvements would include:</p>

        <ul className="case-list">
          <li>Verify and document final model metrics.</li>
          <li>Test the models on more diverse text and image data.</li>
          <li>Improve OCR handling for unclear and rotated text.</li>
          <li>Add confidence thresholds for uncertain predictions.</li>
          <li>Add a manual-review option for uncertain content.</li>
          <li>Add production monitoring and model-error logging.</li>
          <li>Improve retry and timeout handling between services.</li>
        </ul>
      </section>

      <section className="case-study-ending">
        <div>
          <p className="eyebrow">Explore the Project</p>

          <h2>Review the application and source code</h2>

          <p>
            Project links are displayed only when they are public, working, and
            safe for external review.
          </p>
        </div>

        <div className="button-group">
          {repositoryUrl && (
            <a
              className="primary-button"
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub Repository
            </a>
          )}

          {liveDemoUrl && (
            <a
              className="secondary-button"
              href={liveDemoUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Live Application
            </a>
          )}

          <Link className="secondary-button" to="/projects">
            View Other Projects
          </Link>
        </div>
      </section>
    </article>
  );
}

export default SentiAwareCaseStudy;