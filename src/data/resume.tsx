import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Luz Saavedra",
  initials: "LS",
  url: "https://dillion.io",
  location: "Salinas, Canelones, Uruguay",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Creative Frontend Developer & UX/UI Designer. Passionate about crafting beautiful, user-centered digital experiences.",
  summary:
    "Since 2022, I've been diving deeply into technology after years of focusing primarily on design. I studied web development through Jóvenes a Programar and computer science at Holberton School. Currently, [I volunteer with an AWS organization](#experience), applying my skills in design and programming. My passion for design started early, participating in illustration events and creative workshops. As a freelancer, I now combine creativity and code to craft user-centered digital experiences.",
  avatarUrl: "/me.png",
  skills: [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Svelte",
    "Astro",
    "Node.js",
    "Python",
    "Docker",
    "Figma",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe InDesign",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ludasaadi@gmail.com",
    tel: "+59895078575",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vandriodd",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ludasaadi/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      Behance: {
        name: "Behance",
        url: "https://www.behance.net/moon128",
        icon: Icons.behance,

        navbar: false,
      },
      email: {
        name: "Email",
        url: "mailto:ludasaadi@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  experience: [
    {
      company: "AWS Girls User Group",
      href: "",
      badges: [],
      location: "Remote",
      title: "Grapich Designer | Frontend Developer",
      logoUrl: "/awsgirls.png",
      start: "Jun 2024",
      end: "Present",
      description:
        "As a Graphic Designer & Frontend Developer, I've led the branding and visual design for AWS Girls User Group Uruguay. This includes creating promotional content for Instagram and LinkedIn, developing the landing page using modern web technologies, and ensuring cohesive branding across all platforms.",
    },
  ],
  education: [
    {
      school: "Holberton School",
      href: "https://holbertonschool.uy/",
      degree: "Foundations in Computer Science",
      logoUrl: "/holberton.png",
      start: "Feb 2023",
      end: "Nov 2023",
    },
    {
      school: "Jóvenes A Programar",
      href: "https://jovenesaprogramar.edu.uy/",
      degree: "Foundations in Computer Science & Web Development",
      logoUrl: "/jap.png",
      start: "Mar 2022",
      end: "Nov 2022",
    },
  ],
  projects: [
    {
      title: "AWS Girls User Group Uruguay",
      href: "#",
      dates: "Sep 2024",
      active: true,
      description:
        "Designed and developed the website and branding for AWS Girls User Group Uruguay, a community focused on creating an inclusive space for women and individuals in cloud technology, particularly AWS.",
      technologies: ["Astro", "Typescript", "TailwindCSS", "DaisyUI"],
      links: [
        {
          type: "Website (demo)",
          href: "https://main.d2onzi7tsyhps1.amplifyapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/aws-mockup.png",
      video: "",
    },
    {
      title: "Ideas en el Aire",
      href: "https://ideas-en-el-aire.vercel.app/",
      dates: "Jan 2024 - Mar 2024",
      active: true,
      description:
        "Designed and developed the website and branding for Ideas en el Aire, an independent Argentine radio station.",
      technologies: ["Next.js", "Javascript", "TailwindCSS", "DaisyUI"],
      links: [
        {
          type: "Website",
          href: "https://ideas-en-el-aire.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/micaelapicco/ideas-en-el-aire",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ieea-mockup.png",
      video: "",
    },
    {
      title: "PasturApp",
      href: "https://pasturapp.netlify.app/",
      dates: "Sep 2023 - Nov 2023",
      active: true,
      description:
        "Designed and developed the website for PasturApp, a self-management tool that enhances efficiency in Uruguayan dairy systems. The app supports both advisors and producers in decision-making by analyzing the data entered",
      technologies: [
        "Svelte",
        "Javascript",
        "TailwindCSS",
        "DaisyUI",
        "Python",
        "Flask",
        "MySQL",
        "AWS",
        "Node.js",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://pasturapp.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PasturApp/front-end",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pasturapp-mockup.png",
      video: "",
    },
  ],
  designs: [
    {
      title: "ConectArt",
      dates: "Aug 6th, 2024 - Present",
      description:
        "Designed the visual identity for ConectArt, including the logo, color palette, and brand tone. Created the branding briefing and am developing the landing page. Focused on crafting a cohesive and engaging brand experience.",
      image: "/conectart.png",
      links: [],
    },
    {
      title: "AWS Girls User Group Uruguay",
      dates: "Jun 25th, 2024 - Present",
      description:
        "Designed the visual identity for ConectArt, including the logo, color palette, and brand tone. Created the branding briefing and am developing the landing page. Focused on crafting a cohesive and engaging brand experience.",
      image: "/awsgirls.png",
      links: [],
    },
    {
      title: "Promotional Webpage",
      dates: "Aug 12th - Aug 14th, 2024",
      description:
        "Designed the interface for a promotional webpage showcasing a VSCode theme and an accompanying npm package for theme generation. Focused on creating an engaging and visually appealing experience to highlight the product features.",
      image: "/nachop.png",
      links: [],
    },
    {
      title: "Linkly",
      dates: "Jun 21st - Jun 23rd, 2024",
      description:
        "Designed the sitemap, user flow, and interface for Linkly, focusing on creating an intuitive and user-friendly experience.",
      image: "/nachop.png",
      links: [],
    },
  ],
} as const;
