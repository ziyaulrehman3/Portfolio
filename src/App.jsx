import {React,useState} from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';


import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

 const App=()=>{

 const [page,setPage]=useState(1);

const num={
1:(<Home/>),
2:(<About/>),
3:(<Projects/>),
4:(<Contact/>)
}

const pageSetter=(e)=>{
  setPage(e.target.value);
}

const fun=()=>{
  console.log("Hello");
}

document.body.addEventListener('scroll',()=>{
  console.log(document.documentElement.scrollTop || document.body.scrollTop);
})
  return (
    <>
       <SuperHeader>
           <Header pageSetter={pageSetter}/>
       </SuperHeader>

      <Container>
         <Home/>
         <About/>
         <Projects/>
         <Contact/>
      </Container>

    </>
  )
}

export default App;

const Container=styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;

`;

const SuperHeader=styled.div`
width:100%;
position:fixed;
background-color:white;
height:50px;
z-index:200;
box-shadow:0px 1px 5px gray;
`;
