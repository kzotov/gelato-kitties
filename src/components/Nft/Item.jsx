import * as PropTypes from 'prop-types';
import { useEffect, memo } from 'react';
import { selectNftById } from '@store/Nft/Slice';
import { useSelector } from 'react-redux';
import UserLink, { UserLinkType } from '@components/UserLink';

const NftItem = (props) => {
  const {
    id, 
    imageUrl,
    name,
    hatched,
    hatcher,
    owner,
  } = props;
  const data = useSelector(selectNftById(id));
  const style = 'background-image: url()';
  const displayName = !!name ? name : 'No name';
  // useEffect(() => {
  // }, [data]);

  return (
    <div className="nft-item">
      <div className="nft-item__image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="nft-item__summary">
        <h1>{ name }</h1>
        {owner && (<div>Owner: <UserLink {...owner} /></div>)}
        {hatched && (<div>Hatched by: <UserLink {...hatcher} /></div>)}
      </div>
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
  hatched: false,
  hatcher: {
    address: '',
    image: '16',
    nickname: '',
    hasDapper: false,
  },
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
  hatched: PropTypes.bool,
  hatcher: PropTypes.shape(UserLinkType),
};

export default memo(NftItem);
