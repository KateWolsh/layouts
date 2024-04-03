import ProjectIcon from "../projectIcon"

function IconSwitch({ icon, onSwitch }: ProjectIcon) {

    return (
      <div className="cursor-pointer">
        <i className="material-icons" onClick={onSwitch}>{icon}</i>
      </div>
    )
  }
  
  export default IconSwitch
