import { SidebarLink } from "@/types";

export const themes = [
    { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
    { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
    { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
  ];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/execom",
    label: "Execom",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/events/list",
    label: "Events",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/join-us",
    label: "Join Us",
   },

];

export const execomCore = [
  {execomName: "Campus Lead", name: "Habeeb Rahman", imgURL: "/assets/images/auth-dark.png" , linkedin: "https://www.linkedin.com/in/sabarish-s-0b1b3a1b0/", github: "https://www.linkedin.com/in/sabarish-s-0b1b3a1b0/"},
  {execomName: "Tech Lead", name: "Sabarish S", imgURL: "", linkedin: "https://www.linkedin.com/in/sabarish-s-0b1b3a1b0/", github: "https://www.linkedin.com/in/sabarish-s-0b1b3a1b0/" },
]
export const execomSquad = [
  {execomName: "Media Team", name: "Harikrishnan", imgURL: "", linkedin: "https://www.linkedin.com/in/sabarish-s-0b1b3a1b0/", github: "https://www.linkedin.com/in/sabarish-s-0b1b3a1b0/"},
  {execomName: "Media Team", name: "Megha Madhu", imgURL: "", linkedin: "https://www.linkedin.com/in/sabarish-s-0b1b3a1b0/", github: "https://www.linkedin.com/in/sabarish-s-0b1b3a1b0/" },
  {execomName: "Women In Tech Facilitator", name: "Ajmi J Fathima", imgURL: "", linkedin: "https://www.linkedin.com/in/sabarish-s-0b1b3a1b0/", github: "https://www.linkedin.com/in/sabarish-s-0b1b3a1b0/" },
  {execomName: "Program Facilitator", name: "Athul Daniel", imgURL: "", linkedin: "https://www.linkedin.com/in/sabarish-s-0b1b3a1b0/", github: "https://www.linkedin.com/in/sabarish-s-0b1b3a1b0/" },
  {execomName: "Program Facilitator", name: "Noyal B Varghese", imgURL: "", linkedin: "https://www.linkedin.com/in/sabarish-s-0b1b3a1b0/", github: "https://www.linkedin.com/in/sabarish-s-0b1b3a1b0/" },
]

export const eventsCard = [
  {segment:'IntroductiontoGitandGitHub',title:"Introduction to Git and GitHub", date: "12/12/2020", description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", venue: "Google Meet", time: "10:00 AM"},
  {segment:'IntroductiontoJavaScript',title:"Introduction to JavaScript", date: "12/12/2020", description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",venue: "College of Engineering Perumon", time: "10:00 AM"},
  {segment:'IntroductiontoReact',title:"Introduction to React", date: "12/12/2020", description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",venue: "College of Engineering Perumon", time: "10:00 AM"},
]