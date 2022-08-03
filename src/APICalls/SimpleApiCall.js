import React from "react";
class SimpleApiCall extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            result:[]
        }
    }
    callApi=(e)=>{
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{return res.json()})
        .then((ans)=>this.setState({result:ans}))
        .catch((err)=>console.log(err))
        console.log(this.state.result);
    }
    render(){
        console.log(this.state.result);
        return(
            <div>
                <h1>API Calls</h1>
                <button
                onClick={(e)=>this.callApi(e)} 
                className="btn btn-primary">Click Me</button>
            
                {
                    this.state.result.map((item)=>(
                        <h1>{item.name}</h1>
                    ))
                }
            </div>
        )
    }
}

export default SimpleApiCall;