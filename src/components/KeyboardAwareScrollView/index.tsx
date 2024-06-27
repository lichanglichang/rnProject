import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { Keyboard } from 'react-native'
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view'

const KeyboardAwareScrollViewCustom = forwardRef<
  any,
  KeyboardAwareScrollViewProps
>(({ onScrollBeginDrag, ...props }, ref) => {
  const scrollRef = useRef<KeyboardAwareScrollView>(null)
  useImperativeHandle(ref, () => {
    return scrollRef.current
  })

  return (
    <KeyboardAwareScrollView
      ref={scrollRef}
      onScrollBeginDrag={onScrollBeginDrag || Keyboard.dismiss}
      {...props}
    />
  )
})

export default KeyboardAwareScrollViewCustom
