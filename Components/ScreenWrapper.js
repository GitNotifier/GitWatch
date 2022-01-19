/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/style';

function ScreenWrapper(props) {
  return (
    <div style = {styles.screenWrapper}>{props.children}</div>
  );
}


export default ScreenWrapper;
