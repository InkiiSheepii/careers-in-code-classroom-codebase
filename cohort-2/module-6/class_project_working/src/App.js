import { Layout } from "./components/Layout/Layout"
import { useState} from 'react'
import { AppStore } from './components/AppContext/AppContext'

function App() {
  const [username, setUsername] = useState("Domo")


  return (
    <div className="App">
      <AppStore>
        <Layout />
      </AppStore>
    </div>
  )
}

export default App
