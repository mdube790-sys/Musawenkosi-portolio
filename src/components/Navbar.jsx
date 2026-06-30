import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-light z-50 border-b border-secondary/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-secondary">
          <span className="text-primary">M</span>usa
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-secondary hover:text-primary font-semibold text-sm uppercase tracking-wide transition-colors">Home</a>
          <a href="#about" className="text-secondary hover:text-primary font-semibold text-sm uppercase tracking-wide transition-colors">About</a>
          <a href="#skills" className="text-secondary hover:text-primary font-semibold text-sm uppercase tracking-wide transition-colors">Skills</a>
          <a href="#services" className="text-secondary hover:text-primary font-semibold text-sm uppercase tracking-wide transition-colors">Services</a>
          <a href="#case-studies" className="text-secondary hover:text-primary font-semibold text-sm uppercase tracking-wide transition-colors">Case Studies</a>
          <a href="#contact" className="bg-primary text-white px-6 py-2 rounded-sm font-semibold text-sm uppercase tracking-wide hover:bg-primary/90 transition-colors">Contact</a>
        </div>

        <button 
          className="md:hidden text-secondary text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-light border-t border-secondary/10">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-secondary hover:text-primary font-semibold text-sm uppercase tracking-wide" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="text-secondary hover:text-primary font-semibold text-sm uppercase tracking-wide" onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" className="text-secondary hover:text-primary font-semibold text-sm uppercase tracking-wide" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#services" className="text-secondary hover:text-primary font-semibold text-sm uppercase tracking-wide" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#case-studies" className="text-secondary hover:text-primary font-semibold text-sm uppercase tracking-wide" onClick={() => setIsOpen(false)}>Case Studies</a>
            <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-sm font-semibold text-sm uppercase tracking-wide text-center" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
