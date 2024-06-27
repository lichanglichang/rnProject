import React, { useRef } from 'react'
import { Button, Text, View } from 'react-native'
import CountDown from '../../components/countDown'
import useCountDown from '../../hooks/useCountDown'
import CountDownComponents from '../../components/countDownComponents'
import CountDownComponents2 from '../../components/countDownComponents2'
interface IProps {}

const Feed: React.FC<IProps> = ({ navigation }) => {
  const countdownRef = useRef<{ start: () => void; pause: () => void }>(null)

  return (
    <View>
      <Button
        title="组件练习"
        onPress={() => {
          navigation.navigate('Settings')
        }}></Button>
      <Button
        title="练习"
        onPress={() => {
          navigation.navigate('practicePage')
        }}></Button>
      <Button
        title="点击开始倒计时"
        onPress={() => {
          countdownRef.current?.start()
        }}></Button>
      <Button
        title="点击暂停倒计时"
        onPress={() => {
          countdownRef.current?.pause()
        }}></Button>
      <CountDown num={3}></CountDown>
      <Text>{useCountDown(8)}</Text>
      <CountDownComponents initial={2} ref={countdownRef}></CountDownComponents>
      {/* <CountDownComponents2
        initSecond={3}
        ref={countdownRef}></CountDownComponents2> */}
    </View>
  )
}

export default Feed
