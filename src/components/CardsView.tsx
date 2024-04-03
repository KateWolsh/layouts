import Project from "../project";
import ShopCard from "./ShopCard";

interface ProjectListProps {
    projects: Project[];
  }

function CardsView( {projects}: ProjectListProps ) {
    return (
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {projects.map((project, index) => (
            <ShopCard project={project} key={index}/>
        ))}
      </div>
    )
  }
  
export default CardsView