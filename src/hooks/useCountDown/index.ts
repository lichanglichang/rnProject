import { useEffect, useState } from 'react'

const useCountDown = (time: number) => {
  const [count, setCount] = useState<number>(time)
  useEffect(() => {
    let timer = setInterval(() => {
      setCount(pre => pre + 1)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return count
}
export default useCountDown
