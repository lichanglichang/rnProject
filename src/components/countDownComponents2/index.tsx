import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { Text, View } from 'react-native'
interface IProps {
  initSecond: number
  onEnd?: () => void
}

interface countDownRefType {
  pause: () => void
  start: () => void
}

const CountDownComponents2 = forwardRef<countDownRefType, IProps>(
  ({ initSecond, onEnd }, ref) => {
    const [count, setCount] = useState(initSecond)
    const timer = useRef<any>(null)

    useImperativeHandle(ref, () => {
      return {
        start: () => {
          if (timer.current) return
          setCount(initSecond)
          timer.current = setInterval(() => {
            setCount(c => c - 1)
          }, 1000)
        },
        pause: () => {
          if (timer.current) {
            clearInterval(timer.current)
            timer.current = null
          }
        },
      }
    })

    useEffect(() => {
      if (count === 0) {
        clearInterval(timer.current)
        onEnd && onEnd()
      }
    }, [count])

    useEffect(() => {
      return () => {
        if (timer.current) {
          clearInterval(timer.current)
        }
      }
    }, [])

    return (
      <View>
        <Text>{count}</Text>
      </View>
    )
  },
)

export default CountDownComponents2
