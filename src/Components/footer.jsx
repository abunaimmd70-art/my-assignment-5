export default function Footer() {
  const brandGradient = "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600";

  return (
    <footer className="border-t border-gray-100 bg-white mt-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-gray-100">
          
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-lg ${brandGradient} flex items-center justify-center text-white font-bold text-xs`}>
                DS
              </div>
              <span className={`text-lg font-bold bg-clip-text text-transparent ${brandGradient}`}>
                Dev Stack
              </span>
            </div>
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources to develop modern software faster and smarter.
            </p>
            <div className="flex gap-4 text-xs font-medium text-gray-500 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">LinkedIn</a>
            </div>
          </div>

         
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase">Product</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#technologies" className="hover:text-pink-600">Technologies</a></li>
              <li><a href="#projects" className="hover:text-pink-600">Projects</a></li>
              <li><a href="#home" className="hover:text-pink-600">Integrations</a></li>
            </ul>
          </div>

          
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase">Company</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#about" className="hover:text-pink-600">About Us</a></li>
              <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
              <li><a href="#careers" className="hover:text-pink-600">Careers</a></li>
            </ul>
          </div>

         
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase">Legal</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#privacy" className="hover:text-pink-600">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-pink-600">Terms of Service</a></li>
            </ul>
          </div>

        </div>

      
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} DevStack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-gray-600">Privacy</a>
            <a href="#terms" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}