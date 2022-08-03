import axios from "axios";
import React from "react";
class BlogSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname:"",
            city:"",
            email:"",
            searchQuery:"",
            result:[]
        }
    }
    callApi=(e)=>{
        e.preventDefault();
        // axios.get(`https://hn.algolia.com/api/v1/search?query=${this.state.searchQuery}`)
        axios.get('http://localhost:3001/empDetails')
        .then((res)=>{
            console.log(res);
            // console.log(res.data.hits);
            this.setState({result:res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    handleChange=(e)=>{
        e.preventDefault();
        this.setState({searchQuery:e.target.value})
    }

    deleteItem=(e,itemId)=>{
        e.preventDefault();
        axios.delete(`http://localhost:3001/empDetails/${itemId}`)
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
    handleName(e){
        this.setState({fname:e.target.value})
    }
    handleCity(e){
        this.setState({city:e.target.value})
    }
    handleEmail(e){
        this.setState({email:e.target.value})
    }
    addItem=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/empDetails',{
            fname:this.state.fname,
            city:this.state.city,
            email:this.state.email
        })
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


    render(){
        return(
            <div>
                name:
                <input type="text" onChange={(e)=>this.handleName(e)}></input>
                city:
                <input type="text" onChange={(e)=>this.handleCity(e)}></input>
                email:
                <input type="text" onChange={(e)=>this.handleEmail(e)}></input>
            <button onClick={(e)=>this.callApi(e)} className="btn btn-primary">Click me</button>    
            <button 
                onClick={(e)=>this.addItem(e)} className="btn btn-primary m-2">
                        Add Data</button>
            {
                this.state.result.map((item)=>(
                    <div>
                    <h1>hello {item.fname}</h1>
                    <button onClick={(e)=>this.deleteItem(e,item.id)} className="btn btn-primary">
                        Delete Me</button>
                    {/* <button onClick={(e)=>this.deleteItem(e,item.id)} className="btn btn-primary">
                     me</button> */}
                    </div>    
                ))
            }
            
            </div>
        )
    }
}
export default BlogSearch;