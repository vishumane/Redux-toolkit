import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { GST_Cal } from '../slices/calSlice';

const GST_Calculate = () => {
  const [userValue, setUserValue] = useState(0);

  const calcValues = useSelector((state: RootState) => state.calc);
  // imported Rootstate from redux store
  const dispatch = useDispatch();
  //Dispatching actions in Redux is the fundamental method of updating a Redux store's state.
  return (
    <div>
      <h1>Redux Toolkit</h1>
      <input
        onChange={(event) => setUserValue(Number(event.target.value))}
        type="number"
      />
      <button onClick={() => dispatch(GST_Cal({ userValue }))}>
        Calucating GST..
      </button>
      <h3> amount with 18% GST tax : {calcValues.total}</h3>
    </div>
  );
};

export default GST_Calculate;
