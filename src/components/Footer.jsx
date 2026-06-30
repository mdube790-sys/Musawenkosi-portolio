function Footer() {
  return (
    <footer className="bg-light py-8 border-t border-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-serif font-bold text-secondary mb-4 md:mb-0">
            <span className="text-primary">M</span>usa
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-secondary hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">Twitter</a>
          </div>

          <p className="text-secondary/60 text-sm">
            © 2024 Musa Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
