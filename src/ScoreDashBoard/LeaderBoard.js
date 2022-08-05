import React from "react";
import response from "./response";
// import "./LeaderBoard.css"
import Header from "./Header";
class LeaderBoard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            val:"no specific order"
        }
    }
    componentDidMount(){
        this.setState({data:response.list})
    }
    SortAge=(e)=>{
        // parseInt(key);
        // key = Number(key);
        e.preventDefault();
        console.log(response.list);
        // key = JSON.parse(key);
        // console.log("age",key);
        const sorteddata=[...response.list]
        .sort((a,b)=>Number(a.age)-Number(b.age))
        console.log(sorteddata);
        this.setState({val:"Age order"})
      this.setState({data:sorteddata})
    }
    SortRank=(e)=>{
        e.preventDefault();
        const sorteddata=[...response.list]
        .sort((a,b)=>Number(a.rank)-Number(b.rank))
      this.setState({data:sorteddata})
      this.setState({val:"Rank order"})
    }
    SortName=(e)=>{
        e.preventDefault();
        const sorteddata=[...response.list]
        .sort((a,b)=>a.name.localeCompare(b.name))
      this.setState({data:sorteddata})
      this.setState({val:"Name order"})
    }
    render(){
        return(
            <div className="">
                {/* <Header></Header> */}
                <h2 className="d-flex m-auto justify-content-center " >Data in {this.state.val}</h2>
                <button onClick={(e)=>this.SortAge(e)}>sort age</button>
                <button onClick={(e)=>this.SortRank(e)}>sort rank</button>
                <button onClick={(e)=>this.SortName(e)}>sort name</button>
               
                <div className="m-2 p-2">
                    <table>
                        <thead>
                            <tr>
                                {/* <th>Rank</th> */}
                                {/* <th>Name</th> */}
                                {/* <button>Age</button> */}
                                {/* <th>Age</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item)=>(
                                    <tr>
                                        <td>{item.rank}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}
export default LeaderBoard