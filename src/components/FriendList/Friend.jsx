import css from './Friend.module.css';

import PropTypes from 'prop-types';

export const Friend = ({ name, avatar, isOnline }) => {
  const status = isOnline ? 'online' : 'offline';

  return (
    <li className={css.friendItem}>
      <span className={`${css.status} ${css[status]}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

// ------------------------- PropTypes -------------------

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
