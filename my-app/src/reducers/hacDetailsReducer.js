
const initialState ={
    hackDetails :[{"header":"Reactathon","desc":"My description"},{"header":"testathon","desc":"My description"}]
}
const detailsReducer = (state=initialState, action) =>{
  switch(action.type){
    case "DETAILS_FETCH_CALL":{
      return { ...state,
               fetchingData : true
             }
    }
    case "DETAILS_FETCHED":{
        return {
          ...state,
          fatchinData : false,
          hackDetails : action.payload
        }
    }         
    
  }
  return state;
}

export default detailsReducer;
