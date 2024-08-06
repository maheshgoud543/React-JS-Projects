// import './App.css'
import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState("red");

  const handleChangeColor = () => {
    const randomColor = getRandomColor();
    setBgColor(randomColor);
  };

  const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: bgColor 
    }} >
      <p>HEX Color</p>
      <button onClick={handleChangeColor}>
        Change Color
      </button>
    </div>
  );
}

export default App;
