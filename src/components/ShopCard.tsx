import Project from "../project";

interface ShopCardProps {
    project: Project;
  }

  function ShopCard( {project}: ShopCardProps ) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border border-gray-300 rounded-lg р-40">
          <h2 className="mt-4 text-sm text-gray-700">{project.name}</h2>
          <p className="mt-1 text-lg font-medium text-gray-900">{project.color}</p>
          <div className="w-full h-40 flex justify-center items-center overflow-hidden">
              <img className="w-full h-full object-contain" src={project.img} alt={project.name}/>
          </div>
          <p className="mt-1 flex items-center justify-between text-lg font-medium text-gray-900">
              <span>{project.price}</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Купить</button>
          </p>
      </div>
    )
}
  
export default ShopCard

