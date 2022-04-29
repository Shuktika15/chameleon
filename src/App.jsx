import { useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'

export default function App() {
  const rgbPattern = /^rgb\((\d\d?\d?),\s*(\d\d?\d?),\s*(\d\d?\d?)\)$/i;
  const hexPattern = /^#[a-f0-9]{6}$/i;
  const hexInput = useRef();
  const rgbInput = useRef();
  const [backgroundColor, setBackgroundColor] = useState('ffffff');

  function hexChange() {
    const hex = hexInput.current.value;
    hexToRgb(hex);
  }

  function rgbChange() {
    const rgb = rgbInput.current.value;
    rgbToHex(rgb);
  }

  function rgbToHex(rgb) {
    if (validateRgb(rgb)) {
      const match = rgb.match(rgbPattern);
      const r = parseInt(match[1]);
      const g = parseInt(match[2]);
      const b = parseInt(match[3]);
      const value = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
      hexInput.current.value = value;
      setBackgroundColor(_ => value);
    }
  }

  function hexToRgb(hex) {
    if (validateHex(hex)) {
      const red = hex.substring(1, 3);
      const green = hex.substring(3, 5);
      const blue = hex.substring(5, 7);
      const value = `rgb(${parseInt(red, 16)}, ${parseInt(green, 16)}, ${parseInt(blue, 16)})`;
      rgbInput.current.value = value;
      setBackgroundColor(_ => value);
    }
  }

  function validateRgb(rgb) {
    return rgbPattern.test(rgb);
  }

  function validateHex(hex) {
    return hexPattern.test(hex);
  }

  return (<div
    className='App'
    style={{
      backgroundColor: `${backgroundColor}`
    }}
  >
    <form>
      <input ref={hexInput} type="text" name="hex" placeholder="HEX" id="hex" onKeyUp={hexChange} />
      <input ref={rgbInput} type="text" name="rgb" id="rgb" placeholder="RGB" onKeyUp={rgbChange} />
    </form>
  </div>);
}