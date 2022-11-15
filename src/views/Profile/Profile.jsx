import React from 'react'
import { useSWRConfig } from 'swr'
import { useUserProfile } from '../../services/useProfile'

const Profile = () => {
  const { user, isLoading } = useUserProfile()
  const { cache } = useSWRConfig()

  console.log(cache.get('https://randomuser.me/api/'))

  return (
    <div>
      { isLoading ? <div>Loading ... </div> : null }
      { user && <p>DONE</p> }
    </div>
  )
}

export default Profile
