"use client";

import MainProfile from "../share/MainProfile/MainProfile";

const About = () => {
  return (
    <div className="container mx-auto px-5 xl:px-0">
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
              {/* <p className="text-2xl mb-2 mt-4 font-semibold">My Short Programming Journey Story</p> */}
              <div className="space-y-3 text-lg mt-4">

                <p>
                  I’m a passionate Front-End Developer based in <strong>Feni, Bangladesh</strong>, who truly discovered the magic of coding in early <strong>2023</strong>. Before that year, I had zero background in programming — I’d never written a single line of code or even touched HTML. Everything changed when I enrolled in the Programming Hero complete web development course. Those intense months of learning from absolute scratch (HTML → CSS → JavaScript → React) completely transformed the way I think and opened up a whole new world for me.
                </p>
                <p> Right after the course, I jumped straight in and landed my first remote Front-End job in March 2024. One month later, I moved to Mymensingh and joined Themepul as an on-site developer. In just 5+ months there, I shipped multiple commercial ThemeForest templates, mastered React, Next.js, and Tailwind CSS, and learned to deliver clean, production-ready code that sells. Pure rocket fuel for my career! 🚀</p>
                <p>Mid-2024, I returned to Feni and jumped into the role that feels like home: Frontend Development Trainer.
                  From October 2024 to June 2025, I’ve been teaching the exact stack that changed my life: HTML, CSS, JavaScript, and Tailwind CSS. Taking complete beginners and turning them into confident frontend developers who can build fast, beautiful, responsive websites from scratch — that daily transformation is my biggest high. This isn’t just a job… it’s me paying it forward, full circle. 🔥❤️</p>

              </div>

              <p className="font-semibold text-2xl mt-5 mb-2">What kind of work lights me up?</p>

              <div className="space-y-3 text-lg">
                <p>
                  I love turning ideas into smooth, beautiful, and fast user experiences. Whether it’s crafting pixel-perfect UI with Tailwind, building complex interactive components in React/Next.js, or optimizing performance — I’m in my element when the design feels alive and the code is clean and maintainable. I enjoy both creating things from scratch and teaching others how to do the same.
                </p>
              </div>

              <p className="font-semibold text-2xl mt-5 mb-2">Outside of coding, life is simple and colorful.</p>

              <div className="space-y-3 text-lg">
                <p>
                  You’ll usually find me on the field playing cricket with friends whenever I get the chance, lost in a gripping thriller movie, or sketching to unwind after a long day of code.
                </p>
              </div>

              <p className="font-semibold text-2xl mt-5 mb-2">But my real happy place? 🪶💚</p>

              <div className="space-y-3 text-lg">
                <p>
                  My little pet squad at home — I’m a total pet lover! I’ve got a noisy, cheerful gang: budgies chirping all day, elegant diamond doves, playful cockatiels that love head scratches, and even a few proud deshi murgi strutting around the yard. Raising and caring for them over the years has taught me patience, responsibility… and how to wake up at 5 AM when a cockatiel decides it’s concert time! 🦜🐓❤️
                </p>
              </div>


              <p className="font-semibold text-2xl mt-5 mb-2">Summary</p>

              <div className="space-y-3 text-lg">
                <p>
                  I’m still early in my journey, but I’m obsessed with growth — constantly learning new UI/UX trends, experimenting with animations, and pushing myself to build projects that people actually enjoy using. I’m friendly, a little perfectionist about my code, and always excited to collaborate, teach, or learn from others in this amazing global developer community.
                </p>
              </div>




              <h3 className=" relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-lime-400 after:to-green-500 font-semibold text-2xl mt-5 mb-2">
                Experience
              </h3>
              <div className="space-y-4 text-lg mt-5">

                {/* Web Development Trainer */}
                <div>
                  {/* <div className="absolute left-0 top-2 w-4 h-4 bg-lime-400 rounded-full -translate-x-2/3 group-hover:scale-150 transition-transform"></div> */}

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold ">
                      Web Development Trainer
                      <span className="text-green-400 font-medium"> @ Shooting Star Ltd</span>
                    </h4>
                    <p className=" font-medium">October 2024 – June 2025 · Feni, Bangladesh</p>

                    <ul className="mt-3">
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        Trained 20 beginners from zero to building full responsive websites using HTML, CSS, JavaScript & Tailwind CSS
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        Designed complete curriculum, live projects, and real-world assignments
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        Mentored students one-on-one — many landed their first freelance gigs during the course!
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Frontend Developer */}
                <div >
                  {/* <div className="absolute left-0 top-2 w-4 h-4 bg-green-500 rounded-full -translate-x-2/3 group-hover:scale-150 transition-transform"></div> */}

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold ">
                      Frontend Developer
                      <span className="text-green-400 font-medium"> @ Themepul IT Solutions</span>
                    </h4>
                    <p className=" font-medium">April 2024 – September 2024 · Mymensingh, Bangladesh</p>

                    <ul className="mt-3 ">
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        Built and shipped 4+ premium ThemeForest templates (sold worldwide)
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        Converted complex Figma designs into pixel-perfect, fully responsive .
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        Mastered advanced animations (Framer Motion), SEO optimization, and performance tuning
                      </li>
                    </ul>
                  </div>
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
