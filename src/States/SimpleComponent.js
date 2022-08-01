// problem with normal and need of state
// we can't update this.city in ui

import React from "react";
class SimpleComponent extends React.Component{
    constructor(props){
        super(props)
        this.city = "delhi"
    }
    updateFname=()=>{
        this.city = "kk";
        console.log("fn is called",this.city);
        // this.render()
    }
    render(){
        let fname="hello";
        console.log("inside render");
        return(
            <div>
                <h1>SimpleComponent</h1>
                <h2>{this.city}</h2>
                <button className="w-100 p-5" onClick={this.updateFname}>update</button>
            </div>
        )
    }
}
export default SimpleComponent;