import { useState, useRef, useEffect } from "react";
import "./AIAssistant.css";

// Connect to deployed Vercel FastAPI backend (or local env variable if set)
const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://suhail-ahmed-ai-portfolio-assistant.vercel.app/chat";

// Helper to convert inline markdown (**bold**, *italic*, [link](url)) and strip leftover asterisks (*)
function renderInline(text) {
  if (!text) return null;
  const regex = /(\[.*?\]\(.*?\))|(\*\*.*?\*\*)|(\*.*?\*)/g;
  const elements = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const plain = text.slice(lastIndex, match.index).replace(/\*/g, "");
      if (plain) elements.push(plain);
    }

    const fullMatch = match[0];
    if (fullMatch.startsWith("[") && fullMatch.includes("](")) {
      const linkMatch = fullMatch.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        elements.push(
          <a
            key={match.index}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="ai-msg-link"
          >
            {linkMatch[1]}
          </a>
        );
      }
    } else if (fullMatch.startsWith("**") && fullMatch.endsWith("**")) {
      const boldText = fullMatch.slice(2, -2).replace(/\*/g, "");
      elements.push(
        <strong key={match.index} className="ai-bold">
          {boldText}
        </strong>
      );
    } else if (fullMatch.startsWith("*") && fullMatch.endsWith("*")) {
      const italicText = fullMatch.slice(1, -1).replace(/\*/g, "");
      elements.push(<em key={match.index}>{italicText}</em>);
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    const tail = text.slice(lastIndex).replace(/\*/g, "");
    if (tail) elements.push(tail);
  }

  return elements.length > 0 ? elements : text.replace(/\*/g, "");
}

// Helper to format block markdown (headings ###, bullet lists *, divider ---, paragraphs)
function renderFormattedText(text) {
  if (!text) return null;
  const lines = text.split("\n");

  return lines.map((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      return <div key={idx} className="ai-msg-spacer" />;
    }

    // Horizontal divider ---
    if (trimmed === "---" || trimmed === "***" || trimmed === "___") {
      return <hr key={idx} className="ai-msg-divider" />;
    }

    // Section headings (### or ## or #)
    if (trimmed.startsWith("#")) {
      const headingText = trimmed.replace(/^#+\s*/, "");
      return (
        <div key={idx} className="ai-msg-heading">
          {renderInline(headingText)}
        </div>
      );
    }

    // Bullet list items (* item or - item or 1. item)
    if (
      trimmed.startsWith("* ") ||
      trimmed.startsWith("- ") ||
      /^\d+\.\s/.test(trimmed)
    ) {
      const isNumbered = /^\d+\.\s/.test(trimmed);
      const bulletText = trimmed.replace(/^(\*|-|\d+\.)\s*/, "");
      const prefix = isNumbered ? trimmed.match(/^\d+\./)[0] : "•";
      return (
        <div key={idx} className="ai-msg-bullet">
          <span className="ai-bullet-icon">{prefix}</span>
          <span className="ai-bullet-text">{renderInline(bulletText)}</span>
        </div>
      );
    }

    // Normal paragraph line
    return (
      <div key={idx} className="ai-msg-line">
        {renderInline(trimmed)}
      </div>
    );
  });
}

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const initialMessage = {
    sender: "assistant",
    text: "Hi there! 👋 I am Hassan Raza's AI assistant. How can I help you today? Ask me anything about his skills, projects, or education.",
  };

  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    "What is my FYP?",
    "What are your core skills?",
    "Tell me about SentiAware",
    "What is your education?",
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  const handleReset = () => {
    setMessages([initialMessage]);
    setInput("");
  };

  const handleSend = async (questionText) => {
    const query = questionText || input.trim();
    if (!query || isLoading) return;

    const userMessage = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();
      const answerText =
        data.answer || "I couldn't find an answer in the portfolio data.";

      setMessages((prev) => [
        ...prev,
        { sender: "assistant", text: answerText },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          text: "⚠️ Unable to connect to Hassan Raza's AI Assistant backend server. Please check your connection or try again shortly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-floating-container" aria-label="Hassan Raza AI Assistant">
      {isOpen && (
        <div className="ai-chat-window" role="dialog" aria-modal="true">
          {/* Exactly Fiverr's White Minimalist Header with SA Logo Badge */}
          <div className="ai-chat-header">
            <div className="ai-header-left">
              <div className="ai-fiverr-badge" title="Hassan Raza">
                HR
              </div>
              <h3>Hassan Raza AI Assistant</h3>
            </div>

            <div className="ai-header-actions">
              <button
                className="ai-icon-btn"
                onClick={handleReset}
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                </svg>
              </button>
              <button
                className="ai-icon-btn"
                onClick={() => setIsOpen(false)}
                title="Minimize window"
                aria-label="Minimize window"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M19 13H5v-2h14v2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Center Notice Text like Fiverr */}
          <div className="ai-disclaimer">
            Ask anything about Hassan Raza&apos;s skills, projects, education or
            work experience.
          </div>

          {/* Clean Airy Messages Area with Markdown Formatting */}
          <div className="ai-chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`ai-message-wrapper ${msg.sender}`}
              >
                <div className="ai-bubble">
                  {msg.sender === "assistant"
                    ? renderFormattedText(msg.text)
                    : msg.text}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="ai-quick-questions">
                {suggestedQuestions.map((q, index) => (
                  <button
                    key={index}
                    className="ai-quick-btn"
                    onClick={() => handleSend(q)}
                    disabled={isLoading}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="ai-message-wrapper assistant">
                <div className="ai-bubble ai-typing">
                  <span className="ai-typing-dot"></span>
                  <span className="ai-typing-dot"></span>
                  <span className="ai-typing-dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Scroll arrow bottom bar */}
          <div className="ai-chat-bottom-bar">
            <button
              className="ai-scroll-down-btn"
              onClick={() =>
                messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="Scroll to bottom"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Exactly Fiverr's Input Pill Box */}
          <div className="ai-chat-input-area">
            <form
              className="ai-fiverr-input-pill"
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <input
                type="text"
                className="ai-fiverr-input"
                placeholder="Ask a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <div className="ai-input-icons">
                <button
                  type="submit"
                  className={`ai-send-plane ${input.trim() ? "active" : ""}`}
                  disabled={isLoading || !input.trim()}
                  aria-label="Send message"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Powered by Footer Note */}
          <div className="ai-fiverr-footer">
            <svg viewBox="0 0 24 24">
              <path d="M13 3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Powered by Hassan Raza AI</span>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        className="ai-toggle-button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle AI Assistant Chat"
      >
        <span className="ai-button-icon">
          <svg viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </span>
        <span>Ask Hassan Raza AI</span>
      </button>
    </div>
  );
}

export default AIAssistant;
