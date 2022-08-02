import React, { Component }  from 'react';

function ContentPage(){
    return (
        <>
        
        <ol>
            <li>list1</li>
            <li>list2</li>
            <li>list3</li>
            <li>list4</li>
        </ol>
        
        </>
    )
}

export function Myfun(){
    return(<>
    <p>i am from myfun()</p>
    </>)
}
export function Myfun2(){
    return(<>
    <p>i am from myfun2()</p>
    </>)
}

const Myfun3=()=>{
    return(<>
    <p>i am from myfun3()</p>
    </>)
}

function Myfun4(){
    return(<>
    <p>i am from myfun4()</p>
    </>)
}


export default ContentPage;
export{Myfun3,Myfun4};