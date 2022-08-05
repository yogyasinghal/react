import React from "react";

// import _isEqual from 'lodash/isEqual';
import isEqual from "lodash/isEqual";

class DeleteComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hello:"hello state",
            // ans:this.props.PendingTask
        }
    }
    // installed lodash and used isequal
    // without this even if we are passing data
    // between other 2 comp 
    // this is still calling so now we are comparing this

    // shouldComponentUpdate(nextProps,nextState){
    //     // if (nextProps.getDeleteComponent===this.props.getDeleteComponent){
    //     //     return false;
    //     // }
    //     if(isEqual(nextProps.deleteTask,this.props.deleteTask)){
    //         return false;
    //     }
    //     else{
    //         return true;
    //     }
    // }
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
        console.log("delete");
        // console.log(this.state.tasks);
        return(
            <div style={{minHeight:"20vh"}} className=" border border-dark rounded my-1 bg-danger text-light m-2 p-2">
                <h1 style={{margin:"revert"}} className="justify-content-center d-flex text-light" >Delete Component</h1>
                {
                    //  this.state.ans.map((item)=>(
                    this.props.getDeleteComponent.map((item)=>(
                        <div className="my-1 border border-light justify-content-center d-flex p-2">
                            <h2 className="mx-4 p-1">{item.taskname} {item.desc}</h2>
                            <button onClick={()=>this.props.restoreTask(item.id)} className="btn btn-primary m-2">Restore</button>
                            {/* <button onClick={(e)=>this.DoneTask(e,item.id)} className="btn btn-primary">Done</button> */}
                        </div>
                    ))
                }
            </div>
        )
    }
}


export default DeleteComponent;




