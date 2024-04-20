import { useState } from 'react'
import './App.css'
import Store from './components/Store'
import {Address, Restaurant} from './model/restaurant'
import BestMenu from './components/BestMenu'

let data:Restaurant = {
  name: '육면가',
  category: 'korean',
  address: {
    city: 'busan',
    detail: 'togok',
    zipCode: 23123,
  },
  menu: [
    {
      name: '함흥냉면',
      price: 8000,
    },
    {
      name: '우거지 갈비탕',
      price: 13000,
    },
  ]
}

const Example:React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  
  const changeAddress = (address:Address) => {
    setMyRestaurant(prev => ({...prev, address}))
  } 

  const showBestMenu = (name:string) => {
    return name
  }

  return (
    <>
      <Store info={myRestaurant} changeAddress={changeAddress}/>
      <BestMenu name="함흥냉면" showBestMenu={showBestMenu}/>
    </>
  )
}

export default Example
   