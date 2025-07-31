# 🏁 F1 2025 Teams & Drivers API

This project is a **REST API** built with **Node.js** and **Fastify**, providing information about **Formula 1 teams and drivers for the 2025 season**.  

## 🚀 Features

- List all Formula 1 teams (`/teams`)
- List all drivers (`/drivers`)
- Retrieve drivers of a specific team by ID (`/drivers/:id`)

## 🛠️ Technologies

- [Node.js](https://nodejs.org/)  
- [Fastify](https://fastify.dev/)  
- [@fastify/cors](https://github.com/fastify/fastify-cors)  
- TypeScript (used for parameter typing)

## 📂 Data Structure

- **Teams:** Contains the 10 teams of the 2025 season with their names and headquarters.  
- **Drivers:** List of drivers grouped by team (2 drivers per team).

## 📌 API Endpoints

- `GET /teams` → Returns all teams.  
- `GET /drivers` → Returns all drivers.  
- `GET /drivers/:id` → Returns the drivers of the team matching the provided `id`.  

## ▶️ How to Run

1. Install dependencies:
   ```bash
npm install
npm run start:dev
http://localhost:3333

📄 License: Free to use, modify, and distribute.


