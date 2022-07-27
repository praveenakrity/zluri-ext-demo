// import { useAuth0 } from "@auth0/auth0-react"
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const ProfileHero = () => {

  const { isAuthenticated, user } = useAuth0();
  // console.log(user)

  return (
    <>
      <div className="card">
        {user?.picture ? <img className="rounded-circle text-align-center" src={user.picture} alt={`${user.name}`} width={120} height={120}/> : ''}
          <div className="card-body">
            <h5 className="card-title">{user?.name}</h5>
            <span className="card-title">{user?.email}</span>
          </div>
      </div>
    </>
  )
}

export default ProfileHero