import React,{Component} from 'react';
import {connect} from 'react-redux';

class RegistrationMod extends Component {
    render(){
        console.log("registration modal ",this.props.registration);
        return (           
                <div style={{minWidth:'700px',minHeight:'500px'}}>                
                    <div>
                        <h3>Event Registration</h3>
                    </div>
                    <form className="ui form" style={{padding:'2rem'}}>
                        <div className="field">
                            <label>Team Name </label>
                            <input type="text" name="team-name" placeholder="Team Name" value={this.props.registration.team_name} 
                            onChange={this.props.updateRegistrationObj.bind(this,"UPDATE_TEAM_NAME")}/>
                        </div>
                        <div className="field">
                            <label>Team Size</label>
                            <input type="text" name="team-size" placeholder="Team Size" value={this.props.registration.team_size} 
                            onChange={this.props.updateRegistrationObj.bind(this,"UPDATE_TEAM_SIZE")} />
                        </div>
                        <div className="field">
                            <div>Team Member Portfolio : </div>
                            <div className="ui checkbox">
                                <input type="checkbox"  id="cmb" className="hidden" />
                                <label htmlFor="cmb">CMB</label>                               
                            </div>
                            <div className="ui checkbox" style={{paddingLeft:'1rem'}}>
                                <input type="checkbox"  id="cfo" className="hidden" />
                                <label htmlFor="cfo">CFO</label>
                            </div>
                        </div>
                        <div className="field">
                            <label>Email Address :</label>
                            <input type="text" name="email" placeholder="Email Address" value={this.props.registration.email_address} 
                            onChange={this.props.updateRegistrationObj.bind(this,"UPDATE_EMAIL")} />
                        </div>
                        <div className="field">
                            <label>Mobile :</label>
                            <input type="text" name="Mobile" placeholder="Mobile" value={this.props.registration.mobile_no} 
                            onChange={this.props.updateRegistrationObj.bind(this,"UPDATE_MOBILE")} />
                        </div>
                        <button className="ui button" type="submit">Submit</button>
                    </form>
                </div>          
        )
    }
}


function mapStateToProps(state){
     return {
        registration : state.registrationReducer
     }
}

function mapDispatchToProps(dispatch){
    return {
        updateRegistrationObj : (arg,e) =>{
            dispatch({type: arg, payload : e.target.value});
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegistrationMod);