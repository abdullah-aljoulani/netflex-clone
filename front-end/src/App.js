import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import FavList from './components/FavList'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fav' element={<FavList />} />
      </Routes>
        </div>
  );
}

export default App;
