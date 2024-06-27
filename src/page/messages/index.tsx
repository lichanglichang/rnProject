import React from 'react'
import {
  Button,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import useStore from '../../store/count'

interface IProps {}

const Settings: React.FC<IProps> = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }
  const { count, increment, decrement } = useStore()
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <Text> {count}</Text>
          <Button
            title="add"
            onPress={() => {
              increment()
            }}
          />
          <Button
            title="sub"
            onPress={() => {
              decrement()
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Settings
