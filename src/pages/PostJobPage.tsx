import { useState } from 'react';

export default function PostJobPage() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
    remote: false,
    applicationEmail: '',
    applicationUrl: '',
    deadline: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the job posting to a backend
    alert('Job posted successfully! (This is a demo)');
  };

  return (
    <div className="bg-[#111] min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#161616] border border-[#222] rounded-lg p-8">
          <h1 className="text-3xl font-bold text-white mb-6">Post a Design Job</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                Job Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                placeholder="e.g. Senior UX Designer"
                className="w-full px-3 py-2 rounded-md bg-[#222] border border-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:border-transparent"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                placeholder="e.g. DesignWave"
                className="w-full px-3 py-2 rounded-md bg-[#222] border border-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:border-transparent"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  placeholder="e.g. San Francisco, CA"
                  className="w-full px-3 py-2 rounded-md bg-[#222] border border-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:border-transparent"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-1">
                  Job Type *
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  className="w-full px-3 py-2 rounded-md bg-[#222] border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:border-transparent"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-300 mb-1">
                Salary Range
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                placeholder="e.g. $80,000 - $100,000"
                className="w-full px-3 py-2 rounded-md bg-[#222] border border-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:border-transparent"
                value={formData.salary}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <div className="flex items-center mb-1">
                <input
                  type="checkbox"
                  id="remote"
                  name="remote"
                  className="h-4 w-4 text-[#00ff66] rounded bg-[#222] border-[#333] focus:ring-[#00ff66]"
                  checked={formData.remote}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="remote" className="ml-2 block text-sm font-medium text-gray-300">
                  Remote Position
                </label>
              </div>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                Job Description *
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                required
                placeholder="Describe the job responsibilities, requirements, and other details..."
                className="w-full px-3 py-2 rounded-md bg-[#222] border border-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:border-transparent"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="applicationEmail" className="block text-sm font-medium text-gray-300 mb-1">
                  Application Email
                </label>
                <input
                  type="email"
                  id="applicationEmail"
                  name="applicationEmail"
                  placeholder="e.g. jobs@company.com"
                  className="w-full px-3 py-2 rounded-md bg-[#222] border border-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:border-transparent"
                  value={formData.applicationEmail}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="applicationUrl" className="block text-sm font-medium text-gray-300 mb-1">
                  Application URL
                </label>
                <input
                  type="url"
                  id="applicationUrl"
                  name="applicationUrl"
                  placeholder="e.g. https://company.com/careers"
                  className="w-full px-3 py-2 rounded-md bg-[#222] border border-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:border-transparent"
                  value={formData.applicationUrl}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="deadline" className="block text-sm font-medium text-gray-300 mb-1">
                Application Deadline
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                className="w-full px-3 py-2 rounded-md bg-[#222] border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:border-transparent"
                value={formData.deadline}
                onChange={handleChange}
              />
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#00ff66] hover:bg-[#00cc55] text-black px-6 py-3 rounded-md font-medium transition-colors"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Need help? <a href="#" className="text-[#00ff66]">Contact our support team</a>
          </p>
        </div>
      </div>
    </div>
  );
}
