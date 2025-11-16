import { useState } from "react";
import { ChevronDown, X, Menu } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <header className="relative bg-complementary text-white">
      {/* Bande supérieure */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 sm:px-12 py-4 z-10 relative bg-white">
        {/* Logo + nom */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/logo-msbb-1.png"
            alt="Logo Makerspace"
            width="50"
            height="50"
          />
          <span className="text-xl sm:text-3xl font-bold text-black no-underline">
  Makerspace Biel-Bienne
</span>
        </a>

        {/* Hamburger / croix */}
        <button
          className="p-2 z-20 text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Ligne de séparation */}
      <hr className="border-gray-300 border-t-1 mt-0 mb-0" />

      {/* Menu plein écran sous la ligne */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full h-screen z-50 bg-complementary/95 backdrop-blur flex flex-col items-center justify-start pt-16">
          <nav className="flex flex-col items-center gap-8 text-2xl w-full">

            {/* L'association avec sous-menu */}
            <div className="flex flex-col items-center relative">
              <button
                onClick={() => setSubMenuOpen(!subMenuOpen)}
                className="flex items-center gap-2 hover:text-gray-300 text-center"
              >
                L’association
                <ChevronDown
                  size={24}
                  className={`transition-transform ${subMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {subMenuOpen && (
                <div className="flex flex-col items-center gap-3 mt-3 text-xl">
                  <a href="/fr/association/comite" className="hover:text-gray-300 no-underline">Comité</a>
                  <a href="/fr/association/objectifs" className="hover:text-gray-300 no-underline">Objectifs</a>
                  <a href="/fr/association/rejoindre" className="hover:text-gray-300 no-underline">Nous rejoindre</a>
                  <a href="/fr/association/soutenir" className="hover:text-gray-300 no-underline">Nous soutenir</a>
                  <a href="/fr/association/statuts" className="hover:text-gray-300 no-underline">Statuts</a>
                </div>
              )}
            </div>

            {/* Contact */}
            <a href="/fr/contact" className="hover:text-gray-300 no-underline">Contact</a>

            {/* FR / DE */}
            <div className="flex gap-4 text-xl mt-6">
              <a href="/fr" className="hover:text-gray-300">FR</a>
              <span>|</span>
              <a href="/de" className="hover:text-gray-300">DE</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
