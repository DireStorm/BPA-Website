import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CarList from './pages/CarList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route element={<HomePage/>} path="/" exact/>
          <Route element={<CarList/>} path="/CarList" exact/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;