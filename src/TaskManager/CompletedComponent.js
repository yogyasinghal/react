import React from "react";
class CompletedComponent extends React.Component{
    constructor(props){
        super(props)
        // this.state={
        //     hello:"hello state"
        // }
    }
    
    render(){
        // console.log(this.state.tasks);
        return(
            <div className="bg-light m-2 p-2">
                <h1>Completed Component</h1>
                {
                    this.props.CompletedTask.map((item)=>(
                        <div>
                            <h2>{item.taskname}</h2>
                            <h3>{item.desc}</h3>
                            <button onClick={()=>this.props.changeCompletionStatus(item.id)} className="btn btn-primary">Mark incomplete</button>
                            <button onClick={()=>this.props.deleteTask(item.id)} className="btn btn-primary">Trash</button>
                        </div>
                    ))
                }
            </div>
        )
    }
}


export default CompletedComponent;




