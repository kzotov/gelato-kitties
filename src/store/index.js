import { configureStore } from '@reduxjs/toolkit';
import nfts from './Nft/Slice';

export default configureStore({
  reducer: {
    nfts
  },
})