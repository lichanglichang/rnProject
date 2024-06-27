import { Button, ButtonProps } from '@fruits-chain/react-native-xiaoshu'
import React, { useEffect, useState } from 'react'
import { Keyboard, Platform, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
interface IProps {
  buttonList: ButtonProps[]
}

const BottomBar: React.FC<IProps> = ({ buttonList }) => {
  const insets = useSafeAreaInsets()
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

  if (keyboardShow) {
    return null
  }
  return (
    <View style={[styles.wrap, { paddingBottom: insets.bottom }]}>
      {buttonList.map((item, index) => {
        return (
          <Button
            key={index}
            type={index === buttonList.length - 1 ? 'primary' : 'hazy'}
            {...item}
            style={[styles.but, item.style]}>
            {item?.children}
          </Button>
        )
      })}
    </View>
  )
}
const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  but: {
    width: 100,
    marginRight: 8,
  },
})
export default BottomBar
