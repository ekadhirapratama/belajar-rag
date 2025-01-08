# GeminiAI Playground

## Deskripsi
Proyek ini adalah API sederhana untuk membuat query dan integrasi dengan geminiAI. Dibangun menggunakan **Express.js**.

## Teknologi yang Digunakan
- [Node.js](https://nodejs.org)
- [Express.js](https://expressjs.com)
- [Gemini AI](https://ai.google.dev/gemini-api/docs)

## Prasyarat
Sebelum menjalankan proyek ini, pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org) (versi 14 atau lebih baru)
- [npm](https://www.npmjs.com) (biasanya sudah termasuk dalam Node.js)

## Instalasi
1. Install depedensi:
```bash
  npm install
```

2. Buat file `.env` di root project dan tambahkan konfigurasi berikut:
```bash
  MONGO_URI=<URL_MONGODB_ANDA>
  GEMINI_API_KEY=<TOKEN_GEMINI_ANDA>
  PORT=3000
```

3. Jalankan server:
```bash
  npm run dev
```

4. Server akan berjalan di `http://localhost:3000`. Dengan base URL `/api`

## Struktur Proyek
```bash
  root/
  ├── src/
  │   ├── config/                 # Konfigurasi aplikasi
  │   ├── controllers/            # Logika bisnis
  │   ├── middlewares/            # Middleware kustom
  │   ├── models/                 # Model database
  │   ├── routes/                 # Routing aplikasi
  │   ├── app.js                  # Inisialisasi Express app
  │   └── server.js               # Entry point server
  ├── .env                        # File konfigurasi environment
  ├── package.json                # Dependencies dan script
  └── README.md                   # Dokumentasi proyek
```