import { Link } from 'react-router-dom';
import { companies } from '../data/companies';
import { Building, MapPin, Users } from 'lucide-react';

export default function FeaturedCompanies() {
  return (
    <section className="bg-[#161616] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Companies</h2>
          <Link
            to="/companies"
            className="text-[#00ff66] hover:text-[#00cc55] font-medium transition-colors"
          >
            View all companies
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company) => (
            <Link
              key={company.id}
              to={`/companies/${company.id}`}
              className="block bg-[#111] border border-[#222] rounded-lg p-6 hover:border-[#00ff66]/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#222] rounded-md flex items-center justify-center mr-4">
                  {company.logo ? (
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      className="w-8 h-8 object-contain" 
                    />
                  ) : (
                    <span className="text-[#00ff66] font-bold">{company.name.charAt(0)}</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white">{company.name}</h3>
              </div>

              <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                {company.description.substring(0, 100)}...
              </p>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <Building className="h-4 w-4 mr-2" />
                  {company.industry[0]}
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Users className="h-4 w-4 mr-2" />
                  {company.size}
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  {company.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
