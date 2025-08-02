import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Luz Saavedra",
  initials: "LS",
  url: "https://dillion.io",
  location: "Salinas, Canelones, Uruguay",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Creative Software Engineer & UX/UI Designer. Passionate about crafting beautiful, user-centered digital experiences.",
  summary:
    "I'm a developer who comes from a design background and really enjoys both coding and creating user-friendly experiences. I've learned web development and UX/UI along the way, so I'm comfortable mixing creativity with code to build things that work well and feel intuitive. I like keeping things practical and focused on what users actually need.",
  avatarUrl: "/me.png",
  skills: [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Node.js",
    "SQL",
    "Express.js",
    "React",
    "Next.js",
    "Svelte",
    "Astro",
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
    email: "hello@luliluz.com",
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
        url: "mailto:hello@luliluz.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  experience: [
    {
      company: "DGamerStudio LLC",
      href: "https://dgamer.studio/",
      badges: [],
      location: "Hybrid",
      title: "Frontend Developer ingame UI",
      logoUrl: "/dgamerstudio.png",
      start: "Apr 2025",
      end: "Present",
      description:
        "Currently focused on developing in-game user interfaces using React and Cohtml. Collaborating with designers and developers to redesign the game's UI, enhancing both visual quality and player experience.",
    },
    {
      company: "DGamerStudio LLC",
      href: "https://dgamer.studio/",
      badges: [],
      location: "Hybrid",
      title: "Frontend Developer CMS",
      logoUrl: "/dgamerstudio.png",
      start: "Dec 2024",
      end: "Apr 2025",
      description:
        "Worked on the internal CMS of the product, building admin interfaces with React. I collaborated with a backend team to create UX/UI prototypes in Figma to support new features.",
    },
    {
      company: "AWS Girls User Group",
      href: "",
      badges: [],
      location: "Remote",
      title: "Grapich Designer | Frontend Developer",
      logoUrl: "/awsgirls.png",
      start: "Jun 2024",
      end: "Jan 2025",
      description:
        "I've led the branding and visual design for AWS Girls User Group Uruguay. This includes creating promotional content for Instagram and LinkedIn, developing the landing page using modern web technologies, and ensuring cohesive branding across all platforms.",
    },
  ],
  education: [
    {
      school: "Holberton School Uruguay",
      href: "https://holbertonschool.uy/",
      degree: "Foundations in Computer Science",
      logoUrl: "/holberton.png",
      start: "Feb 2023",
      end: "Nov 2023",
    },
    {
      school: "Jovenes a Programar",
      href: "https://jovenesaprogramar.edu.uy/",
      degree: "Foundations in Computer Science & Web Development",
      logoUrl: "/jap.png",
      start: "Mar 2022",
      end: "Nov 2022",
    },
  ],
  projects: [
    {
      title: "Y-Axis",
      href: "https://y-axis-five.vercel.app/",
      active: true,
      description:
        "Y-Axis Customer Portal is a web application designed to optimize the experience of purchasing eyewear for resellers. It provides a seamless interface for managing orders and tracking shipments.",
      technologies: ["React", "Typescript", "Shadcn", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://y-axis-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vandriodd/y-axis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/y-axis-mockup.png",
      video: "",
    },
    {
      title: "MCobro",
      href: "https://mcobro.vercel.app/",
      active: true,
      description:
        "Website for Uruguayan medical professionals, designed as a financial tool. Includes a smart agenda to schedule work and auto-generate invoices based on user-defined rates.",
      technologies: [
        "Next.js",
        "Typescript",
        "Node.js",
        "TailwindCSS",
        "Drizzle",
      ],
      links: [
        {
          type: "Website",
          href: "https://mcobro.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mcobro-mockup.png",
      video: "",
    },
    {
      title: "Linkly",
      href: "https://links.nachop.dev/",
      active: true,
      description:
        "Linkly is a URL shortener that allows users to create custom links for their websites. It provides a simple and intuitive interface for users to create and manage their links, and it also includes a dashboard to track the performance of their links.",
      technologies: ["Svelte", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://links.nachop.dev/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/linkly-mockup.png",
    },
    {
      title: "AWS Girls User Group Uruguay",
      href: "https://main.d2onzi7tsyhps1.amplifyapp.com/",
      active: true,
      description:
        "Website for AWS Girls User Group Uruguay, a community that creates an inclusive space for women in cloud tech. Focused on AWS, it fosters learning, networking, and collaboration through events and shared experiences.",
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
      active: true,
      description:
        "Website for Ideas en el Aire, an independent Argentine radio station that connects the community by sharing diverse voices and content. You can listen live, browse shows, and check the weekly schedule.",
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
      active: true,
      description:
        "PasturApp is a self-management tool that improves efficiency in Uruguayan dairy systems, helping advisors and producers make informed decisions through data analysis.",
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
      title: "Y-Axis",
      dates: "Aug 6th, 2024 - Present",
      description:
        "Designed the visual identity for Y-Axis, including logo, color palette, and brand tone. Developed the user interface for the customer portal, focusing on enhancing user experience and visual appeal.",
      image: "/y-axis-logo.png",
      links: [
        {
          type: "Design",
          href: "https://www.figma.com/design/0dmcApoKRGtnJ2LbF5XSJK/Customer-Portal-for-Y-Axis?node-id=15-126&t=Nusm6LFgWK3CMthV-1",
          icon: <Icons.figma className="size-3" />,
        },
        {
          type: "Website",
          href: "https://y-axis-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "MCobro",
      dates: "Aug 6th, 2024 - Present",
      description:
        "Led the visual identity for MCobro, including logo design, color palette, and brand tone. Authored the branding brief and developed features for the app. My role spans from UI/UX design to front-end development, ensuring a cohesive and engaging brand and product experience.",
      image: "/mcobro-logo.png",
      links: [
        {
          type: "Website",
          href: "https://mcobro.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    // {
    //   title: "ConectArt",
    //   dates: "Aug 6th, 2024 - Present",
    //   description:
    //     "Designed the visual identity for ConectArt, including the logo, color palette, and brand tone. Created the branding briefing and am developing the landing page. Focused on crafting a cohesive and engaging brand experience.",
    //   image: "/conectart.png",
    //   links: [],
    // },
    {
      title: "AWS Girls User Group Uruguay",
      dates: "Jun 25th, 2024 - Jan 15th, 2025",
      description:
        "Designed the visual identity for AWS Girls User Group Uruguay, including color palette and brand tone. Created the promotional content for social media and business cards.",
      image: "/awsgirls.png",
      links: [
        {
          type: "Website",
          href: "https://main.d2onzi7tsyhps1.amplifyapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Promotional Webpage",
      dates: "Aug 12th - Aug 14th, 2024",
      description:
        "Designed the interface for a promotional webpage showcasing a VSCode theme and an accompanying npm package for theme generation. Focused on creating an engaging and visually appealing experience to highlight the product features.",
      image: "/nachop.png",
      links: [
        {
          type: "Website",
          href: "https://vs-theme-builder.nachop.dev/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Linkly",
      dates: "Jun 21st - Jun 23rd, 2024",
      description:
        "Designed the sitemap, user flow, and interface for Linkly, focusing on creating an intuitive and user-friendly experience.",
      image: "/nachop.png",
      links: [
        {
          type: "Website",
          href: "https://links.nachop.dev/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Personal Brand for Nacho",
      dates: "Jun 21st - Jun 23rd, 2024",
      description:
        "Designed a clean and modern personal brand identity, including logo, color palette, and visual elements to reflect Nacho's professional style and personality.",
      image: "/nachop.png",
      links: [
        {
          type: "Website",
          href: "https://www.nachop.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
