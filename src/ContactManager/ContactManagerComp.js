
import React from "react";
import './contactManagerComp.css';
class ContactManagerComp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contactinfo:this.props.data,
            ipUser:"",
            ipPhone:"",
            ipEmail:"",
            ipAddress:"",
            update:false,
            uid:-1
        }
    }
   handleChange=(e,key)=>{
    if(key==='uname')
    this.setState({ipUser:e.target.value})
    if(key==='phone')
    this.setState({ipPhone:e.target.value})
    if(key==='email')
    this.setState({ipEmail:e.target.value})
    if(key==='addr')
    this.setState({ipAddress:e.target.value})    
   }
    
    handleContact=(e)=>{
        e.preventDefault()
        const obj={
            id:Date.now(),
            fname:this.state.ipUser,
            phone:this.state.ipPhone,
            email:this.state.ipEmail,
            address:this.state.ipAddress
        }
        let newData=[...this.state.contactinfo,obj]
        this.setState({contactinfo:newData})   
    }
    handleDelete=(e,itemid)=>{
        // we are basically iterating
        // and we append every id except the given id

      const result=this.state.contactinfo.filter((item)=>item.id!==itemid)
      this.setState({contactinfo:result})
    }
    toggleUpdate=()=>{
        // just for text
        this.setState({update:!this.state.update})
    }
    setUpdateMsg=(e,itemid)=>{
        e.preventDefault()
        this.toggleUpdate()   
        this.setState({uid:itemid})
    }
    handleUpdate=(e)=>{
        e.preventDefault()
        let temp=[...this.state.contactinfo]
        let obj=temp.find((item)=>item.id===this.state.uid)
        obj.fname=this.state.ipUser
        this.setState({contactinfo:temp})
        this.setState({uid:-1})
        this.toggleUpdate()
    }
    render(){
        return(
            <div>
           
                {
                this.state.update?
                // <div>
                <h1 id="cmh1" className="text-primary d-flex justify-content-center m-4">Update</h1>
                :<h1></h1>
                }
                {/* <h1 id="e1" className="text-primary d-flex justify-content-center m-4" >Search</h1> */}
                <form className="row mx-4 d-flex justify-content-center align-items-center">
                <div className="col-sm-6 col-md-3  form-group p-2">
                    <input type="email" className="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp" placeholder="Enter Name"
                    onChange={(e)=>this.handleChange(e,'uname')} ></input>
                </div>
                <div className="col-sm-6 col-md-3 form-group p-2">
                    <input type="email" className="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp" placeholder="Enter Phone"
                    onChange={(e)=>this.handleChange(e,'phone')}></input>
                </div>
                <div className="col-sm-6 col-md-3 form-group p-2">
                    <input type="email" className="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp" placeholder="Enter Email"
                    onChange={(e)=>this.handleChange(e,'email')}></input>
                </div>
                <div className="col-sm-6 col-md-3 form-group p-2">
                    <input type="email" className="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp" placeholder="Enter Address"
                    onChange={(e)=>this.handleChange(e,'addr')}></input>
                </div>
                
                
                </form>
                <div className="d-flex justify-content-center m-4">
                {
                    this.state.update?<button  className="btn btn-primary m-2" onClick={(e)=>this.handleUpdate(e)}>update contact</button>
                    :
                    <button className="btn btn-primary m-2" onClick={(e)=>this.handleContact(e)}>add contact</button>
                }
                </div>
                {/* </div> */}
              
            
            <h2 className="text-success d-flex justify-content-center m-4">All Contacts</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 p-4 mx-3 justify-content-evenly ">
            {
            this.state.contactinfo.map((item)=>(
            // this.state.productDetail.map((item)=>(
            <div class="col">
            <div className="card bg-light  p-1" id="cm1">
                {/* <img className="card-img-top " style={{height:"40vh"}} src={item.img} alt="Card image cap"></img> */}
                <div className="card-body">
                  <h5 className="card-title">{item.fname}</h5>
                  <h6 className="card-title">{item.phone}</h6>
                  <p className="card-text">{item.email}</p>
                  <p className="card-text">{item.address}</p>
                    <button 
                    className="btn btn-primary m-2" 
                    onClick={(e)=>this.handleDelete(e,item.id)}>
                        delete
                    </button>
                    <button className="btn btn-primary m-2" 
                            onClick={(e)=>this.setUpdateMsg(e,item.id)}>update</button>
                  {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
            </div>
            </div>
            ))}
            </div>


            {/* All Contacts: */}
            {/* {
                this.state.contactinfo.map((item)=>(
                    <div>
                        <h2>{item.fname}</h2>
                        <h3>{item.phone} {item.email}</h3>
                        <p>{item.address}</p>
                        <button onClick={(e)=>this.handleDelete(e,item.id)}>delete</button>
                        <button onClick={(e)=>this.setUpdateMsg(e,item.id)}>update</button>
                    </div>
                ))
            } */}
            </div>
        )
    }
}
export default ContactManagerComp