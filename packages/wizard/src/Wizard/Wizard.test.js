import React from 'react';
import ReactDOM from 'react-dom';
import Wizard from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wizard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
