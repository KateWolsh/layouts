import { useState } from "react"
import IconSwitch from "./IconSwitch"
import ListView from "./ListView"
import projects from '../data/projects-list'
import CardsView from "./CardsView"


function Store( ) {
  const [selectedIcon, setSelectedIcon] = useState("view_list")
  const onSelectedIcon = () => {
    if(selectedIcon === "view_list") {
      setSelectedIcon("view_module")
    }else{
      setSelectedIcon("view_list")
    }
  }
    return (
      <div>
        <IconSwitch icon={selectedIcon} onSwitch={onSelectedIcon}/>
        {selectedIcon === 'view_list' && (<ListView projects={projects}/>)}
        {selectedIcon === 'view_module' && (<CardsView projects={projects}/>)}
      </div>
    )
  }
  
  export default Store
