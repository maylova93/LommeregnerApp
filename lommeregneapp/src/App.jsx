import React, { useState } from 'react';
import {Display} from './components/Display';
import {Button} from './components/Button';
import buttonStyles from './style/Button.module.scss';
import calculatorStyles from './style/Calculator.module.scss';
import './App.css';

const App = () => {
  const [curr, setCurr] = useState('');
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);
  const [res, setRes] = useState(0);

  const handleNumberClick = (num) => {
    setCurr(curr + num);
  };

  const handleOperatorClick = (operator) => {
    setPrev(curr);
    setCurr('');
    setOp(operator);
  };

  const calculateResult = () => {
    if (!prev || !curr) return;

    const previous = parseFloat(prev);
    const current = parseFloat(curr);

    switch (op) {
      case '+':
        setRes(previous + current);
        break;
      case '-':
        setRes(previous - current);
        break;
      case '*':
        setRes(previous * current);
        break;
      case '/':
        setRes(previous / current);
        break;
      default:
        break;
    }

    setCurr('');
    setOp(null);
    setPrev(null);
  };

  const handleClear = () => {
    setCurr('');
    setPrev(null);
    setOp(null);
    setRes(0);
  };

  const buttons = [
    { label: '1', onClick: () => handleNumberClick('1') },
    { label: '2', onClick: () => handleNumberClick('2') },
    { label: '3', onClick: () => handleNumberClick('3') },
    { label: '+', onClick: () => handleOperatorClick('+') },
    { label: '4', onClick: () => handleNumberClick('4') },
    { label: '5', onClick: () => handleNumberClick('5') },
    { label: '6', onClick: () => handleNumberClick('6') },
    { label: '-', onClick: () => handleOperatorClick('-') },
    { label: '7', onClick: () => handleNumberClick('7') },
    { label: '8', onClick: () => handleNumberClick('8') },
    { label: '9', onClick: () => handleNumberClick('9') },
    { label: '*', onClick: () => handleOperatorClick('*') },
    { label: 'C', onClick: handleClear },
    { label: '0', onClick: () => handleNumberClick('0') },
    { label: '=', onClick: calculateResult },
    { label: '/', onClick: () => handleOperatorClick('/') },
  ];

  return (
    <div className={calculatorStyles.calculator}>
    <Display value={curr || res} />
    <div className={buttonStyles.buttons}>
      {buttons.map((btn, index) => (
        <Button key={index} label={btn.label} onClick={btn.onClick} />
      ))}
    </div>
  </div>
  
  );
};

export default App;
