/** how to create state */
import React from "react";
import Child from "./Child";
class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state={
           isLoggedIn:true,
           author:"tony",

        } 
    }
    
    changeAuthor=()=>{
        this.state.author=="tony"?
        this.setState({author:"stark"})
        :this.setState({author:"tony"})
    }    

    changeFlag=()=>{
        console.log("toggle hit")
        this.setState({isLoggedIn:!(this.state.isLoggedIn)})
    }

    render(){
       console.log(" root render")
        return(
            <div className="bg-info m-2 p-2 
            d-grid justify-content-center">
                <h1> I am Parent</h1>
                <h2>{this.state.author} {String(this.state.isLoggedIn)}</h2>
                <button onClick={this.changeFlag}>Change Flag</button>
               <Child flag={this.state.isLoggedIn} changeAuthorName = {this.changeAuthor} />
            </div>
        )
    }
}
export default Parent;
