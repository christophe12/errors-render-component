import React from 'react';
import { render} from 'react-dom';
import RenderErrors from '../../src';

const errorData = [
    'This is the first error',
    'This is the second error'
];
const App = () => (
    <RenderErrors 
    errorData={errorData}
    />
);
render(<App />, document.getElementById("root"));