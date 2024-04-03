import Project from "../project";
import ShopItem from "./ShopItem";

interface ProjectListProps {
  projects: Project[];
}

function ListView({ projects }: ProjectListProps) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {projects.map((project, index) => (
        <ShopItem project={project} key={index} />
      ))}
    </ul>
  );
}

export default ListView;
