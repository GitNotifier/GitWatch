import React from "react";
import styles from "../styles/styles";

export default class NavBar extends React.Component{

constructor(props){
    super(props);
    this.closeWindow=this.closeWindow.bind(this);
}

closeWindow() {
        const remote = (window.require) ? window.require("electron").remote : null;
        const WIN = remote.getCurrentWindow();
        WIN.close();
}

render(){
    return(
      <div style={styles.navbar}>
        <img src="Ghost.svg" style={styles.mainLogo} onClick={this.closeWindow}/>
      </div>
    )
}
}