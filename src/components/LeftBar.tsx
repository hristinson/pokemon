import React from 'react';
import { Button } from 'react-bootstrap';

function LeftBar() {
  return (
    <div className="LeftBar">
        <Button onClick={()=>{console.log(`left`)}}>Preview</Button>
    </div>
  );
}

export default LeftBar;
