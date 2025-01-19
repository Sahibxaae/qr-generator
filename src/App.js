import { useState } from "react";
import "./App.css";
function App() {
  const [text, setText] = useState("");
  const [size, setSize] = useState();
  const [image, setImage] = useState("");

  const generateQr = async () => {
    try {
      let url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${text}`;
      setImage(url);
    } catch (error) {
      console.error("Error generating the code", error);
    } finally {
      setText("");
      setSize("");
    }
  };
  const download = () => {
    if (image) {
      const link = document.createElement("a");
      link.href = image;
      link.download = "QRCode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error("No QR code available to download!");
    }
  };

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSize = (e) => {
    let size = e.target.value;
    if (size <= 400) {
      setSize(size);
    } else {
      setSize(200);
    }
  };

  return (
    <div className="app-container">
      <h1>QR generator</h1>
      <div>{image && <img src={image} />}</div>
      <div className="text-box">
        <input
          type="text"
          className="text"
          placeholder="Enter url or text ..."
          onChange={(e) => handleText(e)}
          value={text}
        />
        <input
          type="text"
          className="size"
          placeholder="Enter size Eg:200"
          value={size}
          onChange={(e) => handleSize(e)}
        />
      </div>
      <button className="generate-btn" onClick={generateQr}>
        Generate
      </button>
      <button className="download-btn" onClick={download}>
        Download
      </button>
    </div>
  );
}
export default App;
