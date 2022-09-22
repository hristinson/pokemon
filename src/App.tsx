import React from 'react';
import LeftBar from './components/LeftBar';
import Main from './components/Main';
import RightBar from './components/RightBar';


import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <LeftBar />
      </div>

      <div>
      <Main />
      </div>



      <div>
      <RightBar />
      </div>



    </div>
  );
}

export default App;
