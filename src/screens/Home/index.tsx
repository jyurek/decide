import * as React from 'react'
import { SafeAreaView, View, Animated, Easing } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { Decision } from '../../components/Decision'
import { OptionsCountChooser } from '../../components/OptionsCountChooser'
import { discontiguousRandomArray } from '../../utils/Array'

import { styles } from './styles'

export const Home: React.FC = () => {
  const [optionCount, setOptionCount] = React.useState(2)
  const [decision, setDecision] = React.useState(0)
  const spinValues = React.useRef([] as number[])

  const cursor = React.useRef(new Animated.Value(0)).current
  const spin = () => {
    spinValues.current = discontiguousRandomArray({
      max: optionCount,
      length: 10,
    })
    cursor.setValue(0)
    Animated.timing(cursor, {
      toValue: 9,
      duration: 1000,
      useNativeDriver: false,
      isInteraction: false,
      easing: Easing.out(Easing.sin),
    }).start()
  }

  React.useEffect(() => {
    cursor.addListener(({ value }) => {
      setDecision(spinValues.current[Math.floor(value)])
    })
    return () => cursor.removeAllListeners()
  }, [])

  React.useEffect(() => spin(), [optionCount])

  const changeOptionCount = React.useCallback((itemValue: React.ReactText) => {
    setOptionCount(Number(itemValue))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.top} />
      <View style={styles.middle}>
        <Decision decision={decision} />
      </View>
      <View style={styles.bottom}>
        <OptionsCountChooser
          optionCount={optionCount}
          changeOptionCount={changeOptionCount}
        />
      </View>
    </SafeAreaView>
  )
}
