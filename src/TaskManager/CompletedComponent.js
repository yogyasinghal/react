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
            <div className="rounded  my-1 w-75 m-auto bg-light m-2 p-2">
                <h1  className="justify-content-center d-flex text-success" >Completed Component</h1>
                {
                    this.props.CompletedTask.map((item)=>(
                        <div  className="border border-primary justify-content-center d-flex p-2">
                             <h2 className="mx-4 p-1">{item.taskname} {item.desc}</h2>
                            <button onClick={()=>this.props.changeCompletionStatus(item.id)} className="btn btn-primary m-1">Mark incomplete</button>
                            <button onClick={()=>this.props.deleteTask(item.id)} className="btn btn-primary m-1">Trash</button>
                        </div>
                    ))
                }
            </div>
        )
    }
}


export default CompletedComponent;




