import SavedChat from './ChatHistory/savedConv';
import Chat from './component/chatWindow';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Chat />} />
      <Route path='/history' element={<SavedChat />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
