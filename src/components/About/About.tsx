"use client";
import MainProfile from "../Pages/HomePage/MainProfile/MainProfile";

const About = () => {
  return (
    <div className="container mx-auto custom-mt px-5">
      <div className="about-wrapper">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <MainProfile></MainProfile>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            <div className="about-right-content  portfolio-global-box">
              <h2 className="about-title">
                Hi I am <span>Asadur Jaman Nur</span> 👋
              </h2>
              <p className="about-para">
                I’m a passionate <strong>Front-End Developer</strong> based in{" "}
                <strong>Feni, Bangladesh</strong>, with a strong enthusiasm for
                creating modern, user-focused, and high-performing web
                experiences.
                <span className="mt-2 inline-block">
                  I completed my{" "}
                  <strong>Higher Secondary Certificate (HSC)</strong> in{" "}
                  <strong> 2020</strong> and am currently pursuing a Bachelor’s
                  degree in Mathematics at the university level. Alongside my
                  academic journey, I’ve built a solid foundation in{" "}
                  <strong>web development</strong>, specializing in{" "}
                  <strong>React.js, Next.js, and Tailwind CSS</strong>.
                </span>
                <span className="mt-2 inline-block">
                  Over the past year, I’ve contributed to commercial projects on
                  ThemeForest, gaining real-world experience in building
                  responsive, SEO-optimized, and visually engaging websites. I
                  take pride in writing clean, reusable code and delivering
                  designs that balance both functionality and creativity.
                </span>
                <span className="mt-2 inline-block">
                  My current focus is on{" "}
                  <strong>advancing my front-end development skills</strong>,
                  learning modern <strong>UI/UX techniques</strong>, and
                  building <strong>interactive web applications</strong> that
                  make a meaningful impact. I’m always eager to collaborate,
                  explore new technologies, and grow as a developer in the
                  global tech community.
                </span>
              </p>
              <div className="mt-7 ">
                <h3 className="font-bold text-3xl mb-3">Expariance</h3>
                <div className="mb-2 text-[#576076]">
                  <p className="text-xl">
                    <span className="font-bold">
                      Web Development Trainer- Shooting Star Ltd
                    </span>{" "}
                    (October, 2024 – May ,2025)
                  </p>
                  <p className="text-xl">
                    Mentored students on projects and created materials to
                    improve coding standards.
                  </p>
                </div>
                <div className="text-[#576076]">
                  <p className="text-xl">
                    <span className="font-bold">
                      Frontend Developer – Themepul IT Solutions Company
                    </span>{" "}
                    (April, 2024 – June ,2024)
                  </p>
                  <p className="text-xl">
                    Converted Figma designs into functional, responsive code
                    with animations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
