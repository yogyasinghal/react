/** how to create state */
import React from "react";

class LifeCycle extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"",
            count:1
        }

    }

    // it is a static method/fn
    // this will be called after constructor
    // but before render

    static getDerivedStateFromProps(props,state){
        
        // we  can not access props or state
        // like this.props
        // 'this' is not available in static
        
        //but it can take props and state in arg
        console.log(state,props);
        state.msg = props.name;
        console.log("static");
        console.log(state.msg);

        // we should return to avoid error
        return null;

        // we can also initialise state with return
        // return {msg:props.name}
    }

     // when setstate is called , 
    // it will go to render directly

    // below fn is called only one time
    // after first time render

    // as we are updating state below
    // we get render again
    componentDidMount(){
        console.log("mount");
        
        this.setState({msg:"mount"})
        // it is updating state but not showing on ui
        // because of DS function above
        // 
        this.setState({count:this.state.count + 1});
        console.log("updated mount ",this.state.msg);
    }

    // shouldComponentUpdate(newProps,newState){
    //     // we should maintain this arg
    //     // i.e we should give both in this order only
    //     console.log("should=",newProps,newState);
    //     if(this.state.count ===newState.count){
    //         return false
    //     }
    //     else
    //         return true;
        
    // }


    // didupdate will get previous state and props
    // we can observe this in count in log
    
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("did update??",prevProps,prevState,snapshot);
    }

    increment=()=>{
        this.setState({count:this.state.count +1})
    }
    
    render(){
        console.log("......render.........");
        return(
            <div>
                <h1>life cycle{this.state.msg} </h1>
                <h2>render times {this.state.count}</h2>
                <button onClick={this.increment}>increment</button>
            </div>
        )
    }
}
export default LifeCycle;

// jab bhi state chamge hogi to  
// getDerivedStateFromProps ye call hoga

// par componentdidmount sirf 1 baar hoga
// jab render ho chuka hoga pehela 
