import React, {Component} from 'react';

class registrationModal extends Component{
    render(){
        return (
            <div>                
                <div>
                    <h3>Event Registration</h3>
                </div>
                <div>     
                    <span> Team Name : </span> {this.props.team_name}
                </div>    
                <div>     
                    <span> Team size : </span> {this.props.team_size}
                </div> 
                <div>     
                    <span> Team Member Name: </span> {this.props.team_member}
                </div>
                <div>     
                    <span>Team Member Portfolio : </span>
                    <div className="ui checkbox">
                        <input type="checkbox" name="portfolio" />
                        <label>CMB</label>
                        <input type="checkbox" name="portfolio" />
                        <label>CFO</label>
                    </div>
                </div>
                <div>     
                    <span>Email Address : </span> {this.props.team_name}
                </div>
                <div>     
                    <span>Mobile : </span> {this.props.team_name}
                </div>
            </div>
        )
    }
}

export default registrationModal;
