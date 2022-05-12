import * as PropTypes from 'prop-types';
import { memo } from 'react';
import cn from 'classnames';

const ColorBadge = (props) => {
  const { color } = props;
  // useEffect(() => {
  // }, [data]);
  const badgeClassName = cn(
    'color-badge',
    `color-badge--${color}`,
  );

  return (
    <div className={badgeClassName}>{ color }</div>
  );
};

ColorBadge.propTypes = {
  color: PropTypes.string.isRequired,
};

export default memo(ColorBadge);
