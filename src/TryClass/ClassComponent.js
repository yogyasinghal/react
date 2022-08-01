import React from "react";

class ClassComponent extends React.Component{
    // mandatory for life cycle methods
    constructor(props){
        super(props)
        console.log(props);
    }

    render(){
        console.log(this.props);
        return(

            <div>
                hello class Component{this.props.name}
            </div>
        )
    }
}
export default ClassComponent