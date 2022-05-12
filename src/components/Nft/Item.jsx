import * as PropTypes from 'prop-types';
import { memo } from 'react';
import UserLink, { UserLinkType } from '@components/UserLink';
import { Typography } from '@mui/material';
import ColorBadge from '@components/ColorBadge';
import cn from 'classnames';

const NftItem = (props) => {
  const {
    imageUrl,
    name,
    isFancy,
    isExclusive,
    // hatched,
    // hatcher,
    owner,
    color,
  } = props;
  // useEffect(() => {
  // }, [data]);

  const itemClassName = cn(
    'nft-item',
    { 'nft-item--is-fancy': isFancy },
  );

  return (
    <div className={itemClassName}>
      <div className="nft-item__image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="nft-item__color">
        <ColorBadge color={color} />
      </div>

      {isExclusive && (
        <div class="nft-item__exclusive">🤩</div>
      )}

      <div className="nft-item__summary">
        <div className="nft-item__name">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            { name }
          </Typography>
        </div>
        
        <div className="nft-item__owner">
          by <UserLink {...owner} />
        </div>

        {/* {hatched && (<div>Hatched by: <UserLink {...hatcher} /></div>)} */}
      </div>
    </div>
  );
};

NftItem.defaultProps = {
  color: '',
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
  color: PropTypes.string,
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
