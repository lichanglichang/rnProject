import React, { useEffect, useRef } from 'react'
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native'

const AnimatedDemo = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start()
  }

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start()
  }

  const scaleAnim = useRef(new Animated.Value(1)).current // 初始缩放值

  useEffect(() => {
    const scaleAnimation = () => {
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.5, // 放大到1.5倍原大小
          duration: 500, // 动画时长500毫秒
          useNativeDriver: true, // 使用原生驱动
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // 缩小回1倍原大小
          duration: 500, // 动画时长500毫秒
          useNativeDriver: true, // 使用原生驱动
        }),
      ]).start(() => scaleAnimation())
    }
    scaleAnimation()
    // 无限循环放大缩小动画
    // scaleAnimation.reset() // 重置动画到初始状态
    // scaleAnim(true) // 设置为无限循环
    // scaleAnimation.start() // 开始动画
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[styles.container1, { transform: [{ scale: scaleAnim }] }]}>
        <Text>放大缩小动画</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container1: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
})

export default AnimatedDemo
