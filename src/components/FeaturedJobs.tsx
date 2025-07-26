import { Link } from 'react-router-dom';
import { jobs, getRelativeTime } from '../data/jobs';
import { Briefcase, Clock, MapPin } from 'lucide-react';

export default function FeaturedJobs() {
  // Get featured jobs
  const featuredJobs = jobs.filter(job => job.featured).slice(0, 4);

  return (
    <section className="bg-[#111] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Jobs</h2>
          <Link
            to="/jobs"
            className="text-[#00ff66] hover:text-[#00cc55] font-medium transition-colors"
          >
            View all jobs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredJobs.map((job) => (
            <Link
              key={job.id}
              to={`/jobs/${job.id}`}
              className="block bg-[#161616] border border-[#222] rounded-lg p-6 hover:border-[#00ff66]/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#222] rounded-md flex items-center justify-center mr-4">
                    <span className="text-[#00ff66] font-bold">{job.company.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <p className="text-gray-400">{job.company}</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#00ff66]/10 text-[#00ff66]">
                  {job.type}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <div className="flex items-center text-sm text-gray-400">
                  <MapPin className="h-4 w-4 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Briefcase className="h-4 w-4 mr-1" />
                  {job.type}
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  {getRelativeTime(job.postedDate)}
                </div>
              </div>

              {job.salary && (
                <div className="mt-4">
                  <span className="text-white font-medium">{job.salary}</span>
                </div>
              )}

              <div className="mt-6 flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {job.requirements.slice(0, 2).map((req, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#222] text-gray-300"
                    >
                      {req.split(' ')[0]}
                    </span>
                  ))}
                </div>
                <span className="text-[#00ff66]">View Job →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
