import twitterClone from './assets/images/nextJSTwitterClone.png';
import coMake from './assets/images/co-make.png';
import LAN from './assets/images/LAN.jpg';
import ayati from './assets/images/7ayatiCafe.png'

const projectsList = [
  {
    id: 0,
    projectName: '7ayati Cafe & Hookah Lounge',
    hrefLink: 'https://7ayati.vercel.app/',
    description: 'Static business website built with Next.JS. ',
    imgSrc: ayati,
    imgAlt: 'Cafe & hookah bar static business website'
  },
  {
    id: 1,
    projectName: 'Lambda Alumni Association',
    hrefLink: 'https://a.lambdaalumninetwork.dev/welcome',
    description: 'LAN unified, private community for Lambda school alumni to connect, advance their careers, and give back.',
    imgSrc: LAN,
    imgAlt: 'Lambda Alumni Association project'
  },
  {
    id: 2,
    projectName: 'Co-Make',
    hrefLink: 'https://co-make-tt33.herokuapp.com/',
    description: 'Have your voice heard on the issues you would like to see resolved in your community',
    imgSrc: coMake,
    imgAlt: 'Co-Make project'
  },
  {
    id: 3,
    projectName: 'Twitter Clone',
    hrefLink: 'https://nextjs-twitter-clone.netlify.app/',
    description: 'Twitter mobile clone made with NextJS & Tailwind',
    imgSrc: twitterClone,
    imgAlt: 'Twitter Clone project'
  },
];

export default projectsList;
