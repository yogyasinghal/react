<>


<div className="card-group">
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>






{/* from WOHOC/electronic.js */}
{/* cards */}
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 p-4 mx-3 justify-content-evenly ">
    {
        this.state.result.map((item)=>(
            // this.state.productDetail.map((item)=>(
            <div class="col"  >
            <div className="card bg-light  p-1" id="eltry">
                <img className="card-img-top " style={{height:"40vh"}} src={item.img} alt="Card image cap"></img>
                <div className="card-body">
                  <h5 className="card-title">{item.pName}</h5>
                  <h6 className="card-title">{item.price}</h6>
                  <p className="card-text">{item.manufacturer}</p>
                  {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
            </div>
            </div>
    ))}
</div>


{/* for heading and button at center */}
<h1 id="e1" className="text-primary d-flex justify-content-center m-4" >Search</h1>
<form className="d-flex justify-content-center g-2 align-items-center">
   {/* <input 
       type='text' 
       placeholder="enter name"
       onChange={(e)=>this.handleChange(e)}
   >
   </input>
   <button onClick={(e)=>this.handleClick(e)}>search</button> */}
    
   <div className="form-group m-2">
       {/* <label for="exampleInputEmail1">Email address</label> */}
       <input type="text" onChange={(e)=>this.handleChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name eg- product"></input>
   </div>
   
   
   {/* <button type="submit" className="btn btn-primary m-2">Submit</button> */}
</form>




{/* from states/signin */}
{/* horizontal form */}
<h1 className="text-primary d-flex justify-content-center m-4">Sign In</h1>
  <form className="d-flex justify-content-center g-2 align-items-center">
      <div className="form-group m-2">
          {/* <label for="exampleInputEmail1">Email address</label> */}
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
      </div>
      <div className="form-group m-2">
          {/* <label for="exampleInputPassword1">Password</label> */}
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
      </div>
      
      <button type="submit" className="btn btn-primary m-2">Submit</button>
  </form>


{/* from states/signup */}
{/* vertical */}
<h1 className="text-primary d-flex justify-content-center m-4">Sign Up</h1>

<form className="d-grid justify-content-center g-2 align-items-center">
    <div className="form-group m-2">
        {/* <label for="exampleInputPassword1">Password</label> */}
        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name"></input>
    </div>
    <div className="form-group m-2">
        {/* <label for="exampleInputEmail1">Email address</label> */}
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    </div>
    <div className="form-group m-2">
        {/* <label for="exampleInputPassword1">Password</label> */}
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
    </div>
    
    <button type="submit" className="btn btn-primary m-2">Submit</button>
</form>








</>