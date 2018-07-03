const initailState ={
    team_name : "",
    team_size:"",
    team_portfolio : ["CMB"],
    email_address :"",
    mobile_no:""
}

const registrationReducer =(state = initailState,action) =>{
    switch(action.type){
        case "UPDATE_TEAM_NAME" :{
            return { ...state,
                     team_name : action.payload
                    }
        }
        case "UPDATE_TEAM_SIZE" :{
            return { ...state,
                     team_size : action.payload
                   }
        }
        case "UPDATE_EMAIL" :{
            return { ...state,
                     email_address : action.payload
                   }
        }
        case "UPDATE_MOBILE" :{
            return { ...state,
                     mobile_no : action.payload
                   }
        }
    }
    return state;
}

export default registrationReducer;