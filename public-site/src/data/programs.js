// SCAiL's eight courses, bundled into three pathways. A pathway is the order we'd
// suggest someone take things in; any course can still be requested on its own.

export const pathways = [
  {
    id: 'start',
    name: 'Start Here',
    tagline: 'For anyone who has never touched AI — or doesn’t trust it yet.',
    color: 'sea',
    outcome: 'Leave knowing what AI is, how to use it for everyday tasks, and how to spot when it’s being used against you.',
    courses: ['ai-101', 'ai-safety'],
  },
  {
    id: 'work',
    name: 'AI at Work',
    tagline: 'Practical skills for the job you have, the job you want, or the business you run.',
    color: 'sun',
    outcome: 'Leave with tools you can use on Monday morning, whether that’s at a desk, a register, or a farm.',
    courses: ['ai-for-your-job', 'small-business', 'agriculture'],
  },
  {
    id: 'lead',
    name: 'Lead & Build',
    tagline: 'For young builders and the people who will teach and lead everyone else.',
    color: 'coral',
    outcome: 'Leave having built something real, or ready to bring AI education to your own community.',
    courses: ['youth-lab', 'leadership', 'train-the-trainer'],
  },
]

export const courses = {
  'ai-101': {
    title: 'AI 101: What Is AI and Why Should I Care?',
    short: 'AI 101',
    level: 'Beginner',
    format: 'In person',
    duration: '90 minutes',
    audience: 'Anyone, any age, zero experience',
    description:
      'Your first step into AI. See what it actually is with hands-on demos and walk away knowing how to use a chatbot for real tasks. No jargon, no code.',
    modules: ['What AI actually is, in plain language', 'AI you already use every day', 'Hands-on chatbot demo', 'What AI can and can’t do', 'Open Q&A'],
  },
  'ai-safety': {
    title: 'AI Safety & Digital Literacy',
    short: 'AI Safety',
    level: 'Beginner',
    format: 'In person',
    duration: '2 hours',
    audience: 'Everyone, especially seniors and caregivers',
    description:
      'Protect yourself and your family. Learn to spot AI-generated scams and deepfakes, safeguard your personal data, and know when not to trust AI.',
    modules: ['Recognizing AI scams and voice clones', 'Deepfakes and misinformation', 'Protecting personal data', 'Using AI tools safely'],
  },
  'ai-for-your-job': {
    title: 'AI for Your Job',
    short: 'AI for Your Job',
    level: 'Beginner',
    format: 'In person',
    duration: 'Half day',
    audience: 'Working adults and job seekers',
    description:
      'AI tools that make you better at the job you have, in healthcare, retail, admin, or the trades. Build a stronger resume, write professional emails, and find opportunities faster.',
    modules: ['AI for common jobs', 'Resumes and cover letters', 'Professional email writing', 'Smarter job searching', 'Hands-on practice'],
  },
  'small-business': {
    title: 'AI for Small Business Owners',
    short: 'Small Business',
    level: 'Beginner',
    format: 'Hybrid',
    duration: '4 weeks',
    audience: 'Owners and entrepreneurs',
    description:
      'Put AI to work in your business: marketing, customer service, and day-to-day operations. Finish with a practical AI plan. No tech team required.',
    modules: ['Week 1 — Marketing', 'Week 2 — Operations', 'Week 3 — Customer service', 'Week 4 — Your AI plan'],
  },
  agriculture: {
    title: 'AI for Farmers & Agriculture',
    short: 'Agriculture',
    level: 'Beginner',
    format: 'In person',
    duration: 'Half day',
    audience: 'Farmers, farmworkers, landowners',
    description:
      'How AI is changing agriculture, from crop monitoring and weather tools to finding grants, with demos of tools you can use on your land today.',
    modules: ['Precision agriculture basics', 'Weather and forecasting tools', 'Crop and livestock monitoring', 'Finding grants with AI'],
  },
  'youth-lab': {
    title: 'Youth AI Lab',
    short: 'Youth AI Lab',
    level: 'Beginner',
    format: 'In person',
    duration: '6 weeks',
    audience: 'Ages 14–22',
    description:
      'Build something real. Six weeks of AI basics, ethics, prompting, and no-code tools, ending in a demo day in front of family and the community.',
    modules: ['AI basics and ethics', 'Prompting well', 'No-code AI tools', 'Building a chatbot', 'Creative AI projects', 'Demo day'],
  },
  leadership: {
    title: 'AI Leadership Academy',
    short: 'Leadership Academy',
    level: 'Intermediate',
    format: 'Hybrid',
    duration: '8 weeks',
    audience: 'Community, church, and nonprofit leaders',
    description:
      'Lead AI adoption in your organization. Build an implementation plan, use AI for fundraising and operations, and set sensible rules for its use.',
    modules: ['AI strategy and planning', 'Leading change', 'AI-powered operations', 'Fundraising with AI', 'Ethics and governance', 'Capstone'],
  },
  'train-the-trainer': {
    title: 'Train the Trainer',
    short: 'Train the Trainer',
    level: 'Intermediate',
    format: 'Hybrid',
    duration: '12 weeks',
    audience: 'Teachers, librarians, community educators',
    description:
      'Learn to teach AI to non-technical audiences, adapt SCAiL’s curriculum, and lead workshops on your own, including a supervised practicum.',
    modules: ['AI fundamentals deep dive', 'Teaching non-technical audiences', 'Adapting curriculum', 'Facilitation', 'Practicum'],
  },
}

export const courseList = Object.entries(courses).map(([id, c]) => ({ id, ...c }))
