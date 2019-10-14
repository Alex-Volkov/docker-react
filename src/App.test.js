import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('a renders without crashing 1', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

