import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.onLine : styles.offLine}></span>
    <img className={styles.avatar} src={avatar} alt="Friend img" width="96" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
