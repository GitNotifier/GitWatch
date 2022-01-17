import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

function Card(props) {
    return (
        <div style={styles.card}>
            {props.children}
        </div>
    );
}
Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Card;
