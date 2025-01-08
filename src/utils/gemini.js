const { GenerativeModel, GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL }); // Atau model lain yang sesuai

async function generateAnswer(prompt) {
  const result = await model.generateContent(prompt);

  return result.response.candidates[0].content;
}

module.exports = { generateAnswer };