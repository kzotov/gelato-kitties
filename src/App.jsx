import './App.scss';

import { Route, Routes } from 'react-router-dom';
import Header from '@components/Header'
import NftList from '@pages/NftList';
import NftPage from '@pages/NftPage';

function App() {
  return (
    <div className="app">
      <Header />      
      <div className="app__content">
        <Routes>
          <Route path="/" element={<NftList />}></Route>
          <Route path="/nfts/" element={<NftList />}></Route>
          <Route path="/nfts/:id" element={<NftPage /> }></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
