import { Job } from '../types';
import { formatDistance } from 'date-fns';

const today = new Date();
const twoWeeksAgo = new Date(today);
twoWeeksAgo.setDate(today.getDate() - 14);
const oneWeekAgo = new Date(today);
oneWeekAgo.setDate(today.getDate() - 7);
const threeDaysAgo = new Date(today);
threeDaysAgo.setDate(today.getDate() - 3);
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0];
};

const getRelativeTimeString = (dateString: string) => {
  const date = new Date(dateString);
  return formatDistance(date, new Date(), { addSuffix: true });
};

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior UX Designer',
    company: 'Creatix',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    description: 'We are looking for a Senior UX Designer to join our team and help create exceptional user experiences for our clients. You will be responsible for the design of user interfaces and user experiences for web and mobile applications.',
    requirements: [
      '5+ years of experience in UX design',
      'Strong portfolio demonstrating UX processes',
      'Proficiency with design tools (Figma, Sketch, Adobe XD)',
      'Experience with user research and testing',
      'Excellent communication skills'
    ],
    responsibilities: [
      'Lead UX design for key projects',
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and high-fidelity designs',
      'Collaborate with product managers and developers',
      'Mentor junior designers'
    ],
    postedDate: formatDate(oneWeekAgo),
    applicationDeadline: formatDate(new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000)),
    remote: true,
    featured: true
  },
  {
    id: '2',
    title: 'UI Designer',
    company: 'DesignWave',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90,000 - $110,000',
    description: 'DesignWave is seeking a talented UI Designer to create stunning visual designs for our digital products. You will work closely with UX designers and developers to create visually appealing and functional user interfaces.',
    requirements: [
      '3+ years of UI design experience',
      'Strong portfolio of UI design work',
      'Proficiency with Figma and Adobe Creative Suite',
      'Understanding of design systems and component libraries',
      'Knowledge of HTML/CSS is a plus'
    ],
    responsibilities: [
      'Create visually appealing UI designs',
      'Develop and maintain design systems',
      'Collaborate with UX designers and developers',
      'Create design assets for marketing materials',
      'Stay up-to-date with design trends'
    ],
    postedDate: formatDate(threeDaysAgo),
    applicationDeadline: formatDate(new Date(today.getTime() + 21 * 24 * 60 * 60 * 1000)),
    remote: false,
    featured: true
  },
  {
    id: '3',
    title: 'Product Designer',
    company: 'Innovate Digital',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$100,000 - $130,000',
    description: 'Innovate Digital is looking for a Product Designer to join our growing team. You will be responsible for the end-to-end design process, from ideation to implementation, working closely with product managers and engineers.',
    requirements: [
      '4+ years of product design experience',
      'Experience with user research and testing',
      'Proficiency with design and prototyping tools',
      'Understanding of design thinking methodology',
      'Excellent problem-solving skills'
    ],
    responsibilities: [
      'Lead the design process for new features',
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Collaborate with product managers and engineers',
      'Iterate on designs based on user feedback'
    ],
    postedDate: formatDate(yesterday),
    applicationDeadline: formatDate(new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000)),
    remote: true,
    featured: false
  },
  {
    id: '4',
    title: 'UX/UI Designer',
    company: 'TechSolutions',
    location: 'Seattle, WA',
    type: 'Contract',
    salary: '$70-90/hour',
    description: 'TechSolutions is seeking a UX/UI Designer for a 6-month contract with possibility of extension. You will work on designing user interfaces for web and mobile applications, creating wireframes, prototypes, and visual designs.',
    requirements: [
      '2+ years of UX/UI design experience',
      'Strong portfolio demonstrating UI/UX skills',
      'Proficiency with design tools (Figma, Sketch)',
      'Understanding of user-centered design principles',
      'Ability to work independently'
    ],
    responsibilities: [
      'Create wireframes and prototypes',
      'Design user interfaces for web and mobile applications',
      'Conduct usability testing',
      'Collaborate with product managers and developers',
      'Iterate on designs based on feedback'
    ],
    postedDate: formatDate(twoWeeksAgo),
    applicationDeadline: formatDate(new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)),
    remote: true,
    featured: false
  },
  {
    id: '5',
    title: 'Interaction Designer',
    company: 'Creatix',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    salary: '$110,000 - $140,000',
    description: 'Creatix is looking for an Interaction Designer to create engaging and intuitive user experiences. You will focus on how users interact with our products, creating animations, transitions, and micro-interactions that enhance the user experience.',
    requirements: [
      '3+ years of interaction design experience',
      'Strong portfolio demonstrating motion and interaction design',
      'Proficiency with Principle, After Effects, or similar tools',
      'Understanding of user psychology and behavior',
      'Experience with prototyping tools'
    ],
    responsibilities: [
      'Design animations, transitions, and micro-interactions',
      'Create interactive prototypes',
      'Collaborate with UX designers and developers',
      'Document interaction specifications',
      'Test and iterate on interactions based on user feedback'
    ],
    postedDate: formatDate(yesterday),
    applicationDeadline: formatDate(new Date(today.getTime() + 21 * 24 * 60 * 60 * 1000)),
    remote: false,
    featured: true
  },
  {
    id: '6',
    title: 'Junior UI Designer',
    company: 'DesignWave',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$70,000 - $85,000',
    description: 'DesignWave is seeking a Junior UI Designer to join our creative team. This is an excellent opportunity for a designer early in their career to grow and develop their skills while working on real-world projects.',
    requirements: [
      '1-2 years of UI design experience',
      'Design education or equivalent experience',
      'Proficiency with design tools (Figma, Sketch)',
      'Understanding of design principles',
      'Eagerness to learn and grow'
    ],
    responsibilities: [
      'Create UI elements and visual designs',
      'Assist senior designers with projects',
      'Maintain design systems and style guides',
      'Prepare design assets for development',
      'Participate in design critiques and reviews'
    ],
    postedDate: formatDate(threeDaysAgo),
    applicationDeadline: formatDate(new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000)),
    remote: false,
    featured: false
  },
  {
    id: '7',
    title: 'UX Researcher',
    company: 'Innovate Digital',
    location: 'Remote',
    type: 'Full-time',
    salary: '$95,000 - $120,000',
    description: 'Innovate Digital is looking for a UX Researcher to help us understand user needs and behaviors. You will plan and conduct user research studies, analyze findings, and provide insights to inform product decisions.',
    requirements: [
      '3+ years of UX research experience',
      'Experience with various research methodologies',
      'Strong analytical and problem-solving skills',
      'Excellent communication and presentation skills',
      'Ability to translate research findings into actionable insights'
    ],
    responsibilities: [
      'Plan and conduct user research studies',
      'Analyze research data and identify patterns',
      'Present research findings to stakeholders',
      'Collaborate with designers and product managers',
      'Advocate for user-centered design decisions'
    ],
    postedDate: formatDate(oneWeekAgo),
    applicationDeadline: formatDate(new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000)),
    remote: true,
    featured: false
  },
  {
    id: '8',
    title: 'Senior Product Designer',
    company: 'TechSolutions',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$130,000 - $160,000',
    description: 'TechSolutions is seeking a Senior Product Designer to lead design initiatives for our flagship products. You will be responsible for the end-to-end design process, from research to implementation, working closely with cross-functional teams.',
    requirements: [
      '6+ years of product design experience',
      'Experience leading design initiatives',
      'Strong portfolio demonstrating end-to-end design process',
      'Experience with design systems',
      'Excellent leadership and communication skills'
    ],
    responsibilities: [
      'Lead design initiatives for key products',
      'Mentor junior designers',
      'Collaborate with product managers and engineers',
      'Establish design standards and processes',
      'Present design work to executives and stakeholders'
    ],
    postedDate: formatDate(twoWeeksAgo),
    applicationDeadline: formatDate(new Date(today.getTime() + 21 * 24 * 60 * 60 * 1000)),
    remote: false,
    featured: true
  }
];

export const getRelativeTime = (dateString: string) => getRelativeTimeString(dateString);
