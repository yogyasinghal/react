// product- name,price,delivery,

import React from "react";
import NavBar from "../Components/NavBar";
import './Electronic.css';
class Electronic extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search:"",
            result:[],
            productDetail:[]
        }

    }
    static getDerivedStateFromProps(props,state){
        return{productDetail:props.data}
    }
    handleChange=(e)=>{
        // this.setState({search:e.target.value})
        let data = this.state.productDetail.filter(
            // (item)=>item.pName===this.state.search
            (item)=>item.pName.match(e.target.value)
        )
        console.log("dsta=",data);
        this.setState({result:data})
        console.log(e.target.value);

    }
    // handleClick=(e)=>{
    //     e.preventDefault();
    //     let data = this.state.productDetail.filter(
    //         (item)=>item.pName===this.state.search
    //     )
    //     this.setState({result:data})
    //     // this.setState({search:e.target.value})
    //     // console.log(this.search);
    // }
    render(){
        return(
            <div>
                {/* <NavBar/> */}
                 <h1 className="text-primary d-flex justify-content-center m-4" >Search</h1>
                 <form className="d-flex justify-content-center g-2 align-items-center">
                    {/* <input 
                        type='text' 
                        placeholder="enter name"
                        onChange={(e)=>this.handleChange(e)}
                    >
                    </input>
                    <button onClick={(e)=>this.handleClick(e)}>search</button> */}
                     
                    <div className="form-group m-2">
                        {/* <label for="exampleInputEmail1">Email address</label> */}
                        <input type="text" onChange={(e)=>this.handleChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name eg- product"></input>
                    </div>
                    
                    
                    {/* <button type="submit" className="btn btn-primary m-2">Submit</button> */}
                </form>

                {/* <div className="card-group "> */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 p-4 mx-3 justify-content-evenly ">
                {
                    this.state.result.map((item)=>(
                        // this.state.productDetail.map((item)=>(
                            <div class="col"  >
                        <div className="card bg-light  p-1 try">
                            <img className="card-img-top " style={{height:"40vh"}} src={item.img} alt="Card image cap"></img>
                            <div className="card-body">
                            <h5 className="card-title">{item.pName}</h5>
                            <h6 className="card-title">{item.price}</h6>
                            <p className="card-text">{item.manufacturer}</p>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                        </div>
                        // <div>
                        //     {/* <h1>hello</h1> */}
                        //     <h2>Product:{item.pName}</h2>
                        //     <p>Price:{item.price}</p>
                        //     <p>Manufacturer:{item.manufacturer}</p>
                        // </div>

                    ))
                }
                </div>
            </div>
        )
    }
}
export default Electronic;