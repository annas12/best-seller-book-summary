import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavigationDrawer() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-ghost">
          <Menu size={28} />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-6 w-64 h-full bg-base-200 text-base-content">
          <h2 className="text-xl font-bold mb-6">Menu</h2>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Info Aplikasi</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
  );
}
