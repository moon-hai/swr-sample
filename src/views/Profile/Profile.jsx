import React, { useCallback } from 'react'
import { useSWRConfig } from 'swr'
import { useUserProfile } from '../../services/useProfile'

const Profile = () => {
  const { user, isLoading } = useUserProfile()
  const { cache } = useSWRConfig()

  const clearCache = useCallback(() => {
    console.log(cache.get('https://randomuser.me/api/'))
    cache.delete('https://randomuser.me/api/')
    console.log(cache.get('https://randomuser.me/api/'))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      { isLoading ? <div>Loading ... </div> : null }
      { user && <p>DONE</p> }

      <button onClick={clearCache}>Clear Cache</button>
    </div>
  )
}

export default Profile
