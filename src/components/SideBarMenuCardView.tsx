import { SideBarMenuCard } from "../types/types"
import { classNames } from "../utils/classes"
import "./SideBarMenuCardView.scss"

interface SideBarMenuCardViewProps{
    card : SideBarMenuCard,
    isOpen:boolean,
} 



const SideBarMenuCardView = ({card, isOpen,}:SideBarMenuCardViewProps) => {
  return (
    <div className="SideBarMenuCardView">
        <img className="profile" src={card.photoUrl} width="100%" alt="" />
        <div className={classNames("profileInfo", isOpen? " ": "collapsed")}>
            <div className="name">{card.displayName}</div>
            <div className="title">{card.title}</div>
            <div className="url"><a href={card.url}>Ir a Perfil</a></div>
        </div>
    </div>
  )
}

export default SideBarMenuCardView