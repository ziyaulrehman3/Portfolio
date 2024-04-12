import styled from 'styled-components';

import { FaGithub } from "react-icons/fa6";
import {FaExternalLinkAlt} from 'react-icons/fa';
import {MdCarRental} from 'react-icons/md';


const ProjectCart=(props)=>{



  return (

      <Cart projectSide={props.projectSide}>

         <Left>
             <img src={props.projectImage} alt="Project Image"/>
         </Left>


         <Right>

            <RightTop>
                  <h4>{props.projectName}  {props.projectNameIcon}</h4>
                  <p>{props.projectDesc}</p>
            </RightTop>

            <RightBottom>

                 <RightBottom1>
                     {props.projectStack?.map((item)=>{
                       return (<h4>{item}</h4>)
                     })}
                 </RightBottom1>

                 <RightBottom2>
                     <h4 onClick={()=>window.open(props.projectLinks[0])}>Code <FaGithub size={"15px"}/></h4>
                     <h4 onClick={()=>window.open(props.projectLinks[1])}>Live Demo <FaExternalLinkAlt size={"15px"}/> </h4>
                 </RightBottom2>

            </RightBottom>

         </Right>

      </Cart>

  )
}

export default ProjectCart;


const Cart=styled.div`
   display:flex;
   width:800px;
   height:250px;
   box-shadow:0px 0px 10px 1px gray;

   border-radius:10px;
   margin:0 auto;
   flex-direction:${(projectSide)=>(projectSide?'row' : 'row-reverse')};

`;
const Left=styled.div`
   width:60%;

   img{
     width:100%;
     height:250px;
     // padding:10px;
     border-radius:10px 0px 0px 10px;


   }
`;

const Right=styled.div`
   width:40%;
   text-align:center;

   h4{
     display:flex;
     align-items:center;
     gap:3px;
     justify-content:center;
   }
`;

const RightTop=styled.div``;

const RightBottom=styled.div``;

const RightBottom1=styled.div`
    display:flex;
    justify-content:center;
    gap:20px;

    h4{
      margin:0;
    }
`;

const RightBottom2=styled.div`
    display:flex;
    justify-content:center;
    gap:20px;

    h4{
      display:flex;
      align-items:center;
      gap:3px;
      cursor: pointer;

    }





`;
