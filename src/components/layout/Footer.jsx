import Container from "../ui/Container";
import { Link } from "react-router-dom";
import NewsLetter from "../sections/NewsLetter";
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 mt-48 font-mono relative pt-56">
      <NewsLetter />
      <Container className="py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <img src="/favicon.svg" alt="Logo" className="w-6 h-6" />
            <span>PharmaCare</span>
          </Link>
          <p className="mt-4 text-slate-300 max-w-md">
            Your trusted online pharmacy. OTC remedies, vitamins, and wellness
            essentials delivered.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2 text-slate-300 text-sm">
            <li>
              <Link to="/shop" className="hover:text-white">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-slate-300 text-sm">
            <li>support@pharmacare.dev</li>
            <li>+1 (555) 555-1234</li>
            <li>123 Health Ave, Vancouver</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-slate-800">
        <Container className="py-6 text-sm text-slate-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} PharmaCare</p>
          <p>Built with React & Tailwind</p>
        </Container>
      </div>
    </footer>
  );
}
