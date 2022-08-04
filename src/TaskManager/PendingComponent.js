import React from "react";
class PendingComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hello:"hello state",
            ans:this.props.PendingTask
        }
    }
    DoneTask=(e,itemId)=>{
        e.preventDefault()
        let arr = [...this.state.ans];
        console.log("arr",arr);
        let k = arr.find((item)=>(
            item.id==itemId
        ))
        console.log(k);
        k.completion=true;
        console.log(k);
        this.setState({ans:k})
        // this.state.ans = [...arr];
    }
    render(){
        // console.log(this.state.tasks);
        return(
            <div className="bg-info m-2 p-2">
                <h1>PendingComponent</h1>
                {
                    //  this.state.ans.map((item)=>(
                    this.props.PendingTask.map((item)=>(
                        <div>
                            <h2>{item.taskname}</h2>
                            <h3>{item.desc}</h3>
                            <button onClick={()=>this.props.changeCompletionStatus(item.id)} className="btn btn-primary">Done</button>
                            <button onClick={()=>this.props.deleteTask(item.id)} className="btn btn-primary">Trash</button>
                            {/* <button onClick={(e)=>this.DoneTask(e,item.id)} className="btn btn-primary">Done</button> */}
                        </div>
                    ))
                }
            </div>
        )
    }
}


export default PendingComponent;




