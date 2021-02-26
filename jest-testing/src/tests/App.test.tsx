import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Todos from '../Todos'

test('renders the correct content', () => {
   //Render a React component to the DOM
   const root = document.createElement('div');
   ReactDOM.render(<Todos />, root);

   expect(root.querySelector('h1').textContent).toBe('TODOs')
})

