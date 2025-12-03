import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`} className="block">
      <div className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow overflow-hidden">
        <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg line-clamp-2">{book.title}</h3>
          <p className="text-sm text-gray-600">{book.author}</p>
        </div>
      </div>
    </Link>
  );
}
