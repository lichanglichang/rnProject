import { useState } from 'react'

const useControllableValue = (value, onChange, defaultValue) => {
  const [state, setState] = useState(defaultValue)
  const controlValue = value === undefined ? state : value
  const controlOnChange = newValue => {
    if (onChange) {
      onChange(newValue)
    }
    if (value === undefined) {
      setState(newValue)
    }
  }

  return [controlValue, controlOnChange]
}

export default useControllableValue
