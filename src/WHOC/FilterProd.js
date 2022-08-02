import React from "react";
import hocComponent from "./hocComponent";

class FilterProd extends React.Component{
    render(){
        console.log(this.props);
        const {result,handleChange,handleSearch} = this.props;
        // console.log(this.props);
        return(
            <div>
                <h2>clothing store</h2>
           
            <form>
            <input type='text' 
            placeholder="enter product name" 
            onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>handleSearch(e)}>search</button>
             </form>
                {
                    result.map((item)=>(
                        <div>
                            <h2>Product:{item.pName}</h2>
                            <p>Price:{item.price}</p>
                            <p>Manufacturer:{item.manufacturer}</p>
                        </div>
                    ))
                }
                 </div>

        )
    }
}
// export default FilterProd;
export default hocComponent(FilterProd);