

import React from "react";
class Task2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           value:0
        }
    }
    increaseVal=()=>{
        // console.log("update",this.state.fname);
        this.setState({value:(this.state.value)+1})
    }
    decreaseVal=()=>{
        // console.log("update",this.state.fname);
        this.setState({value:(this.state.value)-1})
    }
    render(){
        console.log("render");
        return(
            
            <div className="d-flex justify-content-evenly m-auto p-4" style={{width:"30vw" ,height:"100vh",alignItems: "center"}} >
                
                   
                <button className="btn btn-lg btn-success" onClick={this.increaseVal} >ADD</button>
            {this.state.value}
                <button className="btn btn-lg btn-success" onClick={this.decreaseVal} >SUB</button>
                
                
            </div>
        )
    }
}
export default Task2;