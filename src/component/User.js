import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function User({user}) {
    //console.log("User Comp. Props:", changeColor, user)
    const {changeColor} = useContext(UserContext)
    console.log("Context data:", changeColor)
  return (
    <div style={{background:user.color, padding:"8px"}}> User Componenti
     <h3>Name:{user.name}</h3>
     <p>Age:{user.age}</p>
     <p>Email:{user.email}</p>
     <p>Color:{user.color}</p>
     For NewColor: {"    "}
     <input value={user.color} onChange={e=> changeColor(user.id, e.target.value)}/>
    </div>
  )
}

export default User