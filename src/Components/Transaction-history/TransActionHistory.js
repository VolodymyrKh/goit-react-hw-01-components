import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransActionHistory.module.css'

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.tableHead}>
      <tr>
        <th className = {styles.headBorder}>Type</th>
        <th className = {styles.headBorder}>Amount</th>
        <th className = {styles.headBorder}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map((item,index) => (
        <tr key={item.id} className = {index % 2 !==0 ? styles.bgColor : styles.bgColorWhite} >
          <td className = {styles.headBorder}>{item.type}</td>
          <td className = {styles.headBorder}>{item.amount}</td>
          <td className = {styles.headBorder}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
