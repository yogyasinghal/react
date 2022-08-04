import React from "react";
class DeleteComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hello:"hello state",
            ans:this.props.PendingTask
        }
    }
    // DoneTask=(e,itemId)=>{
    //     e.preventDefault()
    //     let arr = [...this.state.ans];
    //     console.log("arr",arr);
    //     let k = arr.find((item)=>(
    //         item.id==itemId
    //     ))
    //     console.log(k);
    //     k.completion=true;
    //     console.log(k);
    //     this.setState({ans:k})
    //     // this.state.ans = [...arr];
    // }
    render(){
        // console.log(this.state.tasks);
        return(
            <div className="bg-danger text-light m-2 p-2">
                <h1>Delete Component</h1>
                {
                    //  this.state.ans.map((item)=>(
                    this.props.getDeleteComponent.map((item)=>(
                        <div>
                            <h2>{item.taskname}</h2>
                            <h3>{item.desc}</h3>
                            <button onClick={()=>this.props.restoreTask(item.id)} className="btn btn-primary">Restore</button>
                            {/* <button onClick={(e)=>this.DoneTask(e,item.id)} className="btn btn-primary">Done</button> */}
                        </div>
                    ))
                }
            </div>
        )
    }
}


export default DeleteComponent;




