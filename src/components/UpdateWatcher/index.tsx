import * as React from 'react'
import * as Updates from 'expo-updates'
import { Alert, AppState } from 'react-native'

const onAppStateChange = async (newAppState) => {
  if (newAppState === 'active') {
    const { isNew } = await Updates.fetchUpdateAsync()
    if (isNew) {
      Alert.alert('Update Available', 'Would you like to update?', [
        { text: 'No' },
        { text: 'Yes', onPress: () => Updates.reloadAsync() },
      ])
    }
  }
}

export const UpdateWatcher = () => {
  React.useEffect(() => {
    AppState.addEventListener('change', onAppStateChange)
    return () => AppState.removeEventListener('change', onAppStateChange)
  }, [])
  return null
}
