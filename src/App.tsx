
import  "./app.scss"
import { FcAdvertising, FcComments, FcLike, FcOnlineSupport, FcSearch, FcSettings, FcSupport } from "react-icons/fc"
import { FcCalendar } from "react-icons/fc"
import SidebarMenu from "./components/SidebarMenu"
import { SideBarMenuItem } from "./types/types"

import profilePic from "../public/joey-ramone.jpg"



function App() {
  
  const items:SideBarMenuItem[] = [
    {
      id:"1",
      label:"Anuncios",
      icon:FcAdvertising,
      url:"/"

    },
    {
      id:"2",
      label:"Calendario",
      icon:FcCalendar,
      url:"/"

    },
    {
      id:"3",
      label:"Comentarios",
      icon:FcComments,
      url:"/"

    },
    {
      id:"4",
      label:"Soporte",
      icon:FcOnlineSupport,
      url:"/"

    },
    {
      id:"5",
      label:"Busqueda",
      icon:FcSearch,
      url:"/"

    },
    {
      id:"6",
      label:"Me gusta",
      icon:FcLike,
      url:"/"

    },
    {
      id:"6",
      label:"Configuración",
      icon:FcSettings,
      url:"/"

    }
  ]

  const card = {
    id:"card01",
    displayName:"Joey",
    title:"Punk Rock Singer",
    photoUrl:profilePic,
    url:"/"
  }
  
  return (
    <>
      <div className="main">
        <SidebarMenu items={items} card={card}/>
      </div>
    </>
  )
}

export default App
