export default function reducer(state = [], action){
  switch (action.type) {
    case 'change_direction':
      state = state.slice(0);
      state.push(action.payload);
      break;
    default:

  }
  return state;
};
