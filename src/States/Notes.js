// old task 1

import React from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import NavBar from "../Components/NavBar";

class Task1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           isLoggedin:true
        }
    }
    updatelogin=()=>{
        this.setState({isLoggedin:!(this.state.isLoggedin)})
    }
    render(){
        console.log("render");
        return(
            
            <div>
                <NavBar/>
                
                {
                    this.state.isLoggedin?
                    <>
                    <SignIn></SignIn>
                    
                    <button className="btn btn-info m-5 " onClick={this.updatelogin}>Sign up</button>       
                    </>
                    :
                    <>
                    <SignUp></SignUp>
                    <button className="btn btn-info m-5 " onClick={this.updatelogin}>Sign In</button>       
                    </>
                }
                {/* <h1>Task</h1> */}
                {/* <h2>{this.state.fname} {this.state.age}</h2> */}
                {/* <button onClick={this.updatelogin}>Update</button> */}
            </div>
        )
    }
}
export default Task1;