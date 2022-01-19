import React from 'react';
import {useLocalStorage} from '@rehooks/local-storage';
import Button from './Button';
import styles from '../styles/style';
import NavBar from '../Components/NavBar';
import ScreenWrapper from '../Components/ScreenWrapper';
import './App.css'
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active:[1,2,3,4,5,6,7,8,9,10],
            snooze:[1,2]
        }
        this.moveToSnooze = this.moveToSnooze.bind(this);
    }
    moveToSnooze(key){
        //make API call updates maybe
        this.setState({active:this.state.active.filter((n)=>{return n!=key})})
        this.setState(prevState=>({snooze:[...prevState.snooze,key]}))
    }
    moveToActive(key){
        //make API call updates maybe
        this.setState({active:this.snooze.active.filter((n)=>{return n!=key})})
        this.setState(prevState=>({active:[...prevState.active,key]}))
    }
    
    render(){
        
    return (
        <div className="App">
        <NavBar />
        <ScreenWrapper>
    
        {this.state.active.map((number)=><div style={styles.card} key={number} onClick={()=>this.moveToSnooze(number)}>{number}</div>)}

        </ScreenWrapper>
        <ScreenWrapper>
    
        {this.state.snooze.map((number)=><div style={styles.card} key={number}>{number}</div>)}

    </ScreenWrapper>

      </div>
    );}
}
export default App;
