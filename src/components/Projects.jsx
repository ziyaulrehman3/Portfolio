import styled from 'styled-components';
import {FaDiagramProject} from 'react-icons/fa6';
import {MdCarRental} from 'react-icons/md';


import ProjectCart from './ProjectCart';

const Projects=()=>{

  return (

      <Container id="Projects">
         <h5>PORTFOLIO</h5>
         <h3>Each projects is a unique piece of development <FaDiagramProject color={"#2C7865"}/> </h3>
         <Carts>
           <ProjectCart projectName="Rentifr"
           projectNameIcon={<MdCarRental color={'#00235B'} size={"18px"}/>}
           projectDesc="This is a rental web application where user can rent any product and take it on rent."
           projectStack={["EJS","NodeJs","MongoDB"]}
           projectLinks={["https://github.com/ziyaulrehman3/Rentifr","https://rentifr.onrender.com/"]}
           projectImage={"images/rentifr.png"}
           projectSide={false}
           />


           <ProjectCart projectName="Z-Rehman Infotech"
           projectNameIcon={<MdCarRental color={'#00235B'} size={"18px"}/>}
           projectDesc="It is a FinTech services plateform where user can access different type of financial and tech services."
           projectStack={["EJS","NodeJs","MongoDB"]}
           projectLinks={["https://github.com/ziyaulrehman3/zrehman-infotech","https://zrehmaninfotech.onrender.com/"]}
           projectImage={"images/zrehman.png"}
           projectSide={true}
           />

        </Carts>
      </Container>
  )

}

export default Projects;

const Container=styled.div`
  width:850px;
  margin:0 auto;

  h5{
    color:#8B93FF;
  }

  h3{
    margin-bottom:50px;
  }
`;

const Carts=styled.div`
display:flex;
flex-direction:column;
gap:50px;



`;
