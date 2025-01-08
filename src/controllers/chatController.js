const { generateAnswer } = require('../utils/gemini');

const data = [
  {
    "id": 1,
    "image": "https://i.ibb.co.com/bv2BGTj/image.png",
    "category": "makanan",
    "name": "kartika toast puffies kecil",
    "price": 5000,
    "username": "novansyaah",
    "tag": "ready stock",
    "stock": 6,
    "discount": 0,
    "is_available": true,
    "location": "R. Selatan",
    "description": "",
    "variants": [
      "cheese",
      "choco"
    ]
  },
  {
    "id": 2,
    "image": "https://i.ibb.co.com/TkdQhSc/image.pngg",
    "name": "kartika toast puffies besar",
    "category": "makanan",
    "price": 8500,
    "username": "novansyaah",
    "tag": "ready stock",
    "stock": 0,
    "discount": 0,
    "is_available": true,
    "location": "R. Selatan",
    "description": "",
    "variants": [
      "cheese",
      "choco"
    ]
  },
  {
    "id": 3,
    "image": "https://id-test-11.slatic.net/p/f69c9ef0a56e85002aa263b09f55c634.jpg",
    "category": "makanan",
    "name": "Kacang Atom Garuda",
    "price": 1500,
    "username": "duhabduh",
    "tag": "ready stock",
    "stock": 0,
    "discount": 0,
    "is_available": true,
    "location": "R. Selatan",
    "description": "",
    "variants": []
  },
  {
    "id": 4,
    "image": "https://www.boncabe.com/wp-content/uploads/snack-boncabe-makaroni-krispi-level-10-15-banner-l.webp",
    "name": "BonCabe Makaroni Krispi",
    "category": "makanan",
    "price": 2500,
    "username": "duhabduh",
    "tag": "ready stock",
    "stock": 15,
    "discount": 0,
    "is_available": true,
    "location": "R. Selatan",
    "description": "",
    "variants": [
      "level 2",
      "level 10"
    ]
  },
  {
    "id": 5,
    "image": "https://down-id.img.susercontent.com/file/sg-11134201-22110-aoby46n7u3jvdc",
    "name": "Kopi Excelso Single Serving",
    "category": "makanan",
    "price": 5000,
    "username": "duhabduh",
    "tag": "ready stock",
    "stock": 10,
    "discount": 0,
    "is_available": true,
    "location": "R. Selatan",
    "description": "",
    "variants": []
  },
  {
    "id": 7,
    "image": "https://i.ibb.co.com/5B95kvd/photo-2024-10-09-10-34-57.jpg",
    "name": "Cranberry Creamcheese Sourdough Bread",
    "category": "makanan",
    "price": 26000,
    "username": "ashrinp",
    "tag": "pre order",
    "discount": 0,
    "is_available": true,
    "description": "",
    "stock": 100,
    "variants": []
  },
  {
    "id": 8,
    "image": "https://i.ibb.co.com/Fzb89Ss/photo-2024-10-09-10-34-52.jpg",
    "name": "Butter Salted Bread",
    "category": "makanan",
    "price": 13000,
    "username": "ashrinp",
    "tag": "pre order",
    "discount": 0,
    "is_available": true,
    "description": "",
    "stock": 100,
    "variants": []
  },
  {
    "id": 9,
    "image": "https://i.ibb.co.com/dGM6NfJ/image.png",
    "name": "Pempek Campur",
    "category": "frozen food",
    "price": 37500,
    "username": "shintadewiaw",
    "tag": "ready stock",
    "stock": 40,
    "discount": 0,
    "is_available": true,
    "location": "R. Selatan",
    "description": "<p>🔥 Kenapa Harus Coba EL Pempek? <br/> • Lengkap dan Variatif: Pengen coba semua jenis pempek? Pempek Campur bisa kamu dapetin dalam satu paket! <br/> • Rasa yang Otentik: EL Pempek dibuat dengan bahan-bahan terbaik dan resep asli Palembang, rasanya gak perlu diragukan lagi! <br/> • Praktis dan Lezat: Kamu bisa langsung nikmati pempek ini setelah digoreng. Simpel dan enak, cocok buat makan bareng keluarga atau teman-teman. <br/> <br/> 🍽 Apa saja yang ada di dalam Pempek Campur? <br/> • Pempek Lenjer: Pempek panjang yang kenyal dan berasa olahan ikannya! <br/> • Pempek Adaan: Pempek bulat yang digoreng garing di luar, dengan isian ikan yang lembut. Enak banget! <br/> • Pempek Kulit: Yang satu ini lebih gurih, karena terbuat dari kulit ikan tenggiri yang renyah banget. Pas banget buat kamu yang suka tekstur crunchy! <br/> • Pempek Telor: Pempek dengan telur di dalamnya yang bikin rasanya makin kaya dan nikmat. <br/> <br/> 🌟Promo Spesial!🌟 <br/> ⁃ Dapatkan 1 point Loyalty Card setiap pembelian 1 varian pempek <br/> ⁃ 10 point Loyalty Card FREE 1 Pempek varian apapun bebas pilih </p>",
    "variants": []
  },
  {
    "id": 10,
    "image": "https://i.ibb.co.com/yVSVhNq/image.png",
    "name": "Pempek Kapal Selam",
    "category": "frozen food",
    "price": 22500,
    "username": "shintadewiaw",
    "tag": "ready stock",
    "stock": 5,
    "discount": 0,
    "is_available": true,
    "location": "R. Selatan",
    "description": "<p>Pempek Kapal Selam terbuat dari ikan yang segar, adonan kenyal, dan dibalut dengan telur ayam di dalamnya. <br/> 🔥 Kenapa Harus Coba EL Pempek? <br/> • Lengkap dan Variatif: Pengen coba semua jenis pempek? Pempek Campur bisa kamu dapetin dalam satu paket! <br/> • Rasa yang Otentik: EL Pempek dibuat dengan bahan-bahan terbaik dan resep asli Palembang, rasanya gak perlu diragukan lagi! <br/> • Praktis dan Lezat: Kamu bisa langsung nikmati pempek ini setelah digoreng. Simpel dan enak, cocok buat makan bareng keluarga atau teman-teman. <br/> <br/> 🌟Promo Spesial!🌟 <br/> ⁃ Dapatkan 1 Loyalty Card setiap pembelian 1 varian pempek <br/> ⁃ 10 Loyalty Card FREE 1 Pempek varian apapun bebas pilih </p>",
    "variants": []
  },
  {
    "id": 11,
    "image": "https://i.ibb.co.com/VQYydq6/IMG-20241009-145142-643.jpg",
    "name": "Cilok Bos Anom - Ngemil",
    "category": "makanan",
    "price": 10000,
    "username": "imamfahmi29",
    "is_available": true,
    "tag": "pre order",
    "discount": 0,
    "description": "",
    "stock": 100,
    "variants": []
  },
  {
    "id": 12,
    "image": "https://i.ibb.co.com/VQYydq6/IMG-20241009-145142-643.jpg",
    "name": "Cilok Bos Anom - Kenyang",
    "category": "makanan",
    "price": 15000,
    "username": "imamfahmi29",
    "is_available": true,
    "tag": "pre order",
    "discount": 0,
    "description": "",
    "stock": 100,
    "variants": []
  },
  {
    "id": 13,
    "image": "https://i.ibb.co.com/Qk52ftR/28-E94874-A881-EBFE0-B85-CE186-A35-D0101.jpg",
    "category": "makanan",
    "name": "Pangsit Nek Abun",
    "price": 15000,
    "username": "wanzismail",
    "tag": "pre order",
    "stock": 100,
    "discount": 0,
    "is_available": true,
    "location": "",
    "description": "Bisa request dengan kemasan yang lebih besar (misal 1/2 kg)",
    "variants": []
  },
  {
    "id": 14,
    "image": "https://i.ibb.co.com/GkD1Trw/74-D3-B543-D1-B1-C443-F4-DA36-B84918092-C0.jpg",
    "category": "camilan",
    "name": "Peyek Kacang",
    "price": 13000,
    "username": "wanzismail",
    "tag": "ready stock",
    "stock": 1,
    "discount": 0,
    "is_available": false,
    "location": "Ruang Selatan",
    "description": "",
    "variants": [],
    "promo": {
      "code": "DealDiscount",
      "description": "Beli 2 Diskon Rp. 1000",
      "requirement": {
        "min": 2,
        "discount": 1000
      }
    }
  },
  {
    "id": 15,
    "image": "https://i.ibb.co.com/k9wV3g5/Whats-App-Image-2024-10-28-at-11-23-09.jpg",
    "category": "makanan",
    "name": "Bawang Goreng Kenangan kemasan 200gr",
    "price": 55000,
    "username": "joseharyono",
    "tag": "pre order",
    "stock": 100,
    "discount": 20,
    "is_available": true,
    "location": "",
    "description": "Bawang goreng asli sumenep non msg kemasan 200gr",
    "variants": []
  },
  {
    "id": 16,
    "image": "https://i.ibb.co.com/j4jnrnS/IMG-20241030-080831-386.jpg",
    "category": "makanan",
    "name": "Kartika Toast Almond Cookies - 51gr",
    "price": 15000,
    "username": "novansyaah",
    "tag": "ready stock",
    "stock": 10,
    "discount": 0,
    "is_available": true,
    "location": "Ruang Selatan",
    "description": "Kemasan Baru Kartika Toast Almond Cookies, lebih estetik dan modern Kemasan isi 51gr. Kartika Toast Almond Cookies adalah pilihan sempurna bagi pecinta kue yang menginginkan cita rasa klasik yang gurih dan memikat. Dengan setiap gigitan, Anda akan merasakan kelezatan mentega yang melimpah dan rasa almond yang kaya, menghadirkan sensasi nikmat yang tak terlupakan. Dibuat dengan bahan-bahan berkualitas terbaik dan resep tradisional yang telah teruji, Kartika Toast Almond Cookies 43gr adalah camilan yang sempurna untuk menemani waktu santai Anda. Kemasan praktis berukuran 51 gram membuatnya ideal untuk dinikmati di mana saja, baik sebagai camilan di kantor, di perjalanan, atau sebagai teman setia saat bersantai di rumah.",
    "variants": []
  },
  {
    "id": 17,
    "image": "https://i.ibb.co.com/xYKCZzd/IMG-1801.jpg",
    "category": "minuman",
    "name": "Mango Coconut Jelly",
    "price": 35000,
    "username": "mikes05",
    "tag": "pre order",
    "stock": 9999,
    "discount": 0,
    "is_available": true,
    "location": "Ruang Selatan",
    "description": "Perpaduan antara buah Mangga dengan topping yang super duper banyak dan kuah mango yang creamy. Mangganya asli dan tanpa tambahan sirup. Tersedia juga versi hampers + Rp 10.000 untuk merayakan natal bersama teman dan keluarga.",
    "variants": [],
    "promo": {
      "code": "ThresholdDiscount",
      "description": "Minimal Beli 4 Harga menjadi Rp. 30.000",
      "requirement": {
        "min": 4,
        "discount": 5000
      }
    }
  },
  {
    "id": 18,
    "image": "https://i.ibb.co.com/HKDsrxm/372497223501190.png",
    "category": "makanan",
    "name": "Cilok Mertua",
    "price": 15000,
    "username": "imamfahmi29",
    "tag": "pre order",
    "stock": 9999,
    "discount": 20,
    "is_available": true,
    "location": "Ruang Selatan",
    "description": "",
    "variants": []
  },
  {
    "id": 19,
    "image": "https://i.ibb.co.com/9sNHNZ2/20231114-214214.jpg",
    "category": "minuman",
    "name": "Susu Almond Spencer",
    "price": 30000,
    "username": "mikes05",
    "tag": "pre order",
    "stock": 9999,
    "discount": 0,
    "is_available": true,
    "location": "Ruang Selatan",
    "description": "Susu yang terbuat dari 100% Roasted Almond, dipadukan dengan setetes gula alami Stevia. Tanpa pengawet sehingga aman banget dikonsumsi buat semua kalangan karena tidak menaikkan gula darah. Setelah dibuka, wajib habis dalam 3-4 hari. Tersedia 3 varian rasa: Original Roasted Almond, Choco Almond, Vanilla Roasted Almond",
    "variants": [
      "original roasted almond",
      "choco almond",
      "vanilla roasted almond"
    ],
    "promo": {
      "code": "DealDiscount",
      "description": "Beli 10 Diskon Rp. 5000",
      "requirement": {
        "min": 10,
        "discount": 5000
      }
    }
  },
  {
    "id": 20,
    "image": "https://i.ibb.co.com/QNsybgw/Hijau-Kuning-Lezat-Promosi-Makanan-Instagram-Post.png",
    "category": "makanan",
    "name": "Usus Crispy Daun Jeruk Pedas",
    "price": 6000,
    "username": "angwinarasy",
    "tag": "ready stock",
    "stock": 40,
    "discount": 0,
    "is_available": true,
    "location": "Ruang Selatan",
    "description": "Rasa gurihnya bikin hati senang, aroma daun jeruknya bikin tenang, dan pedasnya bikin nagih. Sekali coba, pasti balik lagi!",
    "variants": []
  },
  {
    "id": 21,
    "image": "https://i.ibb.co.com/Wvtvq8k/photo-2024-11-18-13-12-42.jpg",
    "category": "camilan",
    "name": "Peyek kecil",
    "price": 3000,
    "username": "wanzismail",
    "tag": "ready stock",
    "stock": 5,
    "discount": 0,
    "is_available": false,
    "location": "Ruang Selatan",
    "description": "",
    "variants": [
      "Ikan Teri",
      "Udang Rebon"
    ],
    "promo": {
      "code": "DealDiscount",
      "description": "Beli 2 Diskon Rp. 1000",
      "requirement": {
        "min": 2,
        "discount": 1000
      }
    }
  },
  {
    "id": 22,
    "image": "https://i.ibb.co.com/MDtv7GG/photo-2024-11-18-19-35-51.jpg",
    "category": "makanan",
    "name": "Dimsum Kang Dado",
    "price": 25000,
    "username": "imamfahmi29",
    "tag": "pre order",
    "stock": 9999,
    "discount": 0,
    "is_available": true,
    "location": "Ruang Selatan",
    "description": "Dimsum Kang Dado adalah dimsum yang dibuat dengan bahan-bahan berkualitas tinggi dan diolah dengan teknik tradisional. Dimsum ini bisa disantap sebagai camilan, hidangan pembuka, atau sajian utama. Berikut deskripsi produk Dimsum Kang Dado: Isi: 30 dimsum per pack, Kemasan: Praktis dan mudah disiapkan untuk dimasak, Rasa: Lezat dan autentik.",
    "variants": []
  },
  {
    "id": 23,
    "image": "https://i.ibb.co.com/pKVhXDP/2024-11-22-11-52-30.jpg",
    "category": "frozen food",
    "name": "Pempek Kulit",
    "price": 42500,
    "username": "shintadewiaw",
    "tag": "ready stock",
    "stock": 5,
    "discount": 0,
    "is_available": true,
    "location": "Ruang Selatan",
    "description": "<p>Kamu penggemar pempek kulit yang renyah dan gurih? pilihan yang tepat untuk menikmati 1 pax isi 10 special pempek kulit. <br/> <br/> 🔥 Kenapa Harus Coba EL Pempek? <br/> • Lengkap dan Variatif: Pengen coba semua jenis pempek? Pempek Campur solusinya, pengen coba Pempek Kulitnya aja?bisaaaa! <br/> • Rasa yang Otentik: EL Pempek dibuat dengan bahan-bahan terbaik dan resep asli Palembang, rasanya gak perlu diragukan lagi! <br/> • Praktis dan Lezat: Kamu bisa langsung nikmati pempek ini setelah digoreng. Simpel dan enak, cocok buat makan bareng keluarga atau teman-teman. <br/> <br/> 🌟Promo Spesial!🌟 <br/> ⁃ Dapatkan 1 Loyalty Card setiap pembelian 1 varian pempek <br/> ⁃ 10 Loyalty Card FREE 1 Pempek varian apapun bebas pilih </p>",
    "variants": []
  },
  {
    "id": 24,
    "image": "https://i.ibb.co.com/pKVhXDP/2024-11-22-11-52-30.jpg",
    "category": "frozen food",
    "name": "Pempek Telor",
    "price": 42500,
    "username": "shintadewiaw",
    "tag": "ready stock",
    "stock": 5,
    "discount": 0,
    "is_available": true,
    "location": "Ruang Selatan",
    "description": "<p>Nikmati sensasi pempek telur yang kaya rasa dan tekstur lembut! <br/> <br/> 🔥 Kenapa Harus Coba EL Pempek? <br/> • Lengkap dan Variatif: Pengen coba semua jenis pempek? Pempek Campur solusinya, pengen coba Pempek Telornya aja?bisaaaa! <br/> • Rasa yang Otentik: EL Pempek dibuat dengan bahan-bahan terbaik dan resep asli Palembang, rasanya gak perlu diragukan lagi! <br/> • Praktis dan Lezat: Kamu bisa langsung nikmati pempek ini setelah digoreng. Simpel dan enak, cocok buat makan bareng keluarga atau teman-teman. <br/> <br/> 🌟Promo Spesial!🌟 <br/> ⁃ Dapatkan 1 Loyalty Card setiap pembelian 1 varian pempek <br/> ⁃ 10 Loyalty Card FREE 1 Pempek varian apapun bebas pilih </p>",
    "variants": []
  },
  {
    "id": 25,
    "image": "https://i.ibb.co.com/59LxjRh/gambar.png",
    "category": "makanan",
    "name": "Chuba Keripik Singkong",
    "price": 1500,
    "username": "duhabduh",
    "tag": "ready stock",
    "stock": 15,
    "discount": 0,
    "is_available": true,
    "location": "Ruang Selatan",
    "description": "",
    "variants": []
  },
  {
    "id": 26,
    "image": "https://i.ibb.co.com/wWzn2x3/IMG-1808.jpg",
    "category": "minuman",
    "name": "Strawberry Lychee Jelly",
    "price": 35000,
    "username": "mikes05",
    "tag": "pre order",
    "stock": 9999,
    "discount": 0,
    "is_available": true,
    "location": "Ruang Selatan",
    "description": "Perpaduan antara buah Strawberry dengan berbagai macam jelly yang membuat dessert ini meriah. Dilengkapi juga dengan buah Lychee yang menyegarkan. Tersedia juga versi hampers + Rp 10.000 untuk merayakan natal bersama teman dan keluarga.",
    "variants": [],
    "promo": {
      "code": "ThresholdDiscount",
      "description": "Minimal Beli 4 Harga menjadi Rp. 30.000",
      "requirement": {
        "min": 4,
        "discount": 5000
      }
    }
  }
]

exports.ragProcess = async (req, res) => {
  try {
    const { query } = req.body;

    // RAG
    const context = data.filter(item => item.is_available && item.stock > 0).map(item => {
      let lokasi = item.location;

      if (lokasi) {
        lokasi = item.location.toLowerCase().includes('selatan') ? 'Ruang Selatan' : item.location;
      }

      let content = [
        `Nama ${item.name}`,
        `${item.description}`,
        `Barangnya ${item.tag}`,
        `Harga ${item.price}`,
        `Kategori ${item.category}`,
        `Lokasi ${lokasi}`,
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
    res.status(500).json({ error: errorMsg });
  }
}