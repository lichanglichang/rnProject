import React from 'react'
// import type {PropsWithChildren} from 'react';
import {
  // StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import { Provider as XiaoshuProvider } from '@fruits-chain/react-native-xiaoshu'
import {
  Colors,
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import useStore from './src/store/count'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from './src/page/feed'
import Messages from './src/page/messages'
import Settings from './src/page/settings'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import PracticePage from './src/page/practice'
import { TouchableOpacity } from 'react-native'

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()

  function Home() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
    )
  }

  return (
    <SafeAreaProvider>
      <XiaoshuProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="practicePage" component={PracticePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </XiaoshuProvider>
    </SafeAreaProvider>
  )
}

export default App
