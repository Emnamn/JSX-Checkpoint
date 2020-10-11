import React from 'react';
import imageInSrc from "./imageInSrc.png"
import './Style.css';

function App() {
  return (<div style={{ border:"solid,1px,black",maxwidth:"100vw"}}>
 <h1 className={"red", "title"}> Emna Manai </h1>
 {'\n'} 
 <img src={imageInSrc} alt="srcimg" />
 {'\n'} 
 <img src="/imageInPublic.jpg" alt="pubimg" />

</div>
  );
}
export default App;
