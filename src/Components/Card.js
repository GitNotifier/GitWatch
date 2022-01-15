import React from 'react'
import styles from '../styles/styles.js'
export default class Card extends React.Component{

    render(){
        return(
            <>
            <div style={styles.card}> {this.props.children} </div>
            </>
            );
        
    }
}
