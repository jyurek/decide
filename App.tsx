import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AppState,
  ScrollView,
} from 'react-native';

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
];

const decide = (optionCount: number) => Math.floor(Math.random() * optionCount);

export default function App() {
  const [decision, setDecision] = React.useState<number>(decide(2));
  const askAgain = React.useCallback(() => {
    const newDecision = decide(2);
    setDecision(newDecision);
  }, []);

  const onAppStateChange = newAppState => {
    if (newAppState === 'active') {
      askAgain();
    }
  };

  React.useEffect(() => {
    AppState.addEventListener('change', onAppStateChange);
    return () => {
      AppState.removeEventListener('change', onAppStateChange);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.top} />
      <TouchableOpacity onPress={askAgain} style={styles.middle}>
        <Text style={styles.label}>
          Pick the {ordinalNames[decision]} option.
        </Text>
      </TouchableOpacity>
      <View style={styles.bottom}>
        <Text>Out of</Text>
        <ScrollView
          style={{height: 100, padding: 2}}
          snapToInterval={16}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>2</Text>
          <Text>3</Text>
          <Text>4</Text>
          <Text>5</Text>
          <Text>6</Text>
          <Text>7</Text>
          <Text>8</Text>
          <Text>9</Text>
          <Text>10</Text>
        </ScrollView>
        <Text>Options</Text>
      </View>
    </SafeAreaView>
  );
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
  label: {
    fontSize: 20,
  },
});
