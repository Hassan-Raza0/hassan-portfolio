# Hassan Raza AI Portfolio Assistant

> An AI-powered conversational assistant integrated into my personal portfolio, allowing visitors to explore my skills, projects, education, and experience through natural-language conversations.

## Project Overview

The **Hassan Raza AI Portfolio Assistant** is an AI-powered conversational assistant integrated into my personal portfolio.

Instead of searching through a traditional static portfolio, visitors can ask natural-language questions about my **technical skills, education, projects, and experience** and receive relevant answers based on my portfolio knowledge.

## What It Does

The assistant answers portfolio-related questions using information from my portfolio knowledge source.

### Example Questions

- What are Hassan Raza's strongest technical skills?
- What AI projects has Hassan Raza worked on?
- Tell me about the SentiAware project.
- What technologies has Hassan Raza used?
- What is Hassan Raza's educational background?

## Who It Is For

The assistant is mainly designed for:

- **Recruiters**
- **Hiring Managers**
- **Employers**
- **Developers**
- **Portfolio Visitors**

It provides a quick and interactive way to explore my professional background through conversation.

## Features

- AI-powered conversational interface
- Portfolio knowledge grounding
- Natural-language questions and answers
- Markdown-formatted responses
- Copy response functionality
- Interactive portfolio experience
- Guardrails to reduce unsupported answers

## Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Python
- FastAPI
- Uvicorn

### AI

- Google Gemini API

### Other Tools

- Marked.js
- DOMPurify
- Vercel

## Architecture

```text
                         ┌──────────────┐
                         │     User     │
                         └──────┬───────┘
                                │
                                ▼
                    ┌─────────────────────┐
                    │  Portfolio Frontend │
                    │    HTML / CSS / JS  │
                    └──────────┬──────────┘
                               │
                         HTTP Request
                               │
                               ▼
                    ┌─────────────────────┐
                    │   FastAPI Backend   │
                    │   Python / Uvicorn  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Portfolio Knowledge │
                    │       Source        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     Gemini API      │
                    │    AI Processing    │
                    └──────────┬──────────┘
                               │
                          AI Response
                               │
                               ▼
                    ┌─────────────────────┐
                    │  Portfolio Frontend │
                    └──────────┬──────────┘
                               │
                               ▼
                         ┌──────────────┐
                         │     User     │
                         └──────────────┘
```

## How It Works

1. The visitor enters a question in the portfolio assistant.
2. The frontend sends the question to the backend.
3. The FastAPI backend receives the request.
4. The backend prepares the relevant portfolio information and system instructions.
5. The request is sent to the Gemini API.
6. Gemini generates a response using the provided portfolio context.
7. The backend returns the response to the frontend.
8. The frontend displays the answer to the visitor.

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Hassan-Raza0/hassan-portfolio.git
cd hassan-portfolio
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Configure the Backend

Configure the required backend environment variables and Gemini API key according to the project's backend configuration.

**Do not commit API keys, credentials, or other secrets to GitHub.**

### 4. Start the Application

Use the project's configured development command:

```bash
npm run dev
```

Open the local URL shown in the terminal.

> **Note:** The AI Assistant backend must also be running and accessible for the chat functionality to work correctly.

## Evaluation Results

The assistant was tested using the **V2 evaluation process**.

### V2 Result

**Add the actual V2 evaluation result here.**

### Observations

- The assistant can answer questions about documented portfolio information.
- Responses are grounded in the available portfolio knowledge.
- The conversational interface provides a faster way to explore the portfolio.
- The assistant can explain projects, technical skills, education, and other documented information.

## Limitations

- The assistant depends on the information available in its knowledge source.
- Missing or outdated information may result in incomplete answers.
- Ambiguous questions may not always produce the expected response.
- The assistant should not be treated as an independent source of facts.
- The AI service must be available for the assistant to generate responses.

## Design Decision

I chose a **simple context-based approach** instead of using a more complex vector database because the portfolio knowledge base is relatively small.

This approach keeps the system:

- Simple to understand
- Easy to maintain
- Lightweight
- Suitable for a relatively small knowledge base

At the current scale, this provides enough context for the assistant to answer questions about my portfolio without adding unnecessary infrastructure.

## Demo Video

A **3–5 minute live demonstration** of the AI Portfolio Assistant is available here:

🎥 [Watch the Hassan Raza AI Portfolio Assistant Demo](https://www.youtube.com/watch?v=Iy4drrchBX)

The demo demonstrates:

- The assistant running live
- Example questions
- The end-to-end request and response flow
- One key design decision
- One limitation

## Live Portfolio

**Portfolio:**
https://github.com/Hassan-Raza0/hassan-portfolio

## Author

**Hassan Raza**

Computer Science Graduate | AI & Software Development

**GitHub:**
https://github.com/Hassan-Raza0

**LinkedIn:**
https://www.linkedin.com/in/hassan-raza-soomro-a11496192/
