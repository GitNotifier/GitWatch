import React from 'react';
import {useLocalStorage} from '@rehooks/local-storage';
import Button from './Button';

function App() {
    const [counterValue] = useLocalStorage('i'); 
    return (
        <div>
            <h1>Hello World!{counterValue}</h1>
            <h1>Hello World!{counterValue}</h1>
            <Button />
        </div>
    );
}
export default App;
