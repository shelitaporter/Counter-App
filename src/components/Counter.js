import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, onInputNumberChange, numberInputted, onInputNumber, timesClicked }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <p>Times the increment/decrement buttons have been clicked: <span>{timesClicked}</span></p>
          <input type="text" onChange={event => onInputNumberChange(event.target.value)} value={numberInputted}/><button onClick={onInputNumber}>Change Count Number</button>     
        </div>
      </div>
    );
}


export default Counter;