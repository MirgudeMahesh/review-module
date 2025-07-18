import React from 'react'
import MainNavbar from './MainNavbar'

export default function MyProfile() {
  return (
    <div><MainNavbar/>
<h1 style={{
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}}>
  My Profile
</h1>

    </div>
  )
}
