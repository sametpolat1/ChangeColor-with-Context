import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import User from './User'

function UserList() {
    //console.log("UserList Props:", changeColor, users)

    const {users}= useContext(UserContext)
    console.log("Userlist Comp. Context datası:" , users)
  return (
    <div>UserList
        {/* <User changeColor={changeColor} users={users}/> */}

        {users.map((user)=>{
            return (
            <User key = {user.id} user={user} />

                )})}
    </div>
  )
}

export default UserList