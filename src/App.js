import React, { useState } from 'react'; 
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';

function App(props) {

  const { newValue } = props;
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="App" style={{ paddingTop: '10px' }}>
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value) } />
        <button onClick={() => props.clickButton(inputValue)}>
          Click me!
        </button>
        <h1>{newValue}</h1>
    </div>
  );
}

const mapStateToProps = state => ({ newValue : state.clickState.newValue  });
const mapDispatchToProps = dispatch => bindActionCreators({clickButton}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
