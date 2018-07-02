import React,{ Component} from 'react';
import comp from './myStateLesscomp';

class myComp extends Component {
  constructor(){
    super();
    this.state ={
      count : 1
    }
  }

  render(){
    return (
      <div>
        <h1>Hello</h1>
        <h1>Hello</h1>    

        <comp />
     </div>
    )
  }
}

export default myComp;
