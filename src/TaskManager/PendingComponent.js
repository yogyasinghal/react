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
            <div className="rounded w-50 bg-info m-auto p-2">
                <h1  className="justify-content-center d-flex text-warning">Pending Component</h1>
                {
                    //  this.state.ans.map((item)=>(
                    this.props.PendingTask.map((item)=>(
                        <div  className="my-1 border border-primary justify-content-center d-flex p-2">
                            <h2 className="mx-4 p-1">{item.taskname} {item.desc}</h2>
                            {/* <h3></h3> */}
                            <button onClick={()=>this.props.changeCompletionStatus(item.id)} 
                            className="btn btn-primary m-1 ">Done</button>
                            <button onClick={()=>this.props.deleteTask(item.id)} 
                            className="btn btn-primary m-1 ">Trash</button>
                            {/* <button onClick={(e)=>this.DoneTask(e,item.id)} className="btn btn-primary">Done</button> */}
                        </div>
                    ))
                }
            </div>
        )
    }
}


export default PendingComponent;




