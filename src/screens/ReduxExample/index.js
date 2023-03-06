import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetState, setAddCount, setValue } from '../../state/counter';

const ReduxExample = () => {
  const dispatch = useDispatch();
  const { count, value } = useSelector((state) => state.counter);
  const [addValue, setAddValue] = useState(value || '');

  const handleAddClickEvent = () => {
    dispatch(setAddCount());
  };

  const handleChangeAddValue = (manualValue) => {
    dispatch(setValue(parseInt(manualValue)));
  };

  const handleResetCounter = () => {
    dispatch(resetState());
  };

  return (
    <div>
      <p>Below are the example for redux state management.</p>
      <button onClick={() => handleAddClickEvent()}>add</button>
      <h1>{count}</h1>
      <button onClick={() => handleResetCounter()}>reset Counter</button> <br></br>
      <input value={addValue} type="text" onChange={(e) => setAddValue(e.target.value)}></input>
      <button onClick={() => handleChangeAddValue(addValue)}>change Value</button>
    </div>
  );
};

export default ReduxExample;
