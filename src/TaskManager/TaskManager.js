import React from "react";
import CompletedComponent from "./CompletedComponent";
import PendingComponent from "./PendingComponent";
import DeleteComponent from "./DeleteComponent";
class TaskManager extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tasks:this.props.data
        }
    }
    componentDidMount(){
        return <CompletedComponent></CompletedComponent>
    }
    getCompletedItems=()=>{
        const result = this.state.tasks.filter((item)=>
        item.completion===true && item.deletion===false)
        // array of object
        console.log("completed result",result);
        return result
    }
    getPendingComponent=()=>{
        const result = this.state.tasks.filter((item)=>
        item.completion===false && item.deletion===false)
        return result
    }
    getDeleteComponent=()=>{
        
        const result = this.state.tasks.filter((item)=>
        item.deletion===true)
        console.log("getdeletecomp",result);
        return result;
    }
    changeCompletionStatus=(itemId)=>{
        const temp=[...this.state.tasks];
        console.log("temp",temp);
        let k = temp.find((item)=>
        item.id===itemId);
        console.log("k=",k);
        k.completion=!k.completion;
        this.setState({tasks:temp})

    }

    deleteTask=(itemId)=>{
        const temp=[...this.state.tasks];
        console.log("deleteTask");
        // const result = this.state.tasks.filter((item)=>
        // item.id!==itemId)
        let k = temp.find((item)=>
        item.id===itemId)
        k.deletion = true;
        // console.log("result from delete",result);
        this.setState({tasks:temp})
    }

    restoreTask=(itemId)=>{
        const temp = [...this.state.tasks];
        let k = temp.find((item)=>(
            item.id===itemId
        ))
        k.deletion=false;
        this.setState({tasks:temp})
    }

    render(){
        console.log(this.state.tasks);
        return(
            <div className="justify-content-center d-flex-wrap">
                <h1>Task Manager</h1>
                <PendingComponent
                deleteTask={this.deleteTask} 
                changeCompletionStatus={this.changeCompletionStatus} 
                PendingTask={this.getPendingComponent()}></PendingComponent>
                <CompletedComponent
                deleteTask={this.deleteTask} 
                changeCompletionStatus={this.changeCompletionStatus}
                CompletedTask ={this.getCompletedItems()}></CompletedComponent>
                <DeleteComponent
                deleteTask={this.deleteTask} 
                restoreTask={this.restoreTask} 
                getDeleteComponent={this.getDeleteComponent()}></DeleteComponent>
                {/* <button onClick={(e)=>try(e)}>click me</button> */}
            </div>
        )
    }
}


export default TaskManager;




// do restore and deletes
// check extra re renders - we can use purecomp or shouldupdate etc