import React from "react";
class DashBoardComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
      const {username,country,pincode,interest}=this.props.data
      console.log("dash render",this.props)
        return(
            <div className="bg-primary">
                <button onClick={this.props.toggleFun}>signout</button>
                <h2>Welcome {username}</h2>
                <h3>Country:{country}</h3>
                <h3>PinCode:{pincode}</h3>
                <h3>Area of Interest :{interest}</h3>

            </div>
        )
    }
}
export default DashBoardComponent