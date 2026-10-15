import { Link } from "react-router-dom";

const technologies = [
  "Python",
  "FastAPI",
  "EasyOCR",
  "OpenCV",
  "RAG",
  "LLM Integration",
  "React",
  "Node.js",
  "MongoDB",
];

function SmartDocumentCaseStudy() {
  const repositoryUrl = "";
  const liveDemoUrl = "";

  return (
    <article className="page-section case-study-page">
      <header className="case-study-header">
        <p className="eyebrow">AI and Software Case Study</p>

        <h1>Smart Document Verification System</h1>

        <p className="case-study-summary">
          An AI-assisted application that extracts information from uploaded documents using OCR, compares it with user-entered data, reports possible mismatches, and provides intelligent form guidance through a RAG-powered chatbot.
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

      <section className="case-content-section">
        <p className="eyebrow">01 — The Problem</p>

        <h2>Automating document verification and reducing data entry errors</h2>

        <p>
          Document verification is a common but error-prone task. Users must manually extract information from documents and compare it against form fields, which leads to mismatches and incomplete submissions.
        </p>

        <p>
          The goal was to build a system that could automatically extract text from uploaded documents using OCR, intelligently match it to user-entered data, and guide users through the process with an AI-powered chatbot that understands the document context.
        </p>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">02 — My Contribution</p>

        <h2>Integrating OCR, matching logic, and RAG-based guidance</h2>

        <p>
          I designed and implemented the core verification pipeline:
        </p>

        <ul style={{ marginTop: "16px", marginLeft: "20px", color: "#4b5563", lineHeight: "1.8" }}>
          <li><strong>OCR Processing:</strong> Used EasyOCR with OpenCV to extract text from uploaded document images reliably</li>
          <li><strong>Data Matching:</strong> Built intelligent matching logic that compares extracted fields with user-entered data and flags mismatches</li>
          <li><strong>RAG Chatbot:</strong> Implemented a Retrieval-Augmented Generation chatbot that provides form guidance by referencing the uploaded document</li>
          <li><strong>Backend API:</strong> Developed FastAPI endpoints to handle document uploads, OCR processing, and verification</li>
          <li><strong>Frontend Integration:</strong> Connected the React frontend to the backend, displaying verification results and mismatch alerts</li>
        </ul>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">03 — Technical Approach</p>

        <h2>Document processing and intelligent comparison</h2>

        <p>
          The application follows a structured pipeline:
        </p>

        <ol style={{ marginTop: "16px", marginLeft: "20px", color: "#4b5563", lineHeight: "1.8" }}>
          <li><strong>Document Upload:</strong> User uploads a document image (PDF, JPG, PNG)</li>
          <li><strong>OCR Extraction:</strong> EasyOCR extracts text and structured data from the image</li>
          <li><strong>Form Comparison:</strong> System compares extracted data against user-entered fields</li>
          <li><strong>Mismatch Detection:</strong> Flags discrepancies with confidence scores</li>
          <li><strong>RAG Assistance:</strong> Chatbot provides context-aware help using the extracted document text</li>
          <li><strong>Verification Result:</strong> User receives a clear summary of verified and mismatched fields</li>
        </ol>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">04 — Outcome and Impact</p>

        <h2>Reducing manual effort and improving accuracy</h2>

        <p>
          The Smart Document Verification System demonstrates how combining OCR, intelligent matching, and LLM-powered guidance can streamline document processing workflows.
        </p>

        <p>
          Key achievements:
        </p>

        <ul style={{ marginTop: "16px", marginLeft: "20px", color: "#4b5563", lineHeight: "1.8" }}>
          <li>Automated text extraction from multiple document formats</li>
          <li>Intelligent field matching reduces manual verification time</li>
          <li>RAG-powered chatbot provides context-aware user guidance</li>
          <li>Fullstack integration connecting backend AI with React frontend</li>
        </ul>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">05 — Skills Applied</p>

        <h2>Machine learning, OCR, and full-stack development</h2>

        <p>
          This project combined multiple technical domains:
        </p>

        <ul style={{ marginTop: "16px", marginLeft: "20px", color: "#4b5563", lineHeight: "1.8" }}>
          <li><strong>Computer Vision:</strong> OCR and document image processing</li>
          <li><strong>NLP and LLM Integration:</strong> RAG implementation for intelligent chatbot responses</li>
          <li><strong>Backend Development:</strong> FastAPI, data validation, and API design</li>
          <li><strong>Frontend Development:</strong> React components for document upload and results display</li>
          <li><strong>Database Design:</strong> MongoDB for storing documents and verification history</li>
        </ul>
      </section>
    </article>
  );
}

export default SmartDocumentCaseStudy;