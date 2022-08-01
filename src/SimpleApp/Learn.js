function Learn(){
    let name = "react";
    console.log("logging");
    console.log(".....");
    let lnk = "https://www.google.com"
    return(
        <div style={{backgroundColor:"cyan",margin:"3vw",padding:"2vw"}}>
        
            <h1> hello learning {name} </h1>
            <a href={lnk}>link</a>
            <div></div>
            {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
            <img style={{margin:"5vw",width:"30vw",height:"40vh"}} src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_brown.png">

            </img>
        </div>



        // we can also use
        // <></>
        // instead of div in return

    )
}
// setInterval(Learn, 100);
export default Learn;