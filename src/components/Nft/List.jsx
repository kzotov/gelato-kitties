// import { noop } from 'lodash';
// import * as PropTypes from 'prop-types';
import { fetchNfts, selectAllNfts } from '@store/Nft/Slice';
import { useSelector, useDispatch } from 'react-redux';
import NftItem from './Item.jsx';

import { Container, Grid } from '@mui/material'

const List = (props) => {
  const dispatch = useDispatch();
  const nfts = useSelector(selectAllNfts);
  const status = useSelector(state => state.nfts.status);

  if (status === 'idle') {
    dispatch(fetchNfts());
  }
  
  return (
    <Container className="nft-list" maxWidth="xl">
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
    </Container>
  );
};

List.defaultProps = {};

List.propTypes = {};

export default List;
