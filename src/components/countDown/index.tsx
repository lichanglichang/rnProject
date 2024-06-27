import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
interface IProps {
  num: number
}

const CountDown: React.FC<IProps> = ({ num }) => {
  const [count, setCount] = useState(num)

  useEffect(() => {
    let timerId: any = null

    if (count > 0) {
      timerId = setInterval(() => {
        setCount(count - 1)
      }, 1000)
    }
    if (count === 0) {
      clearInterval(timerId)
    }
    return () => clearInterval(timerId)
  }, [count])

  return (
    <View>
      <Text>{count}</Text>
    </View>
  )
}

export default CountDown
