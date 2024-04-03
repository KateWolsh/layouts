import Project from "../project";

interface ShopItemProps {
  project: Project;
}

function ShopItem({ project }: ShopItemProps) {
  return (
    <li className="py-5 px-4">
      <div className="w-full flex gap-x-8 items-center justify-between">
        <img src={project.img} alt={project.name} className="h-12 w-12 flex-none rounded-full bg-gray-50"/>
            <h2 className="text-lg font-semibold">{project.name}</h2>
            <p className="text-gray-600">{project.color}</p>
            <p className="text-gray-800 font-bold">{project.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Купить</button>
      </div>
    </li>
  );
}

export default ShopItem;



