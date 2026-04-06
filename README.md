<img width="1702" height="925" alt="Screenshot 2026-04-06 at 2 28 07 PM" src="https://github.com/user-attachments/assets/a86e3533-a3cb-43be-96d2-189d44224498" /># 🧩 Incubyte Frontend Kata – Pokemon App

## 🚀 Live Demo

👉 https://your-live-link.com

---

## 📸 Screenshots

### Pokemon List Page

<img width="1685" height="941" alt="Screenshot 2026-04-06 at 2 28 35 PM" src="https://github.com/user-attachments/assets/b0f0b756-9de1-4a7c-9a48-81c217c57e08" />

### Pokemon Detail Page

<img width="1700" height="935" alt="Screenshot 2026-04-06 at 2 28 50 PM" src="https://github.com/user-attachments/assets/ca0e988d-c4b2-4668-a03b-fd4ce8f77e56" />


---

## 🧠 Overview

This is a **React + TypeScript** application that displays Pokémon data using the **PokeAPI**.

The application demonstrates:

* Clean architecture
* Test-Driven Development (TDD)
* Accessibility best practices
* Scalable frontend design

---

## ✨ Features

### 📋 Pokémon Listing Page

* Displays Pokémon in a list/grid
* Search/filter functionality
* Responsive UI with Tailwind CSS

### 📄 Pokémon Detail Page

* Detailed Pokémon information
* Abilities and types
* Loading and error handling

---

## 🧱 Tech Stack

* ⚛️ React (Vite)
* 🟦 TypeScript
* 🎨 Tailwind CSS
* 🧪 Vitest + Testing Library
* 🌐 PokeAPI

---

## 📁 Project Structure

```
src/
 ├── api/                # API calls
 ├── utils/              # Data transformation logic
 ├── components/         # Reusable UI components
 ├── pages/              # Page-level components
 ├── tests/              # Test cases
 ├── App.tsx             # Routing
 └── main.tsx            # Entry point
```

---

## 🧪 Test-Driven Development (TDD)

I followed a **strict TDD workflow**:

1. 🔴 **RED** – Wrote failing tests first
2. 🟢 **GREEN** – Implemented minimal code to pass
3. 🔄 **REFACTOR** – Improved code while keeping tests passing

---

## 🧪 Running Tests

```bash
npm run test
```

---

## ⚙️ Setup Instructions

```bash
# Clone repo
git clone https://github.com/anuj-rathi/incubyte-frontend-kata-anuj.git

# Install dependencies
npm install

# Run dev server
npm run dev

# Run tests
npm run test
```

---

## 🏗️ Architectural Decisions

### 🔹 Separation of Concerns

* API layer handles data fetching
* Utils handle transformation
* Components handle UI
* Pages handle state & orchestration

### 🔹 Data Transformation

* Flattened API response using `transformPokemon`
* Keeps UI clean and predictable

### 🔹 Routing

* React Router for navigation
* Dynamic route: `/pokemon/:name`

---


## 🤖 AI Usage

AI tools (ChatGPT) were used to:

* Scaffold initial project structure
* Generate test cases
* Debug environment issues (Vitest, jsdom)
* Improve Tailwind UI
* Draft documentation

### 🧠 Approach:

* Reviewed and refined all AI-generated code
* Ensured understanding before implementation
* Prioritized clean, maintainable code

---

## ♿ Accessibility

* Keyboard navigation support
* ARIA roles where applicable
* Semantic HTML structure

---

## 📌 Future Improvements

* Pagination / infinite scroll
* Type-based color theming
* Better skeleton loaders
* Performance optimizations

---

## 🙌 Final Note

This project reflects my approach to:

* Writing clean, maintainable code
* Practicing TDD
* Building scalable frontend applications

---
