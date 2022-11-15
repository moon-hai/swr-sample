import useSWR from "swr";

export const useUserProfile = () => {
  const { data, error } = useSWR('https://randomuser.me/api/', {
    revalidateOnFocus: false
  })

  return {
    user: data,
    error,
    isLoading: !error && !data,
  }
}
