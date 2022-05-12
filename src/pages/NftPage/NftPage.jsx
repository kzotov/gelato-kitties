// import { noop } from 'lodash';
import * as PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { selectNftById } from '@store/Nft/Slice';
import { useSelector, useDispatch } from 'react-redux';

const NftPage = ({ props }) => {
  const { id } = useParams();
  const nft = useSelector(selectNftById(id));

  useEffect(() => {
    console.log(nft);
  }, [nft]);

  return (<>{id}</>);
};

NftPage.propTypes = {
};

export default NftPage;
