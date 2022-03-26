import React from 'react'
import User from './User'

function UserList({changeColor, users} ) {
    //console.log("UserList Props:", changeColor, users)
  return (
    <div>UserList
        {/* <User changeColor={changeColor} users={users}/> */}

        {users.map((user)=>{
            return (
            <User key = {user.id} changeColor={changeColor} user={user} />

                )})}
    </div>
  )
}

export default UserList