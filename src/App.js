import { useEffect, useState, useCallback } from 'react';
import './App.css';
import ErrorHandler from './components/ErrorHandler/ErrorHandler';
import { Footer } from './components/Footer/Footer';
import Input from './components/Input/Input';
import { FOO, BAR } from './constants/DisplayValues';
import { INVALID_VALUE } from './constants/Errors';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState('');
  const [ errorHandler, setErrorHandler ] = useState(false)

  const renderHeaderText = () => {
    return (
      <div className="App-HeaderText">
        <h2>Hello There!</h2>
        <p>This task is demonstrating my knowledge developing web applications.</p>
      </div>
    );
  };

  const onInputChange = (e) => {
      const { value } = e.target;

      setInputValue(value);
  };

  const checkForErrors = (value) => {
    // Add regular expresion that checks if string is number
    if (value.length > 0 && !(/^\d+$/.test(value))) {
      setErrorHandler(true);
      return;
    }

    setErrorHandler(false);
  };

  const renderValue = useCallback(() => {
    const numberInputValue = parseInt(inputValue, 10);

    if (numberInputValue % 15 === 0) {
      setValue(FOO+BAR)
    } else if (numberInputValue % 5 === 0) {
      setValue(FOO)
    } else if(numberInputValue % 3 === 0) {
      setValue(BAR)
    } else {
      setValue('');
    }
  },[inputValue]);

  useEffect(() => {
      checkForErrors(inputValue);
      renderValue();
  },[inputValue, renderValue]);

  return (
    <div className="App">
      { renderHeaderText() }
      <Input labelValue={ 'Input:' } onChange={ onInputChange } value={ inputValue }/>
      <ErrorHandler type={ errorHandler ? INVALID_VALUE : null}/>
      <br />
      <Input labelValue={ 'Output:' } disabled={ true } value={ value } />
      <Footer />
    </div>
  );
}

export default App;
