# 🌦️ Weather API - Node.js + Express + Docker

A simple and powerful Weather API built using **Node.js**, **Express**, and **Axios**, integrated with the **OpenWeatherMap API**, and containerized using **Docker**.

[![Node.js Version](https://img.shields.io/badge/Node.js-v16.0.0-green)](https://nodejs.org/)
[![Docker Build Status](https://img.shields.io/docker/build/your-username/weather-api)](https://hub.docker.com/r/your-username/weather-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🚀 Features

- 🌍 Get real-time weather for any city in the world
- 🔧 Built with Express & Axios for simplicity and performance
- 🔐 Environment variable support with `.env` file
- 📦 Containerized with Docker
- 🧪 Easily extendable for CI/CD or deployment

---

## 📁 Folder Structure

```
weather-api/
│
├── docker/
│   └── Dockerfile
├── src/
│   └── index.js
├── .dockerignore
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ritesh355/weather-api.git
cd weather-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```plaintext
OPENWEATHER_API_KEY=your_actual_api_key_here
```

Get your free API key at: [https://openweathermap.org/api](https://openweathermap.org/api)

### 4. Run with Docker

Build the Docker image:

```bash
docker build -t weather-api -f docker/Dockerfile .
```

Run the Docker container:

```bash
docker run -p 3000:3000 --env-file .env weather-api
```

---

## 🔌 API Usage

### Endpoint

```
GET /weather?city={cityname}
```

### Example

```
http://localhost:3000/weather?city=delhi
```

### Sample Response

```json
{
  "city": "Delhi",
  "temperature": "32.4°C",
  "description": "clear sky",
  "humidity": "45%",
  "wind_speed": "3.5 m/s"
}
```

---

## ✅ Technologies Used

- Node.js
- Express.js
- Axios
- OpenWeatherMap API
- Docker

---

## 👨‍💻 Author

**Ritesh Singh**  
🌐 [LinkedIn](#) | 📝 [Hashnode](#)

---

## 📄 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
