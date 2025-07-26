import HeroSection from '../components/HeroSection';
import FeaturedJobs from '../components/FeaturedJobs';
import FeaturedCompanies from '../components/FeaturedCompanies';
import CallToAction from '../components/CallToAction';

export default function HomePage() {
  return (
    <div className="bg-[#111] min-h-screen">
      <HeroSection />
      <FeaturedJobs />
      <FeaturedCompanies />
      <CallToAction />
    </div>
  );
}
