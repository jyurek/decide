import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-community/picker'

const ordinalNames = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
]

const decide = (optionCount: number) => Math.floor(Math.random() * optionCount)

export default function App() {
  const [optionCount, setOptionCount] = React.useState(2)

  const decision = React.useMemo(() => decide(optionCount), [optionCount])

  const changeOptionCount = React.useCallback((itemValue: React.ReactText) => {
    setOptionCount(Number(itemValue))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.top} />
      <View style={styles.middle}>
        <Text style={styles.label}>
          Pick the {ordinalNames[decision]} option.
        </Text>
      </View>
      <View style={styles.bottom}>
        <Text>Out of</Text>
        <Picker
          selectedValue={optionCount}
          style={styles.picker}
          onValueChange={changeOptionCount}
        >
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
            <Picker.Item value={x} label={x.toString()} key={x.toString()} />
          ))}
        </Picker>
        <Text>Options</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: 24,
    width: 32,
    alignSelf: 'baseline',
  },
  label: {
    fontSize: 20,
  },
})
