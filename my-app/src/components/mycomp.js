import React,{ Component} from 'react';
import MyComp from './myStateComp';


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

        <MyComp val="Hello" />
     </div>
    )
  }
}

export default myComp;
