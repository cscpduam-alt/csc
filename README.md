# e-Portal · Dept. of Computer Science · PDUAM Amjonga

Welcome to the official e-Portal of the **Department of Computer Science, Pandit Deendayal Upadhyaya Adarsha Mahavidyalaya (PDUAM), Amjonga**.

## Overview
This platform serves as the digital hub for the department, providing seamless access to academic resources, faculty profiles, department notices, alumni directories, and event archives. 

## Technical Architecture
The site is built with a modern, static-first architecture focused on extreme performance, SEO, and maintainability without requiring a complex backend database.

- **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (ES6)
- **Data Management:** JSON-driven architecture. Content like Faculty Profiles, Alumni, and Notifications are dynamically loaded via `fetch()` from strictly structured JSON files inside the `/data` directory.
- **Design System:** Custom CSS variables, dark/light mode switching, glassmorphism UI, and responsive fluid typography.

## Project Structure
- `/*.html` - Core static pages (Home, Faculty, Alumni, Gallery, etc.)
- `/assets/` - Static assets (Images, Documents)
- `/data/` - JSON databases (`faculty.json`, `notifications.json`, `alumni.json`, etc.)

## Data Management
To update dynamic content (e.g., adding a new notification or updating a faculty profile), you do not need to edit the HTML files. Instead, edit the corresponding JSON file in the `/data` directory:
1. `data/notifications.json`: Controls the homepage notice board and the main notifications page.
2. `data/faculty.json`: Controls the Faculty directory and profiles.
3. `data/alumni.json`: Controls the Alumni directory.
4. `data/index_images.json`: Controls the homepage dynamic slideshow.

## Setup & Deployment
1. Clone the repository.
2. Open `index.html` in your browser to view locally (a local server like VS Code Live Server is recommended due to CORS restrictions on local JSON fetching).
3. The site is production-ready for deployment to any static hosting platform (GitHub Pages, Cloudflare Pages, Vercel, Netlify).

## Maintainers
Developed by the Faculty of the Department of Computer Science, PDUAM Amjonga.
Redesigned and improved by [sOn4jit](https://sonajit.in).
