import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="bg-[#111] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#222] to-[#111] border border-[#333]">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-[#00ff66]/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 rounded-full bg-[#00ff66]/10 blur-3xl"></div>
          
          <div className="relative z-10 px-6 py-12 md:p-12 flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to find your next design opportunity?
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Join thousands of designers who have found their dream jobs through DesignHub. Create your profile today and get matched with top companies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/create-profile"
                  className="bg-[#00ff66] hover:bg-[#00cc55] text-black px-6 py-3 rounded-md font-medium transition-colors text-center"
                >
                  Create Profile
                </Link>
                <Link
                  to="/post-job"
                  className="bg-transparent border border-[#00ff66] text-[#00ff66] hover:bg-[#00ff66]/10 px-6 py-3 rounded-md font-medium transition-colors text-center"
                >
                  Post a Job
                </Link>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#00ff66]/20 to-transparent blur-xl rounded-full"></div>
                <div className="relative w-48 h-48 rounded-full bg-[#222] border border-[#333] flex items-center justify-center">
                  <div className="text-[#00ff66] text-6xl font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
