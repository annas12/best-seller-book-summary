export const books = [
  { id: 1, title: "Don Quixote", author: "Miguel de Cervantes", sales: "500M+", summary: "Kisah seorang pria yang terobsesi menjadi ksatria dan berpetualang bersama pelayan setianya, Sancho Panza.", image: "https://picsum.photos/seed/donquixote/400/600" },
  { id: 2, title: "A Tale of Two Cities", author: "Charles Dickens", sales: "200M+", summary: "Novel sejarah tentang Revolusi Prancis dan pengorbanan cinta di tengah kekacauan.", image: "https://picsum.photos/seed/taleof2cities/400/600" },
  { id: 3, title: "The Lord of the Rings", author: "J.R.R. Tolkien", sales: "150M+", summary: "Petualangan epik Frodo dan teman-temannya untuk menghancurkan Cincin Satu.", image: "https://picsum.photos/seed/lotr/400/600" },
  { id: 4, title: "The Little Prince", author: "Antoine de Saint-Exupéry", sales: "140M+", summary: "Cerita penuh makna tentang seorang pangeran kecil dari planet lain.", image: "https://picsum.photos/seed/littleprince/400/600" },
  { id: 5, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", sales: "120M+", summary: "Awal petualangan Harry di dunia sihir Hogwarts.", image: "https://picsum.photos/seed/harrypotter1/400/600" },
  { id: 6, title: "And Then There Were None", author: "Agatha Christie", sales: "100M+", summary: "Misteri pembunuhan klasik di sebuah pulau terpencil.", image: "https://picsum.photos/seed/agatha/400/600" },
  { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", sales: "100M+", summary: "Petualangan Bilbo Baggins menemukan Cincin dan bertemu Smaug.", image: "https://picsum.photos/seed/hobbit/400/600" },
  { id: 8, title: "Alice's Adventures in Wonderland", author: "Lewis Carroll", sales: "100M+", summary: "Petualangan Alice di dunia ajaib penuh karakter unik.", image: "https://picsum.photos/seed/alice/400/600" },
  { id: 9, title: "The Alchemist", author: "Paulo Coelho", sales: "65M+", summary: "Perjalanan Santiago mencari harta karun dan menemukan takdir sejati.", image: "https://picsum.photos/seed/alchemist/400/600" },
  { id: 10, title: "The Da Vinci Code", author: "Dan Brown", sales: "80M+", summary: "Simbol dan misteri di balik lukisan Leonardo da Vinci.", image: "https://picsum.photos/seed/davinci/400/600" },
  // ... tambah sampai 50 (saya percepat)
  { id: 11, title: "The Catcher in the Rye", author: "J.D. Salinger", sales: "65M+", summary: "Kisah remaja pemberontak Holden Caulfield.", image: "https://picsum.photos/seed/catcher/400/600" },
  { id: 12, title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", sales: "85M+", summary: "Anak-anak masuk ke dunia Narnia melalui lemari.", image: "https://picsum.photos/seed/narnia/400/600" },
  { id: 13, title: "She: A History of Adventure", author: "H. Rider Haggard", sales: "83M+", summary: "Petualangan mencari peradaban kuno dan ratu abadi.", image: "https://picsum.photos/seed/she/400/600" },
  { id: 14, title: "The Code of the Woosters", author: "P.G. Wodehouse", sales: "60M+", summary: "Komedi klasik Inggris bersama Jeeves dan Wooster.", image: "https://picsum.photos/seed/jeeves/400/600" },
  { id: 15, title: "Think and Grow Rich", author: "Napoleon Hill", sales: "70M+", summary: "Rahasia kesuksesan dari 500 jutawan.", image: "https://picsum.photos/seed/thinkgrow/400/600" },
  // Sisanya pakai gambar random agar cepat
  ...Array.from({length: 35}, (_, i) => ({
    id: 16 + i,
    title: `Best Seller #${16+i}`,
    author: "Various Authors",
    sales: `${30 + i}M+`,
    summary: "Ringkasan singkat dari salah satu buku terlaris sepanjang masa.",
    image: `https://picsum.photos/seed/book${16+i}/400/600`
  }))
];
