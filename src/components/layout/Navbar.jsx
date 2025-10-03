import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../ui/Container";
import CartBadge from "../cart/CartBadge";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Close on Escape and lock body scroll (optional)
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKeyDown);
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="flex flex-col justify-center bg-blue-800 font-mono">
      {/* Top bar hidden on very small screens to save space */}
      <div className="topbar hidden sm:block">
        <Container className="py-2 flex items-center justify-between text-sm">
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

      {/* Main bar */}
      <div className="bg-white sticky top-0 z-40 ring-1 ring-slate-100">
        <Container className="h-16 md:h-20 flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-brand-700 text-lg md:text-xl"
          >
            <img src="/favicon.svg" alt="Logo" className="w-8 h-8" />
            PharmaCare
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 h-12 text-sm">
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
          </nav>

          {/* Right side: cart + hamburger */}
          <div className="flex items-center gap-2">
            <CartBadge />
            {/* Hamburger (mobile only) */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 ring-1 ring-slate-200 hover:bg-slate-50"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                // X icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </Container>

        {/* Mobile search: only show when menu is open */}
        {mobileOpen && (
          <div className="md:hidden px-4 pb-3">
            <div className="flex items-center gap-2">
              <input className="input flex-1" placeholder="Search products…" />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        )}

        {/* Mobile menu panel */}
        <div
          id="mobile-menu"
          className={`md:hidden border-t border-slate-100 bg-white overflow-hidden transition-[max-height,opacity] duration-200 ${
            mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <Container className="py-2">
            <nav className="flex flex-col">
              <NavLink
                to="/"
                className="px-2 py-2 rounded hover:bg-slate-50"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className="px-2 py-2 rounded hover:bg-slate-50"
                onClick={() => setMobileOpen(false)}
              >
                Shop
              </NavLink>
              <NavLink
                to="/services"
                className="px-2 py-2 rounded hover:bg-slate-50"
                onClick={() => setMobileOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                className="px-2 py-2 rounded hover:bg-slate-50"
                onClick={() => setMobileOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/blog"
                className="px-2 py-2 rounded hover:bg-slate-50"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className="px-2 py-2 rounded hover:bg-slate-50"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </NavLink>

              {/* Help section */}
              <div className="mt-3 pt-3 border-t">
                <div className="text-xs font-semibold text-slate-500 px-2 mb-1">
                  Help
                </div>
                <NavLink
                  to="/faq"
                  className="block px-2 py-2 rounded hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  FAQ
                </NavLink>
                <NavLink
                  to="/account"
                  className="block px-2 py-2 rounded hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  Account
                </NavLink>
                <NavLink
                  to="/contact"
                  className="block px-2 py-2 rounded hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  Support
                </NavLink>
              </div>
            </nav>
          </Container>
        </div>
      </div>

      {/* Desktop search */}
      <div className="hidden md:flex items-center gap-3 w-[40%] mx-auto my-5">
        <input className="input" placeholder="Search products…" />
        <button className="btn btn-primary">Search</button>
      </div>

      {/* Click-away overlay for mobile (tap to close) */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/30 md:hidden z-30"
        />
      )}
    </header>
  );
}
