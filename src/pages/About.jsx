function About() {
  const skillAreas = [
    {
      title: "Programming Languages",
      items: ["Python", "JavaScript", "Java", "C++", "SQL"],
    },
    {
      title: "Generative AI",
      items: [
        "Large Language Models (LLMs)",
        "Retrieval-Augmented Generation (RAG)",
        "Prompt Engineering",
        "Gemini API",
        "Groq API",
        "ChromaDB",
        "Embeddings",
      ],
    },
    {
      title: "AI & Machine Learning",
      items: [
        "Machine Learning",
        "Computer Vision",
        "OpenCV",
        "YOLOv8",
        "EasyOCR",
        "FLAN-T5",
        "EfficientNet-B3",
      ],
    },
    {
      title: "Frontend Development",
      items: ["React.js", "Next.js", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      title: "Backend Development",
      items: ["FastAPI", "Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Databases",
      items: ["MongoDB", "MySQL", "ChromaDB"],
    },
    {
      title: "Programming Concepts",
      items: [
        "Data Structures",
        "Algorithms",
        "Object-Oriented Programming",
        "Problem Solving",
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "MongoDB Compass",
        "Vercel",
        "Render",
        "Railway",
      ],
    },
  ];

  return (
    <section className="page-section">
      <p className="eyebrow">About Me</p>

      <h1>My Background and Working Approach</h1>

      <p className="page-introduction">
        I am Hassan Raza, a recent BS Computer Science graduate who enjoys
        building practical machine-learning and AI systems that are clear,
        reliable, and useful in real-world settings.
      </p>

      <p>
        My work spans machine learning, deep learning, OCR, natural language
        processing, computer vision, backend development, and AI application
        integration. I am especially interested in projects that connect
        technical depth with a strong product mindset.
      </p>

      <div className="skill-category-grid">
        {skillAreas.map((area) => (
          <div className="skill-category-card" key={area.title}>
            <div className="skill-card-blob" aria-hidden="true" />
            <div className="skill-card-bg" aria-hidden="true" />
            <div className="skill-card-content">
              <div className="skill-card-header">
                <h3>{area.title}</h3>
              </div>
              <div className="skill-card-chips">
                {area.items.map((item) => (
                  <span className="about-skill-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="about-content-section">
        <h2>My Working Approach</h2>

        <p>
          I believe strong solutions come from balancing technical rigor with
          clarity and maintainability. My approach usually starts with a clear
          understanding of the problem, followed by careful baselines,
          thoughtful implementation, and honest evaluation of limitations.
        </p>

        <p>
          I try to write code that is readable, document my decisions clearly,
          and connect machine-learning components with user-focused
          experiences rather than leaving them as isolated experiments.
        </p>
      </div>

      <div className="about-content-section">
        <h2>What I’m Looking For</h2>

        <p>
          I am actively exploring junior opportunities in machine learning, AI,
          and software engineering where I can contribute to meaningful work,
          keep learning from experienced teams, and build practical products
          that make a real difference.
        </p>
      </div>
    </section>
  );
}

export default About;