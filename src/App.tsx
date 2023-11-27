
import { BrowserRouter as Router } from 'react-router-dom'
import { RouterViews } from './routers/baseRouter'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <RouterViews />
      </Router>
    </>
  )
}

export default App
