const fetchuserDetails = (dispatch) => {
    //api call
    dispatch({type :"DETAILS_FETCH_CALL"});
    setTimeout(function(){
        let data = [{"header":"Reactathon1","desc":"My description"},{"header":"testathon1","desc":"My description"}];
        dispatch({type :"DETAILS_FETCHED", payload : data});
    },5000 );  
}

export default {fetchuserDetails};