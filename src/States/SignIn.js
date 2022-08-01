
import React from "react";
class SignIn extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1 className="text-primary d-flex justify-content-center m-4">Sign In</h1>
                <form className="d-flex justify-content-center g-2 align-items-center">
                    <div className="form-group m-2">
                        {/* <label for="exampleInputEmail1">Email address</label> */}
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div className="form-group m-2">
                        {/* <label for="exampleInputPassword1">Password</label> */}
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    
                    <button type="submit" className="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        )
    
    }
}

export default SignIn;