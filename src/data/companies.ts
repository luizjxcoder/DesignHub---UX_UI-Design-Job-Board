import { Company } from '../types';

export const companies: Company[] = [
  {
    id: '1',
    name: 'Creatix',
    logo: 'https://mocha-cdn.com/01980b26-052b-75ac-b63b-c95d88960001/Rectangle.png',
    description: 'Creatix is a creative design agency that specializes in UX/UI design, branding, and digital product development. With over 10 years of experience, we help businesses transform their ideas into exceptional digital experiences.',
    website: 'https://creatix.design',
    location: 'San Francisco, CA',
    size: '50-100 employees',
    founded: '2013',
    industry: ['Design', 'Technology', 'Digital Agency']
  },
  {
    id: '2',
    name: 'DesignWave',
    logo: '/designwave-logo.svg',
    description: 'DesignWave is an award-winning digital design studio focused on creating beautiful, functional digital products. We combine aesthetics with usability to deliver exceptional user experiences.',
    website: 'https://designwave.co',
    location: 'New York, NY',
    size: '20-50 employees',
    founded: '2015',
    industry: ['Design', 'Digital Products', 'Creative Agency']
  },
  {
    id: '3',
    name: 'Innovate Digital',
    logo: '/innovate-logo.svg',
    description: 'Innovate Digital is a product design firm that helps startups and established companies create innovative digital products. We specialize in UX/UI design, product strategy, and design systems.',
    website: 'https://innovatedigital.co',
    location: 'Austin, TX',
    size: '10-20 employees',
    founded: '2018',
    industry: ['Product Design', 'UX/UI', 'Technology']
  },
  {
    id: '4',
    name: 'TechSolutions',
    logo: '/techsolutions-logo.svg',
    description: 'TechSolutions is a leading technology company that develops software products for businesses. We have a dedicated design team that creates user-centered digital experiences for our products and clients.',
    website: 'https://techsolutions.com',
    location: 'Seattle, WA',
    size: '200-500 employees',
    founded: '2010',
    industry: ['Technology', 'Software', 'Enterprise']
  }
];
