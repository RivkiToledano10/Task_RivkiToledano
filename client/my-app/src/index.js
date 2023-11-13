import React, { useReducer } from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
// import thunk from 'redux-thunk';
// import  reducers  from './reducers';
import reducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StyledEngineProvider } from '@mui/material/styles';

// const store = createStore(reducers,compose(applyMiddleware(thunk)))
const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
<Provider store={store}>
    <StyledEngineProvider injectFirst>
    <App/>
    </StyledEngineProvider>
</Provider>
,document.getElementById('root'));