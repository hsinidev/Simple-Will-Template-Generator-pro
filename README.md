# 📜 AI-Powered Simple Will Generator

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-18.x-61dafb.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.x-3178c6.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

> **Create a simple, formatted Last Will and Testament instantly using AI.**

## 🚀 Live Demo

Check out the live application here:  
👉 **[doodax.com](https://doodax.com/tools/powered-will-generator/index.html)** (Opens in new tab)

---

## 📖 Overview

The **Simple Will Template Generator** is a modern, single-page web application designed to democratize estate planning. It provides users with a free, private, and accessible way to draft a basic Last Will and Testament. 

Powered by **Google's Gemini API**, the application not only formats the legal document based on user inputs but also offers an AI-driven review feature to check for clarity, ambiguity, and completeness.

**Disclaimer:** *This tool is for educational and informational purposes only. It does not provide legal advice and does not substitute for a qualified attorney.*

## ✨ Features

- **Instant Document Generation:** Real-time formatting of legal text based on form inputs.
- **AI Review:** Uses Google Gemini 2.5 Flash to analyze the generated will for potential issues.
- **Privacy First:** Data is processed locally or transiently via the API; no personal data is stored on servers.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop using Tailwind CSS.
- **Immersive UI:** Features a stunning animated galaxy background and glassmorphism effects.
- **SEO Optimized:** Built with JSON-LD schema, meta tags, and sitemaps for maximum visibility.

## 📂 Project Structure

```bash
.
├── index.html              # Entry point with SEO meta tags & global styles
├── index.tsx               # React application entry
├── App.tsx                 # Main application layout and routing logic
├── types.ts                # TypeScript definitions for Will Data
├── robots.txt              # SEO crawler directives
├── sitemap.xml             # Sitemap for search engines
├── favicon.svg             # Project branding
├── components/
│   ├── Layout.tsx          # Main layout wrapper (Navbar, Footer)
│   ├── LegalModals.tsx     # Popups for Privacy, Terms, Guide, etc.
│   └── WillGenerator.tsx   # Core logic: Form input & AI interaction
├── lib/
│   └── willTemplate.ts     # String template literal for the Will document
└── utils/
    └── SeoArticle.tsx      # SEO content component with expand/collapse logic
```

## 🛠️ Technology Stack

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS
- **AI Integration:** Google GenAI SDK (Gemini 2.5 Flash)
- **Build/Run:** Standard ES Modules via browser (No build step required for this specific demo setup)

## 👤 Author

**HSINI MOHAMED**

- 🌐 Website: [doodax.com](https://doodax.com)
- 🐙 GitHub: [@hsinidev](https://github.com/hsinidev)
- 📧 Email: hsini.web@gmail.com

---

*Powered by HSINI MOHAMED. All Rights Reserved.*
