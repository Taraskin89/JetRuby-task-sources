import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';

import './styles/style.scss';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.querySelector('#app')
    )
}

render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render(App);
    })
}
