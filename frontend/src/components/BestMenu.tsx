import React from 'react'
import { Menu } from '../model/restaurant'

interface OwnProps extends Omit<Menu, 'price'> {
    showBestMenu(name:string):string
}

const BestMenu:React.FC<OwnProps> = ({name, showBestMenu}) => {
  return (
    <div>
      BestMenu
      {name + showBestMenu}
    </div>
  )
}

export default BestMenu
