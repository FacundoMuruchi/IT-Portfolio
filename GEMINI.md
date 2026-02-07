# Facundo Muruchi Portfolio

This project is a personal portfolio website for Facundo Muruchi, a Machine Learning Engineer specializing in LLMs and Computer Vision. It features a modern, clean design with dark mode support, using a warm beige palette inspired by professional aesthetics.

## Project Overview

- **Purpose:** Showcase professional experience, featured projects (Machine Learning, NLP, Data Engineering), and skills.
- **Main Technologies:**
    - **Frontend:** HTML5, Tailwind CSS (via CDN), custom CSS.
    - **Interactivity:** Vanilla JavaScript for dynamic features (e.g., real-time clock).
    - **Design:** Google Fonts (Inter, Playfair Display), Material Icons.
- **Architecture:** Single-page static website.

## Key Files

- `index.html`: The main entry point containing the structure and content of the portfolio.
- `styles.css`: Custom CSS for fine-tuned styling and scroll behavior.
- `script.js`: Contains Tailwind CSS configuration and logic for the Buenos Aires real-time clock.
- `assets/`: Directory containing project images, profile pictures, and icons.

## Features

- **Responsive Design:** Optimized for mobile and desktop viewing.
- **Dark Mode Support:** Integrated via Tailwind CSS classes.
- **Real-time Clock:** Displays current time in Buenos Aires.
- **Project Sections:** Includes "Featured Project", "Latest Work", and "Skills & Certifications".

## Building and Running

Since this is a static website using CDN-based Tailwind CSS, no build step is required.

- **Development:** Open `index.html` directly in a browser or use a simple static server (e.g., Live Server extension in VS Code).
- **Deployment:** Can be hosted on any static site hosting service like GitHub Pages, Vercel, or Netlify.

## Development Conventions

- **Styling:** Primarily use Tailwind CSS utility classes. Custom styles should be added to `styles.css`.
- **Interactivity:** Keep JavaScript minimal and functional.
- **Placeholders:** Several `href="#"` links in `index.html` are marked with `TODO` comments to be replaced with actual project URLs (e.g., Notion case studies).
