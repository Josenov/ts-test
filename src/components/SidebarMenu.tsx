import { useState } from "react";
import { SideBarMenuCard, SideBarMenuItem } from "../types/types"
import { classNames } from "../utils/classes";
import { VscMenu } from "react-icons/vsc";
import SideBarMenuItemView from "./SideBarMenuItemView";
import SideBarMenuCardView from "./SideBarMenuCardView";
import "./SideBarMenu.scss"


interface SideBarMenuProps {
    items: SideBarMenuItem [];
    card : SideBarMenuCard;
}



const SidebarMenu = ({items, card}:SideBarMenuProps) => {
  
    const [isOpen, setIsOpen] = useState<boolean>(true)

    function handleClick(){
        setIsOpen(!isOpen)
    }
  
    return (
    <div className={classNames('SideBarMenu', isOpen?'expanded':'collapsed')}>

        <div className="menuButton">
            <button className="hamburguerIcon" onClick={handleClick}>
                <VscMenu/>
            </button>
        </div>
        <SideBarMenuCardView card={card} isOpen={isOpen}/>
        {
            items.map(item=>(
                <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen}/>
            ))
        }
    </div>
  )
}

export default SidebarMenu