import css from './TableRow.module.css';

import PropTypes from 'prop-types';

export const TableRow = ({ amount, type, currency }) => {
  return (
    <tr className={css.tableRow}>
      <td className={css.tableData}>{type}</td>
      <td className={css.tableData}>{amount}</td>
      <td className={css.tableData}>{currency}</td>
    </tr>
  );
};

// --------------------- PropTypes ----------------

TableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
