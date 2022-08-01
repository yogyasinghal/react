import './App.css';
import Learn from './SimpleApp/Learn';
import index from './SimpleApp/Index';
import ContentPage from './SimpleApp/ContentPage';
import Index from './SimpleApp/Index';
import Greet from './PropsDemo/Greet';

import ClassComponent from './TryClass/ClassComponent';

import NavBar from './Components/NavBar';
import Product from './Task/Product';

import {ProductData} from './ProductData';

// import SimpleComponent from './States/SimpleComponent';

import StateComponent from './States/StateComponent';

import Task from './States/Task';
import Task1 from './States/Task1';
import Task2 from './States/Task2';

import RootComponent from './PassingFunctions/RootComponent';

import SignInComponent from './PassingFunctions/SignInComponent';


import LifeCycle from './LifeCycleMethods/LifeCycle';
import Parent from './DataFlow/Parent';

import Electronic from './WOHOC/Electronic';
import ProdData from './WOHOC/edata';

import Clothing from './WOHOC/Clothing';
import ClothingData from './WOHOC/cdata';

import FilterProd from './WHOC/FilterProd';

function App() {
  const data=[
    {
      id:1,
      name:"product 1",
      price:"10",
      desc:"hello i am product 1",
      img:"https://picsum.photos/200"
    },
    {
      id:2,
      name:"product 2",
      price:"20",
      desc:"hello i am product 2",
      img:"https://picsum.photos/200"
    },
    {
      id:3,
      name:"product 3",
      price:"30",
      desc:"hello i am product 3",
      img:"https://picsum.photos/200"
    },
    {
      id:4,
      name:"product 4",
      price:"40",
      desc:"hello i am product 4",
      img:"https://picsum.photos/200"
    },
  ]
  console.log(".....");
  return (
    <div className="App">
    

      {/* <Clothing data={ClothingData}></Clothing> */}
      <Electronic data = {ProdData}></Electronic>

      {/* <LifeCycle name="tony"></LifeCycle> */}
      {/* <Parent/> */}
      {/* <RootComponent/> */}
      {/* <SignInComponent/> */}

      {/* <Task1></Task1> */}
      {/* <Task2/> */}
      {/* <Task/> */}
      {/* <StateComponent/> */}
      {/* <NavBar/> */}
      {/* for accessing data direct  */}
      {/* <Product  data={data}></Product> */}
      {/* <div className='prod'> 
       
        <Product  data={ProductData}></Product>
      </div> */}


      {/* <ContentPage/> */}
      {/*   
    <ContentPage/>
    <ContentPage></ContentPage>
    <Learn/> */}
    {/* <Greet name="tony" age="21"></Greet> */}
    {/* <Index></Index> */}
    {/* <Product data={data}></Product> */}
    {/* <ClassComponent name="tony"></ClassComponent> */}
    </div>
  );
}

export default App;
