import React, {Component} from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from 'react-router-dom/Route';
import DetailsComp from './heackathonDetailsComp';

class MenuBar extends Component {
  render(){
    return (
      <div>
         <Router>
            <div>
               <div className="ui secondary pointing menu">                 
                  <NavLink className="item" to="/">Home</NavLink>                
                  <NavLink className="item" to="/menu">Menu 2</NavLink>                 
                  <div className="right menu">
                     <a className="ui item">
                       Logout
                     </a>
                   </div>
               </div>
               <div className="ui segment detailsList">
                 <Route exact strict path="/" component={DetailsComp} />                
              
                 <Route exact strict path="/menu" render = {
                    () =>{
                      return (<h1>Menu Page</h1>)
                    }
                  } />
                </div>
           </div>
        </Router>
      </div>
    )
  }
}

export default MenuBar;
