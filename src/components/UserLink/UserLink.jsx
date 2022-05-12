import * as PropTypes from 'prop-types';
import { memo } from 'react';
import UserLinkType from './UserLinkType';

import { Link } from '@mui/material'

const UserLink = (props) => {
  const {
    address,
    image,
    nickname,
    hasDapper,
  } = props;

  return (
    <Link className="user-link" href={`#${address}`}>{nickname}</Link>
  );
};

UserLink.defaultProps = {
  address: '',
  image: '16',
  nickname: '',
  hasDapper: false,
};

UserLink.propTypes = UserLinkType;

export default memo(UserLink);
