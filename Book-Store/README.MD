# 📚 Interactive Book Showcase

A responsive, scroll-driven web application built to sharpen core frontend fundamentals (HTML5, modern CSS, vanilla JavaScript) with plans to integrate backend features.

---

### 🗓️ Progress Log

#### **Day 1: August 23, 2026** — *Layout & Scroll-Driven Themes*

* **Navigation Bar:** Built a sticky, clean header navigation using flexbox layout.
* **Showcase Section:** Structured a modular 7-book showcase grid, organizing individual book cards with covers, metadata, and dynamic call-to-action buttons.
* **Scroll-Triggered Theming:** Implemented the JavaScript `IntersectionObserver` API to track which book is centered in the viewport.
* **Dynamic Styling & Animations:** Integrated CSS Custom Properties (`var(--...)`) bound to `data-*` attributes, paired with cubic-bezier transition curves for butter-smooth background and typography theme switching.
* **Visual Polish:** Added layered drop shadows and subtle hover animations to book covers for tactile UI depth.

---

### 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3 (Variables, Flexbox, Keyframes), Vanilla JavaScript (IntersectionObserver API)
* **Backend (Planned):** Node.js / Express (Book data API & user bookmarks)

*** Day1 completed ***


#### **Day 2: August 24, 2026**

* **Adding some buttons in the left of nav bar like add to cart, profile, search, library

*** Day2 completed ***

#### ** Day 3: August 25, 2026**

# 📚 Book Store Project - Development Log

## 🗓️ Backend Architecture & External API Integration

### 📑 Overview
Today was dedicated exclusively to engineering the core Node.js backend infrastructure, establishing database connectivity with MySQL using Sequelize ORM, and integrating third-party book search services via the Open Library API.

---

### 🚀 Key Achievements

#### 1. Express & ES Modules Server Setup
- Initialized Node.js environment with `"type": "module"` configuration to leverage modern **ES Modules (`import` / `export`)**.
- Installed core backend dependencies: `express`, `cors`, `dotenv`, `mysql2`, `sequelize`, and `nodemon`.
- Structured the backend repository using clean MVC-oriented architecture:

#### 2. MySQL Database Connection (Sequelize ORM)
- Configured database credentials in `.env` and connected Express to MySQL (`127.0.0.1`) via Sequelize.
- Built a declarative `Book` model (`models/bookModel.js`) defining primary keys, auto-incrementing IDs, title, and price fields.
- Implemented robust error handling to resolve `ECONNREFUSED` host resolution quirks across Node environments.

#### 3. Real-Time External Book Search Integration
- Integrated the **Open Library API** into the backend controller layer (`controller/externalBookController.js`).
- Created an Express search proxy endpoint (`/api/books/search-api?q=...`) to prevent rate limits and bypass browser CORS limitations.
- Handled API response mapping to clean JSON payloads containing book metadata:
- `title`, `authors`, `description`, high-res cover `image`, and `previewLink`.

---

### 🧪 API Endpoint Verification (Postman Tested)

| Method | Endpoint | Description | Status |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/books/search-api?q=harry+potter` | Fetches live book records from Open Library API | `200 OK` |

---

### 🛠️ Tech Stack Added / Configured
- **Backend Framework:** Node.js, Express.js
- **Database / ORM:** MySQL, Sequelize
- **External API:** Open Library Search & Covers API
- **Tooling:** Postman, Nodemon, Dotenv

---

