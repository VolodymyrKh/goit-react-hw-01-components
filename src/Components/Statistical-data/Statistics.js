import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const colors = [
  '#a33cf2',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#4fc4f6',
  '#e64c65',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title.length > 0 && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statList}>
      {stats.map(stat => {
        const arrIndex = randomIntegerFromInterval(0, colors.length - 1);
        return (
          <li
            key={stat.id}
            className={styles.item}
            style={{ backgroundColor: colors[arrIndex] }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
