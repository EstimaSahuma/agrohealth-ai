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

## 🧪 Example Gemini 3 Prompt
You are an expert agronomist and plant pathologist.

Analyze the provided plant image or video.

Tasks:
1. Identify the plant species if possible
2. Detect pests, diseases, or nutrient deficiencies
3. Explain visible symptoms
4. Assess severity (low, medium, high)
5. Provide a step-by-step treatment plan
6. Suggest prevention measures

Use clear, simple language suitable for farmers.

## ⚙️ Running the Project Locally
### 1️⃣ Clone the repository
``` 
git clone https://github.com/your-username/planthealth.git
cd planthealth
```

### 2️⃣ Backend setup
``` 
cd backend
npm install
cp .env.example .env
npm run dev
```
Add your Gemini 3 API key to the .env file.

### 3️⃣ Frontend setup
``` 
cd ../frontend
npm install
npm run dev
```

## 🧩 Challenges Faced
- Handling unclear or low-quality images without generating incorrect diagnoses
- Designing prompts that encourage Gemini 3 to explain uncertainty instead of guessing
- Translating complex agronomic knowledge into simple, actionable steps
- Balancing scope and time during a hackathon environment

## 🏆 Accomplishments
- Built a fully functional multimodal AI system using Gemini 3 only
- Delivered actionable, step-by-step plant treatment recommendations
- Designed a farmer-friendly interface for non-technical users- 
- Demonstrated real-world agricultural impact using generative AI

## 🔮 What’s Next for PlantHealth
- Mobile app support for in-field diagnostics
- Region- and climate-specific recommendations
- Crop history tracking and monitoring
- Offline or low-connectivity support
- Collaboration with agricultural institutions for validation

## 🌍 Impact

PlantHealth aims to reduce crop losses, improve food security, and empower farmers with AI-driven insights — using nothing more than a smartphone camera and Gemini 3.

