const { generateAnswer } = require('../utils/gemini');
const ProductModel = require('../models/productModel');

exports.ragProcess = async (req, res) => {
  try {
    const { query } = req.body;
    const data = await ProductModel.getAll();
    
    const context = data.filter(item => item.stock > 0).map(item => {
      let content = [
        `Nama ${item.name}`,
        `${item.description}`,
        `Barangnya ${item.tag}`,
        `Harga ${item.price}`,
        `Kategori ${item.category}`,
        `Lokasi ${item.location}`,
        `Owner ${item.username}`,
      ];

      if (item.promo) {
        content.push('Promo ' + item.promo.description)
      }

      return `${content.join('. ')}`;
    }).join('\n');

    // Gabungkan informasi yang relevan dengan pertanyaan
    const prompt = `${process.env.PROMPT}.\n\nPertanyaan: ${query}\n\nInformasi:\n${context}\n\nJawaban:`;

    // Buat jawaban menggunakan OpenAI
    const answer = await generateAnswer(prompt);
    res.json({ answer });
  } catch (err) {
    let errorMsg = 'Failed to process query';
    console.log(err)

    // if (err.error.message) {
    //   errorMsg = err.error.message;
    // }
    res.error({ error: errorMsg });
  }
}