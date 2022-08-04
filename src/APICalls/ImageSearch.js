import React from "react";
import axios from "axios";
class ImageSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            results:[],
            searchItem:''
        }
    } 
    handleChange=(e)=>{
        this.setState({searchItem:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        axios.get(`https://api.unsplash.com/search/photos?query=${this.state.searchItem}&client_id=kl2VPWCT2FdlE9ltI3JMLTUVWA5lcrsTiXgAhYC1YIo`)
        .then((res)=>this.setState({results:res.data.results}))
        .catch((err)=>console.log(err))
    }
    // componentDidMount(){
    //     axios.get('https://api.unsplash.com/search/photos?query=india&client_id=kl2VPWCT2FdlE9ltI3JMLTUVWA5lcrsTiXgAhYC1YIo')
    //     .then((res)=>{
    //         console.log(res)
    //         // this.setState({})

    //     })
    // }
    render(){
        return(
            <div>
            <h1>Image search</h1>
            <input type='text' onChange={(e)=>this.handleChange(e)}></input>
            <button onClick={(e)=>this.handleSubmit(e)}>search</button>
            {
                this.state.results.map((item)=>(
                    <img src={item.urls.thumb} alt="not found"></img>
                ))
            }
            </div>
        )
    }
}
export default ImageSearch;