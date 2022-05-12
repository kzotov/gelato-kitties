import * as PropTypes from 'prop-types';
import { useEffect, memo } from 'react';
import { selectNftById } from '@store/Nft/Slice';
import { useSelector } from 'react-redux';

const NftItem = (props) => {
  const {
    id, 
    imageUrl,
    name,
  } = props;
  const data = useSelector(selectNftById(id));
  const style = 'background-image: url()';
  const displayName = !!name ? name : 'No name';
  // useEffect(() => {
  // }, [data]);

  return (
    <div className="nft-item">
      <div className="nft-item__image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <h1>{ name }</h1>
      
    </div>
  );
};

NftItem.defaultProps = {
  imageUrl: null,
  isExclusive: false,
  isFancy: false,
  isPrestige: false,
  isSpecialEdition: false,
  kittyItemsImagePath: '',
  name: '',
};

NftItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  isExclusive: PropTypes.bool,
  isFancy: PropTypes.bool,
  isPrestige: PropTypes.bool,
  isSpecialEdition: PropTypes.bool,
  kittyItemsImagePath: PropTypes.string,
  name: PropTypes.string,
};

export default memo(NftItem);
