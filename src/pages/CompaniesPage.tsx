import { useState } from 'react';
import { Link } from 'react-router-dom';
import { companies } from '../data/companies';
import { Building, MapPin, Search, Users } from 'lucide-react';

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCompanies = searchQuery
    ? companies.filter(company => 
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.industry.some(ind => ind.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : companies;

  return (
    <div className="bg-[#111] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Design Companies</h1>
          <p className="text-gray-400 mt-2">
            Discover top companies hiring designers
          </p>
        </div>
        
        <div className="mb-8 max-w-xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search companies..."
              className="block w-full pl-10 pr-3 py-3 rounded-md bg-[#222] border-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <Link
              key={company.id}
              to={`/companies/${company.id}`}
              className="block bg-[#161616] border border-[#222] rounded-lg p-6 hover:border-[#00ff66]/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-[#222] rounded-md flex items-center justify-center mr-4">
                  {company.logo ? (
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      className="w-10 h-10 object-contain" 
                    />
                  ) : (
                    <span className="text-[#00ff66] font-bold text-2xl">{company.name.charAt(0)}</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white">{company.name}</h3>
              </div>

              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {company.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-400">
                  <Building className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{company.industry.join(', ')}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                  {company.size}
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  {company.location}
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-[#222] flex justify-between items-center">
                <div className="text-sm text-gray-400">
                  Founded {company.founded}
                </div>
                <span className="text-[#00ff66]">View Company →</span>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredCompanies.length === 0 && (
          <div className="bg-[#161616] border border-[#222] rounded-lg p-8 text-center">
            <h3 className="text-xl font-medium text-white mb-2">No companies found</h3>
            <p className="text-gray-400 mb-4">
              Try adjusting your search criteria to find companies.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#00ff66] hover:text-[#00cc55] transition-colors"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
