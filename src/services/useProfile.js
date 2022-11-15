import useSWR from "swr";

export const useUserProfile = () => {
  const { data, error } = useSWR('https://randomuser.me/api/')

  return {
    user: data,
    error,
    isLoading: !error && !data,
  }
}
