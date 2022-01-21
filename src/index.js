import React from 'react';
import ReactDOM  from 'react-dom';
import Header  from './components/header';

import './styles/styles.css';

const App = () => {
    return <React.Fragment>
        <Header/>
        </React.Fragment>
    //return React.createElement('h1',{className:'hello'},'Hello World',React.createElement('div',{className:'div1'}))
}

ReactDOM.render(<App/>,document.getElementById('root'))