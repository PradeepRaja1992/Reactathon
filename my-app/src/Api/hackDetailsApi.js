import axios from 'axios';

const fetchuserDetails = (dispatch) => {
    //api call
    dispatch({type :"DETAILS_FETCH_CALL"});
    axios.get('http://localhost:3000/api/event/findeve1')
    .then(response => {       
        console.log(response);
        dispatch({type :"DETAILS_FETCHED", payload : response.data});
       
    })
    .catch(error => {
      console.log(error);
    })  
}


const registerUser = (dispatch,userobj) => {
    //api call
    dispatch({type :"REGISTER_USER_CALL"});
    axios.get('http://localhost:3000/api/event/set')
    .then(response => {       
        console.log(response);
        dispatch({type :"REGISTERD_USER", payload : response.data});
       
    })
    .catch(error => {
      console.log(error);
    })  
} 

export default {fetchuserDetails};