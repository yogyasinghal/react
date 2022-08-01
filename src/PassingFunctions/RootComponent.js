/** how to create state */
import React from "react";
import SignInComponent from "./SignInComponent";
import DashBoardComponent from "./DashBoardComponent";


class RootComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
           isLoggedIn:true,
           author:"tony",
           userData:{
            username:"john",
            country:"IND",
            pincode:632007,
            interest:"React JS"
           }
        
        } 
    }
    
    changeAuthor=()=>{
        this.state.author=="tony"?
        this.setState({author:"stark"})
        :this.setState({author:"tony"})
    }    
    toggleUser=()=>{
        console.log("toggle hit")
        this.setState({isLoggedIn:!(this.state.isLoggedIn)})
    }
    render(){
       console.log(" root render")
        return(
            <div className="bg-success">
                <h1>Root Component {this.state.author}</h1>
               {
                this.state.isLoggedIn?<>
                <DashBoardComponent 
                data={this.state.userData} 
                toggleFun={this.toggleUser}>
                </DashBoardComponent>

                {/* <TryChange></TryChange> */}
                
                </>:<>
                <SignInComponent 
                toggleFun={this.toggleUser}>
                </SignInComponent>
                </>
               } 
         
            </div>
        )
    }
}
export default RootComponent
