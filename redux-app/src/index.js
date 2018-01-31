import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();


// store.subscribe(() => {
//     console.log(store.getState());
// });
//
// store.dispatch({
//     type: 'ADD_TRACK',
//     payload: "Smells like teen spirit"
//
// });
// store.dispatch({
//     type: 'ADD_TRACK',
//     payload: "Ender sadman"
// });
