
export default function reducer(state = {}, action){
  switch (action.type) {
    case 'change_name':
      state = {
        ...state,
        name: action.payload
      };
      break;
    case 'change_planet':
      state = {
        ...state,
        planet: action.payload
      };
      break;
    default:
      state = {
        ...state
      };
  }
  return state;
};
