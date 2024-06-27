import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useState,
} from 'react'
import { Text } from 'react-native'

const CountDownComponents = forwardRef<
  { start: () => void; pause: () => void },
  { initial?: number; onEnd?: () => void }
>((props, ref) => {
  const { initial = 10, onEnd } = props
  const [count, setCount] = useState(initial)
  const timer = useRef<any>(null)

  useImperativeHandle(ref, () => ({
    start: () => {
      if (timer.current) return
      setCount(initial)
      timer.current = setInterval(() => {
        setCount(c => c - 1)
        if (count === 0) {
          clearInterval(timer.current)
          timer.current = null
          onEnd && onEnd()
        }
      }, 1000)
    },
    pause: () => {
      if (timer.current) {
        clearInterval(timer.current)
        timer.current = null
      }
    },
  }))

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearInterval(timer.current)
      }
    }
  }, [])

  return <Text>{count}</Text>
})
export default CountDownComponents
// 使用方法
// 父组件中
// const countDownRef = useRef(null);
// <CountDown ref={countDownRef} initial={20} onEnd={() => console.log('Countdown ended')} />
// countDownRef.current.start(); // 开始倒计时
// countDownRef.current.pause(); // 暂停倒计时
