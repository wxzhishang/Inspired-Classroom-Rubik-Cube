import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import './App.css'
import Routes from './router/router'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          {Routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Switch>
      </div>
    </Router>
  )
}

export default App