import React, {Component} from 'react';
import {connect} from 'react-redux';

class DetailsComp extends Component{
  render(){
    return(
      <div>
         <h3>Detailed view page!!</h3>
         <ul>
             {this.props.hackDetails.map((details) =>{
               return (<li>{details.name}</li>)
             })}
         </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    hackDetails : state.hackDetailsReducer.hackDetails
  }
}

export default connect(mapStateToProps)(DetailsComp);
