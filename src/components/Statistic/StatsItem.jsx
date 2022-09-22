import css from './StatsItem.module.css';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import PropTypes from 'prop-types';

export const StatsItem = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

// ------------------------- PropTypes -----------------

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
