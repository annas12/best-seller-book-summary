export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold mb-6">Info Aplikasi</h1>
        <p className="text-gray-700 leading-relaxed">
          Aplikasi ini menampilkan 50 buku terlaris sepanjang masa di dunia beserta ringkasan singkatnya.
          Dibuat dengan React + Tailwind CSS, 100% responsif di HP, tablet, dan desktop.
        </p>
      </div>
    </div>
  );
}
