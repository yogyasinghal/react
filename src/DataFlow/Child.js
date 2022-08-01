/** how to create state */
import React from "react";

class Child extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ChildName:" Unchanged ",
        }

    }
    
    render(){
       console.log(" Child render")
        return(
            <div className="text-danger 
            bg-dark m-2 p-2 
            d-grid justify-content-center">
                <h1> I am Child</h1>
                {
                this.props.flag?-
                <>
                    <p>UnChanged</p>
                </>:
                    <p>changed</p>
                }
                <h3>{String(this.props.flag)}</h3>
                <button onClick=
                    {this.props.changeAuthorName}>
                    change Name Of Parent 
                </button>
            </div>
        )
    }
}
export default Child;