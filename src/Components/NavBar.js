import React from 'react';
import styles from '../styles/styles';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.closeWindow = this.closeWindow.bind(this);
    }

    render() {
        return (
            <div style={styles.navbar}>
                <img src="Ghost.svg" style={styles.mainLogo} alt="logo" />
            </div>
        );
    }
}
