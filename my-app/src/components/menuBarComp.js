import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from 'react-router-dom/Route';
import DetailsComp from './heackathonDetailsComp';

class MenuBar extends Component {
  render(){
    return (
      <div>
         <Router>
            <div>
               <div className="ui secondary pointing menu">
                  <a className="item active">
                    <Link to="/">Home</Link>
                  </a>
                  <a className="item">
                    <Link to="/menu">Menu 2</Link>
                  </a>
                  <div className="right menu">
                     <a className="ui item">
                       Logout
                     </a>
                   </div>
               </div>
               <div className="ui segment">
                 <Route exact strict path="/" component={DetailsComp} />
                 <Route exact strict path="/menu" render ={
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
