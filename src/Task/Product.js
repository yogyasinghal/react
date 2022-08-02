// import './Product.css';
import Cart from './Cart';
import React, { Component }  from 'react';


const clicked=(d)=>{
    console.log("btn clicked",d);
    // return(
    // <Cart data="d"></Cart>
    // )
    // console.log("...");
}

const Product=(props)=>{
    console.log(props);
    console.log(props.data);
    let k =props.data.map((item)=>{
        console.log(item.name);
        // console.log(i);
        return(
          
            // <div className="card-group" >
      <>
      <div className="card m-1 col-md-3">
      <img className="card-img-top h-50" src={item.img} alt="Card image cap"></img>
      <div className="card-body" style={{height:"15vh"}}>
        <h5 className="card-title">{item.name}</h5>
        <h6 className='card-title'>${item.price}</h6>
        <p className="card-text">{item.desc}</p>
        <button className = "btn btn-primary">add to cart</button>
      </div>
    </div>
    </>
      )
  // {/* </div> */}
  {/* <div className="card">
    <img className="card-img-top" src={item.img} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div> */}
  {/* <div className="card">
    <img className="card-img-top" src={item.img} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div> */}


        
    })
    return(k)
    // return (
//     <div>
//     <div className="card-group">
//   <div className="card">
//     <img className="card-img-top" src="..." alt="Card image cap"></img>
//     <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//     </div>
//   </div>
//   <div className="card">
//     <img className="card-img-top" src="..." alt="Card image cap"></img>
//     <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//       <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//     </div>
//   </div>
//   <div className="card">
//     <img className="card-img-top" src="..." alt="Card image cap"></img>
//     <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//       <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//     </div>
//   </div>
// </div>

//         </div>
    // )
}
export default Product;