import React from 'react'
import {auth} from '../utils/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { async } from '@firebase/util'

const Dashboard = () => {
  const route = useRouter()
  const [user, loading] = useAuthState(auth)
  //check user sign in
  

  const getData = async () => {
    if (loading) return
  if(!user) return route.push('auth/login')
  }

  //get user data 
  useEffect (() => {
    getData()
  }, [user, loading])
  

  return (
    <div>
      <h1>Your posts</h1>
      <div>
        posts
      </div>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

export default Dashboard