import React, { useEffect, useRef, useState } from 'react'
import {
  Animated,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native'
import AutoComputerInput from '../../components/auto-computer-input'
import {
  Cell,
  Form,
  NumberInput,
  Portal,
} from '@fruits-chain/react-native-xiaoshu'
import BottomBar from '../../components/buttom-bar'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import KeyboardAwareScrollViewCustom from '../../components/KeyboardAwareScrollView'
import UnitPickerType from '../../components/unit-picker-type'
import FadeInView from '../../components/animated'
import AnimatedDemo from '../../components/animated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
interface IProps {}

const PracticePage: React.FC<IProps> = ({ navigation }) => {
  navigation.setOptions({
    header: () => null,
  })
  const insets = useSafeAreaInsets()
  const [form] = Form.useForm()
  const [state, setState] = useState<number>(0)
  const scrollRef = useRef<KeyboardAwareScrollView>(null)
  // 添加到根节点渲染
  const key = Portal.add(<Text>在 Provider 组件渲染</Text>)
  const fadeAnim = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(
      fadeAnim, // 动画中的变量值
      {
        toValue: 1, // 透明度最终变为1，即完全不透明
        duration: 10000, // 让动画持续一段时间
        useNativeDriver: true,
      },
    )
  }, [fadeAnim])
  const [keyboardShow, setKeyboardShow] = useState(false)

  useEffect(() => {
    // 安卓才隐藏底部
    if (Platform.OS === 'android') {
      // 注意如果你把 android:windowSoftInputMode 设置为 adjustResize 或是 adjustPan，则在 Android 上只有 keyboardDidShow 和 keyboardDidHide 事件有效。
      const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardShow(true)
      })
      const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardShow(false)
      })

      return () => {
        keyboardDidShow.remove()
        keyboardDidHide.remove()
      }
    }
  }, [])
  const arr = new Array(50).fill(1)

  return (
    <ScrollView stickyHeaderIndices={[50]} style={{ marginTop: insets.top }}>
      {arr.map((item, index) => {
        return (
          <View>
            <Text>{index}</Text>
          </View>
        )
      })}
      <View style={{ height: 50, backgroundColor: 'pink' }}>
        <Text>{'head'}</Text>
      </View>
      <Button
        onPress={() => {
          navigation.push('Home')
        }}
        title="fanhui"></Button>
      {arr.map((item, index) => {
        return (
          <View>
            <Text>{index}</Text>
          </View>
        )
      })}
    </ScrollView>
  )
}

export default PracticePage
