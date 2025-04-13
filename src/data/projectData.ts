import sportSpace from "/assets/projectCover/sport-space.png";
import cakeCrave from "/assets/projectCover/cake-crave.png";
import wildOasis from "/assets/projectCover/wild-oasis.png";
// import wildOasisClient from "../assets/projectCover/wild-oasis-client.png";

export const projects = [
  {
    name: "cakecrave",
    image: cakeCrave,
    projectLink: "https://cakecrave.txusif.me/",
    githubLink: "https://github.com/txusif/cakecrave",
    description:
      "CakeCrave is a food ordering app where users can order for cakes. The remote state of the application is managed with react query and the form validation using react hook form. The backend is powered by supabase.",
    skills: [
      "react",
      "typeScript",
      "react hook form",
      "react query",
      "tailwind css",
      "shadcn ui",
      "supabase",
    ],
  },
  {
    name: "Sportspace",
    image: sportSpace,
    projectLink: "https://sportspace.txusif.me/",
    githubLink: "https://github.com/txusif/SportSpace",
    description:
      "SportSpace is a user-friendly platform for booking football and cricket turfs. It features an intuitive calendar interface for selecting and reserving time slots. Users can sign in using Google Auth, and the backend is powered by Supabase.",
    skills: [
      "react",
      "nextjs",
      "typeScript",
      "tailwind css",
      "supabase",
      "google auth",
    ],
  },
  {
    name: "The Wild Oasis",
    image: wildOasis,
    projectLink: "https://the-wild-oasis.txusif.me/dashboard",
    githubLink: "https://github.com/txusif/the-wild-oasis",
    description:
      "The Wild Oasis is an admin dashboard for managing hotel bookings. It includes features for checking guests in/out, tracking stays, and viewing revenue metrics. Dynamic charts built with Recharts and React Query ensure efficient state handling and insightful analytics.",
    skills: [
      "react",
      "javaScript",
      "styled components",
      "react query",
      "recharts",
      "supabase",
    ],
  },
  // {
  //   name: "The Wild Oasis Client",
  //   image: wildOasisClient,
  //   projectLink: "https://the-wild-oasis-next.txusif.me/",
  //   githubLink: "https://github.com/txusif/the-wild-oasis-next",
  //   description:
  //     "",
  //   skills: [
  //     "react",
  //     "nextjs",
  //     "typescript",
  //     "tailwind css",
  //     "supabase",
  //     "google auth",
  //   ],
  // },
];
