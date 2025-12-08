import Link from "next/link";
import { allProjects } from "@/components/FakeData/FakeData";
import ProjectSwiperMini from "@/components/ProjectSwiper/ProjectSwiperMini";

type TProject = {
  id: string;
  name: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
  technologies: string[];
  multipleDescriptions: string[];
  images: string[];
};

const AllProjectPage = async () => {
  return (
    <div className="container mx-auto px-5 lg:px-0">
      <h1 className="text-3xl font-bold mb-6">All Projects</h1>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects.map((project: TProject) => (
          <Link key={project.id} href={`/allProject/${project.id}`}>
            <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer">
              <ProjectSwiperMini
                images={project.images}
                projectName={project.name}
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies list */}
                <ul className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-700"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProjectPage;
