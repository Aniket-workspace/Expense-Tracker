import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import State from './components/State';
import Props from './components/Props';
import Get_input_data from './components/Get_input_data';
import Toggle from './components/Toggle';
import Form from './components/Form';
import Conditional_statment from './components/Conditional_statment';
import Form_validate from './components/Form_validate';
import UesState from './components/Hooks/UesState';
import UseEffect from './components/Hooks/UseEffect';
import Main from './components/new-project/Main';
import GlobalState from './context/Context';
import { Box, Container, Flex } from "@chakra-ui/react";
import Function_as_props from './components/Function_as_props';
import UseEffect2 from './components/Hooks/UseEffect2';
import UseEffectWithProps from './components/Hooks/UseEffectWithProps';
import TestCSS from './components/CSS/TestCSS';
import Array from './components/Map/Array';
import NestedListWithNestedArray from './components/Map/NestedListWithNestedArray';
import MainComp from './components/Map/Reuse Components/MainComp';
import Parent from './components/Data-from-child-to-parent/Parent';
import UseMemo from './components/Hooks/UseMemo';
import UseRef from './components/Hooks/UseRef';
import Parent_ref from './components/Hooks/Forward-ref/Parent_ref';
import ControlledComp from './components/Controlled-Component/ControlledComp';
import HOCmain from './components/HOCmain';
import UseReducer from './components/Hooks/UseReducer';
import CustomHookTest from './components/Hooks/CustomHook/CustomHookTest';
import UseCallbackParent from './components/Hooks/UseCallback/UseCallbackParent';


function App() {

  const[count, setcount] = useState(100);
  const[data, setdata] = useState(10);

  function Check_function_as_props(){
    alert("function as props works")
  }
  return (
    <div className="App">
      {/* <State/> */}
      {/* <Props name= "Aniket"/>
      <Props name= "Saurabh"/> */}
      {/* <Get_input_data/> */}
      {/* <Toggle/> */}
      {/* <Form/> */}
      {/* <Conditional_statment/> */}
      {/* <Form_validate/> */}


      {/* ---------XXXXXX--------XXXXXX-----------XXXXXX------- */}
      {/* <UesState/> */}
      {/* <UseEffect/> */}
      {/* <UseEffect2/> */}
      {/* <UseEffectWithProps count = {count} data = {data}/>
      <button onClick={()=> setcount(count+1)}>Increment Counter</button>
      <button onClick={()=> setdata(data+1)}>Increment Data</button> */}
      {/* <UseMemo/> */}
      {/* <UseRef/> */}
      {/* <Parent_ref/>    */}
      {/* <UseReducer/> */}
      {/* <CustomHookTest/> */}
      <UseCallbackParent/>
      
      {/* <Function_as_props data={Check_function_as_props}></Function_as_props> */}

      {/* <TestCSS/> */}

      {/* Map Function */}
      {/* <Array/> */}
      {/* <NestedListWithNestedArray/> */}
      {/* <MainComp/> */}

      {/* Data-from-child-to-parent */}
      {/* <Parent/> */}


      {/* Controlled Component */}
      {/* <ControlledComp/> */}


      {/* HOC */}
      {/* <HOCmain/> */}

      

     </div> 


      // Expense Tracker (Project)

    // <GlobalState>
    //   <Container bg={"#f8fafd"} maxW={"Container.3xl"} height={"100vh"} p={"0"}>
    //   <Flex height={"full"}>
    //     <Box height={"full"} flex={5} w={["20%", "30%", "20%", "50%", "60%"]}>
    //       <Main />
    //     </Box>
    //   </Flex>
    // </Container>
    // </GlobalState>
  );
}

export default App;
