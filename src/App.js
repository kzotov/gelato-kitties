// import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';

import List from './components/Nft';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </div>
  );
}
export default App;
