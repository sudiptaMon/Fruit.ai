import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/home';
import ChatPage from './components/chatpage';
import TranslateA from './components/transelate';
// import LoginForm from './components/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage/>} /> 
        <Route path='translate' element={<TranslateA/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
