import { allProjects } from "@/components/FakeData/FakeData";
import ProjectSwiper from "@/components/ProjectSwiper/ProjectSwiper";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ Unwrap params (Next.js 15 makes params a Promise)
  const { id } = await params;

  const project = allProjects.find((p) => p.id === id);

  // ✅ Use notFound() for cleaner 404 handling
  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-10">{project.name}</h1>

      {/* 🖼 Swiper slide */}
      <ProjectSwiper images={project.images} projectName={project.name} />

      <p className="text-gray-700 mt-8 text-lg">
        <span className="font-bold">Short Description:</span>{" "}
        {project.description}
      </p>

      <div className="flex mt-2 mb-3 text-lg">
        <span className="font-bold">Technologies: </span>
        <ul className="flex gap-2 ml-3">
          {project.technologies.map((tec, index) => (
            <li key={index}>{tec},</li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {project.multipleDescriptions.map((desc, index) => (
            <li key={index}>✅ {desc}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex gap-3">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Live Link
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
