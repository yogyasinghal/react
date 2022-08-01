

import React from "react";
class Task extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           isLoggedin:true
        }
    }
    updatelogin=()=>{
        // console.log("update",this.state.fname);
        this.setState({isLoggedin:!(this.state.isLoggedin)})

        // if(this.state.isLoggedin==true)
        //     this.setState({isLoggedin:false})
        // else
        //     this.setState({isLoggedin:true})
    }
    render(){
        console.log("render");
        return(
            
            <div>
                {
                    this.state.isLoggedin?
                    <>
                    <h1>True</h1>
                    <button onClick={this.updatelogin} >Logout</button>
                    </>
                    :
                    <>
                    <h1> False</h1>
                    <button onClick={this.updatelogin} >Login</button>
                    </>
                }
                {/* <h1>Task</h1> */}
                {/* <h2>{this.state.fname} {this.state.age}</h2> */}
                {/* <button onClick={this.updateFname}>Update</button> */}
            </div>
        )
    }
}
export default Task;