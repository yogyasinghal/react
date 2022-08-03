import React from "react";
class LoginComp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            hoverText:'World',
            flag:true,
            try:"try"
        }
    }
    handleBlur(e){
        console.log("blur");
        console.log(e);
    }
    show(e){
        console.log("show");
        this.setState({hoverText:"World"})
        e.target.className = "bg-success m-2 p-2"
        // if(this.state.flag){
        //     this.setState({hoverText:""})
        // }
        // else{
        //     this.setState({hoverText:"Hello World"})
        // }
        // this.setState({show:!(this.state.show)})
    }
    hide(e){
        console.log("hide");
        // this.show(e);
        this.setState({hoverText:""})
        e.target.className = "bg-info m-2 p-2"
    }
    color(e){

    }
    hideColor(e){
        console.log("hidecolor",e.target.className);
        e.target.className = "bg-success m-2 p-2"
    }
    showColor(e){

    }
    render(){
        return(
            <div>
                <form>
                    username:<input required type="text" onBlur={(e)=>this.handleBlur(e)}></input>
                    password:<input type="text" onBlur={(e)=>this.handleBlur(e)}></input>
                </form>
                {/* <div className="bg-info m-2 p-2"> */}
                {/* </div> */}
                    <h1 className="bg-success m-2 p-2" onMouseEnter={(e)=>this.hide(e)}  onMouseLeave={(e)=>this.show(e)} >Hello {this.state.hoverText}</h1>
               
                {/* <div className="bg-primary m-2" onMouseEnter={(e)=>this.hideColor(e)}  
                onMouseLeave={(e)=>this.showColor(e)} >{this.state.try}</div> */}
            </div>
        )
    }
}
export default LoginComp

//hiding on hover with toggle