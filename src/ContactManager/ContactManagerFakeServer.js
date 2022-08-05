// do run fakeserver in another folder before running this
// by npm start
import React from "react";
import axios from "axios";
import './ContactManagerFakeServer.css';
class ContactManagerFakeServer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contactinfo:[],
            ipUser:"",
            ipPhone:"",
            ipCity:"",
            ipEmail:"",
            update:false,
            uid:-1
        }
    }

    componentDidMount=()=>{
        console.log("comp did mount");
        // axios.get('http://localhost:3001/empDetails')
        // axios.get('https://contact-fake-server.herokuapp.com/empDetails')
        // axios.get('https://contact-node-server.herokuapp.com/')
        axios.get('http://localhost:9000/')
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            // console.log(res.data.hits);
            console.log(this.state.contactinfo);
            this.setState({contactinfo:res.data});
            console.log(this.state.contactinfo);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

   handleChange=(e,key)=>{
    if(key==='uname')
    this.setState({ipUser:e.target.value})
    if(key==='phone')
    this.setState({ipPhone:e.target.value})
    if(key==='email')
    this.setState({ipEmail:e.target.value})
    if(key==='city')
    this.setState({ipCity:e.target.value})
      
   }
    
    handleAddContact=(e)=>{
        e.preventDefault()
        const obj={
            id:Date.now(),
            fname:this.state.ipUser,
            phone:this.state.ipPhone,
            email:this.state.ipEmail,
            city:this.state.ipCity,
        }
        // const user = {
        //     'email':this.state.ipEmail,
        //     'name':this.state.ipUser
        // }
        // axios.post('http://localhost:3001/empDetails',{
        // axios.post('https://contact-fake-server.herokuapp.com/empDetails',{
        //     axios.post('http://localhost:9000',{
        //     fname:this.state.ipUser,
        //     phone:this.state.ipPhone,
        //     email:this.state.ipEmail,
        //     city:this.state.ipCity
        // })
        axios.post('http://localhost:9000',{obj})
        .then((res)=>{
            console.log(res);
            // this.callApi(e);
            // console.log(res.data.hits);
            // this.setState({result:res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
        let newData=[...this.state.contactinfo,obj]
        this.setState({contactinfo:newData})   
        this.setState({ipUser:""})
        this.setState({ipPhone:""})
        this.setState({ipEmail:""})
        this.setState({ipCity:""})
    }
    handleDelete=(e,itemid)=>{
        // we are basically iterating
        // and we append every id except the given id

      const result=this.state.contactinfo.filter((item)=>item.id!==itemid)
      this.setState({contactinfo:result});
      
      e.preventDefault();
        axios.delete(`http://localhost:3001/empDetails/${itemid}`)
        // axios.delete(`https://contact-fake-server.herokuapp.com/empDetails/${itemid}`)
        .then((res)=>{
            console.log(res);
            this.callApi(e);
            // console.log(res.data.hits);
            // this.setState({result:res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    // toggleUpdate=()=>{
    //     // just for text
    //     console.log("toggleupdate");
    //     this.setState({update:!this.state.update})
    // }
    setUpdateMsg=(e,itemid)=>{
        e.preventDefault()
        // this.toggleUpdate()  
        
        // this.setState({update:!this.state.update})
        this.setState({update:true})
        this.setState({uid:itemid})
        let temp=[...this.state.contactinfo] 
        let obj=temp.find((item)=>item.id===itemid)
        console.log("itemid",itemid,obj);
        this.setState({ipUser:obj.fname})
        this.setState({ipPhone:obj.phone})
        this.setState({ipEmail:obj.email})
        this.setState({ipCity:obj.city})
        // this.setState({ipAddress:obj.address})
        
        // console.log(this.state.uid);
    }
    handleUpdate=(e)=>{
        e.preventDefault()
        let temp=[...this.state.contactinfo]
        let obj=temp.find((item)=>item.id===this.state.uid)
        // console.log(obj);
        obj.fname=this.state.ipUser
        obj.city=this.state.ipCity
        obj.email=this.state.ipEmail
        obj.phone=this.state.ipPhone
        this.setState({contactinfo:temp})
        // this.setState({uid:-1})
        // this.toggleUpdate()

        axios.put(`http://localhost:3001/empDetails/${obj.id}`,{
            // axios.put(`https://contact-fake-server.herokuapp.com/empDetails/${obj.id}`,{
            fname:this.state.ipUser,
            phone:this.state.ipPhone,
            email:this.state.ipEmail,
            city:this.state.ipCity
        })
        .then((res)=>{
            console.log(res);
            // this.setState({update:true})
            
        })
        .catch((err)=>{
            console.log(err)
        })
        this.setState({update:false});
        this.setState({ipUser:""})
        this.setState({ipPhone:""})
        this.setState({ipEmail:""})
        this.setState({ipCity:""})


    }
    render(){
        return(
            <div>
               
                <form className="row mx-4 d-flex justify-content-center align-items-center">
                <div className="col-sm-6 col-md-3  form-group p-2">
                    <input type="email" className="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp" placeholder="Enter Name"
                    onChange={(e)=>this.handleChange(e,'uname')} 
                    value={this.state.ipUser}
                    ></input>
                </div>
                <div className="col-sm-6 col-md-3 form-group p-2">
                    <input type="email" className="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp" placeholder="Enter Phone"
                    onChange={(e)=>this.handleChange(e,'phone')}
                    value={this.state.ipPhone}></input>
                </div>
                <div className="col-sm-6 col-md-3 form-group p-2">
                    <input type="email" className="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp" placeholder="Enter Email"
                    onChange={(e)=>this.handleChange(e,'email')}
                    value={this.state.ipEmail}></input>
                </div>
                <div className="col-sm-6 col-md-3 form-group p-2">
                    <input type="email" className="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp" placeholder="Enter city"
                    onChange={(e)=>this.handleChange(e,'city')}
                    value={this.state.ipAddress}></input>
                </div>
                
                
                </form>


                <div className="d-flex justify-content-center m-4">
                {
                    this.state.update?<button  className="btn btn-primary m-2" onClick={(e)=>this.handleUpdate(e)}>update contact</button>
                    :
                    <button className="btn btn-primary m-2" onClick={(e)=>this.handleAddContact(e)}>add contact</button>
                }
                </div>
       
              
            
            <h2 className="text-success d-flex justify-content-center m-4">All Contacts</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 p-4 mx-3 justify-content-evenly ">
            {
            this.state.contactinfo.map((item)=>(
            <div class="col">
            <div className="card bg-light  p-1" id="cm1">
               
                <div className="card-body">
                  <h5 className="card-title">{item.fname}</h5>
                  <h6 className="card-title">{item.phone}</h6>
                  <p className="card-text">{item.email}</p>
                  <p className="card-text">{item.city}</p>
                    <button 
                    className="btn btn-primary m-2" 
                    onClick={(e)=>this.handleDelete(e,item.id)}>
                        delete
                    </button>
                    <button className="btn btn-primary m-2" 
                            onClick={(e)=>this.setUpdateMsg(e,item.id)}>update</button>
                
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
export default ContactManagerFakeServer;