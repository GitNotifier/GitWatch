/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/style';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const ScreenWrapper = props => (
    <div style={styles.screenWrapper}>{props.children}</div>
);

ScreenWrapper.propTypes = propTypes;
ScreenWrapper.displayName = 'ScreenWrapper';

export default ScreenWrapper;
