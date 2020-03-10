import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css'

const FriendList = ({ items = [] }) => (
  <ul className={styles.friendList}>
    {items.map(item => (
      <FriendListItem key={item.id} {...item} />
    ))}
  </ul>
);

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired,
  ).isRequired,
};

export default FriendList;
