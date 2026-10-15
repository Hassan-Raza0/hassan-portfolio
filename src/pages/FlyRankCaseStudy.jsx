import { Link } from "react-router";

import notebookImage from "../assets/flyrank/flyrank-notebook.png";
import baselineImage from "../assets/flyrank/flyrank-baseline-rule.png";
import decisionTreeImage from "../assets/flyrank/flyrank-decision-tree.png";
import resultsImage from "../assets/flyrank/flyrank-results.png";

const technologies = [
  "Python",
  "Pandas",
  "Scikit-learn",
  "Decision Tree",
  "Data Analysis",
  "Model Evaluation",
];

function FlyRankCaseStudy() {
  const repositoryUrl = "https://github.com/Hassan-Raza0/flyrank-ml-intership-hassan-raza";

  return (
    <article className="page-section case-study-page">
      <header className="case-study-header">
        <p className="eyebrow">Featured Machine-Learning Case Study</p>

        <h1>FlyRank: From a Hand-Written Rule to a Readable Model</h1>

        <p className="case-study-summary">
          I compared a simple hand-written baseline with a decision-tree
          classifier to explore whether a readable machine-learning model could
          identify useful patterns in webpage-level data.
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

          <Link className="secondary-button" to="/projects">
            Back to Projects
          </Link>
        </div>
      </header>

      <figure className="case-hero-image">
        <img
          src={notebookImage}
          alt="Executed FlyRank machine-learning notebook"
        />

        <figcaption>
          Executed notebook showing the FlyRank machine-learning workflow.
        </figcaption>
      </figure>

      <section className="case-content-section">
        <p className="eyebrow">01 — The Problem</p>

        <h2>Could a readable model improve on a simple rule?</h2>

        <p>
          During my FlyRank internship, I explored whether a simple
          machine-learning model could identify useful patterns in webpage data
          better than a hand-written rule.
        </p>

        <p>
          My goal was not only to produce predictions. I also wanted to
          understand why the model made its decisions. A readable result was
          important because it could support clearer and more consistent
          recommendations.
        </p>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">02 — The Data and Evaluation Setup</p>

        <h2>Separating training from evaluation</h2>

        <p>
          I worked with structured page-level data from the FlyRank starter
          project. Each row represented a webpage and contained input features
          together with a target value.
        </p>

        <p>
          I divided the data into training and test sets so that the final
          comparison used examples that were not used to train the model.
        </p>

        <p>
          I also checked that the target column was not included in the input
          features. This reduced the risk of data leakage, where a model appears
          to perform well because it has accidentally received information
          connected to the answer.
        </p>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">03 — The Baseline</p>

        <h2>Starting with a hand-written rule</h2>

        <p>
          Before training a model, I created a simple hand-written rule. This
          gave me a basic and understandable approach against which the
          machine-learning model could be compared.
        </p>

        <p>
          The baseline mattered because a machine-learning model should not be
          judged only by whether it produces predictions. It should also be
          compared with a simpler approach that may already solve part of the
          problem.
        </p>

        <figure className="case-evidence">
          <img
            src={baselineImage}
            alt="FlyRank hand-written baseline rule and its output"
          />

          <figcaption>
            Hand-written baseline used before training the decision-tree model.
          </figcaption>
        </figure>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">04 — The Model</p>

        <h2>Training a readable decision tree</h2>

        <p>
          I trained a decision-tree classifier using Python and Scikit-learn.
          I selected a decision tree because its decisions can be inspected more
          easily than those of many more complex models.
        </p>

        <p>
          The tree could examine combinations of input values rather than
          relying on one manually selected condition. This made it useful for
          exploring patterns that the baseline rule might miss.
        </p>

        <figure className="case-evidence">
          <img
            src={decisionTreeImage}
            alt="Readable output from the FlyRank decision-tree model"
          />

          <figcaption>
            Decision-tree output used to inspect how the model made decisions.
          </figcaption>
        </figure>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">05 — Evaluation and Interpretation</p>

        <h2>Comparing both approaches on held-out data</h2>

        <p>
          I evaluated the hand-written rule and decision-tree model using the
          same held-out test data. This made the comparison more useful because
          both approaches were tested under the same conditions.
        </p>

        <p>
          Based on my review of the experiment, the decision tree produced more
          consistent predictions than the hand-written rule and could identify
          combinations that the simple rule did not capture.
        </p>

        <p className="case-honesty-note">
          I am not publishing exact performance figures here unless they are
          confirmed from the final executed notebook.
        </p>

        <figure className="case-evidence">
          <img
            src={resultsImage}
            alt="FlyRank baseline and decision-tree evaluation results"
          />

          <figcaption>
            Evaluation evidence comparing the baseline and decision-tree
            approaches.
          </figcaption>
        </figure>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">06 — What I Learned</p>

        <h2>A model needs a meaningful comparison</h2>

        <p>
          The main lesson was that a rule-based approach can provide a useful
          and understandable starting point. A machine-learning model becomes
          more meaningful when it is compared with that baseline instead of
          being judged alone.
        </p>

        <p>
          I also learned the importance of separating training and evaluation
          data, checking for leakage, and examining how a readable model reaches
          its decisions.
        </p>
      </section>

      <section className="case-content-section">
        <p className="eyebrow">07 — Limitations and Next Steps</p>

        <h2>What I would improve</h2>

        <p>
          This was an internship experiment rather than a production system.
          The baseline was informal, and I did not perform extensive
          hyperparameter tuning.
        </p>

        <p>My next steps would be to:</p>

        <ul className="case-list">
          <li>Formalize and document the baseline rule.</li>
          <li>Record the complete experiment settings.</li>
          <li>Compare several decision-tree depths.</li>
          <li>Test additional models on the same held-out data.</li>
          <li>Verify and publish the final evaluation metrics.</li>
          <li>Document the reasons behind the final model decision.</li>
        </ul>
      </section>

      <section className="case-study-ending">
        <div>
          <p className="eyebrow">Explore the Work</p>

          <h2>Review the notebook and other projects</h2>

          <p>
            The repository contains the code and supporting project material
            available for public review.
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

          <Link className="secondary-button" to="/projects">
            View Other Projects
          </Link>
        </div>
      </section>
    </article>
  );
}

export default FlyRankCaseStudy;