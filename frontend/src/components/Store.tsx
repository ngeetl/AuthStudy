import React from 'react';
import {Address, Restaurant} from '../model/restaurant'

interface OwnProps {
    info:Restaurant,
    changeAddress(adress:Address):void // return없는 함수는 void
}

const Store:React.FC<OwnProps> = ({info}) => {
  return (
    <div>
      {info.name}
    </div>
  )
};

export default Store
