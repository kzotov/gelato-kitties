import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';

const baseUrl = 'https://api.cryptokitties.co/v2/kitties/recommend';

const initialState = {
  nfts: [],
  status: 'idle',
  limit: 20,
  offset: 0,
  hasMore: true,
  error: null
}

const nftsSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
    nftAdded: {
      reducer(state, action) {
        console.log('nftAdded', { state, action })
        state.nfts.push(action.payload)
      },
      prepare(title, content, userId) {
        console.log('nftAdded:prepare', { title, content, userId })
        // omit prepare logic
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNfts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchNfts.fulfilled, (state, action) => {
        const { payload: { greatValues: items } } = action;
        state.status = 'succeeded';

        if (!items) {
          return;
        }
        
        if (items.length < 10) {
          console.log(items.length);
          state.hasMore = false;
        }
        state.offset += items.length;

        const camelCaseItems = items.map(item => _.mapKeys(item, (value, key) => _.camelCase(key)));
        state.nfts = state.nfts.concat(camelCaseItems);
      })
      .addCase(fetchNfts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})

export const { postAdded, postUpdated, reactionAdded } = nftsSlice.actions

export const fetchNfts = createAsyncThunk('fetchNfts', async (params, { getState }) => {
  const { nfts: { offset, limit } } = getState();
  const defaultParams = { offset, limit };

  const apiUrl = `${baseUrl}?${new URLSearchParams(defaultParams)}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
});


export const selectAllNfts = state => state.nfts.nfts;

export const selectNftById = nftId => state => {
  return state.nfts.nfts.find(nft => nft.id === nftId)
}

export default nftsSlice.reducer;
