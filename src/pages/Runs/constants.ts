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
    flag: "🇩🇪",
    completed: true,
  },
  {
    city: "CHI",
    year: 2025,
    flag: "🇺🇸",
    completed: true,
  },
  {
    city: "NY",
    year: null,
    flag: "🇺🇸",
    completed: false,
  },
  {
    city: "LDN",
    year: null,
    flag: "🇬🇧",
    completed: false,
  },
  {
    city: "TYO",
    year: null,
    flag: "🇯🇵",
    completed: false,
  },
  {
    city: "BOS",
    year: null,
    flag: "🇺🇸",
    completed: false,
  },
  {
    city: "SYD",
    year: null,
    flag: "🇦🇺",
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
    stravaId: 9507620691,
  },
  {
    image: "/assets/LA.png",
    title: "Los Angeles Marathon",
    year: "2024",
    link: "https://www.lamarathon.com/",
    pace: "8:30/mi",
    time: "3h 44min",
    stravaId: 10982058758,
  },
  {
    image: "/assets/Berlin.png",
    title: "Berlin Marathon",
    year: "2024",
    link: "https://www.bmw-berlin-marathon.com/",
    pace: "9:34/mi",
    time: "4h 13min",
    stravaId: 12533407206,
  },
  {
    image: "/assets/RoseBowl.png",
    title: "Rose Bowl Half Marathon",
    year: "2025",
    link: "https://www.conqur.com/",
    pace: "12:18/mi",
    time: "2h 43min",
    stravaId: 14305121458,
  },
  {
    image: "/assets/OC.png",
    title: "OC Marathon",
    year: "2025",
    link: "https://www.ocmarathon.com/",
    pace: "9:41/mi",
    time: "4h 15min",
    stravaId: 14377853766,
  },
  {
    image: "/assets/Chicago.png",
    title: "Chicago Marathon",
    year: "2025",
    link: "https://www.chicagomarathon.com/",
    pace: "9:37/mi",
    time: "4h 15min",
    stravaId: 16121187123,
  },
];

export { weeklyTrackerData, marathonMajors, races };
