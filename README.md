# 🌱 PlantHealth
### AI-Powered Plant Disease, Pest & Deficiency Detection using Gemini 3

PlantHealth is a web-based AI application that helps farmers, gardeners, and agricultural practitioners identify plant pests, diseases, and nutrient deficiencies using images or videos.  
The system uses **Gemini 3 exclusively** to analyze visual inputs and provide clear, actionable recommendations.

---

## 🚀 What is PlantHealth?

PlantHealth transforms a simple plant photo or video into a **complete plant health report**, including:
- Plant identification (when possible)
- Detection of pests, diseases, or nutrient deficiencies
- Explanation of visible symptoms
- Severity assessment (Low / Medium / High)
- Step-by-step treatment plan
- Prevention recommendations

The goal is to make plant diagnostics **accessible, fast, and practical**, especially in regions where access to agronomic experts is limited.

---

## 🧠 Powered by Gemini 3

This project was built **exclusively using Google Gemini 3**, leveraging its:
- Multimodal vision capabilities (image & video analysis)
- Reasoning and contextual understanding
- Natural language generation for clear explanations and instructions

No other AI models or external ML services are used.

---

## 🖼️ How It Works

1. The user uploads one or more plant images or a short video
2. The backend sends the media to Gemini 3 for analysis
3. Gemini 3:
   - Identifies the plant (if possible)
   - Detects pests, diseases, or deficiencies
   - Analyzes visible symptoms
   - Assesses severity
   - Generates treatment and prevention steps
4. The results are displayed in a simple, user-friendly interface

---

## 🛠️ Built With

- **Gemini 3**
- **Gemini Vision API**
- **JavaScript**
- **TypeScript**
- **React**
- **Node.js**
- **Express.js**
- **HTML5**
- **CSS3**
- **REST API**

---

## 📁 Project Structure

```text
planthealth/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── analyze.js
│   ├── services/
│   │   └── geminiService.js
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   └── package.json
├── prompts/
│   └── plant_analysis_prompt.txt
├── README.md
```

