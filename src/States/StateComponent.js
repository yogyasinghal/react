

import React from "react";
class StateComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fname:"tony",
            age:30
        }
    }
    updateFname=()=>{
        console.log("update",this.state.fname);
        if(this.state.fname=="tony")
        this.setState({fname:"stark",age:20})
        else
        this.setState({fname:"tony",age:50})
    }
    render(){
        console.log("render");
        return(
            
            <div>
                <h1>StateComponent</h1>
                <h2>{this.state.fname} {this.state.age}</h2>
                <button onClick={this.updateFname}>Update</button>
            </div>
        )
    }
}
export default StateComponent;