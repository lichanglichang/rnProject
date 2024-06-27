import React, { useEffect, useRef, useState } from 'react'
import { Animated, Text, TouchableOpacity, View } from 'react-native'
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
interface IProps {}

const Messages: React.FC<IProps> = ({ navigation }) => {
  navigation.setOptions({ title: '组件练习' })
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
  return (
    <>
      <KeyboardAwareScrollViewCustom ref={scrollRef}>
        <Form form={form} initialValues={{ total: 12, unit: 23, unitType: 1 }}>
          <Cell title="单位计算" />
          <Cell
            title="前置"
            value={
              <Form.Item name="total">
                <AutoComputerInput
                  bordered
                  conversion={10}
                  handleComputer={val => {
                    form.setFieldValue('unit', val)
                  }}
                />
              </Form.Item>
            }
          />
          <Cell
            title="前置"
            value={
              <Form.Item name="unit">
                <NumberInput placeholder="请输入" bordered />
              </Form.Item>
            }
          />
          <Cell title="单位切换" />
          <Cell
            title=""
            value={
              <Form.Item name="unitType">
                <UnitPickerType
                  options={[
                    { label: 'kg', value: 1 },
                    { label: 'g', value: 2 },
                  ]}
                />
              </Form.Item>
            }
          />
          <Cell title="动画练习" />
        </Form>
      </KeyboardAwareScrollViewCustom>
      <AnimatedDemo></AnimatedDemo>

      <BottomBar
        buttonList={[
          {
            children: state,
            style: { width: 160 },
            onPress: () => {
              setState(state + 1)
            },
          },
          {
            children: '提交',
            onPress: () => {
              scrollRef.current?.scrollToEnd()
              // 移除渲染结果
              Portal.remove(key)
            },
          },
        ]}></BottomBar>
    </>
  )
}

export default Messages
