import React from "react";
import hocComponent from "./hocComponent";

class FilterProd extends React.Component{
    render(){
        return(
            <div>
                <h1>clothing store</h1>
            </div>
        )
    }
}
export default hocComponent(FilterProd);