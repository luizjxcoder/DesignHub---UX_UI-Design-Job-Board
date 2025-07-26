import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-[#111] text-white border-b border-[#222] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-[#00ff66] text-2xl font-extrabold">
                DesignHub
              </div>
              <div className="h-2 w-2 rounded-full bg-[#00ff66] ml-1 animate-pulse"></div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium hover:text-[#00ff66] transition-colors ${
                isActive('/') ? 'text-[#00ff66]' : 'text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/jobs"
              className={`font-medium hover:text-[#00ff66] transition-colors ${
                isActive('/jobs') ? 'text-[#00ff66]' : 'text-gray-300'
              }`}
            >
              Jobs
            </Link>
            <Link
              to="/companies"
              className={`font-medium hover:text-[#00ff66] transition-colors ${
                isActive('/companies') ? 'text-[#00ff66]' : 'text-gray-300'
              }`}
            >
              Companies
            </Link>
            <Link
              to="/post-job"
              className="bg-[#00ff66] hover:bg-[#00cc55] text-black px-4 py-2 rounded-md font-medium transition-colors"
            >
              Post a Job
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#111] border-t border-[#222]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? 'bg-[#222] text-[#00ff66]' 
                  : 'text-gray-300 hover:bg-[#222] hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/jobs"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/jobs') 
                  ? 'bg-[#222] text-[#00ff66]' 
                  : 'text-gray-300 hover:bg-[#222] hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Jobs
            </Link>
            <Link
              to="/companies"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/companies') 
                  ? 'bg-[#222] text-[#00ff66]' 
                  : 'text-gray-300 hover:bg-[#222] hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Companies
            </Link>
            <Link
              to="/post-job"
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#00ff66] text-black hover:bg-[#00cc55]"
              onClick={() => setIsMenuOpen(false)}
            >
              Post a Job
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
