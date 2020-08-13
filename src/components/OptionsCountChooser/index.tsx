import * as React from 'react'
import { Picker } from '@react-native-community/picker'
import { Text} from 'react-native'

import { styles } from './styles'

interface Props {
  changeOptionCount: (itemValue: React.ReactText) => void
  optionCount: number
}

export const OptionsCountChooser: React.FC<Props> = ({
  changeOptionCount,
  optionCount,
}) => (
  <>
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
  </>
)
