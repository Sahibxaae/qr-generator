import { useState } from 'react';
import './App.css';
function App() {
  const [text,setText] = useState("");
  const [size,setSize] = useState(200);

  const qrGenerate = async () =>{
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${text}`;

  }

  const handleChange = () =>{
    setText()
  }
  return (
    <div className='app-container'>
      <h1>QR generator</h1>
      <div>
  
      </div>
      <div className='text-box'>
        <input type="text" className='text' placeholder='Enter url or text ...' onChange={handleChange} value={text} />
        <input type="text" className='size' placeholder='Enter size Eg:200' value={size}/>
      </div>
      <button>Generate QR</button>
    </div>
  );
}
export default App;
