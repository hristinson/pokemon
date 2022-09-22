import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {

    const [centralData, setCentralData] = useState(0)

  return (
    <div className="App">


<div>
<Button onClick={() => {setCentralData(centralData-1)}}>{ `Preview` }</Button>
</div>

<div>
    { centralData }
</div>

<div>
<Button onClick={() => {setCentralData(centralData+1)}}>{ `Next` }</Button>
</div>


     
    



    </div>
  );
}

export default App;
