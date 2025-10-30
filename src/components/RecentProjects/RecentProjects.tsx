"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

// ✅ Import all images here
import FincatchImg from "../../assets/img/project-img/fincatch.png";
import EduplsImg from "../../assets/img/project-img/edupls.png";
import ReeniImg from "../../assets/img/project-img/reeni.png";

// ✅ Project data (you can also load this from a JSON or CMS later)
const projects = [
  {
    id: 1,
    title: "Fincatch – Banking & Finance Template",
    image: FincatchImg,
    link: "/allProject",
  },
  {
    id: 2,
    title: "Reeni – Personal Portfolio Template",
    image: ReeniImg,
    link: "/allProject",
  },
  {
    id: 3,
    title: "Edupls – Education & LMS Template",
    image: EduplsImg,
    link: "/allProject",
  },
];

const RecentProjects = () => {
  return (
    <div className="portfolio-global-box">
      {/* Header */}
      <div className="portfolio-title flex items-center justify-between mb-6">
        <h4 className="portfolio-global-title">Recent Projects</h4>
        <Link
          href="/allProject"
          className="recent-post-btn flex items-center gap-2"
        >
          View All Projects
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="global-card-wrapper">
        {projects.map((project) => (
          <div key={project.id} className="global-card-wrap">
            <Link href={project.link}>
              <div className="global-img overflow-hidden rounded-t-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={200}
                  width={350}
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
