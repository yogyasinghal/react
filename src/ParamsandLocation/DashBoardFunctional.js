import { useParams } from "react-router-dom";
import DashBoardClass from "./DashBoardClass";import React from "react";
function DashBoardFunctional(){
   
    return(
        <div>
        <DashBoardClass paramsdata={useParams()}></DashBoardClass>
        </div>
    )
}
export default DashBoardFunctional;