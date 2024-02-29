
import { useSelector } from 'react-redux';
import './App.css';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { UsersPage } from './pages/UsersPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const currentTabIndex = useSelector((state) => state.currentTabIndex);

  console.log(currentTabIndex,"currentTabIndex")
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>


    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="usersPage" element={<UsersPage />} />
    
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
