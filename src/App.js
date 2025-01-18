import { useState } from 'react';
import './App.css';
function App() {
  const [text,setText] = useState("");
  const [size,setSize] = useState();
  const [image,setImage] = useState(false);
  let url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${text}`;

  const handleText = (e) =>{
    setText(e.target.value);
  }
  const handleSize = (e) => {
    setSize(e.target.value);
  }
  return (
    <div className='app-container'>
      <h1>QR generator</h1>
      <div>
        {image && <img src={url}/>}   
      </div>
      <div className='text-box'>
        <input type="text" className='text' placeholder='Enter url or text ...' onChange={(e)=>handleText(e)} value={text} />
        <input type="text" className='size' placeholder='Enter size Eg:200' value='' onChange={(e)=>handleSize(e)}/>
      </div>
      <button onClick={()=> text!=="" && size!==0?setImage(!image):setImage(false)}>Generate QR</button>
    </div>
  );
}
export default App;
