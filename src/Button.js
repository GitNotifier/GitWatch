import React from 'react';
import { writeStorage } from '@rehooks/local-storage';

let counter = 0;

const Button = () => (
    <button onClick={_ => writeStorage('i', ++counter)}>
        Click Me
    </button>
);

export default Button;
