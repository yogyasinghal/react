import ContentPage from "./ContentPage";
import Learn from "./Learn";
import {Myfun,Myfun2,Myfun3,Myfun4} from './ContentPage';
import React, { Component }  from 'react';

function Index(){
    return (
        <>
        <Myfun></Myfun>
        <Myfun2></Myfun2>
        <Myfun3></Myfun3>
        <Myfun4/>
        <ContentPage></ContentPage>
        <Learn></Learn>
        </>
    )
}
export default Index;