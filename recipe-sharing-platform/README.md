# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ALX ReactJS Project

This repository contains the project **Fundamentals and Core Concepts of React**.

## Project Structure
- `alx-react-app/` — React application created using **Vite** with the React template.
  - `src/components/WelcomeMessage.jsx` — JSX practice component.
  - `src/components/Header.jsx` — Header component.
  - `src/components/MainContent.jsx` — Main content component.
  - `src/components/Footer.jsx` — Footer component.
  - `src/components/UserProfile.jsx` — User profile card component using props.
  - `src/App.jsx` — Main application integrating all components.

## Objectives
- Learn the basics of React and JSX.
- Create and manage functional components.
- Pass data through props.
- Build and organize a simple React application.

## How to Run
1. Navigate into the `alx-react-app` folder.
2. Install dependencies:
   ```bash
   npm install
