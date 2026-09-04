import brams1 from "../assets/images/projects/brams/brams1.jpg";

import doctracks1 from "../assets/images/projects/doctracks/doctracks1.jpg";

import illagawCover from "../assets/images/projects/illagaw/illagaw.png";
import illagaw1 from "../assets/images/projects/illagaw/illagaw1.png";
import illagaw2 from "../assets/images/projects/illagaw/illagaw2.png";
import illagaw4 from "../assets/images/projects/illagaw/illagaw4.png";
import illagaw5 from "../assets/images/projects/illagaw/illagaw5.png";
import illagaw6 from "../assets/images/projects/illagaw/illagaw6.png";
import illagaw7 from "../assets/images/projects/illagaw/illagaw7.png";

import rfid1 from "../assets/images/projects/mlrfid/rfid1.jpg";
import rfid2 from "../assets/images/projects/mlrfid/rfid2.jpg";
import rfid3 from "../assets/images/projects/mlrfid/rfid3.jpg";
import rfid4 from "../assets/images/projects/mlrfid/rfid4.jpg";
import rfid5 from "../assets/images/projects/mlrfid/rfid5.jpg";

import unav1 from "../assets/images/projects/wvsunav/unav1.png";
import unav2 from "../assets/images/projects/wvsunav/unav2.png";
import unav3 from "../assets/images/projects/wvsunav/unav3.png";

import happello from "../assets/images/projects/happello/happello.jpg";

import dict1 from "../assets/images/projects/dict/dict.png";
import dict2 from "../assets/images/projects/dict/dict2.png";
import dict3 from "../assets/images/projects/dict/dict3.png";

const projects = [
  {
    id: 1,
    title: "Happello",
    subtitle: "Business Directory & Marketplace Platform",
    description:
      "An online platform that helps people discover local businesses, freelancers, and marketplace sellers.",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],

    // Add Happello images here once we confirm the filenames
    cover: happello,
    images: [happello],

    liveUrl: "https://www.happello.com/",
    githubUrl: null,
  },

  {
    id: 2,
    title: "BRAMS",
    subtitle: "Barangay Records Automation System",
    description:
      "A system that digitizes barangay records and automates resident management, certificates, and barangay IDs.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    cover: brams1,
    images: [brams1],

    liveUrl: "https://brams-revised.vercel.app/",
    githubUrl: null,
  },

  {
    id: 3,
    title: "ML RFID App",
    subtitle: "RFID Student Attendance System",
    description:
      "An RFID-based system that tracks student attendance and provides updates and attendance records.",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "MySQL",
      "Docker",
    ],

    cover: rfid1,
    images: [rfid1, rfid2, rfid3, rfid4, rfid5],

    liveUrl: null,
    githubUrl: null,
  },

  {
    id: 4,
    title: "DocTracks",
    subtitle: "Document Tracking System",
    description:
      "A system that tracks documents as they move between offices until approval and signing are completed.",
    technologies: [
      "React",
      "CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    cover: doctracks1,
    images: [doctracks1],

    liveUrl: "https://doc-track-system.vercel.app/",
    githubUrl: null,
  },

  {
    id: 5,
    title: "DICT Training Center Attendance",
    subtitle: "Mobile Attendance Tracking System",
    description:
      "A mobile application that records login and logout times for attendance monitoring.",
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
    ],

    cover: dict1,
    images: [dict1,
      dict2,
      dict3
    ],

    liveUrl: null,
    githubUrl: null,
  },

  {
    id: 6,
    title: "WVSU NAV",
    subtitle: "University Navigation Application",
    description:
      "A mobile application that helps students and visitors navigate around the university.",
    technologies: [
      "Flutter",
      "Firebase",
      "Google Maps",
    ],

    cover: unav1,
    images: [unav1, unav2, unav3],

    liveUrl: null,
    githubUrl: null,
  },

  {
    id: 7,
    title: "ILLAGAW",
    subtitle: "Location-Based Tourism Mobile Game",
    description:
      "A location-based mobile game designed to help users explore tourist attractions around Iloilo City.",
    technologies: [
      "Flutter",
      "Firebase",
    ],

    cover: illagawCover,
    images: [
      illagawCover,
      illagaw1,
      illagaw2,
      illagaw4,
      illagaw5,
      illagaw6,
      illagaw7,
    ],

    liveUrl: null,
    githubUrl: null,
  },
];

export default projects;