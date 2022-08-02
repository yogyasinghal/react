import React, { Component }  from 'react';

function Greet(props) {
    console.log(props);
    const {name,age} = props
    return(
        <>
        <h1>hello Greet.js {props.name}{props.age}</h1>
        <h2>{name} {age}</h2>
        </>

    )
}
export default Greet;