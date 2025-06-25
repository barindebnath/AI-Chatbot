# AI-Powered Next.js Chatbot POC

A modern Next.js 15 Proof of Concept featuring a responsive AI-powered chat widget using AWS Bedrock, reusable UI components, Tailwind CSS, and secure API integration.

## Features

- ⚡️ **Next.js 15 & React 19**
- 💬 **AI Chatbot powered by AWS Bedrock**
- 🎨 **Tailwind CSS for responsive, modern UI**
- 🧩 **Reusable components (Sidebar, ChatBot, etc.)**
- 🔒 **Secure API routes for AI integration**
- 🧪 **Jest & Testing Library for unit and accessibility tests**

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure environment variables:**  
   Copy `.env.example` to `.env` and fill in your AWS credentials and AI_BOT endpoint.

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Run tests:**
   ```bash
   npm test
   ```

## Project Structure

- `/app` — Next.js app directory (pages, components, API routes)
- `/app/components/ChatBot` — Main AI chat widget
- `/app/components/Sidebar` — Reusable sidebar component
- `/utils/config.js` — Configuration for AI_BOT endpoint

## Environment Variables

See `.env` for required variables:

- `NEXT_PUBLIC_AI_BOT` — Your AWS Bedrock Lambda endpoint
- `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` — AWS credentials

## License

MIT
