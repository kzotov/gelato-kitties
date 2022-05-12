import './App.scss';

import { Route, Routes } from 'react-router-dom';
import Header from '@components/Header'
import NftList from '@pages/NftList';
import NftPage from '@pages/NftPage';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Typography
          variant="h3"
          noWrap
          component="h3"
          sx={{
            mr: 2,
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
            marginBottom: '30px',
          }}
        >
          Explore Collections
        </Typography>
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
