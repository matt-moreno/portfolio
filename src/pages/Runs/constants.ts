const weeklyTrackerData = [
  {
    name: "M",
    miles: 5,
  },
  {
    name: "T",
    miles: 5,
  },
  {
    name: "W",
    miles: 10,
  },
  {
    name: "T",
    miles: 5,
  },
  {
    name: "F",
    miles: 10,
  },
  {
    name: "S",
    miles: 14,
  },
  {
    name: "S",
    miles: 5,
  },
];

const marathonMajors = [
  {
    city: "BE",
    year: 2024,
    time: "4h 13min",
    flag: "🇩🇪",
    completed: true,
  },
  {
    city: "CHI",
    year: 2025,
    time: "4h 11min",
    flag: "🇺🇸",
    completed: true,
  },
  {
    city: "NY",
    year: null,
    time: "",
    flag: "🇺🇸",
    completed: false,
  },
  {
    city: "LDN",
    year: null,
    time: "",
    flag: "🇬🇧",
    completed: false,
  },
  {
    city: "TYO",
    year: null,
    time: "",
    flag: "🇯🇵",
    completed: false,
  },
  {
    city: "BOS",
    year: null,
    time: "",
    flag: "🇺🇸",
    completed: false,
  },
];

const races = [
  {
    image: "/assets/SFHalf.png",
    title: "San Francisco Half Marathon",
    year: "2023",
    link: "https://www.thesfmarathon.com/",
    pace: "9:12/mi",
    time: "2h 1min",
  },
  {
    image: "/assets/LA.png",
    title: "Los Angeles Marathon",
    year: "2024",
    link: "https://www.lamarathon.com/",
    pace: "8:30/mi",
    time: "3h 44min",
  },
  {
    image: "/assets/Berlin.png",
    title: "Berlin Marathon",
    year: "2024",
    link: "https://www.bmw-berlin-marathon.com/",
    pace: "9:34/mi",
    time: "4h 13min",
  },
  {
    image: "/assets/RoseBowl.png",
    title: "Rose Bowl Half Marathon",
    year: "2025",
    link: "https://www.conqur.com/",
    pace: "12:18/mi",
    time: "2h 43min",
  },
  {
    image: "/assets/OC.png",
    title: "OC Marathon",
    year: "2025",
    link: "https://www.ocmarathon.com/",
    pace: "9:41/mi",
    time: "4h 15min",
  },
  {
    image: "/assets/Chicago.png",
    title: "Chicago Marathon",
    year: "2025",
    link: "https://www.chicagomarathon.com/",
    pace: "9:37/mi",
    time: "4h 15min",
  },
];

export { weeklyTrackerData, marathonMajors, races };
