import {Routes} from './router/router'
import './App.css'
import {useRoutes} from 'react-router-dom'

function App() {
  const element = useRoutes(Routes)
  return <>{element}</>
}

export default App
