import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { jobs } from '../data/jobs';
import { Job, FilterOptions } from '../types';
import JobCard from '../components/JobCard';
import JobFilters from '../components/JobFilters';

export default function JobsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [filters, setFilters] = useState<FilterOptions>({
    jobType: [],
    remote: null,
    experience: [],
    location: ''
  });
  
  const handleSearch = (query: string) => {
    setSearchParams({ q: query });
  };
  
  useEffect(() => {
    // Filter jobs based on search query and filters
    let results = jobs;
    
    const query = searchParams.get('q');
    if (query) {
      const lowercasedQuery = query.toLowerCase();
      results = results.filter(
        job => 
          job.title.toLowerCase().includes(lowercasedQuery) ||
          job.company.toLowerCase().includes(lowercasedQuery) ||
          job.description.toLowerCase().includes(lowercasedQuery)
      );
    }
    
    if (filters.jobType.length > 0) {
      results = results.filter(job => filters.jobType.includes(job.type));
    }
    
    if (filters.remote === true) {
      results = results.filter(job => job.remote === true);
    }
    
    if (filters.experience.length > 0) {
      // This is a simplified implementation as we don't have experience level in our job data
      // In a real app, you would filter based on actual experience level data
      results = results;
    }
    
    if (filters.location) {
      results = results.filter(
        job => job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    setFilteredJobs(results);
  }, [searchParams, filters]);

  return (
    <div className="bg-[#111] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Find Design Jobs</h1>
          <p className="text-gray-400 mt-2">
            {filteredJobs.length} jobs available
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <JobFilters 
              filters={filters} 
              setFilters={setFilters} 
              onSearch={handleSearch} 
            />
          </div>
          
          <div className="w-full lg:w-3/4">
            {initialQuery && (
              <div className="mb-6">
                <h2 className="text-xl text-white">
                  Search results for <span className="text-[#00ff66] font-semibold">"{initialQuery}"</span>
                </h2>
              </div>
            )}
            
            {filteredJobs.length === 0 ? (
              <div className="bg-[#161616] border border-[#222] rounded-lg p-8 text-center">
                <h3 className="text-xl font-medium text-white mb-2">No jobs found</h3>
                <p className="text-gray-400 mb-4">
                  Try adjusting your search or filter criteria to find more jobs.
                </p>
                <button
                  onClick={() => {
                    setFilters({
                      jobType: [],
                      remote: null,
                      experience: [],
                      location: ''
                    });
                    setSearchParams({});
                  }}
                  className="text-[#00ff66] hover:text-[#00cc55] transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
