/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

function ScreenWrapper(props) {
  return (
    <div style={styles.screenWrapper}>{props.children}</div>
  );
}

ScreenWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScreenWrapper;
