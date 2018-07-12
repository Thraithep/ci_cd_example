import React from 'react';
import {render} from 'react-dom';

const App = () => {
    return(
        <div>
            Hello world!!
        </div>
    )
};
console.log(1);
render(<App/>, document.getElementById('root'));