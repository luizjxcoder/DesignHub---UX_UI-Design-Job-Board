import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/jobs?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="relative bg-[#111] text-white">
      <div className="absolute inset-0 bg-[#111] z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#111] via-[#111] to-[#00ff66]/10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#00ff66]/5 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-[#00ff66]/10 blur-xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Next <span className="text-[#00ff66]">Design</span> Job
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Connect with top companies hiring UX/UI designers, product designers, and creative professionals.
          </p>
          
          <form onSubmit={handleSearch} className="flex w-full max-w-2xl mb-10">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for jobs, companies, or keywords..."
                className="block w-full pl-10 pr-3 py-4 rounded-l-md bg-[#222] border-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-[#00ff66] hover:bg-[#00cc55] text-black px-6 py-4 rounded-r-md font-medium transition-colors flex items-center"
            >
              Search
            </button>
          </form>
          
          <div className="flex flex-wrap gap-3 text-sm text-gray-400">
            <span>Popular searches:</span>
            <Link to="/jobs?q=ux+designer" className="text-[#00ff66] hover:underline">UX Designer</Link>
            <Link to="/jobs?q=product+designer" className="text-[#00ff66] hover:underline">Product Designer</Link>
            <Link to="/jobs?q=ui+designer" className="text-[#00ff66] hover:underline">UI Designer</Link>
            <Link to="/jobs?q=interaction+designer" className="text-[#00ff66] hover:underline">Interaction Designer</Link>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 bg-[#161616] border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-white mr-2">2000+</div>
                <div className="text-gray-400">Design Jobs</div>
              </div>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-white mr-2">500+</div>
                <div className="text-gray-400">Companies</div>
              </div>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-white mr-2">10k+</div>
                <div className="text-gray-400">Designers</div>
              </div>
            </div>
            
            <Link
              to="/jobs"
              className="flex items-center text-[#00ff66] hover:text-[#00cc55] transition-colors"
            >
              <span className="mr-2">Browse all jobs</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
