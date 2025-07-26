import { useState } from 'react';
import { FilterOptions } from '../types';
import { Search, X } from 'lucide-react';

interface JobFiltersProps {
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
  onSearch: (query: string) => void;
}

export default function JobFilters({ filters, setFilters, onSearch }: JobFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const toggleJobType = (type: string) => {
    const newJobTypes = filters.jobType.includes(type)
      ? filters.jobType.filter(t => t !== type)
      : [...filters.jobType, type];
    
    setFilters({
      ...filters,
      jobType: newJobTypes
    });
  };

  const toggleExperience = (level: string) => {
    const newExperience = filters.experience.includes(level)
      ? filters.experience.filter(e => e !== level)
      : [...filters.experience, level];
    
    setFilters({
      ...filters,
      experience: newExperience
    });
  };

  const toggleRemote = () => {
    setFilters({
      ...filters,
      remote: filters.remote === true ? null : true
    });
  };

  const clearFilters = () => {
    setFilters({
      jobType: [],
      remote: null,
      experience: [],
      location: ''
    });
    setSearchQuery('');
  };

  const hasActiveFilters = 
    filters.jobType.length > 0 || 
    filters.experience.length > 0 || 
    filters.remote !== null || 
    filters.location !== '';

  return (
    <div className="bg-[#161616] border border-[#222] rounded-lg p-6">
      <form onSubmit={handleSearchSubmit} className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search jobs..."
            className="block w-full pl-10 pr-3 py-2 rounded-md bg-[#222] border-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>

      <div className="space-y-6">
        <div>
          <h3 className="text-white font-medium mb-3">Job Type</h3>
          <div className="space-y-2">
            {['Full-time', 'Part-time', 'Contract', 'Freelance'].map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-[#00ff66] rounded bg-[#222] border-[#333] focus:ring-[#00ff66]"
                  checked={filters.jobType.includes(type)}
                  onChange={() => toggleJobType(type)}
                />
                <span className="ml-2 text-gray-300">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">Remote</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-[#00ff66] rounded bg-[#222] border-[#333] focus:ring-[#00ff66]"
              checked={filters.remote === true}
              onChange={toggleRemote}
            />
            <span className="ml-2 text-gray-300">Remote only</span>
          </label>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">Experience</h3>
          <div className="space-y-2">
            {['Entry Level', 'Mid Level', 'Senior Level'].map((level) => (
              <label key={level} className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-[#00ff66] rounded bg-[#222] border-[#333] focus:ring-[#00ff66]"
                  checked={filters.experience.includes(level)}
                  onChange={() => toggleExperience(level)}
                />
                <span className="ml-2 text-gray-300">{level}</span>
              </label>
            ))}
          </div>
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center text-[#00ff66] hover:text-[#00cc55] transition-colors"
          >
            <X className="h-4 w-4 mr-1" />
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}
