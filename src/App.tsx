import React from 'react';
import ReactDOM from 'react-dom';


function Hello() {
    return <div>Hello React!</div>
}

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
)