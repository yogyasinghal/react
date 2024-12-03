import './App.css';
import React, { Component }  from 'react';
import {Link,NavLink,Route,Routes} from 'react-router-dom'

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

import Pro from './Pro';

import ContactManagerComp from './ContactManager/ContactManagerComp';
import contactDetails from './ContactManager/contactDetails';

import LoginComp from './ReactEventDemo/LoginComp';

import SimpleApiCall from './APICalls/SimpleApiCall';

import LCMapiCall from './APICalls/LCMapiCall';
import BlogSearch from './APICalls/BlogSearch';

import ContactManagerFakeServer from './ContactManager/ContactManagerFakeServer';

import ImageSearch from './APICalls/ImageSearch';
import PageNotFound from './Components/PageNotFound';

import TaskManager from './TaskManager/TaskManager';

import Home from './Home';
import TaskManagerData from './TaskManager/TaskManagerData';

import LeaderBoard from './ScoreDashBoard/LeaderBoard';
import SortName from './ScoreDashBoard/SortName';

import Login from './NestedRoutes/Login';
import UserPage from './NestedRoutes/UserPage';
import Dashboard from './NestedRoutes/DashBoard';

import DashBoardFunctional from "./ParamsandLocation/DashBoardFunctional";
import LoginFunctional from "./ParamsandLocation/LoginFunctional";


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
  // console.log(".....");
  // let isActive = true;
  return (
    <div className="App">
      <NavLink to='/image' style={({isActive})=>(
        {color:isActive?'red':'blue'}
      )}> Navlink

      </NavLink>

      <NavLink to='/contactManager'>
      {
        ({isActive})=>(
          <button className={isActive?'btn-primary':'btn-danger'}>login</button>
        )
      }
      </NavLink>


      {/* <nav>
        <div className = "justify-content-evenly m-4 p-2" style = {{display:"flex"}}>
      <Link className='btn btn-dark text-danger' to='/image'>Image Search</Link>
      <Link className='btn btn-dark text-info' to='/contactManager'>Contact Manager</Link>
        </div>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path ="/taskManager" element={<TaskManager data ={TaskManagerData}></TaskManager>}></Route>
        <Route path='/image' element={<ImageSearch></ImageSearch>}></Route>
        <Route path='/contactManager' element={<ContactManagerFakeServer></ContactManagerFakeServer>}></Route>
        
        <Route path='/leaderboard' element={<LeaderBoard></LeaderBoard>}></Route>
        {/* <Route path='/leaderboard/name'element={<SortName></SortName>}></Route> */}
        {/* <Route path='/leaderboard/age'></Route> */}
      
        {/* <Route path='/rank'></Route> */}
      
         <Route path='/login' element={<LoginFunctional></LoginFunctional>}></Route>
         <Route path='/dashboard/:username' element={<DashBoardFunctional></DashBoardFunctional>}></Route>
      

        {/* nested component below */}
        <Route path='/user' element={<UserPage></UserPage>}>
          <Route path='login' element={<Login></Login>}>
          </Route>
          <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
        </Route>

        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      {/* <ImageSearch></ImageSearch> */}
      {/* <ContactManagerFakeServer></ContactManagerFakeServer> */}
      {/* basic crud operations on fake server */}
      {/* <BlogSearch></BlogSearch> */}

      {/* <LCMapiCall></LCMapiCall> */}
      {/* <SimpleApiCall></SimpleApiCall> */}

      {/* <LoginComp/> */}

      {/* <Electronic data={ProdData}></Electronic> */}
      {/* <ContactManagerComp data={contactDetails}></ContactManagerComp> */}
      {/* <Task1></Task1> */}
      {/* <Task2/> */}


      {/* <Pro/> */}
      {/* <FilterProd data={ClothingData}></FilterProd> */}

      {/* <Clothing data={ClothingData}></Clothing> */}
      {/* <Electronic data={ProdData}></Electronic> */}

      {/* <LifeCycle name="tony"></LifeCycle> */}
      {/* <Parent/> */}
      {/* <RootComponent/> */}
      {/* <SignInComponent/> */}

      
      
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
