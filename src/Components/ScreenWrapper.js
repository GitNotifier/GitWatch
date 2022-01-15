import React from "react";
import styles from "../styles/styles";

export default class ScreenWrapper extends React.Component{
    render(){
        return(
            <div style={styles.screenWrapper}>{this.props.children}</div>
        )
    }
}