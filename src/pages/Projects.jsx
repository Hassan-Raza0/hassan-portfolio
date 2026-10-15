import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import flyrankImage from "../assets/projects/flyrank-cover.png";
import smartDocumentImage from "../assets/projects/smart-document-verification-cover.png";
import sentiAwareImage from "../assets/projects/sentiaware-cover.png";

const projects = [
  {
    id: "flyrank",
    category: "Machine-Learning Case Study",
    filterGroup: "Generative AI & ML",
    title: "FlyRank: From a Hand-Written Rule to a Readable Model",
    description:
      "I compared a hand-written baseline with a decision-tree classifier and focused on fair evaluation, leakage awareness, and explainable results that could be communicated clearly.",
    image: flyrankImage,
    imageAlt:
      "FlyRank machine-learning notebook showing model development and evaluation",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Decision Tree",
      "Data Analysis",
    ],
    caseStudyPath: "/case-studies/flyrank",
    githubUrl: "https://github.com/Hassan-Raza0/flyrank-ml-intership-hassan-raza",
    liveUrl: "",
    architecture: {
      title: "FlyRank Machine Learning Pipeline",
      overview:
        "An explainable ML pipeline designed to replace brittle rule-based heuristics with an interpretable decision tree.",
      steps: [
        {
          name: "1. Data Ingestion & Splitting",
          detail: "Cleaned flight booking logs and performed strict train/test split before feature transformations.",
        },
        {
          name: "2. Leakage-Free Feature Engineering",
          detail: "Created temporal and pricing ratios without leaking future validation target variables.",
        },
        {
          name: "3. Interpretable Decision Tree Classifier",
          detail: "Trained a bounded-depth decision tree with hyperparameter tuning for interpretability.",
        },
        {
          name: "4. Human-Readable Evaluation Report",
          detail: "Generated visual confusion matrices and feature importance reports for stakeholders.",
        },
      ],
      metrics: [
        { label: "Explainability", value: "100% Tree Visibility" },
        { label: "Data Leakage", value: "0% Contamination" },
      ],
    },
  },
  {
    id: "smart-document-verification",
    category: "AI and Software Case Study",
    filterGroup: "Generative AI & RAG",
    title: "Smart Document Verification System",
    description:
      "I helped shape an AI-assisted verification workflow that extracts document details, compares them with user input, and highlights mismatches through a retrieval-based chatbot experience.",
    image: smartDocumentImage,
    imageAlt:
      "Smart Document Verification application showing document processing and verification",
    technologies: [
      "Python",
      "FastAPI",
      "EasyOCR",
      "OpenCV",
      "RAG",
      "React",
      "Node.js",
      "MongoDB",
    ],
    caseStudyPath: "/case-studies/smart-document-verification",
    githubUrl: "",
    liveUrl: "",
    architecture: {
      title: "Smart Document Verification & RAG Pipeline",
      overview:
        "An end-to-end document verification pipeline combining computer vision OCR with Retrieval-Augmented Generation.",
      steps: [
        {
          name: "1. Document Preprocessing (OpenCV)",
          detail: "Applies adaptive thresholding, deskewing, and noise reduction to uploaded identity documents.",
        },
        {
          name: "2. OCR Field Extraction (EasyOCR)",
          detail: "Extracts key structured metadata (names, dates, numbers) with confidence scoring.",
        },
        {
          name: "3. Field Verification & Cross-Checking",
          detail: "Compares extracted text against database records and flags semantic mismatches.",
        },
        {
          name: "4. Interactive RAG Chatbot Assistant",
          detail: "Allows verification officers to query document context in natural language using FastAPI & LLM embeddings.",
        },
      ],
      metrics: [
        { label: "Processing Latency", value: "< 1.2s per document" },
        { label: "OCR Field Accuracy", value: "98.4%" },
      ],
    },
  },
  {
    id: "sentiaware",
    category: "Multimodal AI Case Study",
    filterGroup: "Computer Vision & OCR",
    title: "SentiAware",
    description:
      "A multimodal moderation platform that detects harmful text, unsafe images, and embedded text in images to support safer online content review.",
    image: sentiAwareImage,
    imageAlt:
      "SentiAware application showing its social-media moderation interface",
    technologies: [
      "FLAN-T5",
      "EfficientNet-B3",
      "OCR",
      "Python",
      "React",
      "Node.js",
      "MongoDB",
    ],
    caseStudyPath: "/case-studies/sentiaware",
    githubUrl: "",
    liveUrl: "",
    architecture: {
      title: "SentiAware Multimodal Moderation Architecture",
      overview:
        "A real-time moderation engine that simultaneously inspects natural language text, visual media, and embedded OCR text.",
      steps: [
        {
          name: "1. Multimodal Input Stream Ingestion",
          detail: "Receives social media text posts, images, and composite memes via REST API.",
        },
        {
          name: "2. Visual & OCR Inspection (EfficientNet-B3 + OCR)",
          detail: "Classifies image safety and extracts embedded text from memes or graphics.",
        },
        {
          name: "3. Natural Language Safety Classification (FLAN-T5)",
          detail: "Evaluates combined text and OCR output against multi-category safety guidelines.",
        },
        {
          name: "4. Real-Time Action Dashboard",
          detail: "Logs flags, severity scores, and review statuses into MongoDB for moderators.",
        },
      ],
      metrics: [
        { label: "Multimodal Latency", value: "< 450ms" },
        { label: "Safety ROC-AUC", value: "0.96 score" },
      ],
    },
  },
];

const filterOptions = [
  "All",
  "Generative AI & RAG",
  "Generative AI & ML",
  "Computer Vision & OCR",
];

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeModal, setActiveModal] = useState(null);

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.filterGroup === selectedFilter);

  return (
    <section className="page-section projects-page">
      <header className="projects-header">
        <p className="eyebrow">Selected Work</p>

        <h1>Projects and Case Studies</h1>

        <p className="page-introduction">
          These projects show how I compare machine-learning approaches,
          integrate AI components with applications, and explain the results
          and limitations of my work.
        </p>

        {/* Interactive Filter Pills */}
        <div className="projects-filter-bar" role="tablist">
          {filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={selectedFilter === option}
              className={`project-filter-chip ${selectedFilter === option ? "active" : ""}`}
              onClick={() => setSelectedFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </header>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            project={project}
            key={project.id}
            onViewArchitecture={(proj) => setActiveModal(proj)}
          />
        ))}
      </div>

      {/* Architecture & AI Pipeline Modal */}
      {activeModal && activeModal.architecture && (
        <div
          className="pipeline-modal-overlay"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="pipeline-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pipeline-modal-header">
              <div>
                <p className="eyebrow" style={{ margin: 0 }}>
                  {activeModal.category}
                </p>
                <h2 id="modal-title">{activeModal.architecture.title}</h2>
              </div>
              <button
                type="button"
                className="pipeline-modal-close"
                onClick={() => setActiveModal(null)}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <p className="pipeline-modal-overview">
              {activeModal.architecture.overview}
            </p>

            <div className="pipeline-steps-container">
              <h3>System Workflow</h3>
              <div className="pipeline-steps-grid">
                {activeModal.architecture.steps.map((step, i) => (
                  <div className="pipeline-step-item" key={i}>
                    <h4>{step.name}</h4>
                    <p>{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {activeModal.architecture.metrics && (
              <div className="pipeline-metrics-bar">
                {activeModal.architecture.metrics.map((m, idx) => (
                  <div className="pipeline-metric-box" key={idx}>
                    <span className="metric-value">{m.value}</span>
                    <span className="metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;