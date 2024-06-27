import React, { useMemo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import useControllableValue from '../../hooks/useControllableValue'
import { Selector } from '@fruits-chain/react-native-xiaoshu'
type valueType = { label: string; value: number }
interface IProps {
  value?: number
  onChange?: (value: valueType) => void
  defaultValue?: valueType
  options: valueType[]
}

const UnitPickerType: React.FC<IProps> = ({
  value,
  onChange,
  defaultValue,
  options,
}) => {
  const [pickValue, pickChange] = useControllableValue(
    value,
    onChange,
    defaultValue,
  )

  const typeName = useMemo(() => {
    return options.filter(item => item?.value === value)?.[0]?.label
  }, [pickValue])

  const handelPress = () => {
    Selector({
      title: '请选择',
      value: pickValue,
      options,
      onChange: (val, option) => {
        pickChange(val, option?.[0])
      },
    })
  }

  return (
    <TouchableOpacity onPress={handelPress}>
      <Text>点击切换单位：{typeName}</Text>
    </TouchableOpacity>
  )
}

export default UnitPickerType
