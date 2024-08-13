import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePages from './pages/HomePages';
import LoginPages from './pages/LoginPages';
import ErrorPages from './pages/ErrorPages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/login' element={<LoginPages />} />
        <Route path='*' element={<ErrorPages />} />
      </Routes>
    </Router>
  );
}

export default App;

