import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { jobs, getRelativeTime } from '../data/jobs';
import { Bookmark, Briefcase, Building, Clock, Globe, Heart, MapPin, Share2 } from 'lucide-react';

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [isSaved, setIsSaved] = useState(false);
  
  const job = jobs.find(job => job.id === id);
  
  if (!job) {
    return (
      <div className="bg-[#111] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#161616] border border-[#222] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Job Not Found</h2>
            <p className="text-gray-400 mb-6">
              The job you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/jobs"
              className="bg-[#00ff66] hover:bg-[#00cc55] text-black px-4 py-2 rounded-md font-medium transition-colors"
            >
              Browse All Jobs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const toggleSaveJob = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="bg-[#111] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/jobs"
            className="text-[#00ff66] hover:text-[#00cc55] transition-colors"
          >
            ← Back to jobs
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="bg-[#161616] border border-[#222] rounded-lg p-8 mb-8">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-[#222] rounded-md flex items-center justify-center mr-4">
                    <span className="text-[#00ff66] font-bold text-2xl">{job.company.charAt(0)}</span>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{job.title}</h1>
                    <p className="text-xl text-gray-400">{job.company}</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#00ff66]/10 text-[#00ff66]">
                  {job.type}
                </span>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-5 w-5 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-400">
                  <Clock className="h-5 w-5 mr-2" />
                  {getRelativeTime(job.postedDate)}
                </div>
                <div className="flex items-center text-gray-400">
                  <Building className="h-5 w-5 mr-2" />
                  {job.company}
                </div>
                {job.remote && (
                  <div className="flex items-center text-gray-400">
                    <Globe className="h-5 w-5 mr-2" />
                    Remote
                  </div>
                )}
              </div>
              
              {job.salary && (
                <div className="mt-6 p-4 bg-[#222] rounded-lg">
                  <h3 className="text-white font-medium mb-1">Salary</h3>
                  <p className="text-[#00ff66] text-xl font-bold">{job.salary}</p>
                </div>
              )}
              
              <div className="mt-6 flex items-center space-x-3">
                <button className="bg-[#00ff66] hover:bg-[#00cc55] text-black px-6 py-3 rounded-md font-medium transition-colors flex-1">
                  Apply Now
                </button>
                <button
                  onClick={toggleSaveJob}
                  className={`p-3 rounded-md border ${
                    isSaved 
                      ? 'border-[#00ff66] text-[#00ff66] bg-[#00ff66]/10' 
                      : 'border-[#333] text-gray-400 hover:border-[#00ff66] hover:text-[#00ff66]'
                  } transition-colors`}
                >
                  {isSaved ? <Bookmark className="h-5 w-5 fill-current" /> : <Bookmark className="h-5 w-5" />}
                </button>
                <button className="p-3 rounded-md border border-[#333] text-gray-400 hover:border-[#00ff66] hover:text-[#00ff66] transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="bg-[#161616] border border-[#222] rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Job Description</h2>
              <div className="prose prose-invert prose-green max-w-none">
                <p className="text-gray-300 mb-6">{job.description}</p>
                
                <h3 className="text-xl font-bold text-white mb-4">Responsibilities</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-gray-300">{responsibility}</li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-bold text-white mb-4">Requirements</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="text-gray-300">{requirement}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-[#161616] border border-[#222] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">How to Apply</h2>
              <p className="text-gray-300 mb-6">
                To apply for this position, please click the "Apply Now" button and follow the instructions to submit your application. Make sure to include your resume and a cover letter explaining why you're a good fit for this role.
              </p>
              <p className="text-gray-300 mb-6">
                Application deadline: {job.applicationDeadline ? new Date(job.applicationDeadline).toLocaleDateString() : 'Open until filled'}
              </p>
              <button className="bg-[#00ff66] hover:bg-[#00cc55] text-black px-6 py-3 rounded-md font-medium transition-colors w-full">
                Apply Now
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <div className="bg-[#161616] border border-[#222] rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">About {job.company}</h3>
              <p className="text-gray-300 mb-4">
                {job.company} is a leading company in the design industry, known for its innovative approach to UX/UI design and creative solutions.
              </p>
              <a
                href="#"
                className="text-[#00ff66] hover:text-[#00cc55] transition-colors flex items-center"
              >
                <Globe className="h-4 w-4 mr-2" />
                Visit website
              </a>
            </div>
            
            <div className="bg-[#161616] border border-[#222] rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Similar Jobs</h3>
              <div className="space-y-4">
                {jobs
                  .filter(j => j.id !== job.id && j.title.includes(job.title.split(' ')[0]))
                  .slice(0, 3)
                  .map(similarJob => (
                    <Link
                      key={similarJob.id}
                      to={`/jobs/${similarJob.id}`}
                      className="block p-4 rounded-lg bg-[#222] hover:bg-[#333] transition-colors"
                    >
                      <h4 className="font-medium text-white">{similarJob.title}</h4>
                      <p className="text-sm text-gray-400">{similarJob.company}</p>
                      <div className="flex items-center mt-2 text-xs text-gray-400">
                        <MapPin className="h-3 w-3 mr-1" />
                        {similarJob.location}
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#222] to-[#111] border border-[#333] rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-10 w-10 text-[#00ff66] mr-3" />
                <h3 className="text-xl font-bold text-white">Job Alert</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Get notified when similar {job.title} jobs are posted
              </p>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-md bg-[#222] border border-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:border-transparent"
                />
              </div>
              <button className="w-full bg-[#00ff66] hover:bg-[#00cc55] text-black px-4 py-2 rounded-md font-medium transition-colors">
                Create Job Alert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
