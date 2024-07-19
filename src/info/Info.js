import self from "../img/self.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import { SiLetterboxd } from "react-icons/si";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,2)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  resume: "https://drive.google.com/drive/folders/15c0x1NlfpNZBBSRZLLDRfxUnhV1xoQp1?usp=sharing",
  firstName: "Atishay",
  lastName: "Tripathi",
  initials: "at", // the example uses first and last, but feel free to use three or more if you like.
  position: "Software Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself.
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in India",
    },
    {
      emoji: "📧",
      text: "atishay1922@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://facebook.com",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com/atishaytripathi/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/atishaytripathi/",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/in/atishaytripathi",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],
  bio: "hello! i'm atishay. i am a web developer and i love building beautiful digital experiences",
  skills: {
    proficientWith: [
      "git",
      "github",
      "html5",
      "css3",
      "Java",
      "C",
      "C++",
      "python"
    ],
    exposedTo: ["javascript", "react", "nodejs", "figma"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "writing",
      emoji: "✒️",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "singing",
      emoji: "🎤",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "CryptoSkill",
      live: "https://crypto-skill.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/atishaytripathi/cryptocurrency-trading-platform", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock2, //add image url here,
    },
    {
      title: "Crypto Tracker",
      live: "https://dasboard-website.vercel.app/",
      source: "https://github.com/atishaytripathi/dasboard-website",
      image: mock3,
    },
    {
      title: "Portfolio",
      live: "https://atishay-tripathi.vercel.app/",
      source: "https://github.com/atishaytripathi/portfolio-website",
      image: mock4,
    },
    //add more if you want to
  ],
};
