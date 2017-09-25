import { createStore } from 'redux';

// Action generator = functions that return action objects



const incrementCount = ({ incrementBy = 1 } = { }) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
});

const decrementCount = ( { decrementBy = 1 } = { }) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
});

const resetCount = ( { } = { } ) => ({
  type: 'RESET'
});

const setCount = ( { count } = { } ) => ({
  type: 'SET',
  count: count
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action




const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
      case 'DECREMENT':
      // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return {
          count: state.count - action.decrementBy
        };
      case 'SET':
        return {
          count: action.count
        };
      case 'RESET':
        return {
          count: 0
        };
    default:
    return state;
  }

  // if (action.type === 'INCREMENT') {
  //     return {
  //       count: state.count + 1
  //     }
  // } else {
  //   return state;
  // }

}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


// Actions - object that gets sent to the store
// i'd like to increment the count

store.dispatch(incrementCount( { incrementBy: 5 } ));
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

// i'd like to reset the count to zero

// store.dispatch({
//   type: 'INCREMENT',
// })

store.dispatch(incrementCount());

// store.dispatch({
//   type: 'RESET'
// })

store.dispatch(resetCount());

store.dispatch(decrementCount( { decrementBy: 5 }));

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 5
// })

// store.dispatch({
//   type: 'SET',
//   count: 101
// })

store.dispatch(setCount ( { count: 101 } ));
