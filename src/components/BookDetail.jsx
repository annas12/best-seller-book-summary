import { useParams, Link } from "react-router-dom";
import { books } from "../data/books";
import { ArrowLeft } from "lucide-react";

export default function BookDetail() {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) return <div className="p-8 text-center">Buku tidak ditemukan</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 mb-6">
          <ArrowLeft size={20} /> Kembali
        </Link>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src={book.image} alt={book.title} className="w-full h-96 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-xl text-gray-700 mb-4">by {book.author}</p>
            <p className="text-sm text-gray-500 mb-4">Terjual: {book.sales}</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 leading-relaxed">{book.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
