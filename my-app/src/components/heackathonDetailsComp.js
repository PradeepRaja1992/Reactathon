import React, {Component} from 'react';
import {connect} from 'react-redux';
import DetailsList from './detailsListComp';
import Api from '../Api/hackDetailsApi';

class DetailsComp extends Component{

  componentDidMount(){
    console.log("My compoenent will mound ",this.props);
    this.props.fetchData();
  }

  render(){
    return(
      <div>
            <div className="ui relaxed divided list">       
             {
               this.props.hackDetails.map((details) =>{
                return ( <DetailsList {...details} /> )
                })
             }
            </div>         
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    hackDetails : state.hackDetailsReducer.hackDetails,
    fetchingData : state.hackDetailsReducer.fetchingData
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchData : () =>{
      Api.fetchuserDetails(dispatch);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailsComp);
