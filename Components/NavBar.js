import React from 'react';
import styles from '../styles/style';

export default class NavBar extends React.Component {

  render() {
    return (
      <div style = {styles.navbar}>
        <img src = "Ghost.svg" style = {styles.mainLogo} alt = "logo" />
      </div>
    );
  }
}
