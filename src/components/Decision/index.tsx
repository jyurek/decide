import * as React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'

interface Props {
  decision: number
}

const options = [
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

export const Decision: React.FC<Props> = ({ decision }) => (
  <Text style={styles.label}>Pick the {options[decision]} option.</Text>
)
