// it is a normal fn , and not component
// therfore it is not capitalised

import React from "react";

const hocComponent=(InputComponent)=>{
    return class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state={
                search:'',
                productDetails:[],
                result:[]
            }
        }
        static getDerivedStateFromProps(props,state){
            return {productDetails:props.data}
        }
        handleChange=(event)=>{
            //console.log(event.target.value)
            this.setState({search:event.target.value})
        }
        handleSearch=(event)=>{
            event.preventDefault()
            let data=this.state.productDetails.filter((item)=>item.pName===this.state.search)
            this.setState({result:data}) 
        }
        render(){
            console.log(this.state.productDetails);
            return(
                <InputComponent 
                result={this.state.result}
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
                ></InputComponent>
            )
        }
    } 
}
export default hocComponent;