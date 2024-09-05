import Button from './Button';
import Number from './Number';
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState(''); 
  const [displayText, setDisplayText] = useState(''); 

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const add = () => {
    setDisplayText(inputText);
  };

  return (
    <div>
      <Number />
      <Button />
      <input
        className='bubu'
        type="text"
        value={inputText}
        onChange={handleInputChange}
      />
      <input type="button" onClick={add} value="add" />
      
      <p>{displayText}</p>
    </div>
  );
}

export default App;