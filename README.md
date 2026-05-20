
## Live Demo

[View LiveScoresByTyphon](https://live-scores-by-typhon-7hyza4dmo-typhon2580s-projects.vercel.app)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# LiveScoresByTyphon

LiveScoresByTyphon is a modern live football scores web app built with React, Vite, Bootstrap, and a secure Vercel API route.

The app fetches live football match data from API-FOOTBALL while keeping the API key hidden on the server side.

## Features

- Homepage with project introduction
- Live scores page
- Match cards showing teams, scores, status, league, country, and match time
- Manual refresh button
- Auto-refresh every 60 seconds
- Search by team, league, or country
- Loading state
- Error state
- Empty state when no live matches are available
- Responsive design for desktop and mobile
- Secure API key handling using environment variables

## Tech Stack

- React
- Vite
- Bootstrap
- React Router DOM
- Axios
- Vercel Serverless API Route
- API-FOOTBALL / API-Sports

## Project Structure

```txt
live-sports-scores/
├── api/
│   └── live-scores.js
├── src/
│   ├── components/
│   │   └── MatchCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── LiveScores.jsx
│   ├── services/
│   │   └── scoreService.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.local
├── index.html
├── package.json
└── README.md