export function changePlanet(){
  return {type: 'change_planet', payload: 'Earth'};
};

export function changeDirection(){
  return {type: 'change_direction', payload: 'Mars to Vega'};
};
