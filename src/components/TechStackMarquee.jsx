"use client";
import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";

const programmingLanguages = [
  {
    name: "Html5",
    logo: "/logos/html5.svg",
    alt: "Html5 Logo"
  },
  {
    name: "Css3",
    logo: "/logos/css3.svg",
    alt: "Css3 Logo"
  },
  {
    name: "JavaScript",
    logo: "/logos/javascript.svg",
    alt: "JavaScript Logo"
  },
  {
    name: "MongoDB",
    logo: "/logos/mongodb.svg",
    alt: "MongoDB Logo"
  },
  {
    name: "React",
    logo: "/logos/reactjs.svg",
    alt: "React Logo"
  },
  {
    name: "Node.js",
    logo: "/logos/nodejs.svg",
    alt: "Node.js Logo"
  },
  {
    name: "Express",
    logo: "/logos/express.svg",
    alt: "Express Logo"
  },
  {
    name: "MySQL",
    logo: "/logos/mysql.svg",
    alt: "MySQL Logo"
  },
  {
    name: "Java",
    logo: "/logos/java.svg",
    alt: "Java Logo"
  },
  {
    name: "Maven",
    logo: "/logos/maven.svg",
    alt: "Maven Logo"
  },
  {
    name: "Git",
    logo: "/logos/git.svg",
    alt: "Git Logo"
  },
  {
    name: "NextJS",
    logo: "/logos/nextjs.svg",
    alt: "NextJS Logo"
  },
  {
    name: "Postgresql",
    logo: "/logos/postgresql.svg",
    alt: "Postgresql Logo"
  },
  {
    name: "Spring Boot",
    logo: "/logos/springboot.svg",
    alt: "Spring Boot Logo"
  },
  {
    name: "Eclipse",
    logo: "/logos/eclipse.svg",
    alt: "Eclipse Logo"
  },
  {
    name: "VS Code",
    logo: "/logos/vs-code.svg",
    alt: "VS Code Logo"
  },
  {
    name: "IntelliJIdea",
    logo: "/logos/intellijIdea.svg",
    alt: "IntelliJIdea Logo"
  },
  {
    name: "Github",
    logo: "/logos/github.svg",
    alt: "Github Logo"
  },
  {
    name: "Windows",
    logo: "/logos/windows.svg",
    alt: "Windows Logo"
  },
  {
    name: "Linux",
    logo: "/logos/linux.svg",
    alt: "Linux Logo"
  }
  
];

const firstRow = programmingLanguages.slice(0, programmingLanguages.length / 2);
const secondRow = programmingLanguages.slice(programmingLanguages.length / 2);

const LanguageCard = ({ logo, name, alt }) => {
  return (
    <figure className="flex-shrink-0 h-32 w-32 cursor-pointer overflow-hidden rounded-xl border p-4 mx-4
      border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]
      dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-20 h-20">
          <Image
            src={logo}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 80px) 100vw, 80px"
          />
        </div>
        <figcaption className="text-sm font-medium dark:text-white text-center mt-2">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

export function TechStackMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-8 bg-gray-100">
      <Marquee 
        pauseOnHover 
        className="[--duration:30s] [--gap:1rem]"
        repeat={3}
      >
        {firstRow.map((lang) => (
          <LanguageCard key={lang.name} {...lang} />
        ))}
      </Marquee>
      <Marquee 
        pauseOnHover 
        className="[--duration:30s] [--gap:1rem]"
        repeat={3}
        reverse
      >
        {secondRow.map((lang) => (
          <LanguageCard key={lang.name} {...lang} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-950"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-gray-100 to-transparent dark:from-gray-950"></div>

    </div>
  );
}

export default TechStackMarquee;
