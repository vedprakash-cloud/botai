import SavedChat from './ChatHistory/savedConv';
import Chat from './component/chatWindow';
import NavBar from "./component/navBar";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div className="text-start text-4xl text-[#9785BA] font-bold w-4/5 absolute right-5">
          <NavBar />
        </div>
    <Routes>
      <Route path='/' element={<Chat />} />
      <Route path='/history' element={<SavedChat />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
