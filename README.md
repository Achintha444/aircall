# 📞 Aircall – Hiring Assignment

This is a simplified version of the Aircall app UI, built as part of a hiring assignment. It shows call activities, allows archiving/unarchiving calls, and uses a clean UI built with React, Vite, and Material UI.

## 🔧 What I Changed

The original project was built using **React 16** and **Create React App**. I migrated it to a modern setup with the following improvements:

- Switched from **CRA to Vite** for faster builds and better DX
- Upgraded **React 16 → React 19**
- Replaced inline and basic styles with **Material UI v7**
- Added a **custom theme system** with scalable color tokens
- Refactored the component structure for better readability and reusability
- Set up **GitHub Actions** to auto-deploy to GitHub Pages on push to `master`


## 🔍 Features

- View all call activities (active and archived)
- Archive or unarchive individual calls
- Archive all with one click
- Responsive layout
- Clean UI with custom MUI theme
- Fast build with Vite


## 🌐 Live Demo

[https://achintha444.github.io/aircall](https://achintha444.github.io/aircall)


## 🛠 Local Setup

### Requirements

- Node.js `>=18`
- npm `>=9`

### Clone and run locally

```bash
git clone https://github.com/achintha444/aircall.git
cd aircall
npm install
npm run dev
```

App runs at: http://localhost:5173

### Manual Deployment (Optional)

This app is deployed to GitHub Pages using GitHub Actions.

```bash
npm run build
npm run deploy
```

## 📦 Tech Stack

- React 19
- Vite
- TypeScript
- Material UI v7
- Axios
- GitHub Actions + gh-pages

## ℹ️ Note
This project was done for evaluation purposes only. Not intended for production use.
