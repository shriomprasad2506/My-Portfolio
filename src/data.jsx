import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink, FiClipboard } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';
import Work7 from './assets/project-7.jpeg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Shri Om',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Prasad',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Jaigaon, West Bengal',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 89721 60828',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'shriomprasad0@gmails.com',
  },

  {
    id: 9,
    title: 'Hobbies:  ',
    description: ' Coding, Exploring, Painting',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Hindi, English',
  },
];


export const resume = [
  {
    id: 1,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2026',
    title: 'Bachelor Degree <span> Siliguri Institute of Technology </span>',
    desc: 'Bachelor of Technology in Computer Science Engineering | GPA: 8.48 ',
  },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'Higher Secondary <span> SHMD School </span>',
    desc: 'Percentage: 89.2%',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'Secondary School <span> SHMD School </span>',
    desc: 'Percentage: 84.1% ',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '85',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'React',
    percentage: '82',
  },

  {
    id: 5,
    title: 'NodeJs',
    percentage: '87',
  },

  {
    id: 6,
    title: 'MongoDB',
    percentage: '90',
  },

  {
    id: 7,
    title: 'C++',
    percentage: '89',
  },

  {
    id: 8,
    title: 'Java',
    percentage: '80',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'E-Commerce Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Purpose : ',
        desc: 'Training Project',
      },
      {
        icon: <FaCode />,
        title: 'Tech Stack : ',
        desc: 'MERN',
      },
      {
        icon: <FiExternalLink />,
        title: 'GitHub : ',
        desc: 'https://github.com/shriomprasad2506/E-Commerce-Traded-Trove',
      },
    ],
  },

  {
    id: 2,
    img: Work7,
    title: 'Blog Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Tech Stack : ',
        desc: 'MERN',
      },
      {
        icon: <FiClipboard />,
        title: 'Purpose : ',
        desc: 'To showcase my MERN stack practice.',
      },
      {
        icon: <FiExternalLink />,
        title: 'GitHub : ',
        desc: 'https://github.com/ shriomprasad2506/Blog-Website',
      },
    ],
  },

  {
    id: 3,
    img: Work2,
    title: 'UI Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS',
      },
      {
        icon: <FiClipboard />,
        title: 'Purpose : ',
        desc: 'To replicate popular UI designs.',
      },
      {
        icon: <FiExternalLink />,
        title: 'GitHub : ',
        desc: 'https://github.com/ shriomprasad2506/Netflix-UI-Clone',
      },
    ],
  },

  {
    id: 4,
    img: Work3,
    title: 'UI Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS',
      },
      {
        icon: <FiClipboard />,
        title: 'Purpose : ',
        desc: 'To learn modern design techniques',
      },
      {
        icon: <FiExternalLink />,
        title: 'Github : ',
        desc: 'https://github.com/ shriomprasad2506/Amazon-UI-Clone',
      },
    ],
  },

  {
    id: 5,
    img: Work4,
    title: 'Hosiptal UI',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS',
      },
      {
        icon: <FiClipboard />,
        title: 'Purpose : ',
        desc: 'To enhance front-end skills.',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/ shriomprasad2506/Hospital-UI-Design',
      },
    ],
  },

  {
    id: 6,
    img: Work5,
    title: 'Birthday Website for Friend',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript',
      },
      {
        icon: <FiClipboard/>,
        title: 'Purpose : ',
        desc: 'Bringing my skills to life by creating a personal celebration website.',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://pinkey-birthday.github.io/Happy-Birthday/',
      },
    ],
  },

  {
    id: 7,
    img: Work6,
    title: 'Zomato UI Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS',
      },
      {
        icon: <FiClipboard />,
        title: 'Purpose : ',
        desc: 'Bringing my skills to life by creating a personal celebration website.',
      },
      {
        icon: <FiExternalLink />,
        title: 'GitHub : ',
        desc: 'https://github.com/ shriomprasad2506/Zomata-UI-Clone',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
