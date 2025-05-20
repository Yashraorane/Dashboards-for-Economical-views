# 🌍 Country Data Dashboard – React + Vite + Tailwind + amCharts5

This project is an interactive dashboard for visualizing country data, built with React, Vite, Tailwind CSS, and amCharts5.

---

## 📊 Features

- Fetches real-time country data from the REST Countries API
- Multiple chart types: Bar, Line, Pie (via amCharts5)
- Filter countries by name
- Select metric: Population or GDP
- Responsive, mobile-friendly UI (Tailwind CSS)
- Dockerized for easy deployment
- Graceful loading and error handling

---

## 📁 Folder Structure

```
src/
├── api/           # API call logic (fetchCountryData)
├── components/    # Reusable UI components (Chart, Filters, Selectors)
├── pages/         # Dashboard logic and layout
├── App.jsx        # App entry point
├── main.jsx       # React bootstrap
├── index.css      # Tailwind base styles
public/
Dockerfile
vite.config.js
```

---

## 🧰 Tech Stack

- [React](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [amCharts 5](https://www.amcharts.com/docs/v5/)
- [REST Countries API](https://restcountries.com/)
- [Docker](https://www.docker.com/)

---

## 🧪 Getting Started Locally

```bash
git clone https://github.com/Yashraorane/Dashboards-for-Economical-views.git
cd Dashboards-for-Economical-views
npm install
npm run dev
```

### 🏗️ Build for Production

```bash
npm run build
npm install -g serve
serve -s dist
```

### 🐳 Docker Commands

```bash
# Build Docker image
docker build -t frontend-test-app .

# Run container on port 3000
docker run -p 3000:3000 frontend-test-app
```

---

## 🧠 To-Do / Improvements

- Add region filter (Asia, Europe, etc.)
- Integrate real GDP via World Bank API
- Improve accessibility (ARIA labels)
- Add unit tests with Vitest or React Testing Library

---