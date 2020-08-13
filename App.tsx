import * as React from 'react'

import { Home } from './src/screens/Home'
import { UpdateWatcher } from './src/components/UpdateWatcher'

export const App: React.FC = () => (
  <>
    <Home />
    <UpdateWatcher />
  </>
)

export default App
