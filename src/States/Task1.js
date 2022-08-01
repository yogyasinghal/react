import React from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import NavBar from "../Components/NavBar";

class Task1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           isLoggedin:true,
           val:false
        }
    }
    updatelogin=()=>{
        this.setState({isLoggedin:!(this.state.isLoggedin),
        val:!(this.state.val)})
    }
    myfun=()=>{
        // console.log("myfun");
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
                    <h1 className="display-1 text-center text-primary p-4 bg-light m-3"> Home Page</h1>
                    {/* <SignIn></SignIn> */}
                    <div className=" d-flex justify-content-center">
                    <button className="btn btn-dark m-5 p-4 " onClick={this.updatelogin}>Sign In</button> 
                    <button className="btn btn-info m-5 p-4" onClick={this.updatelogin}>Sign Up</button>                           
                    </div>
                    </>
                    :
                    <>
                    {this.state.val?<SignIn/>:<SignUp/>}
                    {/* <SignUp></SignUp> */}
                    <div  className="d-flex justify-content-center">
                    <button className=" btn btn-info m-5 p-3 " onClick={this.myfun}>Back to Home</button>       
                    </div>
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