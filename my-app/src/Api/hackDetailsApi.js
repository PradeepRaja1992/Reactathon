const fetchuserDetails = (dispatch) => {
    //api call
    dispatch({type :"DETAILS_FETCH_CALL"});
    setTimeout(function(){
        let data = [{"name":"Reactathon","description":"My description","duration":"3","registration_close_date": "8/3/2018","venue":"Chennai",
        "portfolio":"CMB","start_date":"2018-07-02","end_date":"2018-07-04","organiser_name":"Pradeep","organiser_contact":"r.pradeep@verizon.com"},
        {"name":"Testathon","description":"My description","duration":"4","registration_close_date": "8/3/2018","venue":"Hyderbad","portfolio":"CMB",
        "portfolio":"CMB","start_date":"2018-07-02","end_date":"2018-07-04","organiser_name":"Pradeep","organiser_contact":"r.pradeep@verizon.com"}];
        dispatch({type :"DETAILS_FETCHED", payload : data});
    },1000 );  
}

export default {fetchuserDetails};