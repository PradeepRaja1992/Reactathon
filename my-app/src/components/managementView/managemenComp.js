import React,{ Component } from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import WinnerMod from './winnersComp';

class ManagementView extends Component {

    constructor(){
        super();
        this.state = {
            data :{
                columns: [
                    ['CFO', 30],
                    ['CMB', 50],
                    ['NTS', 50]
                ],
                type: 'pie'
            },
            winners :[{"team":"Dont React","place":"1st place"}]
        };          
    }   

    mountNode = document.getElementById('pieChart');
    render(){
        console.log(this.props);
        return (
            <div>
                <h2>ManagementView</h2>
                <div>Filter : Reactathon</div>
                <div style={{padding:'1rem',marginLeft:'13.5rem'}}>
                    <h3>Participants by Organisation</h3>
                </div>
                <div className="ui grid">                    
                    <div className="eight wide column">
                        <div id="pieChart"></div>
                        <C3Chart data={this.state.data} />
                    </div>
                    <div className="eight wide column">
                        {
                            this.state.winners.map((winner) =>{
                                return <WinnerMod {...winner}/> 
                            })   
                        }                          
                    </div>                    
                </div>
            </div>
        )
    }
}

export default ManagementView;