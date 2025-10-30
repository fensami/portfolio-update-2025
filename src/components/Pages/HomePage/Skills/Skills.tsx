"use client";
import { motion } from "framer-motion";
// import { useState } from "react";
import Image from "next/image";

type TallSkill = {
  name: string;
  logoImage: string;
};

// ✅ Fake JSON data
const allSkills = {
  data: [
    {
      name: "Next.js",
      logoImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },

    {
      name: "React.js",
      logoImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "TypeScript",
      logoImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      logoImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "SQL",
      logoImage:
        "https://res.cloudinary.com/dsc0hliud/image/upload/v1760598528/6a230482-c7fc-4ab6-b2cf-99a92b8cc691.png",
    },
    {
      name: "Postgresql",
      logoImage:
        "https://res.cloudinary.com/dsc0hliud/image/upload/v1760598611/99801931-0353-4d6c-8eb3-85eff5c5e106.png",
    },

    {
      name: "HTML5",
      logoImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      logoImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Sass",
      logoImage:
        "https://res.cloudinary.com/dsc0hliud/image/upload/v1760457475/sassImg_aer99f.svg",
    },
    {
      name: "Tailwind CSS",
      logoImage:
        "https://res.cloudinary.com/dsc0hliud/image/upload/v1760457488/tailwindImg_wausrf.png",
    },
    {
      name: "Git",
      logoImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },

    {
      name: "Bootstrap",
      logoImage:
        "https://res.cloudinary.com/dsc0hliud/image/upload/v1760457489/bootstrapImg_fzsxn9.jpg",
    },

    {
      name: "Figma",
      logoImage:
        "https://res.cloudinary.com/dsc0hliud/image/upload/v1760457642/png-transparent-figma-logo-brand-logos-brands-in-colors-icon-thumbnail_cfsoff.png",
    },

    {
      name: "Sheet",
      logoImage:
        "https://res.cloudinary.com/dsc0hliud/image/upload/v1760457487/sheet_spkerx.png",
    },
    {
      name: "Google Form",
      logoImage:
        "https://res.cloudinary.com/dsc0hliud/image/upload/v1760457495/Google-Forms_v3sxwq.png",
    },
    {
      name: "Mongoose",
      logoImage:
        "https://res.cloudinary.com/dsc0hliud/image/upload/v1760457412/mongodb_ilj3vo.png",
    },
  ],
};

const Skills = () => {
  // const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="portfolio-global-box">
      <h4 className="portfolio-global-title mb-6">My Expert Area</h4>
      <ul className="grid grid-cols-3 gap-5">
        {allSkills.data.map((allSkill: TallSkill, index: number) => (
          <li key={index}>
            <div className="custom-logo-box text-center">
              <div className="custom-logo-img flex justify-center">
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                  }}
                  transition={{
                    rotate: { duration: 2, ease: "easeInOut" },
                    scale: { duration: 0.3 },
                  }}
                  className="relative"
                >
                  <Image
                    src={allSkill.logoImage}
                    alt={allSkill.name}
                    width={40}
                    height={40}
                  />
                </motion.div>
              </div>
              <p className="logo-title mt-2 font-semibold text-sm">
                {allSkill.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
