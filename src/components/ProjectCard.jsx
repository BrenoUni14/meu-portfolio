import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="block rounded-lg overflow-hidden shadow-lg hover:scale-105 transition bg-white"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </Link>
  );
}
