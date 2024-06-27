import {
  NumberInput,
  NumberInputProps,
} from '@fruits-chain/react-native-xiaoshu'
import React from 'react'
import useControllableValue from '../../hooks/useControllableValue'
interface IProps extends NumberInputProps {
  value?: number
  onChange?: (val: number) => void
  defaultValue?: number
  conversion: number
  handleComputer: (result: number, val: number) => void
}

const AutoComputerInput: React.FC<IProps> = ({
  value,
  onChange,
  conversion,
  handleComputer,
  defaultValue,
  ...props
}) => {
  const [state, setState] = useControllableValue(value, onChange, defaultValue)
  return (
    <NumberInput
      {...props}
      placeholder="请输入"
      value={state}
      onChange={val => {
        handleComputer(val * conversion, val)
        setState(val)
      }}
    />
  )
}

export default AutoComputerInput
