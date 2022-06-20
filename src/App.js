import React from 'react';
import './App.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';



function App() {
  return (
    <div className="App">
      <Tippy content="hi! I am Santanu">
           <button className='btn'>Hover and see my name</button>
      </Tippy>
    </div>
  );
}

export default App;

