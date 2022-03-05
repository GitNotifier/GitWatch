import React from 'react';
import {writeStorage} from '@rehooks/local-storage';

let counter = 0;

const Button = () => (
    <button
        onClick={() => writeStorage('i', ++counter)}
        type="button"
    >
        Click Me
    </button>
);

export default Button;
