import { Link, NavLink } from "react-router-dom";
import Container from "../ui/Container";
import CartBadge from "../cart/CartBadge";
export default function Navbar() {
  return (
    <header className="flex flex-col justify-center bg-green-500  font-mono">
      <div className="topbar">
        <Container className="py-2 flex items-center justify-between">
          <div>Free shipping on orders over $50</div>
          <nav className="flex items-center gap-4">
            <NavLink to="/faq" className="hover:underline">
              FAQ
            </NavLink>
            <NavLink to="/account" className="hover:underline">
              Account
            </NavLink>
            <NavLink to="/contact" className="hover:underline">
              Support
            </NavLink>
          </nav>
        </Container>
      </div>
      <div className="bg-white flex items-center sticky top-0 z-40 ring-1 ring-slate-100">
        <Container className="h-20 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-brand-700 text-xl"
          >
            <img src="/favicon.svg" alt="Logo" className="w-8 h-8" />
            PharmaCare
          </Link>
        </Container>

        <Container className="hidden md:flex items-center gap-6 h-12 text-sm">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/shop" className="nav-link">
            Shop
          </NavLink>
          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/blog" className="nav-link">
            Blog
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </Container>

        <Container className="">
          <div className="flex items-center gap-3">
            <CartBadge />
          </div>
        </Container>
      </div>

      <div className="hidden md:flex items-center gap-3 w-[40%] mx-auto my-5">
        <input className="input" placeholder="Search products…" />
        <button className="btn btn-primary">Search</button>
      </div>
    </header>
  );
}
