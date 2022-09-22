import React from 'react';
import { Button } from 'react-bootstrap';

function RightBar() {
  return (
<div className="RightBar">
  <Button onClick={()=>{console.log(`right`)}}>Preview</Button>
    </div>
  );
}

export default RightBar;
