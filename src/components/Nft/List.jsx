// import { noop } from 'lodash';
// import * as PropTypes from 'prop-types';
import { fetchNfts, selectAllNfts } from '@store/Nft/Slice';
import { useSelector, useDispatch } from 'react-redux';
import NftItem from './Item.jsx';

import { Container, Grid } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'
const List = (props) => {
  const dispatch = useDispatch();
  const nfts = useSelector(selectAllNfts);
  const status = useSelector(state => state.nfts.status);
  const { hasMore } = nfts;

  const fetchNext = () => {
    dispatch(fetchNfts());
  }

  if (status === 'idle') {
    fetchNext();
  }


  return (
    <Container className="nft-list" maxWidth="xl">
      <InfiniteScroll
        dataLength={nfts.length} //This is important field to render the next data
        next={fetchNext}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Grid
          container
          columns={3}
          columnSpacing={2}
          rowSpacing={2}
        >
          {nfts.map((props, index) => {
            const { id, ...restProps } = props;
            return (
              <Grid item xs={1} key={id}>
                <NftItem id={id} {...restProps}/>
              </Grid>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
};

List.defaultProps = {};

List.propTypes = {};

export default List;
