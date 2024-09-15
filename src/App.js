import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/home';
import ChatPage from './components/chatpage';
// import LoginForm from './components/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage/>} /> {/* Add ChatPage route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
