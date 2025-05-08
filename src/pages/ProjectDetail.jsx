import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return <p className="text-center mt-10">Projeto não encontrado</p>;

  return (
    <div className="container mx-auto p-4">
      <img
        src={project.image}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h2 className="text-2xl font-bold">{project.name}</h2>
      <p className="mt-2">{project.description}</p>
      <p className="mt-2">
        <strong>Minhas atividades:</strong> {project.role}
      </p>
      <p className="mt-2">
        <strong>Tecnologias:</strong> {project.tech.join(", ")}
      </p>
      <a
        href={project.link}
        target="_blank"
        className="text-blue-600 mt-4 inline-block"
      >
        Ver código no GitHub
      </a>
    </div>
  );
}
