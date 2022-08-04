import React from "react";
class TaskManager extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hello:"hello state"
        }
    }
    render(){
        // console.log(this.state.tasks);
        return(
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}


export default TaskManager;




