export default function Navbar() {
  return (
    <nav className="border-b border-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="w-16 h-16">
              <img 
                src="/mememint-logo.png" 
                alt="MEMEMINT Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition-colors">Home</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition-colors">Features</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition-colors">About</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
