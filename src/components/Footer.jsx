import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'

const Footer = () => {

  let {developer} = useContext(UserContext);

  return (
    <div>
      <p>This website is developed by : {developer.name}</p>
    </div>
  )
}

export default Footer
