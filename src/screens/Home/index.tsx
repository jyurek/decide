import * as React from 'react'
import { SafeAreaView, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { Decision } from '../../components/Decision'
import { OptionsCountChooser } from '../../components/OptionsCountChooser'

import { styles } from './styles'

export const Home: React.FC = () => {
  const [optionCount, setOptionCount] = React.useState(2)

  const decide = (optionCount: number) =>
    Math.floor(Math.random() * optionCount)
  const decision = React.useMemo(() => decide(optionCount), [optionCount])

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
