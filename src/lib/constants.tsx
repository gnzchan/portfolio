import WorkPage from "@/pages/WorkPage";

export const routes = [
  {
    key: "work",
    label: "WORK",
    href: "/",
    element: <WorkPage />,
  },
  {
    key: "my-story",
    label: "MY STORY",
    href: "/my-story",
    element: <WorkPage />,
  },
];

export const workExperiences = [
  {
    key: "fullscale",
    company: "Full Scale",
    role: "Software Developer",
    startDate: "August 2022",
    endDate: "Current",
  },
  {
    key: "vanly",
    company: "Vanly",
    role: "Software Engineer",
    startDate: "February 2024",
    endDate: "Current",
  },

  // {
  //   key: "vanly",
  //   company: "Vanly",
  //   role: "Software Engineer",
  //   startDate: "February 2024",
  //   endDate: "March 2024",
  // },
  // {
  //   key: "wanderglade",
  //   company: "Wanderglade",
  //   role: "Software Engineer",
  //   startDate: "March 2024",
  //   endDate: "September 2024",
  // },
  // {
  //   key: "clicksninja",
  //   company: "Clicks Ninja",
  //   role: "Software Engineer",
  //   startDate: "September 2024",
  //   endDate: "September 2024",
  // },
  // {
  //   key: "leaseswap",
  //   company: "Clicks Ninja",
  //   role: "Software Engineer",
  //   startDate: "September 2024",
  //   endDate: "October 2024",
  // },
];

export const projects = [
  {
    key: "film-flask",
    name: "Film Flask",
    tech: ["Typescript", "React", "TailwindCSS", "ShadCN", "Supabase"],
    description:
      "This web application, built with Next.js and Supabase, allows users to stream and manage their movie watchlist seamlessly. Users can keep track of their entertainment journey. To access these features and save lists, users need to sign in. Additionally, the app enables users to leave reviews and attach images to their movie entries, enhancing the movie-tracking experience. Powered by TMDB API, start organizing your movies today with this user-friendly, responsive web app.",
  },
  {
    key: "wingman",
    name: "Wingman",
    tech: ["Typescript", "React", "TailwindCSS", "Prisma", "Clerk", "Stripe"],
    description:
      "This web application, built with Next.js, OpenAI, Replicate and Prisma, leverages the power of artificial intelligence to bring your creative visions to life. With our user-friendly interface and AI models, you can explore a range of services that will transform your ideas into bright creations. Whether you're looking to have a conversation with a bot, generate unique images, craft videos, or compose melodies, our platform has you covered.",
  },
  {
    key: "stone-age-marble",
    name: "Stone Age Marble",
    tech: ["Typescript", "React", "TailwindCSS", "ShadCN"],
    description:
      "Stone Age Marble is a sleek, modern web application designed for a stone business. Built with Next.js and styled with TailwindCSS and ShadCN, this responsive site showcases an extensive range of high-quality marble and stone products. The user-friendly interface allows customers to easily browse through collections, view detailed product information, and request quotes. With its elegant design and smooth navigation, Stone Age Marble effectively highlights the beauty and versatility of natural stone materials, helping the business to attract and engage potential clients in the competitive stone industry.",
  },
  {
    key: "wanderglade",
    name: "Wanderglade",
    tech: ["Typescript", "React", "TailwindCSS", "Firebase"],
    description:
      "Stone Age Marble is a sleek, modern web application designed for a stone business. Built with Next.js and styled with TailwindCSS and ShadCN, this responsive site showcases an extensive range of high-quality marble and stone products. The user-friendly interface allows customers to easily browse through collections, view detailed product information, and request quotes. With its elegant design and smooth navigation, Stone Age Marble effectively highlights the beauty and versatility of natural stone materials, helping the business to attract and engage potential clients in the competitive stone industry.",
  },
];
