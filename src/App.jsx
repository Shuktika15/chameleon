import { useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'

export default function App() {
  const hex = useRef();
  const rgb = useRef();
  const [backgroundColor, setBackgroundColor] = useState('ffffff');

  function hexInput() {
    const hexValue = hex.current.value;
    console.log(hexValue);
    hexToRgb();
  }
  
  function rgbInput() {
    const rgbValue = rgb.current.value;
    console.log(rgbValue);

  }
  function rgbToHex() {
    if (validateRgb()) {

    }
  }
  function hexToRgb() {
    if (validateHex()) {
      const h = hex.current.value;
      const red = h.substring(0, 2);
      const green = h.substring(2, 4);
      const blue = h.substring(4, 6);

      const value = `rgb(${parseInt(red, 16)}, ${parseInt(green, 16)}, ${parseInt(blue, 16)})`;
      console.log(value);
      rgb.current.value = value;
      setBackgroundColor((state) => {
        return value;
      });
    }
  }
  function validateRgb() {
    return true;
  }
  function validateHex() {
    return hex.current.value.length === 6;
  }
  return (<div
    className='App'
    style={{
      backgroundColor: `${backgroundColor}`
    }}
  >
    <form>
      <input ref={hex} type="text" name="hex" id="hex" onKeyUp={hexInput} />
      <input ref={rgb} type="text" name="rgb" id="rgb" onKeyUp={rgbInput} />
    </form>
  </div>);
}