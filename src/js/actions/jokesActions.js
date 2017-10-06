import axios from 'axios';

export function fetchJokes(){
  return {
    type:'FETCH_JOKES',
  //  payload:{jokes:{id:1, value:'kos'}},
    payload:axios.get("http://api.icndb.com/jokes/?firstName=Kosar&lastName=H."),
  };
};
