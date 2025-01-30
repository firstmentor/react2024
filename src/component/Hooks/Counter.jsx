import React,{useReducer} from 'react'
// Reducer Function
const reducer = (state, action) => {  //2 state rakhege  (action mai jo hum bhejege (type) type kaha se bhejege jab dispatch karayege,dispatch kya hota hai (onclick))
  console.log(state, action);
  return state ;  //reducer function ke andar hamesha default state print karni hi hogi //
  // return hamesh ek new state karega


  // switch (action.type) {
  //   case "INCREMENT":
  //     return { count: state.count + 1 };
  //   case "DECREMENT":
  //     return { count: state.count - 1 };

  //   default:
  //     return state;
  // }
};

function Counter() {
  // Example 2
  const initialState = { count: 0 };  //key and value
  const [state, dispatch] = useReducer(reducer, initialState);  //2 parameter (function,initialvalue)
  return (
    <>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        INCREMENT Count
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        DECREMENT Count
      </button>

    </>
  )
}

export default Counter