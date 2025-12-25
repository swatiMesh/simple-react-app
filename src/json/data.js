import { FaFacebook, FaTwitter, FaSquarespace } from 'react-icons/fa';
import Img1 from '../images/book-1.png';
import Img2 from '../images/book-2.png';
import Img3 from '../images/book-3.png';
import Img4 from '../images/book-4.jpg';
import Img5 from '../images/book-5.jpg';
import Img6 from '../images/book-6.jpg';
import Img7 from '../images/book-7.jpg';
import tour1 from '../images/tour-1.jpeg';
import tour2 from '../images/tour-2.jpeg';
import tour3 from '../images/tour-3.jpeg';
import tour4 from '../images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 3, href: "#tour", text: "tour" },
  { id: 3, href: "#books", text: "books" }
]

export const socialLinks = [
    { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook', Icon: FaFacebook },
    { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter', Icon: FaTwitter },
    { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace', Icon: FaSquarespace },
];

export const books = [
  {
    id: 1,
    img: Img1,
    title: "The Lean Startup",
    author: "Eric Ries",
  },
  {
    id: 2,
    img: Img3,
    title: "Wild Dark",
    author: "Charlotte McConaghy",
  },
  {
    id: 3,
    img: Img4,
    title: "Replaceable You",
    author: "Mary Roach",
  },
  {
    id: 4,
    img: Img5,
    title: "Heart the Lover",
    author: "Lily King",
  },
  {
    id: 5,
    img: Img6,
    title: "The Book of Guilt",
    author: "Catherine Chidgey",
  },
  {
    id: 6,
    img: Img7,
    title: "Baldwin: A Love Story",
    author: "Nicholas Boggs",
  },
  {
    id: 7,
    img: Img2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
  },
];

export const services = [
    {
      id: 1,
      icon: 'fas fa-wallet fa-fw',
      title: 'saving money',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    },
    {
      id: 2,
      icon: 'fas fa-tree fa-fw',
      title: 'endless hiking',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    },
    {
      id: 3,
      icon: 'fas fa-socks fa-fw',
      title: 'amazing comfort',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    },
  ];
  

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 16th, 2020',
    title: 'explore hong kong',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'hong kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'kenya',
    duration: 20,
    cost: 3300,
  },
];