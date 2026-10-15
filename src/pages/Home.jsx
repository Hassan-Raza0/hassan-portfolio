import { Link } from "react-router";
import profilePhoto from "../assets/profile/hassan-raza-profile.jpg";

function Home() {
  return (
    <>
      <section className="page-section hero-section home-hero">
        <div className="home-hero-content">
          <p className="eyebrow">Machine Learning, AI, and Software Engineering</p>

          <h1>Hassan Raza</h1>

          <h2>
            I build practical machine-learning and AI solutions that turn data
            into reliable, user-focused products.
          </h2>

          <p className="page-introduction">
            I am a recent Computer Science graduate with a strong interest in
            applied machine learning, AI systems, and software engineering. I
            enjoy building projects that connect models, data pipelines, and
            real user experiences.
          </p>

          <div className="button-group">
            <Link className="primary-button" to="/case-studies/flyrank">
              View Featured Case Study
            </Link>

            <Link className="secondary-button" to="/projects">
              View Projects
            </Link>
          </div>
        </div>

        <div className="profile-frame">
          <img
            className="profile-image"
            src={profilePhoto}
            alt="Professional portrait of Hassan Raza"
          />
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Featured Work</p>
          <h2>From a Hand-Written Rule to a Readable Model</h2>
        </div>

        <article className="featured-project">
          <div>
            <p className="project-label">FlyRank Machine-Learning Case Study</p>

            <h3>
              Can a readable machine-learning model improve on a simple rule
              while staying easy to explain?
            </h3>

            <p>
              I compared a hand-written baseline with a decision-tree classifier
              and focused on fair evaluation, leakage awareness, and clear
              interpretation. The project helped me strengthen both my
              technical judgment and my ability to explain model decisions.
            </p>
          </div>

          <Link className="text-link" to="/case-studies/flyrank">
            Read the full case study →
          </Link>
        </article>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Core Skills</p>
          <h2>Technologies I Use</h2>
        </div>

        <div
          className="skills-marquee-wrapper"
          aria-label="Technologies and skills marquee"
        >
          <div className="skills-marquee-track">
            {[
              "Python",
              "JavaScript",
              "Java",
              "C++",
              "SQL",
              "Large Language Models (LLMs)",
              "Retrieval-Augmented Generation (RAG)",
              "Prompt Engineering",
              "Gemini API",
              "Groq API",
              "ChromaDB",
              "Embeddings",
              "Machine Learning",
              "Computer Vision",
              "OpenCV",
              "YOLOv8",
              "EasyOCR",
              "FLAN-T5",
              "EfficientNet-B3",
            ]
              .concat([
                "Python",
                "JavaScript",
                "Java",
                "C++",
                "SQL",
                "Large Language Models (LLMs)",
                "Retrieval-Augmented Generation (RAG)",
                "Prompt Engineering",
                "Gemini API",
                "Groq API",
                "ChromaDB",
                "Embeddings",
                "Machine Learning",
                "Computer Vision",
                "OpenCV",
                "YOLOv8",
                "EasyOCR",
                "FLAN-T5",
                "EfficientNet-B3",
              ])
              .map((skill, index) => (
                <span className="skill-chip" key={`row1-${index}`}>
                  {skill}
                </span>
              ))}
          </div>

          <div className="skills-marquee-track fast">
            {[
              "React.js",
              "Next.js",
              "HTML5",
              "CSS3",
              "Bootstrap",
              "FastAPI",
              "Node.js",
              "Express.js",
              "REST APIs",
              "MongoDB",
              "MySQL",
              "Data Structures",
              "Algorithms",
              "Object-Oriented Programming",
              "Problem Solving",
              "Git",
              "GitHub",
              "Postman",
              "VS Code",
              "MongoDB Compass",
              "Vercel",
              "Render",
              "Railway",
            ]
              .concat([
                "React.js",
                "Next.js",
                "HTML5",
                "CSS3",
                "Bootstrap",
                "FastAPI",
                "Node.js",
                "Express.js",
                "REST APIs",
                "MongoDB",
                "MySQL",
                "Data Structures",
                "Algorithms",
                "Object-Oriented Programming",
                "Problem Solving",
                "Git",
                "GitHub",
                "Postman",
                "VS Code",
                "MongoDB Compass",
                "Vercel",
                "Render",
                "Railway",
              ])
              .map((skill, index) => (
                <span className="skill-chip" key={`row2-${index}`}>
                  {skill}
                </span>
              ))}
          </div>
        </div>

        <Link className="text-link" to="/about">
          Learn more about my background →
        </Link>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Updates</p>
          <h2>Notes and capstone work</h2>
        </div>

        <p>
          This space is for short posts and the FlyRank capstone. The official
          completion badge will be added here after that capstone is approved.
        </p>
      </section>

      <section className="home-section contact-prompt">
        <div>
          <p className="eyebrow">Open to Opportunities</p>

          <h2>Interested in discussing my work?</h2>

          <p>
            I am currently exploring junior roles in machine learning, AI, and
            software engineering where I can contribute to thoughtful,
            impact-driven products.
          </p>
        </div>

        <Link className="primary-button" to="/contact">
          Contact Me
        </Link>
      </section>
    </>
  );
}

export default Home;