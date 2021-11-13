import React from 'react';
import { connect } from 'react-redux';
import './index.css';
// for store
// import { increment, decrement, setValue } from '../../plugins/store/actions';

const ProfilePage = ({ value, increment, decrement, setValue }) => {
  return (
    <div>
      ProfilePage
      <br />
      {value}
      <br />
      <button onClick={increment}>
        increment
      </button>
      <button onClick={decrement}>
        decrement
      </button>
      <button onClick={() => setValue(777)}>
        setValue 777
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.value,
});

// for store1
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    setValue: (value) => dispatch({ type: 'SET_VALUE', payload: value }),
  }
};

// for store
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     setValue: (value) => dispatch(setValue(value)),
//   }
// };

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
