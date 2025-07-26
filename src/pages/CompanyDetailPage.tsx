import { useParams, Link } from 'react-router-dom';
import { companies } from '../data/companies';
import { jobs } from '../data/jobs';
import { Briefcase, Calendar, Globe, MapPin, Users } from 'lucide-react';
import JobCard from '../components/JobCard';

export default function CompanyDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  const company = companies.find(company => company.id === id);
  const companyJobs = jobs.filter(job => job.company === company?.name);
  
  if (!company) {
    return (
      <div className="bg-[#111] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#161616] border border-[#222] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Company Not Found</h2>
            <p className="text-gray-400 mb-6">
              The company you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/companies"
              className="bg-[#00ff66] hover:bg-[#00cc55] text-black px-4 py-2 rounded-md font-medium transition-colors"
            >
              Browse All Companies
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#111] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/companies"
            className="text-[#00ff66] hover:text-[#00cc55] transition-colors"
          >
            ← Back to companies
          </Link>
        </div>
        
        <div className="bg-[#161616] border border-[#222] rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-24 h-24 bg-[#222] rounded-md flex items-center justify-center">
              {company.logo ? (
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="w-16 h-16 object-contain" 
                />
              ) : (
                <span className="text-[#00ff66] font-bold text-4xl">{company.name.charAt(0)}</span>
              )}
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">{company.name}</h1>
              <div className="flex flex-wrap gap-4 text-gray-400">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  {company.location}
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-1" />
                  {company.size}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-1" />
                  Founded {company.founded}
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-1" />
                  {companyJobs.length} open positions
                </div>
              </div>
            </div>
            
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00ff66] hover:bg-[#00cc55] text-black px-6 py-3 rounded-md font-medium transition-colors flex items-center"
            >
              <Globe className="h-5 w-5 mr-2" />
              Visit Website
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-[#161616] border border-[#222] rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">About {company.name}</h2>
              <div className="prose prose-invert prose-green max-w-none">
                <p className="text-gray-300 mb-6">{company.description}</p>
                <p className="text-gray-300">
                  With a strong focus on {company.industry.join(', ')}, {company.name} has established itself as a leader in the design industry since {company.founded}. Our team of talented designers and developers work together to create exceptional digital experiences for our clients.
                </p>
              </div>
            </div>
            
            <div className="bg-[#161616] border border-[#222] rounded-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Open Positions</h2>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#00ff66]/10 text-[#00ff66]">
                  {companyJobs.length} jobs
                </span>
              </div>
              
              {companyJobs.length > 0 ? (
                <div className="space-y-6">
                  {companyJobs.map(job => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400 mb-4">No open positions at the moment.</p>
                  <p className="text-gray-300">Check back later for new opportunities!</p>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <div className="bg-[#161616] border border-[#222] rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Company Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Industry</h4>
                  <p className="text-white">{company.industry.join(', ')}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Company Size</h4>
                  <p className="text-white">{company.size}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Headquarters</h4>
                  <p className="text-white">{company.location}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Founded</h4>
                  <p className="text-white">{company.founded}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Website</h4>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ff66] hover:text-[#00cc55] transition-colors"
                  >
                    {company.website.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#222] to-[#111] border border-[#333] rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Get Job Alerts</h3>
              <p className="text-gray-300 mb-4">
                Be the first to know about new job openings at {company.name}
              </p>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-md bg-[#222] border border-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:border-transparent"
                />
              </div>
              <button className="w-full bg-[#00ff66] hover:bg-[#00cc55] text-black px-4 py-2 rounded-md font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
